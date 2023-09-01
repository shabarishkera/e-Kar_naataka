
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

    <div class="container py-5 my-4 bg-light text-dark text-center">
        <div class="row pt-4 mb-2">
            <div class="col-md-12">
                <div class="lc-block">
                    <div editable="rich">
                        <p class="h4 text-muted">ಇ-Karನಾಟಕ</p>
                    </div>
                </div>

            </div>
        </div>
        <div class="row justify-content-center mb-4">

            <div class="lc-block col-xl-8">
                <h1 editable="inline" class="display-2 fw-bold">Search<span class="text-danger"> Our Database</span> and enjoy thousands of tutorials,Videos etc</h1>
            </div>

        </div>
        <div class="row justify-content-center mb-4">

            <div class="lc-block col-xl-6 lh-lg">
                <div editable="rich">
                    <p class="">
                    </p>
                </div>
            </div>

        </div>
        <div class="row pb-4">
            <div class="col-md-12 d-">
                <div class="lc-block d-grid gap-3 d-md-block">
                     <div class="col-auto">
                                        <input style={{maxWidth: '300px'}}  ref={input} class="form-control  form-control-borderless btn btn-outline-danger" type="search" placeholder="Search topics or keywords"/>
                                    </div>
                                   
                                    <div class="col-auto">
                                        <button class="btn btn-lg btn-danger my-2" onClick={handleSearch} type="submit">Search</button>
                                    </div>
                </div>
            </div>
        </div>
    </div>
<div class="container pt-5">
        <div class="row mb-4">
            <div class="lc-block text-center">
                <div editable="rich">
                    <h2 class="fw-bold display-2">{isRecomend?'Our suggestions':'Search results'}</h2>
                </div>
            </div>
            <div class="lc-block text-center">
                
            </div>
        </div>
    </div>
    <Videos keyword={keyword}/>

		</>)
}