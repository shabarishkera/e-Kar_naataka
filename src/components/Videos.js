import {useEffect,useState} from 'react';
import {useNavigate} from 'react-router-dom'
import {apikey} from '../ApiKey';
export default function Videos({keyword})
{
	const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apikey}&q=${keyword}&maxResults=20`;
const [data,setdata]=useState([]);
const nav=useNavigate();
useEffect(() => {
    const fetchYoutube = async () => {
  try{
  let data=await fetch(url);
    
    let jsondata=await data.json();
    
    setdata(jsondata.items);}
    catch (e)
    {
       nav("networkError")
    }
}

    fetchYoutube();
  }, [keyword]);


return (<>

<div className='row align-items-center justify-content-center'>
     {data.map((element)=>{
           
          	var videosrc="https://www.youtube.com/embed/"+element.id.videoId;
       
           return (<>
         
                        <div class="card col-md-3 mx-5 my-5 shadow" >
   
  <iframe className="embed-responsive-item" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""  src={videosrc}></iframe>

  <div class="card-body">
    <h5 class="card-title">{element.snippet.title}</h5>
    <p class="card-text">{element.snippet.description}</p>
    <a href="#" class="btn  btn-outline-warning">watch in youtube</a>
  </div>
</div>
                  
</>);

          }

          )}
     </div>

	</>)



}


{/*
  <div className="embed-responsive embed-responsive-16by9 col-md-3">
  <iframe className="embed-responsive-item" src={videosrc}></iframe>
</div>
*/}