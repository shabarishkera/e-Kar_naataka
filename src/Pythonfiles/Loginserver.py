from flask import Flask,request
from flask_cors import CORS 
from Dboperations import addUser
app = Flask(__name__)
CORS(app)
# Define a route for the root URL ("/")
@app.route('/')
def hello_world():
    return 'Hello, World'
@app.route('/createUser',methods=['POST'])
def createUser():
    #connect to mongodb databse and create a new user 
    obj=request.json
    data=addUser(obj['name'],obj['email'],obj['password'])
    return '123453222212234###@@'

# Define yet another route ("/custom/<name>")
@app.route('/custom/<name>')
def custom_endpoint(name):
    return f'Hello, {name}!'

if __name__ == '__main__':
    app.run(debug=True)
