from pymongo import MongoClient
import json
from fuzzywuzzy import fuzz
client = MongoClient("mongodb://localhost:27017/")
db = client.ekarnataka
collection = db.users;


def addUser(name,email,password):
	existing_user = collection.find_one({"email": email})
	if existing_user:
		return "404"
	inserted_document = collection.insert_one({'name':name,'email':email,'password':password})
	return str(inserted_document.inserted_id)
	
def checkUser(email,password):
	existing_user = collection.find_one({"email": email,"password":password})
	if  not existing_user:
		return "404"
	user_id = str(existing_user["_id"])
	return user_id

with open('./Dataset/keywords.json', 'r') as json_file:
    keywords = json.load(json_file)

def find_most_matching_keyword(word):
    best_match = None
    highest_similarity = 0
    keywords2=keywords['keywords']

    for keyword in keywords2:

        similarity = fuzz.token_sort_ratio(word.lower(), keyword.lower())
        
        if similarity > highest_similarity:
            highest_similarity = similarity
            best_match = keyword
    if(best_match):
     return best_match
    else:
     return "invalid"



