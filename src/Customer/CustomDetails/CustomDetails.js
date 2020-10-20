import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { userContext } from '../../App';
import './customDetails.css'
import './customDetails.css'
const CustomDetails = ({STATE}) => {
  
  const[signedIN]=useContext(userContext)
  
  const[Services,setServices]=useState([])
      useEffect(()=>{
          fetch('http://localhost:600/Services')
          .then(res=>res.json())
          .then(result=>setServices(result))
      },[signedIN])

const {key}=useParams()


const[services,setservices]=useState([])
// const Email:document.getElementById('Email').value
const{email}=signedIN
useEffect(() => {
  fetch('http://localhost:600/Courses?Email='+email)
      .then(res => res.json())
      .then(data => setservices(data))
}, [])
// console.log(services)




const requiredService=Services.find(pd=>pd._id==key)
  // console.log(requiredService)  


  // console.log(STATE)

  
  const SubmitHandler=(e)=>{
    e.preventDefault()
    const registered={
        name:document.getElementById('Name').value ,
        Email:document.getElementById('Email').value,
         ServiceName:document.getElementById('ServiceName').value,
         Description:document.getElementById('ProjectDetails').value,
        image:requiredService.image,
        price:document.getElementById('Price').value
    }

    fetch('https://mysterious-thicket-49159.herokuapp.com/postOrders',{
        method:"POST",
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify(registered)
    })
    .then(res=>res.json())
    .then(data=>console.log(data))
  }
  

const[RevTexts,setRevTexts]=useState({})
const[file,setfile]=useState(null)
const{CompName,Designation,Name}=RevTexts
  const onBlurHandle=(e)=>{
 const NewRevTexts={...RevTexts}
 NewRevTexts[e.target.name]=e.target.value
 setRevTexts(NewRevTexts)
  }
  const onChangeHandler=(e)=>{
const file=e.target.files[0]
setfile(file)
  }
const SubmitHandler2=(e)=>{
  
  e.preventDefault()
            
  const formData = new FormData()
  formData.append('file', file)
  formData.append('Company', CompName)
  formData.append('Name', Name)
  formData.append('Designation', Designation)
fetch('https://mysterious-thicket-49159.herokuapp.com/AddAReview',{
  
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
<main>
            <div  className="p-4 upperGrid  d-flex justify-content-between"style={{fontWeight:"bolder"}}  >
            {STATE.ordered && 
            <strong>Order</strong>
            }
            {STATE.reviewed && 
            <strong>review</strong>
            }
            {STATE.serviced && 
            <strong>Service</strong>
            }
            <h5>{signedIN.email}</h5>
                </div>  

                {STATE.ordered && requiredService &&
                // <Order requiredService={requiredService}/>
                <div className="formContainer p-5 col-sm-12" >
    
    <form  onSubmit={SubmitHandler}>
      <div class="form-group ">
        <input type="text" class="form-control" id="Name" value={signedIN.name} placeholder="Your name/Your Company name" style={{width: "570px",
    height:" 60px"}}/>
      </div>
      
      <div class="form-group  ">
        <input type="text" class="form-control" id="Email" value={signedIN.email} placeholder="Your Email ID here" style={{width: "570px",
    height:" 60px"}}/>
      </div>
    
      <div class="form-group  ">
        <input type="text" class="form-control" id="ServiceName" Value={requiredService.ServiceName} style={{width: "570px",
    height:" 60px"}}/>
      </div>
    
      <div class="form-group  ">
        <input type="text" class="form-control" id="ProjectDetails" Value={requiredService.Description} placeholder="ProjectDetails" style={{width: "570px",
    height: "112px"}}/>
      </div>
      
      <div class="form-group d-flex ">
        <input type="number" class="form-control" id="Price" value={500} placeholder="Price" style={{width: "284px",
    height: "60px"}}/>
        {/* <input type="file" name="File" id="File" /> */}
       
      </div>
      <button type="submit" className="btn btn-dark pl-5 pr-5 py-2" id="submit">Send</button>
    </form> 
    
    </div>
}



{STATE.reviewed &&
<div className="formContainer p-5">
<form onSubmit={SubmitHandler2}>
<div class="form-group ">
  <input type="text" class="form-control" id="NameAtReview" name="Name" placeholder="Your name" onBlur={onBlurHandle} style={{width: "570px",
height:" 60px"}}/>
</div>

<div class="form-group  ">
  <input type="text" class="form-control" id="CompanyName" placeholder="Your Company's name/Designation" name="CompName" onBlur={onBlurHandle} style={{width: "570px",
height:" 60px"}}/>
</div>

<div class="form-group  ">
  <input type="text" class="form-control" name="Designation" id="Designation" placeholder="Designation" onBlur={onBlurHandle} style={{width: "570px",
height: "112px"}}/>
</div>
<div className="form-group">
<input onChange={onChangeHandler} type="file" name="File" id="File" />

</div>
<button type="submit" className="btn btn-dark pl-5 pr-5 py-2" id="submit">Submit</button>
</form>
</div>
}


{STATE.serviced &&

  <div  className="formContainer p-5" >
                <div  className="row col-sm-12 d-flex justify-content-between">
                   { services.map(service => 
                  
                        
                          // <div key={service._id} >
                            
                      <div className="col-md-6 col-sm-3 "
                      style={{
                      width: "415px",
                      height: "254px",
                     

                      background: "#FFFFFF",
                      borderRadius: "10px"}} className='p-3  my-2'>
                    
                      <img src={service.image} alt="" style={{width:"74px",height:"74px"}} className="img-fluid ml-2 mt-2 w-5 img-on-top" srcset=""/>
                    <p style={{
                    color: "#111430",fontWeight: 600,
                    fontSize: "20px",
                    lineHeight: "16px"}} className="mt-2">
                      {service.ServiceName}</p>
                    <p style={{
                    color: "rgba(0, 0, 0, 0.7)",fontWeight: 300,
                    fontSize: "16px",
                    lineHeight: "28px"}} className="mt-2"
                    >{service.Description}</p>
                        </div>
                          

                       

                        
                  
                    )}
            </div>
           </div>                            
           
        }
 </main>
    );
  // }
};

export default CustomDetails;