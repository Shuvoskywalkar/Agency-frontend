import React, { useContext, useEffect, useState } from 'react';
import { faChessKnight, faList, faPlus } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import { userContext } from '../../App';
const Users = ({users}) => {
    // const[signedIN]=useContext(userContext)


    return (
      
            <div className="row" style={{height:'800px'}}>
             
    

                <div className="col-md-10">
                <table className="table table-borderless my-5" style={{backgroundColor:"#white"}}>
                <thead className="my-3" style={{backgroundColor:"#F5F6FA",borderRadius:"8px"}}>
                    <tr>
                        <th className="text-secondary" scope="col">Name</th>
                        <th className="text-secondary" scope="col">Email ID</th>
                        <th className="text-secondary" scope="col">Service</th>
                        <th className="text-secondary" scope="col">Project Details</th>
                        <th className="text-secondary" scope="col">Status</th>
                    </tr>
                </thead>
                <tbody className="my-5">
                         
                        {!users? 
                        <h2>Loading ..... LOading ..../please revisit the page</h2>:
                        users.map((user) =>
                        // <div >
                            <tr className='my-3'>
                                <td className='my-3'>{user.name}</td>
                                <td className='my-3'>{user.Email}</td>
                                <td className='my-3'>{user.ServiceName}</td>
                                <td className='my-3'>{user.Description}</td>
                               <td className='my-3'> <select>
                            <option value="Pending">Pending</option>
                            <option value="On going">On going</option>
                            <option value="Done">Done</option>
                             <i class="fas fa-sort-down text-dark"></i></select>
                             </td>
                            </tr>
                            // </div>
                        )
                  }

                </tbody>
            </table>


                </div>
            </div>
           
         
        
    );
};

export default Users;