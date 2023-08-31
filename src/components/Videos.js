import {useEffect,useState} from 'react';
export default function Videos(props)
{
	const url=`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyASWi_z6OL0GolpqRaMHky2jBJlw1tROTo&q=artforms of karnataka&maxResults=20`;
const [data,setdata]=useState([]);
useEffect(() => {
    const fetchYoutube = async () => {
  
  let data=await fetch(url);
    
    let jsondata=await data.json();
    
    setdata(jsondata.items);
}

    fetchYoutube();
  }, []);
return (<>

<div className='row align-items-center justify-content-center'>
     {data.map((element)=>{
            console.log(element)
          	var videosrc="https://www.youtube.com/embed/"+element.id.videoId;
           return (<>
         
                        <div class="card col-md-3 mx-5 my-5" >
   
  <iframe className="embed-responsive-item"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""  src={videosrc}></iframe>

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