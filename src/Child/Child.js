import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useContext } from 'react';
import Admin from '../Admin/Admin/Admin';
import { userContext } from '../App';
import Customer from '../Customer/Customer/Customer';

const Child = ()=>{
    const[signedIN,setSignedIN]=useContext(userContext)
    const [stable,setstable]=useState(false)

 useEffect(() => {
    fetch(`http://localhost:600/AdminEmailHere?email=${signedIN.email}`)
        .then(res => res.json())
        .then(data => {
            if (data.length) {
                const adminUser = { ...signedIN };
                adminUser.setUser = true;
                setSignedIN(adminUser)
            }
            else {
                const adminUser = { ...signedIN };
                adminUser.setUser = false;
                setSignedIN(adminUser)
            
            }
        })
}, [stable])
console.log(signedIN)

    
    return (
        <div>
        
            {signedIN.setUser ? <Admin/> : <Customer/>}
            
        </div>
    );
};

export default Child;