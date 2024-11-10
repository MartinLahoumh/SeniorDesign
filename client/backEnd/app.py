from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

#Path name variable
IMG_FOLDER = 'images'
app.config['IMG_FOLDER'] = IMG_FOLDER

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
        #Save the iamge to the IMG_FOLDER path
        img.save(os.path.join(app.config['IMG_FOLDER'], img.filename))
        return jsonify({"imgPath": f"/{app.config['IMG_FOLDER']}/{img.filename}"}), 200

@app.route('/images/<path:filename>', methods=['GET'])
def serve_image(filename):
    return send_from_directory(app.config['IMG_FOLDER'], filename)
    

if __name__ == '__main__':
    app.run(debug=True)
