export default function TeamParticipation(argument) {
	return (<>


  
    <div className="container my-5">
	<div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
		<div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
			<div className="lc-block mb-3">
				<div editable="rich">
					<h2 className="fw-bold display-4">Our Team and <span className="text-danger ">Artform
						</span>
					</h2>
				</div>
			</div>

			<div className="lc-block mb-3">
				<div editable="rich">
					<p className="lead">Explore our teams contribution towards the enrichment of the artforms
					</p>
				</div>
			</div>

		</div>
		<div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
			<div className="lc-block"><img className="rounded-start" src="https://e1.pxfuel.com/desktop-wallpaper/282/943/desktop-wallpaper-yakshagana.jpg" alt="Photo by Diego PH" width="720"/></div>
		</div>
	</div>
</div> 
 
   <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
  </ol>
  <div class="carousel-inner shadow mx-5">
    <div class="carousel-item active ">
      <img class="d-block w-100 shadow" src={require('../assets/img/c1.jpg')} alt="First slide"/>
      <div class="carousel-caption d-none d-md-block justify-self-center">
    <h5>SHAMITHA KT</h5>
    <p>classical dance performance by shamitha kt on school day</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 shadow" src={require('../assets/img/c2.jpg')} alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block justify-self-center">
    <h5>SHAMITHA KT</h5>
    <p>classical dance performance by shamitha kt on school day</p>
  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100 shadow" src={require('../assets/img/c3.jpg')} alt="Third slide"/>
      <div class="carousel-caption d-none d-md-block justify-self-center">
    <h5>SHABARISH K</h5>
    <p>yakshagana at school anual day function 2009</p>
  </div>
    </div>
      <div class="carousel-item">
      <img class="d-block w-100 shadow" src={require('../assets/img/c4.jpeg')} alt="Second slide"/>
      <div class="carousel-caption d-none d-md-block justify-self-center">
    <h5>SINCHAN KUMAR</h5>
    <p>performance given by SINCHAN on Kannada Rajyothsava</p>
  </div>
    </div>
  </div>
 
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only"><i class="bi bi-caret-left-fill asist-icon"></i></span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only"><i class="bi bi-caret-right-fill asist-icon"></i></span>
  </a>
</div>
  




		</>)
}