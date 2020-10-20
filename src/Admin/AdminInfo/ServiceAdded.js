import React, { useState } from 'react';
import { faHdd, faPlus, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { faChessKnight, faList,  } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../images/logos/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
const ServiceAdded = () => {

//addService
const [service,setService]=useState({})
const[file,setfile]=useState(null)

    const onblurHandle=(e)=>{     
const newService={...service}
newService[e.target.name]=e.target.value
setService(newService)
    }
    const{Title,Description}=service
    // console.log(Title)
    const onchangeHandler=(e)=>{
        const file=e.target.files[0]
        // console.log(file)
        setfile(file)
    }
    
    const addService=(e)=>{
        e.preventDefault()
            
            const formData = new FormData()
            formData.append('file', file)
            formData.append('Title',Title)
            formData.append('Description',Description)
          
            fetch('https://mysterious-thicket-49159.herokuapp.com/AddAService', {
              method: 'POST',
              body: formData
            })
            .then(response => response.json())
            .then(data => {
              console.log(data)
            })
            .catch(error => {
              console.error(error)
            })
    }
    return (
      <div className="row" >
                    
            
              <div className="formContainer p-5 form" style={{width:"800px",backgroundColor:"#E5E5E5"}} style={{height:"800px"}}>

         <form className="p-5 "  onSubmit={addService}>
         <strong>Service Title</strong>
         <div class="form-group title d-flex">
             
    
    <input type="text" onBlur={onblurHandle} class="form-control w-50 mr-4" id="title" name="Title" placeholder="Enter Title"/>    
           <input type="file" onChange={onchangeHandler} className="addingService" name="file" id="file"/>    
  </div>  
         <div class="form-group title ">
  <strong>Description</strong>
    <input type="text" onBlur={onblurHandle} class="form-control w-50 Description mr-4" name="Description" id="Description" style={{height: "121px"}} placeholder="Description Here"/>
    </div>
<button type="submit" className="btn btn-success p-3  mb-5" style={{marginLeft:"700px",marginBottom:"50px"}}>Submit</button>
        
  

         </form>
         </div>
       
        </div>
                        
              
    );
};

export default ServiceAdded
       