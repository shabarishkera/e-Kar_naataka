import {Link,useNavigate}from 'react-router-dom'
import  styles from '../loginsignup.module.css'
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


  <section className={styles.section}>
   <div className={styles.login_box}>
    <form onSubmit={(e)=>{e.preventDefault()}} action="" >
        <h2 className={styles.h2}>Login</h2>
        <div className={styles.input_box}>
            <span className={styles.icon}><ion-icon name="mail"></ion-icon></span>
            <input type="email" required placeholder="Email" ref={email}/>
          
        </div>
        <div className={styles.input_box}>
            <span className={styles.icon}><ion-icon name="lock-closed-outline"></ion-icon><ion-icon name="lock"></ion-icon></span>
            <input type="password" required placeholder="Password" ref={password}/>
            
            
        </div>
       
        <button className={styles.button} type="submit" onClick={handleLogin}>Login</button>
        <div className={styles.register_link}>
            <p className={styles.p}>Don't have an account?<Link to="/signup">SignUp</Link></p>
        </div>
    </form>
   </div>
</section>
   

		</>)





}