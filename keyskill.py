
import re

def matchkey():
        print('These are the available models for keyskills') 
        models = ['java', 'cpp', 'database', 'android','Java','Cpp','CPP','C++','HTML','CSS','MYSQL']
        return models


def extract_mobile_number(text):
    phone = re.findall(re.compile(r'(?:(?:\+?([1-9]|[0-9][0-9]|[0-9][0-9][0-9])\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([0-9][1-9]|[0-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?'), text)
    if phone:
        number = ''.join(phone[0])
        if len(number) > 10:
            return '+' + number
        else:
            return number

        
def extract_email(email):
    email = re.findall("([^@|\s]+@[^@]+\.[^@|\s]+)", email)
    if email:
        try:
            return email[0].split()[0].strip(';')
        except IndexError:
            return None

#nlp = spacy.load('en_core_web_sm')
# initialize matcher with a vocab
#matcher = Matcher(nlp.vocab)
#def extract_name(text):
    #nlp_text = nlp(text)
  # First name and Last name are always Proper Nouns
 #   pattern = [{'POS': 'PROPN'}, {'POS': 'PROPN'}]
    #matcher.add('NAME', None, *pattern)
    #matches = matcher(nlp_text)
  #  for match_id, start, end in matches:
   #     span = nlp_text[start:end]
    #    return span.text



        
