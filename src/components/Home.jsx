import React from "react";
import AppNav from "./Nav";
import '../Fonts.css';
import '../App.css';

 function Home () {
     return (
         <div style = {{textAlign: 'center'}}>

            <AppNav/>
             
            <section class="colored-section" id="title">
        
                <div class=''>
                

                <div class="row">
                    <div class="col-lg-6">
                    <h1 class="big-heading">Design. <br />Innovate. <br />Create.</h1>
                    <button type="button" class="btn btn-lg btn-dark download-buttton"><i className="fa fa-apple download"></i>
                        Download</button>
                    <button type="button" class="btn btn-lg btn-outline-light download-buttton"><i className="fa fa-google download"></i>
                    Download</button>
                    </div>
                    <div class="col-lg-6 iphn">
                    <img class="cap" src="./cap.png" alt="cap"/>
                    <img class="backpack" src="./backpack.png" alt="backpack"/>
                    <img className='shirt' src="./shirt.png" alt="shirt"/>
                    </div>
                </div>
                </div>
            </section>

            <section class="white-section"id="features">

                <div class="container-fluid">
                <div class="row">
                    <div class="feature-box col-lg-4">
                    <i class="icn fa fa-check-circle fa-4x "></i>
                    <h3 class='feature-title'>Easy to use.</h3>
                    <p>Simple Interface and Logical Menu Pathing.</p>
                    </div>

                    <div class="feature-box col-lg-4">
                    <i class="icn fa fa-bullseye fa-4x"></i>
                    <h3 class='feature-title'>Elite Clientele</h3>
                    <p>Product Design at an Enterprise Level.</p>
                    </div>

                    <div class="feature-box col-lg-4">
                    <i class="icn fa fa-heart fa-4x"></i>
                    <h3 class='feature-title'>Guaranteed to work.</h3>
                    <p>Excellent Customer Support.</p>
                    </div>
                </div>
                </div>
            </section>

            <section class="colored-section" id="cta">
            <div class="container-fluid">
            <h3 class="big-heading">Design Your Own Product Today.</h3>
            <button type="button" class="btn btn-lg btn-dark download-buttton"><i class="fa fa-apple download"></i>
                Download</button>
            <button type="button" class="btn btn-lg btn-light download-buttton"><i class="fa fa-google download"></i>
                Download</button>
            </div>
        </section>



        <footer class="white-section" id="footer">
            <div class="container-fluid">
            <i class="social-icons fa fa-twitter"></i>
            <i class="social-icons fa fa-facebook-f"></i>
            <i class="social-icons fa fa-instagram"></i>
            <i class="social-icons fa fa-envelope"></i>

            <p>© Copyright 2021 merchIT</p>
            </div>
        </footer>
         </div>
        
     );
 }

 export default Home;