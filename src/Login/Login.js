import React from 'react';
import Logo from '../images/logos/logo.png'
import google from '../images/logos/google.png'
import './Login.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as firebase from "firebase/app";

// // If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import "firebase/analytics";

import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { useContext } from 'react';
import { userContext } from '../App';
import { useHistory, useLocation } from 'react-router-dom';
const Login = () => {
  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };
  const[signedIN,setSignedIN]=useContext(userContext)
  if (firebase.apps==0) {
    firebase.initializeApp(firebaseConfig);
  }
    var provider = new firebase.auth.GoogleAuthProvider();
   
 const GoogleSign=()=>{
   console.log('conected')
    firebase.auth().signInWithPopup(provider)
    .then(res=>{
        const{displayName,email}=res.user
       const setnewUser={
            name:displayName,
            email:email
        }
        setSignedIN(setnewUser)
        history.replace(from)
       storeAuthToken()
      }
 
    
    ).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
       console.log(errorMessage)
        var email = error.email;
      
        var credential = error.credential;
        // ...
      });
 }
 const storeAuthToken = () => {
  firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
    .then(function (idToken) {
      sessionStorage.setItem('token', idToken);
    }).catch(function (error) {
      // Handle error
    });
}
    return (
   
             <div>
            <img src={Logo} alt="" srcset="" className="img-fluid image1"/>
            <div className="signinBox">
                <div className="beneathBox">
                    <h4>Login With</h4>
                    <button className="my-4 d-flex Buttuon justify-content-evenly"  onClick={GoogleSign}>
                    <img src="https://img.icons8.com/color/48/000000/google-logo.png" className="mr-5"/>
                    <strong className="ml-5 align-self-center">Continue With Google</strong>
                        </button>
                        <p style={{marginLeft:"-90px"}}>Don’t have an account? <span className="text-primary"> Create an account</span></p>
                </div>
            </div>
              
            </div>
        
    );
};

export default Login;