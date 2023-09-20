import LearningHeader from './LearningHeader';
import React, { lazy, Suspense } from 'react';

import { useState, useEffect } from 'react';
import NotLogged from './NotLogged'
export default function LearningHistory() {
  const [keywords, setKeywords] = useState([]);
const WatchedVideo = lazy(() => import('./WatchedVideo'));
  useEffect(() => {
  
  	 try {
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


	 const keywordArray = JSON.parse(token);
	  setKeywords(keywordArray);
	
};

  getallprevdata();


     
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }

  }, []); // Add keywordstemp to the dependency array

	if(!localStorage.getItem('token'))
		return (<>
			<LearningHeader/>
				<NotLogged />
	</>)

  return (
    <>
      <LearningHeader />
      <h2 className="fw-bold display-4 my-4">
        Based on your <span className="text-danger">Frequent Searches</span>
      </h2>
      {keywords.map((element) => {

        // Render your elements here based on keywords
        return ( <Suspense fallback={<div>Loading...</div>}> <WatchedVideo keyword={element.keyword} key={element.keyword} /></Suspense>);
      })}
    </>
  );
}
