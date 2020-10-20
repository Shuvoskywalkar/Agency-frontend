import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { userContext } from '../../../App';
import './Service.css'

const Services = () => {
//     var services=
// [{ServiceName:"Web & Mobile design",key:1,Description:"We craft stunning and amazing web UI, using a well drrafted UX to fit your product.",
// image:'https://imgur.com/7DTrtqi.png'},
// {ServiceName:'Graphic Design',key:2,Description:"    We craft stunning and amazing web UI, using a well drrafted UX to fit your product",image:"https://imgur.com/jC0Kgot.png"},
// {ServiceName:'Web Development',key:3,Description:" With well written codes, we build amazing apps for all platforms, mobile and web apps in general.",image:"https://imgur.com/dPwXUcz.png"}]
// const postFakedata=()=>{
//     console.log(services)
//     fetch('http://localhost:600/CollectionService',{
//     method:"POST",
//     headers:{'Content-Type':'application/json'},
//     body:JSON.stringify(services)
// })
// }

const[signedIN]=useContext(userContext)

const[Services,setServices]=useState([])

useEffect(()=>{
    fetch('https://mysterious-thicket-49159.herokuapp.com/Services')
    .then(res=>res.json())
    .then(result=>setServices(result))
},[])
// console.log(Services)
const history=useHistory()

    return (
        <main >
           <p className="text-center " style={{fontWeight: "600",
fontSize: "34px",
lineHeight: "43px",textAlign:"center",marginBottom:"50px"}}>
           Provide awesome  <span style={{color: "#7AB259"}}> services</span> 
          </p> 
          <div className="row  ml-5">
{/* <button onClick={postFakedata}> submit</button> */}
        { Services.map(srv=>           
            
           
                <div className="col-md-4  text-center "  style={{textDecoration:"none"}} >
             
                  <div className="serviceCard p-3" style={{height: "300px",width:"300px"}}>
                  <Link to={"/Child/"+srv._id}>
                <div>
                  {srv.Image ?  <img src={`data:image/png;base64,${srv.Image.img}`} alt="notshowing" srcset=""/>: 
<img src={srv.image} className="w-5 "/>}
</div>
<p style={{fontWeight: "600",
fontSize: "20px"}}>
    {srv.ServiceName
}
</p>
<p style={{fontWeight: "300",
fontSize: "16px",
lineHeight:" 28px",color:" rgba(0, 0, 0, 0.7)"}}>
 {srv.Description}
</p> 
  </Link>
            </div>
         

             </div>

        )}

             
      </div>
  </main>
    );
};

export default Services;