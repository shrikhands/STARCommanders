# STARCommanders
2023 NASA Space Apps Challenge
STAR: Revolutionizing Technical Standards with AI
https://www.spaceappschallenge.org/2023/find-a-team/star-commanders/

Background
NASA has 83 standards from all the technical disciplines. Each standard specifies the format and scope within which the respective technical disciplines' documents must comply. The technical standard documents are lengthy and review process of these documents.
Imagine a program that reads a NASA document and converts it into a technical standard. The AI uses SpaCy to organize the text and extract the main concepts. Topic modeling techniques are used to identify essential topics, and named entity recognition to pinpoint crucial data. The AI compresses the material into a technical standard that follows industry standards using sophisticated algorithms. The user-friendly layout of the app makes it simple for experts and engineers to access the standard that was produced, extract key findings, offer suggestive fixes. This program serves as a smart assistant that can decipher NASA documents and translate them into precise, brief technical standards.

What exactly does it do? 
The project entails the creation of an AI-powered software application that effectively transforms NASA papers into technical standards that are accepted by the industry by utilizing methods including PDF text extraction, natural language processing, subject modeling, and named entity recognition.

Phase 1: The project involves the input of standard document display model results, chats, and prompts to the user for specific entity filtration. The input is then sent for verification, where the document version is checked, and if necessary, the latest version is suggested based on access control and encryption protocols. After verification, the input goes through abstractive summarization, topic modeling, and named entity recognition processes to generate a concise summary that captures the key themes and important entities.

Phase 2: This is a future aspiration, involves the development of advanced functionalities. These include suggesting missing entities in the input, providing syntactic and semantic corrections, and utilizing a trained dataset of other mission technical requirements. This phase also envisions leveraging neural network models derived from the abstractive summary and topic modeling to generate an input mission requirement document. These enhancements would further improve the AI system's ability to understand and capture the relevant information from the input and generate precise and comprehensive mission requirement documents.

Our methods can be divided into 4 models: 

PDF Extraction Phase:
Utilized Python's PDFMiner tool for extracting data from PDF files.
Captured text, headers, and document attributes like title, author, and creation date.
PDFMiner was effective for text analysis and data extraction purposes.

Text Summarization Phase:
Employed Spacy, a powerful Python library for text comprehension and analysis.
Summarized documents by condensing large volumes of text or PDF content into concise abstracts.
Utilized Spacy's features for tasks such as word tokenization and key information identification.

Topic Modeling Phase:
Implemented topic modeling techniques to uncover main themes and topics within the documents.
Generated a word frequency cloud to visualize frequently occurring words and their relevance to the content.
Topic modeling enabled identification and understanding of key themes in extensive document collections.

Named Entity Recognition (NER) Phase:
Leveraged NER algorithms to identify and extract significant entities from the text.
Identified names, locations, and specific items of interest using NER techniques.
Streamlined analysis and information extraction process by focusing on relevant and critical information.
Overall, the process involved PDF extraction using PDFMiner, text summarization with Spacy, topic modeling for theme identification, and named entity recognition for extracting important entities from the text.

Future Idea: 
Propose model for suggestive fixes using a new network trained on a dataset.
Develop an intelligent system that utilizes a trained neural network.
The system suggests improvements or corrections based on learned patterns from a training dataset.
By leveraging the trained neural network, the system can provide intelligent suggestions for enhancing or correcting the input data.

How does it work? 
The project develops an AI-powered software program that transforms NASA documents into technically sound guidelines that are recognized by the industry. It makes use of named entity recognition, subject modeling, natural language processing, and text extraction from PDFs. In Phase 1, the input is checked, condensed, and processed utilizing named entity recognition, topic modeling, and abstractive summarizing to provide a brief summary that captures the important concepts and entities.  Using neural network models created from the summary and topic modeling, Phase 2 intends to construct mission requirement papers, indicate missing elements, and provide fixes. In the future, it could be possible to offer a model for suggested corrections that uses a trained neural network to improve and correct input data. On the basis of patterns it has discovered from a training dataset, the system would offer insightful recommendations.

What benefits does it have? 
The based on artificial intelligence software tool for converting NASA papers into commonly utilized technical standards has multiple advantages:
Efficiency: Compared to manual conversion techniques, the program automates the conversion process, saving time and effort. It can swiftly and consistently handle numerous documents.
Accuracy: The program can extract and identify crucial information with a high degree of accuracy by utilizing named entity recognition and natural language processing. This lowers the possibility of mistakes and guarantees the dependability of the technical standards that are developed.
Standardization: By converting NASA documents into widely used formats, the program aids in establishing consistent technical standards throughout the sector. This encourages interoperability and makes it easier for various stakeholders to communicate with one another and work together.
Information Transfer: The program makes it easier to share and distribute important information and research discoveries by transforming NASA papers into standards that are accepted in the industry. Researchers, engineers, and industry experts in the aerospace and allied sectors can gain from this.
Future Improvements: The project's goals include identifying missing items, making errors, and producing mission requirement papers, all of which will increase the application's functionality and value. The overall caliber and comprehensiveness of the updated technical standards can be enhanced by these developments.


What do you hope to achieve? 
The design and development of an AI-powered software application is one of the project's several objectives. It works to increase accessibility by transforming NASA documents into reliable industry standards, making important material more available to researchers and other professionals working in the aerospace industry. By developing uniform technical standards, the initiative also aims to promote standardization, which will enhance industry efficiency and communication. The tool also seeks to automate the conversion procedure, saving time and labor by processing huge numbers of documents precisely and fast. The project's goal is ongoing improvement through the incorporation of cutting-edge features including suggesting missing entities, offering changes, and producing thorough mission requirement papers. By working toward these objectives, the initiative hopes to increase technical standards for the industry while also increasing accessibility, standardization, automation, efficiency, and continual progress.

What tools, coding languages, hardware, or software did you use to develop your project?
Hardware used: 
Processor: 3.1 GHz Quad-Core Intel Core i7
Graphics: Radeon Pro 560 4 GB
Intel HD Graphics 630 1536 MB
Memory: 16 GB 2133 MHz LPDDR3
Google Colab
