import React from 'react';
import './Navbar.css'
const NAvbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light  p-3">
  <a class="navbar-brand" href="#">
    <img src='https://imgur.com/2NSkNFW.png' alt="" srcset="" className="img-fluid w-50"/>
  </a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse " id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active  mx-4">
        <a class="nav-link font-weight-bold" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item  mx-4">
        <a class="nav-link font-weight-bold" href="#">Our Portfolio</a>
      </li>
      
      <li class="nav-item  mx-4">
        <a class="nav-link font-weight-bold" href="#">Our Team</a>
      </li>
      
      <li class="nav-item  mx-4">
        <a class="nav-link font-weight-bold" >Contact US</a>
      </li>
      <li class="nav-item ml-3 ">
       <button style={{width: "134px",
height: "45px",
left: "1171px",
top: "49px",

background: "#111430",
borderRadius: "5px",color:"white"}}>Login</button>
      </li>
</ul>
  </div>
</nav>
        </div>
    );
};

export default NAvbar;