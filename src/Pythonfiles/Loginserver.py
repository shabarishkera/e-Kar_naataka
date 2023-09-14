from flask import Flask,request
from flask_cors import CORS,cross_origin 
from Dboperations import addUser
from Dboperations import checkUser
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

# Define yet another route ("/custom/<name>")
@app.route('/custom/<name>')
def custom_endpoint(name):
    return f'Hello, {name}!'

if __name__ == '__main__':
    app.run(debug=True)
