
import  {Link} from 'react-router-dom'
export default function Footer(argument) {
	return(<>
		<footer className="text-center text-lg-start bg-light text-muted">
 
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
  
    <div className="me-5 d-none d-lg-block">
      <span></span>
    </div>

    <div>
      <a href="" className="me-4 text-reset">
        <i className="fab bi-facebook-f"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className=" fab bi-twitter"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab bi-google"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab bi-instagram"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab bi-linkedin"></i>
      </a>
      <a href="" className="me-4 text-reset">
        <i className="fab bi-github"></i>
      </a>
    </div>
   
  </section>
 
  <section className="">
    <div className="container text-center text-md-start mt-5">
      
      <div className="row mt-3">
       
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
         
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas bi-gem me-3"></i>ಇ-Karನಾಟಕ
          </h6>
          <p>
           Our website is a comprehensive sanctuary for those eager to explore, learn, and immerse themselves in the vibrant traditions that define Karnataka's artistic legacy.
          </p>
        </div>
       
       
       
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
        
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
             <Link  className="nav-link" to="/">Home</Link>
          </p>
          <p>
             <Link  className="nav-link" to="/history">History</Link>
          </p>
          <p>
           <Link  className="nav-link" to="/search">Search</Link>
          </p>
          <p>
            <Link  className="nav-link" to="/explore">Explore</Link>
          </p>
           <p>
            <Link  className="nav-link" to="/">My Learning</Link>
          </p>
        </div>
       
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
       
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas bi-home me-3"></i> New York, NY 10012, US</p>
          <p>
            <i className="fas bi-envelope me-3"></i>
            info@example.com
          </p>
          <p><i className="fas bi-phone me-3"></i> + 01 234 567 88</p>
          <p><i className="fas bi-print me-3"></i> + 01 234 567 89</p>
        </div>
        
      </div>
     
    </div>
  </section>
  
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2023 Copyright:
    <a className="text-reset fw-bold" href="">e-karnataka.com</a>
  </div>

</footer>



		</>)
}