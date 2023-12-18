import React, { useContext, useState } from 'react'
import { context } from '../store/Store'



export default function SettingSwitches() {
    const{navbarColor,setNavbarColor,navtextColor,setNavtextColor,footerColor,setFooterColor,footerTextColor,setFooterTextColor}=useContext(context);

    const handleClick=()=>
    {
        console.log("pressed")
        if(navbarColor=='light')
        {
            setNavbarColor('dark');
            setFooterColor('dark');
            setNavtextColor('light');
            setFooterTextColor('light');
        }
        else
        {
            setNavbarColor('light');
            setFooterColor('light');
            setNavtextColor('dark');
            setFooterTextColor('dark');


        }




    }

  return (
    <div>
      
    <div class="container py-5">
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
            <div class="col text-center">
                <div class="lc-block card h-100 p-4 link-primary">
                    <div class="lc-block card-body">
                        <div class="lc-block mb-4">
                           

                        </div>
                        <div class="lc-block">
                            <div  editable="rich">

                            <input type="checkbox"   class="btn-check" id="btn-check-outlined" autocomplete="off"/>
<label class="btn btn-outline-primary" onClick={handleClick}  for="btn-check-outlined">dark mode</label><br/>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <div class="lc-block card h-100 p-4 link-success">
                    <div class="lc-block card-body">
                        <div class="lc-block mb-4">
                           
                        </div>
                        <div class="lc-block">
                            <div editable="rich">

                                <p>Email: <a href="mailto:office@example.com" class="stretched-link link-success">office@example.com</a></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <div class="lc-block card h-100 p-4 link-info">
                    <div class="lc-block card-body">
                        <div class="lc-block mb-4">
                            

                        </div>
                        <div class="lc-block">
                            <div editable="rich">

                                <p>Call us now
                                    <a href="tel:+18182639234" class="stretched-link link-info">+1 818-263-9234</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col text-center">
                <div class="lc-block card h-100 p-4 link-danger">
                    <div class="lc-block card-body">
                        <div class="lc-block mb-4">
                            

                        </div>
                        <div class="lc-block">
                            <div editable="rich">

                                <p> WhatsApp: <a href="https://wa.me/+14402431094" class="link-danger stretched-link">Send Message</a></p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    </div>
  )
}
