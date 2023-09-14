import {Link,useNavigate}from 'react-router-dom'
import {useRef} from 'react'
export default function Login() {
const email=useRef()
const password=useRef();
const nav=useNavigate();
	const handleLogin=async()=>{

 const data={email:email.current.value,password:password.current.value}
const headers = {
  'Content-Type': 'application/json', // Specify the content type as JSON
  // Add any other headers as needed
};
var res=await fetch('http://127.0.0.1:5000/loginUser', {
  method: 'POST',          // Specify the HTTP method
  headers: headers,        // Pass the headers object
  body: JSON.stringify(data) // Convert the data to JSON format
})
const token=await res.text();

if (token=="404")
{
  alert("check your email or password")
	return ;

}
console.log(token)
localStorage.setItem('token',token)
nav("/")


	}
	return (<>


    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h3>Login</h3>
                    </div>
                    <div class="card-body">
                        <div>
                            <div class="mb-3">
                                <label htmlFor="username" class="form-label">Email</label>
                                <input type="text" class="form-control" ref={email} id="username" name="username" required/>
                            </div>
                            <div class="mb-3">
                                <label htmlFor="password" class="form-label">Password</label>
                                <input type="password" class="form-control" ref={password} id="password" name="password" required/>
                            </div>
                            <div class="d-grid mb-3">
                                <button type="submit" class="btn btn-primary" onClick={handleLogin}>Login</button>
                            </div>
                        </div>
                        <p class="mb-0">Don't have an account? <Link to="/signup">Sign Up</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </div>


		</>)





}