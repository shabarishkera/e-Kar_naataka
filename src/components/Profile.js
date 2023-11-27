import React from 'react'
import  {useEffect,useState }from 'react'
export default function Profile() {
  const [profileImage,setprofileImage]=useState(null);


  useEffect(()=>{
    //get the image from db .
    if(localStorage.userProfileImage)
    setprofileImage(localStorage.userProfileImage)
      console.log(localStorage.userProfileImage)
    


  },[])
  const handleOnchange=(e)=>
  {
   var url=URL.createObjectURL(e.target.files[0]);
    setprofileImage(url)
    localStorage.userProfileImage=url;
  }
  return (
    <div>
     <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <div className="card">
            <div className="card-header">
              <h3>Profile </h3>
            </div>
            <div className="card-body">
              <img
                src={profileImage}
                alt="Profile"
                className="img-fluid  mb-3 img-thumbnail"
              />
              <input  className='d-flex justify-content-center bi bi-plus' type='file' onChange={handleOnchange} />
              <h5 className="card-title">John Doe</h5>
              <p className="card-text">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Email:</strong> john.doe@example.com
                </li>
                <li className="list-group-item">
                  <strong>Location:</strong> City, Country
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
