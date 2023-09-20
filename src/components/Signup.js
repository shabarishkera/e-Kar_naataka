import {useRef} from 'react'
import {useNavigate}from 'react-router-dom'
import styles from '../loginsignup.module.css'
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


     <section className={styles.section}>
   <div className={styles.login_box}>
    <form action="" onSubmit={(e)=>{e.preventDefault()}}>
        <h2 className={styles.h2}>Signup</h2>

         <div className={styles.input_box}>
            <span className={styles.icon}><ion-icon name="mail"></ion-icon></span>
            <input type="text" required placeholder="name" ref={name}/>
           
        </div>
        <div className={styles.input_box}>
            <span className={styles.icon}><ion-icon name="mail"></ion-icon></span>
            <input type="email" required placeholder="Email" ref={email}/>
           
        </div>
        <div className={styles.input_box}>
            <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon><ion-icon name="lock"></ion-icon></span>
            <input type="password" required placeholder="Password" ref={password}/>
            
            
        </div>
        <div className={styles.input_box}>
            <span class="icon"><ion-icon name="lock-closed-outline"></ion-icon><ion-icon name="lock"></ion-icon></span>
            <input type="confirm password" required placeholder="Confirm Password" ref={confirm}/>
          
            
        </div>
        
        <button className={styles.button} type="submit" onClick={handleSignup}>Signup</button>
       
    </form>
   </div>
   </section>
 
  


		</>)
}