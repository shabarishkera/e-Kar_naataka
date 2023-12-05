import React from 'react'
import  {useEffect,useState }from 'react'
export default function Profile() {
  const [profileImage,setprofileImage]=useState('https://t3.ftcdn.net/jpg/05/16/27/58/240_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg');
  const [name,setname]=useState('user')
  const [email,setemail]=useState('email')
  

  useEffect(()=>{
    //get the image from db .
    if(localStorage.userProfileImage)
    setprofileImage(localStorage.userProfileImage)
      console.log(localStorage.userProfileImage)
    const dbops=async()=>
    {
      const data={'id':localStorage.getItem('token')}
      const headers = {
        'Content-Type': 'application/json', // Specify the content type as JSON
        // Add any other headers as needed
      };
      var res=await fetch('http://127.0.0.1:5000/get_user_details', {
        method: 'POST',          // Specify the HTTP method
        headers: headers,        // Pass the headers object
        body: JSON.stringify(data) // Convert the data to JSON format
      })
      const result=await res.text();
      const res2=JSON.parse(result)
      console.log(res2)
      setemail(res2.email)
      setname(res2.name)
      setprofileImage(res2.profileImage?res2.profileImage:profileImage)
      

    }
    dbops();

    


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
              <label for='profile' title='change profile image' className='d-flex w-auto h1 h-50' ><i className='bi bi-plus xl'/></label>
              <input id='profile'   className='d-flex profile_add_button hidden justify-content-center ' type='file' onChange={handleOnchange} />
              <h5 className="card-title">{name}</h5>
              <p className="card-text">
                Configure colors , theme , profile and much more
              </p>
              <ul className="list-group">
                <li className="list-group-item">
                  <strong>Email:</strong> {email}
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
