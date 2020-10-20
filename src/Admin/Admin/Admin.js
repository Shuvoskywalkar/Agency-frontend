import { faHdd, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Addadmin from '../AdminInfo/Addadmin';
import ServiceAdded from '../AdminInfo/ServiceAdded';
import Users from '../AdminInfo/Users';
import Logo from '../../images/logos/logo.png'
import { faChessKnight, faList } from '@fortawesome/free-solid-svg-icons';
import { userContext } from '../../App';

const Admin = () => {
    const[signedIN]=useContext(userContext)

    const [state,setState]=useState({
        ordered:true,
        reviewed:false,
        serviced:false
    })
    console.log(state)
   
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
    // SETSTATE(state)
    const[users,setusers]=useState([])
// const[state]=useState(false)


// const fetchUsers=()=>{

    useEffect(()=>
    {
        
    fetch('https://mysterious-thicket-49159.herokuapp.com/Userinfo')
    
    
    
    .then(res=>res.json())
    .then(data=>setusers(data))
    }
    
    ,[])

console.log(users)
    return (
        <div className="row" style={{height:"1600px"}}>
            <div className="col-md-2 col-sm-4">
            <div>
             <img src={Logo} alt="" className="img-fluid w-100 mb-5" />
       <div className="textContainer my-5 ml-3">
       <a href="#logons">
                <div className="sideText d-flex" onClick={orderHandler} style={{fontSize:"24px",textDecoration:"none"}}>
            
                        <FontAwesomeIcon  className="mr-2 mt-2" icon={faList}/>
            <p>Service List</p>
            
        </div>
        </a>
        <a href="#ServiceAdded">
        <div className="sideText d-flex my-4" onClick={ReviewHandler} style={{fontSize:"24px",textDecoration:"none"}}>
        <FontAwesomeIcon className="mr-2 mt-2" icon={faPlus}/>
        <p>Add Service</p>
        </div>
        </a>
        <a href="#AdminInfo">
        <div className="sideText d-flex " onClick={()=>serviceHandler(onclick)}
        style={{fontSize:"24px",textDecoration:"none"}}>
        <FontAwesomeIcon  className="mr-2 mt-2" icon={faChessKnight}/>
        <p>Add Admin</p>
            
        </div></a>
       </div>
       </div>
            </div>
           <div className="col-md-10 col-sm-8">
               {state.ordered && <Users users={users}/>}
               {state.reviewed && <ServiceAdded/>}
               {state.serviced && <Addadmin/>}
           </div>
          
 
            </div>
                          

    );
// }
};

export default Admin;