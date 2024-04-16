# CSC 59866 - Senior Design I <br> American Dream

# Team Members
| Name | Role | GitHub link |
| - | - | - |
| Martin Lahoumh | Leader | https://github.com/MartinLahoumh |
| Brandon Tjandra | Techsmith | https://github.com/btjandra15 |
| Miguel Luna | Systems Savvy | https://github.com/luna-miguel |
| Jiazhou Zhang | Quality Assurance | https://github.com/Jiazhou-Zhang |

# Project Idea
The goal of this project is to create a web application that takes an image supplied by the user that contains English text (such as a poster or a sign or even just a regular digital image), extracts the text, and translates it to a user's preferred language (i.e. French, Spanish, Chinese, etc.) 
* The machine learning aspect of this project is detecting where in an image is text located, to which that text is extracted.
* The extracted text will be translated via an API of Google Translate, to which it would return that translation to the user. 

# Research
| Article | Summary | How it helps us |
| - | - | - |
| [How Mask R-CNN Works?](https://developers.arcgis.com/python/guide/how-maskrcnn-works/) | Mask R-CNN is an R-CNN (A region-based convolutional neural network) model for instance segmentation. Object instance segmentation integrates the task of object detection (detect an object along a specified bounding pox) and the task of segmentation, which classifies each pixel into a pre-defined category and creates a mask for parts of the given image to highlight specific features of it. | Mask R-CNN is the machine learning model we are interested in using for this project to find and detect text in images. |
| [Translating the text of images](https://www.alphatrad.com/news/how-translate-text-from-image#:~:text=Google%20Translate%3A%20uses%20image%20segmentation,the%20language%20of%20your%20choice.) | Discusses the way photo translation works on most existing software. For example, Google Translate uses image segmentation to separate the text from the image in a photo. It splits the image into different segments and analyzes it part by part. In analysis, it applies an OCR to convert the photo before translating. OCR extracts text from an image and automatically translates that text. It is a popular tool used in Google Translates, Microsoft Translator, Text Fairy, Scan & Translate (Apple), and Prizmo. | This is the technology we will be attempting to use in order to translate text in our project. |
|[Text Detection, Recognition and Translation](https://medium.com/analytics-vidhya/scene-text-detection-recognition-and-translation-ad20c31e869e) | Provides a general overview of how machine learning can be used to detect text in images and videos in real time. It discusses challenges in the process, examples of datasets and models, and analysis of accuracy. | This article provides datasets that may be helpful for text that is slanted and not perfectly readable. It also gives off good recomendations for models used for detection and recognition. |

# Existing projects

| Name | Description | Date published | Takeaways for our project |
| - | - | - | - |
| [Deep learning-based mobile augmented reality for task assistance using 3D spatial mapping and snapshot-based RGB-D data](https://www.sciencedirect.com/science/article/pii/S0360835220303193#bb0160) | This article proposes a mobile AR utility that identifies objects in the camera and provides or assists users with tasks relating to them, such as how to assemble or disassemble an object or operate machinery wirelessly.  | August 2020 | - |
| [A robust arbitrary text detection system for natural scene images](https://www.sciencedirect.com/science/article/abs/pii/S0957417414004060) | This project proposes a machine learning model that is able to identify any sort of text in a supplied image regardless of any sort of transformation, such as rotation, shear, twist, etc. | December 2014 | - |


# Datasets

| Name | Description | Number of entries | Entry format | Date published | 
| - | - | - | - | - |
| [COCO](https://cocodataset.org/#home) | Object detection, segmentation, and captioning dataset | 330K images, >200K labeled | <details> <summary>`info`</summary> <br> `{"year", "version", "description", "contributor", "url", "date_created"}` </details> <details> <summary>`imgs`</summary> <br> `{"id", "width", "height", "filename", "license", "flickr_url", "coco_url", "date_captured"}` </details> <details> <summary>`anns`</summary>  `{"id", "image_id", "category_id", "segmentation", "area", "bbox", "iscrowd"}` </details>| 2014 - 2017 |
| [COCO-Text](https://bgshih.github.io/cocotext/) | Large scale dataset for text detection and recognition in natural images | 63,686 images, 145,859 text instances | - | 2018 |
| [TextOCR](https://textvqa.org/textocr/) | Text-recognition on arbitrary shaped scene-text present on natural images | 28,134 images and 903,069 annotated words | <details> <summary>`imgs`</summary> `{"id", "width", "height", "set", "filename"}` </details> <details> <summary>`anns`</summary> ` {"id", "image_id", "bbox", "points", "utf8_string", "area"}` </details> | 2014 - 2021 |
| [ICDAR 2019](https://rrc.cvc.uab.es/?ch=15&com=introduction) | Used for a oriented scene text detection and spotting challenge | 20,000 images containing ten different languages | - | 2019 |
| [Curve Text (CUTE80)](https://github.com/Yuliang-Liu/Curve-Text-Detector) | The first public curved text dataset, images contain text with complex transformations and obstructions | 80 images, labelled via XML sheet | `{imageName, polygonPoints}` | 2014 |
| [Total-Text](https://github.com/cs-chan/Total-Text-Dataset?tab=readme-ov-file) | Word-level based English curve text dataset, built on top of CUTE80 | - | - | 2017 - 2022 | 
| [SCUT-CTW1500](https://github.com/Yuliang-Liu/Curve-Text-Detector/tree/master/data) | Text-line based dataset with both English and Chinese instances | 1,500 images, labelled via .txt file | - | 2017 - 2020 |











