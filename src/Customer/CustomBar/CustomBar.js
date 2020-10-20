import React, { useState } from 'react';
import Logo from'../../images/logos/logo.png'
import './Customer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus, faCoffee, faComment, faHandsHelping } from '@fortawesome/free-solid-svg-icons'
const CustomBar = ({SETSTATE}) => {
   
    const [state,setState]=useState({
        ordered:true,
        reviewed:false,
        serviced:false
    })
    
   
    const orderHandler=()=>{
     
        const newstate={
            ordered:true,
            reviewed:false,
            serviced:false
        }
        setState(newstate)
    }
    const ReviewHandler=()=>{
    
        const newstate2={
            ordered:false,
            reviewed:true,
            serviced:false
        }
        setState(newstate2)
    }
    const serviceHandler=()=>{
    
        const newstate3={
            ordered:false,
            reviewed:false,
            serviced:true
        }
        setState(newstate3)
    }
    SETSTATE(state)
    return (
               <div>
             <img src={Logo} alt="" className="img-fluid w-100 mb-5" />
       <div className="textContainer my-5 pl-5">
       <div className="sideText d-flex" onClick={orderHandler} style={{fontSize:"24px"}}>
            
                        <FontAwesomeIcon  className="pr-2 mt-2" icon={faCartPlus}/>
            <p>Order</p>
            
        </div>
        <div className="sideText d-flex my-4" onClick={serviceHandler} style={{fontSize:"24px"}}>
        <FontAwesomeIcon className="pr-2 mt-2" icon={faHandsHelping}/>
        <p>Services</p>
        </div>
        <div className="sideText d-flex " onClick={ReviewHandler} style={{fontSize:"24px"}}>
        <FontAwesomeIcon  className="pr-2 mt-2" icon={faComment}/>
        <p>Review</p>
            
        </div>
       </div>
       </div>
 
    );
};

export default CustomBar;