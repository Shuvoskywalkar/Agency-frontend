import React, { useEffect, useState } from 'react';
import CustomBar from '../CustomBar/CustomBar';
import CustomDetails from '../CustomDetails/CustomDetails';
import './customer.css'
const Customer = () => {
    const [STATE,SETSTATE]=useState({})
 
    return (
        <div>
            <div className="row d-flex ">
            <div className="sidebar col-md-2 col-sm-4 p-4" >
                    <CustomBar SETSTATE={SETSTATE}/>
                    </div>
                    <div className="col-md-10 col-sm-8">
                    <CustomDetails STATE={STATE} />
                    </div>
            </div>
        </div>
    );
};

export default Customer;