
import {useRef,useState,useEffect} from 'react';
import Videos from './Videos'
export default function Search(argument) {
const input=useRef();

const [keyword,setkeyword]=useState('artforms of karnataka');
const [isRecomend,setRecomend]=useState(true);
 const handleSearch=()=>{

 setkeyword(input.current.value);
setRecomend(false);

 	 }


	return (<>

    <div className="container py-5 my-4 bg-light text-dark text-center">
        <div className="row pt-4 mb-2">
            <div className="col-md-12">
                <div className="lc-block">
                    <div editable="rich">
                        <p className="h4 text-muted">ಇ-Karನಾಟಕ</p>
                    </div>
                </div>

            </div>
        </div>
        <div className="row justify-content-center mb-4">

            <div className="lc-block col-xl-8">
                <h1 editable="inline" className="display-2 fw-bold">Search<span className="text-danger"> Our Database</span> and enjoy thousands of tutorials,Videos etc</h1>
            </div>

        </div>
        <div className="row justify-content-center mb-4">

            <div className="lc-block col-xl-6 lh-lg">
                <div editable="rich">
                    <p className="">
                    </p>
                </div>
            </div>

        </div>
        <div className="row pb-4">
            <div className="col-md-12 d-">
                <div className="lc-block d-grid gap-3 d-md-block">
                     <div className="col-auto">
                                        <input style={{maxWidth: '300px'}}  ref={input} className="form-control  form-control-borderless btn btn-outline-danger" type="search" placeholder="Search topics or keywords"/>
                                    </div>
                                   
                                    <div className="col-auto">
                                        <button className="btn btn-lg btn-danger my-2" onClick={handleSearch} type="submit">Search</button>
                                    </div>
                </div>
            </div>
        </div>
    </div>
<div className="container pt-5">
        <div className="row mb-4">
            <div className="lc-block text-center">
                <div editable="rich">
                    <h2 className="fw-bold display-2">{isRecomend?'Our suggestions':'Search results'}</h2>
                </div>
            </div>
            <div className="lc-block text-center">
                
            </div>
        </div>
    </div>
    <Videos keyword={keyword}/>

		</>)
}