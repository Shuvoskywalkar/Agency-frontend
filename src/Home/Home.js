import React from 'react';

import Brands from './Brands/Brands';
import Carousle from './Carousle/Carousle';
import FeedBack from './Feedback/FeedBack';
import Header from './Header/Header';
import Services from './Header/Services/Services';
import Staywithus from './Staywithus/Staywithus';



const Home = () => {
    return (
        <div>
    <Header/>
    <Brands/>
    <Services/>
    <Carousle/>
    <FeedBack/>
    <Staywithus/>
 
 
        </div>
    );
};

export default Home;