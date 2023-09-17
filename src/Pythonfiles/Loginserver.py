from flask import Flask,request
from flask_cors import CORS,cross_origin 
from Dboperations import addUser
from Dboperations import checkUser,find_most_matching_keyword,update_or_insert_keyword,get_user_keywords

app = Flask(__name__)
CORS(app)
# Define a route for the root URL ("/")
@app.route('/loginUser',methods=['POST'])
@cross_origin()
def loginUser():
    obj=request.json
    res=checkUser(obj['email'],obj['password'])
    return res;


@app.route('/createUser',methods=['POST'])
def createUser():
    #connect to mongodb databse and create a new user 
    obj=request.json
    data=addUser(obj['name'],obj['email'],obj['password'])
    return data

@app.route('/search',methods=['POST'])
def search():
    obj=request.json;
    data=find_most_matching_keyword(obj['keyword'])
    return data


@app.route('/addToSearch',methods=['POST'])
def addtoSearch():
    obj=request.json
    data=update_or_insert_keyword(obj['id'],obj['keyword'])
    return data
@app.route('/getHistory',methods=['POST'])
def  getHistory():
    obj=request.json;
    data=get_user_keywords(obj['id'])
    return data;


# Define yet another route ("/custom/<name>")
@app.route('/custom/<name>')
def custom_endpoint(name):
    return f'Hello, {name}!'

if __name__ == '__main__':
    app.run(debug=True)

