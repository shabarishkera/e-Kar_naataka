import Videos from './Videos'
import Tutorial from './Tutorial'
import TeamParticipation from './TeamParticipation'
export default function  Explore(argument) {
	return (
	<>
   <div lc-helper="background" className="container-fluid py-5 mb-4 d-flex justify-content-center explore-hero" >
        <div className="p-5 mb-4 lc-block col-xxl-7 col-lg-8 col-12 explore-hero-wrap" >
            <div className="lc-block">
                <div editable="rich">
                    <h2 className="fw-bolder display-3">Explore</h2>
                </div>
            </div>
            <div className="lc-block col-md-8">
                <div editable="rich">
                    <p className="lead">Delve into the rich and diverse tapestry of artistic traditions of Karnataka. Our curated exploration of Karnataka's art forms is your window into a world of creativity, culture, and heritage. Discover the intricate rhythms of classical music. Karnataka's art forms narrate the story of its people and their artistic legacy. Join us on this cultural journey </p>
                </div>
            </div>
            <div className="lc-block">
                <a className="btn btn-dark" href="#" role="button">Explore More</a>
            </div>
        </div>
    </div>
<TeamParticipation/>
    
     <div className="container" style={{paddingTop: '10vh',paddingBottom:'10vh'}}>
        <div className="row align-items-center px-2">
            <div className="col-12 col-md-7 col-lg-6">
                <div className="lc-block mb-4">
                    <div editable="rich">
                        <h1>Wide Variety Of Contents.</h1>
                        <p>Explore Thousands of Materials and Video tutorials</p>
                    </div>
                </div>
                <div className="lc-block d-flex mb-5">
                    <div className="pe-3">
                        <h3 className="h2 mb-0 text-secondary" editable="inline">100%</h3>
                        <span editable="inline" className="mb-0 text-muted"> Satisfaction </span>
                    </div>
                    <div className="border-start"></div>
                    <div className="px-3">
                        <h3 className="h2 mb-0 text-secondary" editable="inline">500+</h3>
                        <span editable="inline" className="mb-0 text-muted"> Materials </span>
                    </div>
                    <div className="border-start"></div>
                    <div className="ps-3">
                        <h3 className="h2 mb-0 text-secondary" editable="inline">1000+</h3>
                        <span editable="inline" className="mb-0 text-muted">Videos </span>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-5 col-lg-6">
                <div className="lc-block"><img alt="" className="img-fluid mx-auto d-block" src="https://cdn.livecanvas.com/media/svg/undraw-sample/undraw_connected_world_wuay.svg"/></div>
            </div>
        </div>
    </div>

<Tutorial/>

    

     <div class="lc-block mb-4">
            <div editable="rich">
                <h2 class="display-2 fw-bold">Our <span class="text-primary">Suggesions</span></h2>
            </div>
        </div>
<Videos keyword='artforms of karnataka tutorials'/>


    </>);
}