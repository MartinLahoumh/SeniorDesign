# CSC 59866 - Senior Design I
American Dream's Senior Design Project Idea Proposal 

# Team Members
[Martin Lahoumh](https://github.com/MartinLahoumh) - Leader <br>
[Brandon Tjandra](https://github.com/btjandra15) - Techsmith <br>
[Miguel Luna](https://github.com/luna-miguel) - Systems Savy <br>
[Jiazhou Zhang](https://github.com/Jiazhou-Zhang) - Quality Assurance <br>

# Project Idea
* The idea of this project is a web app that translates text that are on images (such as a poster or a sign or even just a regular digital image) to a users prefered language (I.E French, Spanish, English, etc.) 
* The ML aspect of this project is detecting where in an image is text located, to which that text is extracted.
* The extracted text will be translated via an API of google translate, to which it would return that translation to the user. 

# Research
### How Mask R-CNN Works?
Link: https://developers.arcgis.com/python/guide/how-maskrcnn-works/  

Summary:  
Object instance segmentation integrates the task of object detection (detect an object along a specified bounding pox) and the task of segmentation, which classifies each pixel into a pre-defined category and creates a mask for parts of the given image to highlight specific features of it.  
Mask R-CNN is an R-CNN (A region-based convolutional neural network) model for instance segmentation. It is built on top of another R-CNN model known as Faster R-CNN.  
The first stage of Mask-RCNN contains a backbone (such as ResNet) and a region proposal network. They work to give an image a set of region proposals (regions in the feature map that contain the object we are looking for). These proposed regions can come in different sizes, which is a problem since the networks require a fixed-size vector to make predictions. We can fix these proposed regions by using the Rol pool or RolAlign method. However, RolSlign is used in Mask R-CNN since it helped preserve spatial information.  
The second stage predicts a bounding box and object class for the proposed regions. This is also where we do the fixing of the proposed regions.  
The third stage takes the output from the RolAlign layer and feeds it into a Mask head (this contains two convolutional layers). This will generate the mask for each region, thus segmenting the image.  
Sometimes, the model is not so good at segmenting over irregular boundaries. A way to fix this is by using a point-based rendering neural network called PointRend. It is added onto Mask R-CNN, to turn it on all you have to do is set it to true.  

## Translating the text of images

Link: https://www.alphatrad.com/news/how-translate-text-from-image#:~:text=Google%20Translate%3A%20uses%20image%20segmentation,the%20language%20of%20your%20choice.

Summary: Discusses the way photo translation works on most existing software. For example, google translate uses image segmentation to seperate the text from the image in a photo. It splits the image into different segments and analyzes it part by part. In analysis, it applies an OCR to convert the photo before translating. OCR extracts text from an image and automatically translates that text. It is a popular tool used in Google Translates, Microsoft Translator, Text Fairy, Scan & Translate (Apple), and Prizmo.

## Text Detection, Recognition and Translation 

Link: https://medium.com/analytics-vidhya/scene-text-detection-recognition-and-translation-ad20c31e869e

Summary: Discusses text detection in real time videos. Gives off datasets that may be helpful for text that is slanted and not perfectly readable, which is ICDAR 2015 and 2013. It also gives off good recomendations for models used for detection and recognition.

## How does Augmented Reality and Artificial Intelligence connected?
Link: https://www.dataversity.net/a-tale-of-two-technologies-how-ai-and-ar-tech-are-changing-our-world

Summary: 
The article discusses the convergence of artificial intelligence (AI) and augmented reality (AR) technologies, highlighting their potential to revolutionize various aspects of human interaction and understanding. Firstly, it explains that AI, particularly generative AI, has reached a stage where it can mimic human thought and creativity, offering significant advancements in tasks such as language translation, data processing, and idea generation. These capabilities, when combined with AR, enable new forms of communication and collaboration previously unattainable.

One major application discussed is the enhancement of communication, where AI-powered AR facilitates real-time language translation during conversations. This allows people speaking different languages to communicate seamlessly, both in casual and professional settings, enhancing global collaboration and breaking down language barriers.

Moreover, in business environments, AI-enhanced AR tools enable remote teams to engage in virtual meetings with lifelike avatars, fostering active collaboration and creativity through interactive virtual whiteboards.
The article also emphasizes the accessibility benefits of AI-driven AR, particularly for individuals with communication disabilities or those visiting foreign countries. It highlights how AR overlays can assist individuals with hearing impairments by providing faster and easier access to spoken dialogue.

In education, AI and AR technologies offer immersive learning experiences through visualizations of complex subjects, such as scientific processes and anatomical models. Similarly, in entertainment, AR allows for the creation of interactive worlds and characters with unprecedented ease and speed.
Furthermore, AI-powered AR enhances practical experiences by providing real-time guidance and information overlays in various scenarios, such as navigating crowded venues or exploring unfamiliar cities.

Overall, the article advocates for the synergistic potential of AI and AR technologies to foster greater understanding, communication, and collaboration across different domains and cultures. It suggests that as these technologies continue to evolve, they will play an increasingly significant role in bringing people together and enriching human experiences.

# Existing projects:
## Deep learning-based mobile augmented reality for task assistance using 3D spatial mapping and snapshot-based RGB-D data - ScienceDirect 
* Link: (https://www.sciencedirect.com/science/article/pii/S0360835220303193#bb0160)
* This article proposes a mobile AR utility that assists users with tasks such as object identification using spatial mapping. It takes and uses RGB-D based images, which provides useful view-dependent and region-of-interest data. It then passes them into a Mask R-CNN in order to detect instances of objects and their space. Lastly, a 3D point cloud is taken from the image in tandem with an iterative closest point (ICP) algorithm to achieve 3D spatial mapping, to which augmented reality assistance can be applied.The authors used three experiments to evaluate their proposal.

## A robust arbitrary text detection system for natural scene images - ScienceDirect
* Link: (https://www.sciencedirect.com/science/article/abs/pii/S0957417414004060)
* This project proposes a machine learning model that is able to identify any sort of text in a supplied image regardless of any sort of transformation, such as rotation, shear, twist, etc.

# Dataset
## Datasets used for existing projects

## COCO dataset (Common Objects in Context):
* Used in the following project: Deep learning-based mobile augmented reality for task assistance using 3D spatial mapping and snapshot-based RGB-D data - ScienceDirect (https://www.sciencedirect.com/science/article/pii/S0360835220303193#bb0160)
* Dataset for object recognition (determining what the objects are) and segmentation (determining where the objects are in the image)
* Each entry contains an image, the segmentation results, the identified items, and 5 captions describing the objects in context to the image’s scenario

## TextOCR
* Performs text-recognition on arbitirary shaped scene-text on natural images (i.e a picture, poster, sign, etc.)
* Contains over 1M high quality word annotations on images

## ICDAR 2015
* Used for oriented scene text detection and spotting
* Contains 1000 training images

## ICDAR 2013
* contain 229 training images
* Horizontal text only

## Curve Text (CUTE80):
* Used in the following project: A robust arbitrary text detection system for natural scene images - ScienceDirect (https://www.sciencedirect.com/science/article/abs/pii/S0957417414004060)
* It features complex backgrounds, perspective distortion effects, and poor resolution effects, with text arranged in circular, S-shaped, and Z-shaped formations.
* The dataset includes images captured indoors and outdoors, using digital cameras or retrieved from the internet.
* Consists of 80 curved text line images with complex background, perspective distortion effect and poor resolution effect

| Source | Image Number | Image Size | Date Published |
| --- | --- |--- |---|
| CUTE80 |    80    |  Varies  | 2014|











