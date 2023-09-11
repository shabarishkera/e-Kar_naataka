import {Link} from 'react';
import {useNavigate} from 'react-router-dom'
export default function Tutorials(argument) {
	const nav=useNavigate();
	const handlelearn=(e)=>{
		e.preventDefault();
		var title=e.target.value;
		nav("learn",{state:{title}});


	}
	return (<>

 <div class="lc-block mb-4">
            <div editable="rich">
                <h2 class="display-2 fw-bold">Tutorials <span class="text-primary">We Have to offer!</span></h2>
            </div>
        </div>



			<div className="row justify-content-center">
			<div class="card shadow    col-md-3 mx-5 my-5">
                        <div class="card-body">
                            <div class="lc-block">
                                <img class="img-fluid" src="https://images.unsplash.com/photo-1593507721017-4072754a93ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWFrc2hhZ2FuYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" srcset="" sizes="" width="" height="" alt="Photo by Marla Gottschalk" loading="lazy"/>
                            </div>
                            <div class="card-body">
                                <div class="lc-block mb-3">
                                    <div editable="rich">

                                        <h2 class="h5">Yakshgana Tutorials</h2>

                                      { /* <p>Some quick example text to build on the card title and make up the bulk of the card's content..</p>  */}
                                    </div>
                                </div>
                                <div class="lc-block">
                                    <button class="btn btn-primary"  value="Yakshgana" role="button" onClick={handlelearn}>Learn </button>
                                </div>


                            </div>
                        </div>
                    </div>



<div class="card shadow    col-md-3 mx-5 my-5">
                        <div class="card-body">
                            <div class="lc-block">
                                <img class="img-fluid" src="https://images.unsplash.com/photo-1688820661462-a44e4b2770e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmhhcmF0YW5hdHlhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" srcset="" sizes="" width="" height="" alt="Photo by Marla Gottschalk" loading="lazy"/>
                            </div>
                            <div class="card-body">
                                <div class="lc-block mb-3">
                                    <div editable="rich">

                                        <h2 class="h5">Bharathnatyam Tutorials</h2>

                                          { /* <p>Some quick example text to build on the card title and make up the bulk of the card's content..</p>  */}
                                    </div>
                                </div>
                                <div class="lc-block">
                                  <button class="btn btn-primary"  value="Bharathnatyam" role="button" onClick={handlelearn}>Learn </button>
                                </div>


                            </div>
                        </div>
                    </div>



<div class="card shadow    col-md-3 mx-5 my-5">
                        <div class="card-body">
                            <div class="lc-block">
                                <img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8f/HuliveshaImage174.jpg/640px-HuliveshaImage174.jpg" srcset="" sizes="" width="" height="" alt="Photo by Marla Gottschalk" loading="lazy"/>
                            </div>
                            <div class="card-body">
                                <div class="lc-block mb-3">
                                    <div editable="rich">

                                        <h2 class="h5">Pili Vesha Tutorials</h2>

                                          { /* <p>Some quick example text to build on the card title and make up the bulk of the card's content..</p>  */}
                                    </div>
                                </div>
                                <div class="lc-block">
                                  <button class="btn btn-primary"  value="Pili Vesha" role="button" onClick={handlelearn}>Learn </button>
                                </div>


                            </div>
                        </div>
                    </div>



<div class="card shadow    col-md-3 mx-5 my-5">
                        <div class="card-body">
                            <div class="lc-block">
                                <img class="img-fluid" src="https://www.southtourism.in/assets/images/beesu-kamsale.jpg" srcset="" sizes="" width="" height="" alt="Photo by Marla Gottschalk" loading="lazy"/>
                            </div>
                            <div class="card-body">
                                <div class="lc-block mb-3">
                                    <div editable="rich">

                                        <h2 class="h5">Kamsale Tutorials</h2>

                                          { /* <p>Some quick example text to build on the card title and make up the bulk of the card's content..</p>  */}
                                    </div>
                                </div>
                                <div class="lc-block">
                                  <button class="btn btn-primary"  value="Kamsale" role="button" onClick={handlelearn}>Learn </button>
                                </div>


                            </div>
                        </div>
                    </div>





<div class="card shadow    col-md-3 mx-5 my-5">
                        <div class="card-body">
                            <div class="lc-block">
                                <img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/LORD_VEERABHADRA.jpg/330px-LORD_VEERABHADRA.jpg" srcset="" sizes="" width="" height="" alt="Photo by Marla Gottschalk" loading="lazy"/>
                            </div>
                            <div class="card-body">
                                <div class="lc-block mb-3">
                                    <div editable="rich">

                                        <h2 class="h5">Veeragase Tutorials</h2>

                                          { /* <p>Some quick example text to build on the card title and make up the bulk of the card's content..</p>  */}
                                    </div>
                                </div>
                                <div class="lc-block">
                                  <button class="btn btn-primary"  value="Veeragase" role="button" onClick={handlelearn}>Learn </button>
                                </div>


                            </div>
                        </div>
                    </div>




<div class="card shadow  col-md-3 mx-5 my-5">
                        <div class="card-body">
                            <div class="lc-block">
                                <img class="img-fluid" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Mahila_Dollu_Kunita.jpg/300px-Mahila_Dollu_Kunita.jpg" srcset="" sizes="" width="" height="" alt="Photo by Marla Gottschalk" loading="lazy"/>
                            </div>
                            <div class="card-body">
                                <div class="lc-block mb-3">
                                    <div editable="rich">

                                        <h2 class="h5">Dollu kunitha Tutorials</h2>

                                          { /* <p>Some quick example text to build on the card title and make up the bulk of the card's content..</p>  */}
                                    </div>
                                </div>
                                <div class="lc-block">
                                  <button class="btn btn-primary"  value="Dollu kunitha" role="button" onClick={handlelearn}>Learn </button>
                                </div>


                            </div>
                        </div>
                    </div>










			</div>

		</>)
}