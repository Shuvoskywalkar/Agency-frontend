import React from 'react';
import './Header.css'
import Image from './Image/Image';
import NAvbar from './Navbar/NAvbar';
import Texts from './Texts/Texts';
const Header = () => {
    return (
        <div className="HeaderContainer  " style={{width:"1265px"}}>
             <NAvbar/>
            <div className="row  ">
           
                <div className="col-md-6 col-sm-6">
                    <Texts/>
                </div>
                <div className="col-md-6 col-sm-6">
                    <Image/>
                </div>
            </div>
        </div>
    );
};

export default Header;