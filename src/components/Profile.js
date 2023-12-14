import React from 'react'
import  {useEffect,useState }from 'react'
import SettingSwitches from './SettingSwitches';
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
    <div class="container-fluid pt-5">
        <div class="row mb-4 mb-lg-5 justify-content-lg-between">
            <div class="col-3 col-md-1 col-lg-2 d-none d-md-flex align-items-center">
                <div class="lc-block bg-dark ratio ratio-1x1" style={{opacity:'0.1'}}> </div>
            </div>
            <div class="col-4 col-md-3 col-lg-2 d-flex flex-column justify-content-between">
                <div class="lc-block bg-primary ratio ratio-1x1" style={{opacity:'0.1'}}> </div>
                <div class="lc-block">
                    <img class="img-fluid" src="https://images.unsplash.com/photo-1623707430101-9e74cefe05e2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3dpdGNofGVufDB8fDB8fHww" alt="Photo by Meriç Dağlı"/>
                </div>
            </div>
            <div class="col-4 col-md-4 col-lg-3"> <img class="img-fluid" src="https://images.unsplash.com/photo-1613072233238-4d290992404d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN3aXRjaHxlbnwwfHwwfHx8MA%3D%3D" style={{objectFit:"cover" }}alt="Photo by Simone Hutsch"/></div>
            <div class="col-4 col-md-3 col-lg-2 d-flex flex-column justify-content-between">
                <div class="lc-block">
                    <img class="img-fluid" src="https://images.unsplash.com/photo-1551703599-586c565bba02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fHN3aXRjaHxlbnwwfHwwfHx8MA%3D%3D" alt="Photo by Simone Hutsch"/>
                </div>
                <div class="lc-block bg-primary ratio ratio-1x1 " style={{opacity:"0.1"}}> </div>
            </div>
            <div class="col-3 col-md-1 col-lg-2 d-none d-md-flex  align-items-center">
                <div class="lc-block bg-dark ratio ratio-1x1" style={{opacity:'0.1'
                }}> </div></div>
        </div>
    </div>
    <div class="container">
        <div class="row justify-content-center">
            <div class="lc-block text-center col-md-8">
                <div editable="rich">
                    <h1 class="rfs-25 fw-bold">Coustomize every aspect</h1>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="lc-block text-center col-xxl-6 col-md-8">
                <div editable="rich">
                    <p class="lead"> have control over what you see ..., how you see ...</p>
                </div>
            </div>
        </div>
    </div>
<SettingSwitches/>
    </div>
  )
}
