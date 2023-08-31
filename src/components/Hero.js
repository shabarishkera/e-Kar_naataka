export default function Hero(argument) {
   return (<>
       <section id="hero" className="d-flex align-items-center justify-content-center ">
        <video autoPlay muted loop id="myVideo" className="w-100">
            <source src={require("../intro.mp4")} type="video/mp4"/>
        </video>
        <div className="container position-absolute align-self-end z-0 text-center " data-aos="fade-up" data-aos-delay="500"  >
        <div className="p-5  lc-block  explore-hero-wrap my-5 " >
            <div className="lc-block ">
                <div editable="rich">
                    <h2 className="fw-bolder display-3">Join Us</h2>
                </div>
            </div>
            <div className="lc-block ">
                <div editable="rich">
                    <p className="lead"> Join us on this cultural journey </p>
                </div>
            </div>
            <div className="lc-block">
                <a className="btn btn-dark" href="#" role="button">Explore More</a>
            </div>
        </div>
   
        </div>
    </section>
</>);
}