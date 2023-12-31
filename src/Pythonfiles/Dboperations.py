import pymongo
from pymongo import MongoClient
import json
from bson import ObjectId
from fuzzywuzzy import fuzz
from bson import json_util
client = MongoClient("mongodb://localhost:27017/")
db = client.ekarnataka
collection = db.users;
history=db.user_history


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
def update_or_insert_keyword(user_id,keyword):
    # Use the user_id to select the user's collection
    user_collection = db[f"history{user_id}"]

    # Search for the keyword in the user's collection
    existing_keyword = user_collection.find_one({"keyword": keyword})
    
    if existing_keyword:
        # If keyword exists, increment its count
        new_count = existing_keyword["count"] + 1
        user_collection.update_one({"_id": existing_keyword["_id"]}, {"$set": {"count": new_count}})
        print(f"Updated count for '{keyword}' to {new_count}")
    else:
        # If keyword doesn't exist, add a new entry
        keyword_entry = {"keyword": keyword, "count": 1}
        user_collection.insert_one(keyword_entry)
        print(f"Added new keyword '{keyword}' with count 1")
    return "200"

def get_user_keywords(user_id):
    # Use the user_id to select the user's collection
    user_collection = db[f"history{user_id}"]

    # Query the user's collection to get all keywords with counts and sort by count in descending order
    keywords = user_collection.find({}, {"_id": 0, "keyword": 1, "count": 1}).sort("count", pymongo.DESCENDING)

    # Extract the keywords and counts from the cursor into a list of dictionaries
    keyword_list = [{"keyword": keyword["keyword"], "count": keyword["count"]} for keyword in keywords]

    return keyword_list
	

def get_user_details(user_id):
    try:
        # Convert user_id to a valid ObjectId
        user_id_object = ObjectId(user_id)
        
        # Query the collection using the ObjectId
        user = collection.find_one({"_id": user_id_object})

        if user is None:
            print(f"User with id {user_id} not found.")
            return None

        print(f"User details: {user}")
        json_object = json_util.dumps(user)
        return json_object

    except Exception as e:
        print(f"Error converting user_id to ObjectId: {e}")
        return None
    

