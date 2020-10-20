import React from 'react';
import './Carousle.css'
import ReactDOM from 'react-dom';
import "react-alice-carousel/lib/alice-carousel.css";
import AliceCarousel from 'react-alice-carousel';

const Carousle = () => {
  const handleDragStart = (e) => e.preventDefault();
  const items = [
    <img src="https://i.imgur.com/TdlaHwY.png" className="w-50 h-50 mt-5" />,
    <img src="https://i.imgur.com/cqd0fcE.png" className="w-50 mt-5" />,
    <img src="https://i.imgur.com/Lglv5d0.png"  className="w-50 mt-5 h-50" />,
  ];

    return (
        <div className="CarouselContainer col-sm-12 p-5">
        <p className="text-center text-white my-5" style={{fontWeight: "600",
fontSize: "34px"}}>
        Here are some of <span className="text-success">our works</span>
        </p><div className="container  align-items-center">
        <AliceCarousel mouseTracking className="mt-5" items={items} />
        </div>
        
      
        </div>
      
    );
};

export default Carousle;