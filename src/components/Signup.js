import {useRef} from 'react'
import {useNavigate}from 'react-router-dom'
export default function Signup(argument) {
const email=useRef();
const password=useRef();
const confirm=useRef();
const name=useRef();
const nav=useNavigate();
	const handleSignup=async()=>{


		if(password.current.value!=confirm.current.value)
		{
			alert("check your password");
			return;
		}
const data={name:name.current.value,email:email.current.value,password:password.current.value}
const headers = {
  'Content-Type': 'application/json', // Specify the content type as JSON
  // Add any other headers as needed
};
var res=await fetch('http://127.0.0.1:5000/createUser', {
  method: 'POST',          // Specify the HTTP method
  headers: headers,        // Pass the headers object
  body: JSON.stringify(data) // Convert the data to JSON format
})
const token=await res.text();
console.log(token);
if(token=='404')
{
	alert("email exist")
	return
}
else
	localStorage.setItem('token',token)
	nav("/login")
	}
	return (<>


    <div class="container mt-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card">
                    <div class="card-header">
                        <h3>Sign Up</h3>
                    </div>
                    <div class="card-body">
                        <div>
                            <div class="mb-3">
                                <label for="fullname" class="form-label">Full Name</label>
                                <input type="text" class="form-control" ref={name} id="fullname" name="fullname" required/>
                            </div>
                            <div class="mb-3">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" class="form-control"  ref={email} id="email" name="email" required/>
                            </div>
                            <div class="mb-3">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" class="form-control" ref={password} id="password" name="password" required/>
                            </div>
                            <div class="mb-3">
                                <label for="confirmPassword" class="form-label">Confirm Password</label>
                                <input type="password" class="form-control" ref={confirm} id="confirmPassword" name="confirmPassword" required/>
                            </div>
                            <div class="d-grid mb-3">
                                <button type="submit" class="btn btn-primary" onClick={handleSignup}>Sign Up</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  


		</>)
}