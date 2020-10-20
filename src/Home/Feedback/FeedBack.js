import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

const FeedBack = () => {
//     const Feedbacks=[{name:"Natasha Rommanlof",key:1,position:"Cheif,Avengers",says:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",image:"https://i.imgur.com/Ncrt5fB.png"
// },{name:'Wolve Rine',position:"Chief,X-men",key:2,says:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",image:"https://i.imgur.com/szjY3Hq.png"
// },{name:"Erno Rubik",position:"Creator,Rubix",key:3,says:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus commodo ipsum duis laoreet maecenas. Feugiat",image:"https://i.imgur.com/1TedCUg.png"}]
// const postFakedata=()=>{
    // fetch('http://localhost:600/CollectionReview',{
    // method:'POST',
    // headers:{'Content-Type':'application/json'},
    // body:JSON.stringify(Feedbacks)
// })}


const[Reviews,setReviews]=useState([])

useEffect(()=>{
    fetch('https://mysterious-thicket-49159.herokuapp.com/Reviews')
    .then(res=>res.json())
    .then(result=>setReviews(result))
},[])
// console.log(Reviews)


const history=useHistory()

    return (

        <div style={{width:"1230px"}}>
         <div className='my-5 ' >
            <p className="text-center" style={{fontWeight: "600",
                fontSize: "36px",
                lineHeight: "54px",color: "#171B4E"}}> Clients  <span className="text-success">Feedback</span></p>
                <div className="reviewers  row col-sm-12 P-5" style={{marginTop:"100px"}}>
        {/* <button onClick={postFakedata}>submit</button> */}
               {Reviews.map(rev=> 
             
               <div className="col-md-4 p-5 " >
                     {/* <Link to={"/Child"+rev.key}> */}
                     {/* <Link to= {`/Child/${rev.key}`}> */}
                <div style={{width: "300px",
                height: "212px",
                border: "1px solid #BFBFBF",
                boxSizing: "border-box",
                borderRadius: "4px"}} className="p-3 ml-5">
                <div className="bio d-flex">
                    
                  {rev.Image ?  <img src={`data:image/png;base64,${rev.Image.img}`} style={{width: "64px",
               height: "64px"}} className="w-5 img-fluid mx-2" alt="notshowing" srcset=""/>: 
                 
                 <img src={rev.image} alt="" style={{width: "64px",
               height: "64px"}} className="w-5 img-fluid mx-2" srcset=""/> }
                <div className="text-Dark ml-2">
              <strong>{rev.name}</strong>
                <p style={{fontWeight: "500",
                fontSize: "16px"}} >{rev.position}</p>
                </div>
                </div>
                <p style={{fontSize: "16px",
                // line-height: "28px",
                /* or 175% */

                letterSpacing: "0.005em",

                color:" #707070",
                }}>
{rev.says}
                </p>
                </div>
                      

                {/* </Link> */}
                            </div> 
)}
 

 
                        </div>
   
                </div>
        </div>
        
    );
};

export default FeedBack;