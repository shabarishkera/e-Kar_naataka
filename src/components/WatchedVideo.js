import { apikey } from '../ApiKey';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function WatchedVideo({ keyword }) {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${apikey}&q=${keyword}&maxResults=5`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [keyword]);

  return (
    <div className='row align-items-center justify-content-center'>
      {data.length > 0 ? (
        data.map((element) => (
          <div key={element.id.videoId} className='card col-md-3 mx-5 my-5 shadow'>
            <iframe
              className='embed-responsive-item'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen=''
              src={`https://www.youtube.com/embed/${element.id.videoId}`}
              title={element.snippet.title}
            ></iframe>
            <div className='card-body'>
              <h5 className='card-title'>{element.snippet.title}</h5>
              <p className='card-text'>{element.snippet.description}</p>
              <a
                href={`https://www.youtube.com/watch?v=${element.id.videoId}`}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-outline-warning'
              >
                Watch on YouTube
              </a>
            </div>
          </div>
        ))
      ) : (
        <p>No videos found.</p>
      )}
    </div>
  );
}
