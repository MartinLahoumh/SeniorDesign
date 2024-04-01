# CSC 59866 - Senior Design I
American Dream's Senior Design Project Idea Proposal 

# Team Members
[Martin Lahoumh](https://github.com/MartinLahoumh) - Leader <br>
[Brandon Tjandra](https://github.com/btjandra15) - Techsmith <br>
[Miguel Luna](https://github.com/luna-miguel) - Systems Savy <br>
[Jiazhou Zhang](https://github.com/Jiazhou-Zhang) - Quality Assurance <br>
# Idea
* An AR application that will take photos of objects near you and using a model (such as YOLACT++ or MASK_RCNN) will be able to detect what the object is and tell the user about it. Data will be taken from the COCO dataset

# Research
## How Does AR and Mask-RCNN work?
### How Mask R-CNN Works?
Link: https://developers.arcgis.com/python/guide/how-maskrcnn-works/  

Summary:  
Object instance segmentation integrates the task of object detection (detect an object along a specified bounding pox) and the task of segmentation, which classifies each pixel into a pre-defined category and creates a mask for parts of the given image to highlight specific features of it.  
Mask R-CNN is an R-CNN (A region-based convolutional neural network) model for instance segmentation. It is built on top of another R-CNN model known as Faster R-CNN.  
The first stage of Mask-RCNN contains a backbone (such as ResNet) and a region proposal network. They work to give an image a set of region proposals (regions in the feature map that contain the object we are looking for). These proposed regions can come in different sizes, which is a problem since the networks require a fixed-size vector to make predictions. We can fix these proposed regions by using the Rol pool or RolAlign method. However, RolSlign is used in Mask R-CNN since it helped preserve spatial information.  
The second stage predicts a bounding box and object class for the proposed regions. This is also where we do the fixing of the proposed regions.  
The third stage takes the output from the RolAlign layer and feeds it into a Mask head (this contains two convolutional layers). This will generate the mask for each region, thus segmenting the image.  
Sometimes, the model is not so good at segmenting over irregular boundaries. A way to fix this is by using a point-based rendering neural network called PointRend. It is added onto Mask R-CNN, to turn it on all you have to do is set it to true.  

![Mask R-CNN](https://github.com/MartinLahoumh/SeniorDesign/blob/main/figure1.png)
Figure 1

(a) Image preprocessing and feature extraction.

(b) Convolutional layer based on the attention mechanism and output layer that consists of a generalized mean pooling [17]and a fully connected layer whose size is 1; the intersections of the feature extractors' output are connected through stacking. The feature extractor in (b) is the operation in (a). C, T, and X
represent convolutional features obtained from the input images for the preprocessing of color, texture, and the original image, respectively. The figure shows the best CNN models (AR-CNN3), which have three attention layers in this model. This trained network has two losses, a ranking loss, and a softmax loss for predicting the pairwise comparisons of urban appearance. We experiment with AlexNet, PlacesNet, and VGGNet, which correspond to the feature extractor in this figure. 

Source: https://www.sciengine.com/SCIS/doi/10.1007/s11432-019-2899-9;JSESSIONID=923bcc0e-4d2a-4d47-82f7-6ec88a2ed98f

## How Does Augmented Reality Work?  
Link: https://hbr.org/2017/11/how-does-augmented-reality-work  

Summary:  
In most basic terms, augmented reality (AR) uses some sort of device that contains a camera, in which a user can point at a real-world object, and the AR software will recognize that object can overlay some sort of computerized object in proportion to that object.  
The different commands and objects presented in AR is downloaded from the cloud, much like how a web browser loads a page through a URL. The biggest benefit of having AR is the ease of use for all types of people. A user might touch a stop button to stop a video from playing, or can simply use their voice. Either command gets sent to the cloud to a product.  
Keeping proportion in AR is important. As someone moves away from an object, the size and orientation of the AR display must adjust with the user as it would if the object was really there. For example, moving back from an object should actually feel as if the user is seeing the object get smaller and out of view.  
In the cloud, there is a 3D digital model that serves as the link between a users device and AR. This is a model that is created by digitizing physical objects. This digital model will then collect information from that real-world product, its business systems, and external sources to reflect the product's current reality.

## Artificial Intelligence and Augmented Reality

Link: https://digitalreality.ieee.org/publications/artificial-intelligence-and-augmented-reality

Summary:
Artificial intelligence and augmented reality are two new concepts facing popularity with rapidly advancing technology allowing them to develop. They both face two major constraints currently: artificial intelligence being limited to capabilities of the current processing power, and augmented reality being limited to technological capabilities of their physical formats, but are on their way to reaching greater potentials.

The main three ways that augmented or virtual reality and machine learning interact with each other is positional tracking, speech recognition, and object recognition. There are many complex combinations of the two, but the main idea is to combine human ability to process large amounts of visual data and machine ability to process large amounts of raw data.

Real world applications of augmented reality working with machine learning range from serious to entertainment purposes. These include using mixed reality to train employees more efficiently in specially crafted environments, using virtual AI chatbots, and using face filters on social media.

Artificial intelligence and augmented reality are different in their challenges. Artificial intelligence has issues of bias, and ethical issues due to training data obtainment and accountability. Augmented reality also faces issues of ethics due to digital rights management, but is also subject to accessibility, user experience, and other sorts of engineering concerns.

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

## Deep learning-based mobile augmented reality for task assistance using 3D spatial mapping and snapshot-based RGB-D data - ScienceDirect
Link: https://www.sciencedirect.com/science/article/abs/pii/S0360835220303193
 
Summary:
This article proposes a mobile AR utility that assists users with tasks such as object identification using spatial mapping. It takes and uses RGB-D based images, which provides useful view-dependent and region-of-interest data. It then passes them into a Mask R-CNN in order to detect instances of objects and their space. Lastly, a 3D point cloud is taken from the image in tandem with an iterative closest point (ICP) algorithm to achieve 3D spatial mapping, to which augmented reality assistance can be applied.The authors used three experiments to evaluate their proposal. 

In the first experiment, they compared their AR spatial mapping system to a more typical one that uses AR markers in order to identify objects. They found that the assistance using AR markers failed when the object was obstructed or otherwise failed to be identified, unlike theirs that uses spatial mapping.

In the second experiment, they created a digital model of an object in a certain environment, and compared the machine learning model’s accuracy in recreating the object with the same angle and size, with the image taken in several different distances. It produced low error in distances within 1 and 2 meters, but produced larger inaccuracies at 3 meters.

In the third experiment, they measured user accessibility by instructing users to “calibrate” a system with both their spatial mapping system and the AR marker system, using a mobile camera to line up a green dot on the screen with a red dot virtually drawn onto an object. They found that AR markers were less reliable due to recognition failure from size or tracking of the marker, something which spatial mapping does not suffer from. In addition, the users they surveyed stated that the spatial mapping method was easier to use and understand than the AR marker method.

The authors describe two applications of this technology: one provides an AR, 3D tutorial that assists users in repairing and/or assembling an apparatus, and one that allows users to interact with a physical robot and surrounding objects from the device and camera. These two were once again tested using both AR markers and spatial mapping and surveyed to a test group. In both experiments, the spatial mapping AR app was more effective in usability and mental load (once instructions were provided to users).

# Dataset
## Data acquisition method

1. Gather images of information signs, posters, TV screens, etc. that contain text
2. Either take picture or design image of sign manually, or generate image of sign using a generative AI (may produce bad data without verification: intelligible text, for example)
3. Either manually or with the use of a machine learning model (OCR: optical character recognition), locate and extract the necessary attributes, which may include:
* The image itself
* The text within the image
* The coordinates of the poster and/or text in the image
* Supplemental elements, such as QR codes, URLs, email addresses, dates & times, alt-text 
* Other contextual objects recognizable in the background of the image
4. Store entry in the dataset as a tuple containing these attributes

## Data acquisition example

![Dataset example](https://github.com/MartinLahoumh/SeniorDesign/blob/main/dataset.png)

## Datasets used for existing projects

## COCO dataset (Common Objects in Context):
* Used in the following project: Deep learning-based mobile augmented reality for task assistance using 3D spatial mapping and snapshot-based RGB-D data - ScienceDirect (https://www.sciencedirect.com/science/article/pii/S0360835220303193#bb0160)
* Dataset for object recognition (determining what the objects are) and segmentation (determining where the objects are in the image)
* Each entry contains an image, the segmentation results, the identified items, and 5 captions describing the objects in context to the image’s scenario

## Self obtained images:
* Used in the following project: AR-based deep learning for real-time inspection of cable brackets in aircraft - ScienceDirect (https://www.sciencedirect.com/science/article/pii/S0736584523000509)
* Images, which were taken by the authors, of various types of cable bracket installations on airplanes, all with the exact same dimensions
* Some images have various degrees of quality such as obstructing cable ties, different lighting, or being too indistinguishable from the background. These images were labeled using an image annotation tool called LabelMe 
* 400 images obtained for training dataset, 100 images obtained for testing dataset, 100 images obtained for validation dataset


	












