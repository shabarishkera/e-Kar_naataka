import LearningHistory from './LearningHistory'
import {useEffect,useState} from 'react'
export default function MyLearning(props) {
const [islogged,setLogged]=useState(localStorage.getItem('token')?true:false)
const [recent,setrecent]=useState([])
	useEffect(()=>{
		if(!islogged)
			return;

if(!localStorage.getItem('token'))
	return;
		const getallprevdata=async()=>{
const headers = {
  'Content-Type': 'application/json', }

  const data={id:localStorage.getItem('token')}
  var res=await fetch('http://127.0.0.1:5000/getHistory', {
  method: 'POST',          // Specify the HTTP method
  headers: headers,        // Pass the headers object
  body: JSON.stringify(data) // Convert the data to JSON format
})
const token=await res.text();
setrecent(token)

};

  getallprevdata();




	},[])
	return (<>

		<LearningHistory keywordstemp={recent}/>

		</>)
}