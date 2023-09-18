import LearningHistory from './LearningHistory'
import {useEffect,useState} from 'react'
export default function MyLearning(props) {
const [recent,setrecent]=useState([])
	useEffect(()=>{
		

if(!localStorage.getItem('token'))
	return;


	},[])


	return (<>

	{<LearningHistory keywordstemp={recent}/>  }

		</>)
}