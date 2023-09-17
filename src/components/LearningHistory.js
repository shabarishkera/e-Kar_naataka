import LearningHeader from './LearningHeader';
import WatchedVideo from './WatchedVideo';
import { useState, useEffect } from 'react';

export default function LearningHistory({ keywordstemp }) {
  const [keywords, setKeywords] = useState([]);

  useEffect(() => {
  
  	 try {
      const keywordArray = JSON.parse(keywordstemp);
      setKeywords(keywordArray);
    } catch (error) {
      console.error('Error parsing JSON:', error);
    }

  }, [keywordstemp]); // Add keywordstemp to the dependency array

  console.log(keywords);

  return (
    <>
      <LearningHeader />
      <h2 className="fw-bold display-4 my-4">
        Based on your <span className="text-danger">Frequent Searches</span>
      </h2>
      {keywords.map((element) => {
        // Render your elements here based on keywords
        return <WatchedVideo keyword={element.keyword} key={element} />;
      })}
    </>
  );
}
