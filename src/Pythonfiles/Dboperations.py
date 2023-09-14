from pymongo import MongoClient

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




