from pymongo import MongoClient

client = MongoClient("mongodb://localhost:27017/")
db = client.ekarnataka
collection = db.users;


def addUser(name,email,password):
	inserted_document = collection.insert_one({'name':name,'email':email,'password':password})
	return 'ok'



