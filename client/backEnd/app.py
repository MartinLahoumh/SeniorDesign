from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import easyocr
import os
from PIL import Image, ImageDraw, ImageEnhance, ImageFont
import numpy as np
from googletrans import Translator

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

#Path name variable
IMG_FOLDER = 'uploads'
app.config['IMG_FOLDER'] = IMG_FOLDER

reader = easyocr.Reader(['en', 'fr'])
translator = Translator()

# If the images fodler doesnt exists, make one
if not os.path.exists(IMG_FOLDER):
    os.makedirs(IMG_FOLDER)

@app.route('/upload', methods=['POST'])
def upload_file():
    #If no file sent, send back error
    if 'file' not in request.files:
        return jsonify({"error": "No File Selected"}), 400

    #If there was, get the file
    img = request.files['file']
    #If the file has no name, then there is nothing to save, send back an error
    if img.filename == '':
        return jsonify({"error": "Non Existing File"}), 400

    if img:
        # Save the image to the IMG_FOLDER path
        img_path = os.path.join(app.config['IMG_FOLDER'], img.filename)
        img.save(img_path)
        return jsonify({"imgPath": f"/{app.config['IMG_FOLDER']}/{img.filename}"}), 200

#Just a route to get image from the uploads folder
@app.route('/uploads/<path:filename>', methods=['GET'])
def serve_image(filename):
    return send_from_directory(app.config['IMG_FOLDER'], filename)


#Route that translates the given image. Returns back photo of image with translation
@app.route('/translate', methods=['POST'])
def translate_image():
    #Get the data from the form you sent in the front end. This is the image path of the image you uploaded
    #and the langauge you wish to translate to. image path = img_path and targetLang = langauge you want to translate to
    data = request.json
    img_path = data.get('imgPath')
    targetLang = data.get('targetLang')
    #This is a precaution just incase the img_path is null to inform user they must upload one.
    if img_path:
        #Clean the image path name so that easyOCR can read it
        absolute_img_path = os.path.join(os.getcwd(), img_path.lstrip('/'))

        if not os.path.exists(absolute_img_path):
            return jsonify({"error": f"File not found at {absolute_img_path}"}), 404

        #Run the image through easyOCR
        ocr_results = reader.readtext(absolute_img_path)

        if not ocr_results:
            return jsonify({"error": "No text detected in the image"}), 200

        #This is to create our new translated image we will give to the user. Since we will be placing 
        #text on top of the original image, it will be easier to read if the original image was darkened a little
        img = Image.open(absolute_img_path)

        # Check if image is RGBA (has transparency) and convert it to RGB. This is mostly when dealing with jpeg 
        #rather than png. Without this, we will get an error anytime we submit a jpeg.
        if img.mode == "RGBA":
            img = img.convert("RGB")

        # Darken the image and adjust brightness
        enhancer = ImageEnhance.Brightness(img)
        img = enhancer.enhance(0.7)

        draw = ImageDraw.Draw(img)

        #Get font path for the system. I am using windows, you may need to change this path if you are using
        #another system
        try:
            font_path = "C:/Windows/Fonts/arial.ttf"  
        except OSError:
            font_path = None  # Fallback to default PIL font

        #Now with the image set up, its time to collect the translations. We will keep translation information in an 
        #array due to images where we may have multiple text.
        translations_data = []

        for result in ocr_results:
            #Bounding Box Information
            bbox, text, _ = result
            x_coords = [point[0] for point in bbox]
            y_coords = [point[1] for point in bbox]
            top_left = (min(x_coords), min(y_coords))
            bottom_right = (max(x_coords), max(y_coords))

            #When displaying the text on the image, there are a few factors to consider. We will need to know
            #where exactly should we place the text, hence the use of the bounding box. We also will need to know
            #how large the text has to be. Some signs have bigger text size than others, so adjusting the size as
            #neccesary is important. Finnaly, we will need to match the color with the orinal text color of the 
            #original image. 

            #To get the font size, find the height of the bounding box.
            box_height = max(y_coords) - min(y_coords)
            font_size = int(box_height * 0.8) 

            try:
                font = ImageFont.truetype(font_path, size=font_size) if font_path else ImageFont.load_default()
            except OSError:
                font = ImageFont.load_default()

            # Next, get the translated text
            translated = translator.translate(text, dest= targetLang)
            translations_data.append({"text": text, "translatedText": translated.text})

            #Originally, The way the font color is taken is by finging the average rgb value of the bounding box containing
            #the letter. This needed some imporvment since sometimes the average rgb value is the background
            #rather than the letter, making the translated image really hard to read as it matches the background

            #The current way it is done is by taking the rgb value of the center of the bounding box.
            #convert the bounding box into a 2D array
            bbox_array = np.array([list(point) for point in bbox])
            #get all x and y cordinated stored in seperate variables
            bbox_x, bbox_y = bbox_array[:, 0], bbox_array[:, 1]
            #get the average center
            sample_x = int(np.mean(bbox_x))
            sample_y = int(np.mean(bbox_y))
            #get the color of the pixel at the center
            text_color = img.getpixel((sample_x, sample_y))  

            r, g, b = text_color[:3] 
            r = min(int(r * 1.5), 255)
            g = min(int(g * 1.5), 255)
            b = min(int(b * 1.5), 255)
            text_color = (r, g, b)

            # Place the translation in the center of the bounding box
            text_bbox = draw.textbbox((0, 0), translated.text, font=font)
            text_width, text_height = text_bbox[2] - text_bbox[0], text_bbox[3] - text_bbox[1]
            text_position = (
                (top_left[0] + bottom_right[0]) / 2 - text_width / 2,
                (top_left[1] + bottom_right[1]) / 2 - text_height / 2,
            )
            draw.text(text_position, translated.text, fill=text_color, font=font)

        # Save the processed image
        output_path = os.path.join('static', 'output', 'processed_image.jpg')
        os.makedirs(os.path.dirname(output_path), exist_ok=True)
        img.save(output_path) 

        return jsonify({
            "translations": translations_data,
            "imageUrl": f"/{output_path}"  # Return URL for the processed image
        }), 200

    return jsonify({"error": "Image path is required"}), 400






    

if __name__ == '__main__':
    app.run(debug=True)
