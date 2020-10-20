import React, { useState } from 'react';

import { faHdd, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faChessKnight, faList, } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
const Addadmin = () => {
    const [admin, setAdmin] = useState({})
const handleBlur = (e) => {
    const newAdmin = { ...admin };
    newAdmin[e.target.name] = e.target.value;
    setAdmin(newAdmin)
}
    const handleSubmit = (e) => {
        e.preventDefault();
    
        fetch('https://mysterious-thicket-49159.herokuapp.com/AdminEmail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(admin)
        })
    }
    return (
        
<div className="formContainer p-5" style={{width:"1000px"}}>

                    <div className="col-md-10"> 
<form className=" p-5 form" onSubmit={handleSubmit}>
    <div className="d-flex">
 
<input type="email" onBlur={handleBlur} class="form-control w-50 pl-5 pr-5 py-2" id="AdminEmail" name="AdminEmail"  placeholder="Enter Email" style={{height:"60px"}}/>
<button type="submit"  className="btn btn-success pl-5 pr-5 py-2 " style={{marginRight:"6px"}}>Add</button></div>
</form>
</div>
</div>

      
    );
};

export default Addadmin;