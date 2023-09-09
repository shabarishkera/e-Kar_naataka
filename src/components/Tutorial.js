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
			<div className="row">
			<div class="card shadow mx-auto col-md-3">
                        <div class="card-body">
                            <div class="lc-block">
                                <img class="img-fluid" src="https://images.unsplash.com/photo-1593507721017-4072754a93ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWFrc2hhZ2FuYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" srcset="" sizes="" width="" height="" alt="Photo by Marla Gottschalk" loading="lazy"/>
                            </div>
                            <div class="card-body">
                                <div class="lc-block mb-3">
                                    <div editable="rich">

                                        <h2 class="h5">Yakshgana Tutorials</h2>

                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content..</p>
                                    </div>
                                </div>
                                <div class="lc-block">
                                    <button class="btn btn-primary"  value="Yakshgana" role="button" onClick={handlelearn}>Learn </button>
                                </div>


                            </div>
                        </div>
                    </div>



<div class="card shadow mx-auto col-md-3">
                        <div class="card-body">
                            <div class="lc-block">
                                <img class="img-fluid" src="https://images.unsplash.com/photo-1688820661462-a44e4b2770e8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmhhcmF0YW5hdHlhbXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" srcset="" sizes="" width="" height="" alt="Photo by Marla Gottschalk" loading="lazy"/>
                            </div>
                            <div class="card-body">
                                <div class="lc-block mb-3">
                                    <div editable="rich">

                                        <h2 class="h5">Bharathnatyam Tutorials</h2>

                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content..</p>
                                    </div>
                                </div>
                                <div class="lc-block">
                                    <a class="btn btn-primary" href="#" role="button">Learn </a>
                                </div>


                            </div>
                        </div>
                    </div>



<div class="card shadow mx-auto col-md-3">
                        <div class="card-body">
                            <div class="lc-block">
                                <img class="img-fluid" src="https://images.unsplash.com/photo-1593507721017-4072754a93ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8eWFrc2hhZ2FuYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=600&q=60" srcset="" sizes="" width="" height="" alt="Photo by Marla Gottschalk" loading="lazy"/>
                            </div>
                            <div class="card-body">
                                <div class="lc-block mb-3">
                                    <div editable="rich">

                                        <h2 class="h5">Yakshgana Tutorials</h2>

                                        <p>Some quick example text to build on the card title and make up the bulk of the card's content..</p>
                                    </div>
                                </div>
                                <div class="lc-block">
                                    <a class="btn btn-primary" href="#" role="button">Learn </a>
                                </div>


                            </div>
                        </div>
                    </div>









			</div>

		</>)
}