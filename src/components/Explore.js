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

    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Enterprise</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$29 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>30 users included</li>
              <li>15 GB of storage</li>
              <li>Phone and email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">Contact us</button>
          </div>
        </div>
      </div>

   
    </div>
    </>);
}