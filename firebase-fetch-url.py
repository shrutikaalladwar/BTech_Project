#import the package for firebase
import pyrebase
import PyPDF2 
import textract
import nltk
import keyskill
import sqlite3
import random
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

#configuration of firebase project
config = { 
    "apiKey": "AIzaSyCzaICYOJj5cpQXYRkA8WAh6YsphJUr_p0",
    "authDomain": "file-fddfc.firebaseapp.com",
    "databaseURL": "https://file-fddfc.firebaseio.com",
    "projectId": "file-fddfc",
    "storageBucket": "file-fddfc.appspot.com",
    "messagingSenderId": "540482365901",
    "appId": "1:540482365901:web:1d3bdd5199add9eb553c84",
    "measurementId": "G-GB41KLYL53"
}

#intialization of firebase app for storage
firebase = pyrebase.initialize_app(config)
storage = firebase.storage()
database = firebase.database()

allEmail = []

all_users = database.child("candidate").get();
for user in all_users.each():
    userData = database.child("candidate").child(user.key()).get();
    for userData2 in userData.each():
        if(userData2.key()=="email"):
            print(userData2.val())
            allEmail.append(userData2.val());

print(allEmail[0])

for email in allEmail:

    email2 = email
    #The below code can be use to upload file from python program to firebase
    #storage.child(email).put('neha.pdf')

    print("\n\n------------------------------------------------------------------");
    print("Extracting PDF of "+email);
    storage.child(email).download(email+".pdf");

    #Now pass the email.pdf to your extraction code path

    #write a for-loop to open many files 
    filename = email + '.pdf'
    print("FileName :"+filename)
    #open allows you to read the file
    pdfFileObj = open(filename,'rb')
    #The pdfReader variable is a readable object that will be parsed
    pdfReader = PyPDF2.PdfFileReader(pdfFileObj)
    #discerning the number of pages will allow us to parse through all the pages
    num_pages = pdfReader.numPages
    count = 0
    text = ""
    #The while loop will read each page
    while count < num_pages:
        pageObj = pdfReader.getPage(count)
        count +=1
        text += pageObj.extractText()
    #This if statement exists to check if the above library returned #words. It's done because PyPDF2 cannot read scanned files.
    if text != "":
       text = text
    #If the above returns as False, we run the OCR library textract to #convert scanned/image based PDF files into text
    else:
       text = textract.process(fileurl, method='tesseract', language='eng')
    # Now we have a text variable which contains all the text derived #from our PDF file. Type print(text) to see what it contains. It #likely contains a lot of spaces, possibly junk such as '\n' etc.
    # Now, we will clean our text variable, and return it as a list of keywords.

    #The word_tokenize() function will break our text phrases into #individual words
    tokens = word_tokenize(text)
    #we'll create a new list which contains punctuation we wish to clean
    punctuations = ['(',')',';',':','[',']',',']

    #We initialize the stopwords variable which is a list of words like #"The", "I", "and", etc. that don't hold much value as keywords

    stop_words = stopwords.words('english')
    #print "Stopwords"
    #print stop_words

    stop=keyskill.matchkey()
    technical_skills=keyskill.matchkey()

    #Technical skills kamlesh
    #technical_skills = ref.get();
    skills = database.child("keyskills").get()
    print("Skills")
    print(skills.val());



    phon=keyskill.extract_mobile_number(text)
    email=keyskill.extract_email(text)
    print "Extracted Techincal Skills"
    print technical_skills
    tech_skill=str(technical_skills)
    print "Extracted phone number"
    print phon
    phone=int(phon)
    print "Extracted email id"
    print email
    email_id=str(email)
    #name=keyskill.extract_name(text)
    print"------"
    #print name
    uniqueTechnicalSkills = []
    print "Extracted unique techincal skills"
    #We create a list comprehension which only returns a list of words #that are NOT IN stop_words and NOT IN punctuations.
    #keywords = [word for word in tokens if  word in stop and not word in  punctuations]
    keywords = [word for word in tokens if  word in technical_skills and not word in  punctuations]
    #print keywords
    ### code for getting unique keywords
    unique_list = []     
        # traverse for all elements 
    for x in keywords: 
            # check if exists in unique_list or not 
        if x not in unique_list: 
            unique_list.append(x) 
        # print list 
    for x in unique_list:
            uniqueTechnicalSkills.append(x)
            print x
    #print type(unique_list)
           
    techskill=str(unique_list)

    ### database connectivity for count
    coun=len(unique_list)
    st=random.randrange(100000)


    # Adding to FirebaseDatabase
    print email
    database.child("uniqueskills").child(phon).child("skills").set(str(uniqueTechnicalSkills))
    database.child("uniqueskills").child(phon).child("count").set(str(coun))

    #Storing cv score in Scores (Firebase)
    database.child("Scores").child(phon).child("cv_score").set(str(coun))
    database.child("Scores").child(phon).child("personality_score").set("0")
    database.child("Scores").child(phon).child("aptitude_score").set("0")