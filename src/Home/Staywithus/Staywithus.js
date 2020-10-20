import React from 'react';
import './Staywithus.css';
const Staywithus = () => {
    return (
        <div className='bottomContainer'>
          <div className="row p-5  d-flex">
              <div className="col-md-6 col-sm-6">
              <div className="p-5">
              <h1>
                  Let us handle your <br/> project, professionally.
                  </h1>
                  <h4 className="bottomHeader my-5">
                  With well written codes, we build amazing apps for all <br/> platforms, and web apps in general.
                  </h4>
              </div>
              </div>
              <div className="col-md-6 col-sm-6">
                  <form action="" className="p-5">
                  <input type="email" name="Email" id="Email" className="input my-2 mt-5 form-control" placeholder="enter email here " />
                  <input type="text" name="nameatbottom" id="nameatbottom" placeholder="Your name / company’s name" className="form-control input my-3"/>
                  <input type="text" name="Description" id="Description" placeholder="Description here" className="input my-2 form-control" />
                 <button type="submit" className="btn btn-dark w-25 my-2 py-4">Submit</button>
                  </form>
              </div>
          </div>
        </div>
    );
};

export default Staywithus;