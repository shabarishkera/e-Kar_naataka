export default function Hero(argument) {
   return (<>
       <section id="hero" class="d-flex align-items-center">
        <video autoPlay muted loop id="myVideo" class="w-100">
            <source src={require("../intro.mp4")} type="video/mp4"/>
        </video>
        <div class="container position-absolute" data-aos="fade-up" data-aos-delay="500">
   
        </div>
    </section>
</>);
}