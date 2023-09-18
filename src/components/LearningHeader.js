 
  export default function LearningHeader(argument) {
return ( 
	<>    
 <div className="container py-5 bg-transparent text-center w-100 mb-5">
        <h1 editable="inline" className="display-1 fw-bold">Continue Where you <span className="text-danger">Left Off</span></h1>
        <div editable="rich">
            <p className="lead">We still remember you</p>
        </div>
    </div>


    <div className="container position-relative bg-dark py-6 ">
        <div className="lc-block position-absolute start-0 top-0 mt-xl-n6 mt-n6 d-none d-xl-block ms-xl-n5"><img className="ratio img-fluid   learing-header-img " style={{maxwidth:"512px"}} src="https://images.unsplash.com/photo-1691075221845-687ff5614e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2F0aGFrYWxpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" sizes="(max-width: 1080px) 100vw, 1080px" width="1080" height="" alt="Photo by Zohre Nemati" loading="lazy"/></div>

        <div className="row justify-content-xl-start justify-content-center">

            <div className="col-10 d-block d-xl-none mt-n8 mb-4">
                <img className="ratio img-fluid learing-header-img" style={{maxHeight:'700px',objectFit:'cover'}} src="https://images.unsplash.com/photo-1691075221845-687ff5614e66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8a2F0aGFrYWxpfGVufDB8fDB8fHww&auto=format&fit=crop&w=600&q=60" width="1080" height="" alt="Photo by Valerie Elash" loading="lazy"/>
            </div>


            <div className="col-10 col-xl-5 offset-xl-5 mb-5">
                <div className="lc-block text-white text-center text-xl-start">
                    <div editable="rich">
                        <h1 className="learing-header my-3">Some Tips To Be Better</h1>
                    </div>
                </div>
            </div>

        </div>
        <div className="row px-3 px-xl-0 col-xl-6 offset-xl-5 text-white">
            <div className="col-sm-6 text-center text-sm-start mb-5">
                <div className="lc-block mb-5">

                    

                </div>
                <div className="lc-block mb-4">
                    <div editable="rich">
                        <h3> Start with the Basics</h3>
                    </div>
                </div>
                <div className="lc-block">
                    <div editable="rich">
                        <p className="lead text-white-50"> Begin with the fundamentals of the art form you're interested in.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 text-center text-sm-start mb-5">
                <div className="lc-block mb-5">


                </div>
                <div className="lc-block mb-4">
                    <div editable="rich">
                        <h3>Practice Regularly</h3>
                    </div>
                </div>
                <div className="lc-block">
                    <div editable="rich">
                        <p className="lead text-white-50"> Art, like any skill, requires consistent practice. Dedicate time each day or week to work on your art. Consistency will lead to improvement.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 text-center text-sm-start mb-5">
                <div className="lc-block mb-5">

                  

                </div>
                <div className="lc-block mb-4">
                    <div editable="rich">
                        <h3> Study Masters and Contemporary Artists</h3>
                    </div>
                </div>
                <div className="lc-block">
                    <div editable="rich">
                        <p className="lead text-white-50"> Analyze the work of famous artists from the past and present. Try to understand their techniques, styles, and the emotions conveyed in their art.</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-6 text-center text-sm-start mb-5">
                <div className="lc-block mb-5">

                   

                </div>
                <div className="lc-block mb-4">
                    <div editable="rich">
                        <h3> Learn from Mistakes</h3>
                    </div>
                </div>
                <div className="lc-block">
                    <div editable="rich">
                        <p className="lead text-white-50">Mistakes are a natural part of the learning process. Embrace them as opportunities to grow and improve.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</>)
}