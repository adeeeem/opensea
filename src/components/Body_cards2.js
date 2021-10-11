import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import MediaCard from './body_cards';

import {pink,teal,blue,green, purple }  from '@mui/material/colors';
import "./Slider.css";
import { SliderRail } from "@mui/material";
var flag=true;
class Slidr extends React.Component {
  render() {
    var settings = {
       
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                  infinite: true,
                  arrows:true,
  
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  initialSlide: 2,
                  arrows:true
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  arrows:true,
                  slidesToScroll: 1
  
                }
              }
            ]
    };
    return (
      <div className="container">
        <Slider {...settings}>
     
     
       
          
            <div>
            <MediaCard  image= '/assets/images/Untitled.png' title="10 tips for avoiding scams and staying safe on decentralize"   color="white "  h={330} h1={200} />
       
            </div>
            <div>
            <MediaCard image='/assets/images/buy-nft-safely-on-opensea-1.png' title="Keeping your self safe when buying NFT's on OpenSea"   color="white" h={330} h1={200} />
         
            </div>
            <div>
            <MediaCard image='/assets/images/creating-selling-nfts.png' title="The beginner guide to creating & selling digital art NFT's"   color="white" h={330} h1={200}/>
       
            </div>
            <div>
            <MediaCard  image='/assets/images/sell-on-opensea.png' title="7 reasons to sell your NFT's on OpenSea"   color="white" h={330} h1={200}/>
       
            </div>
            <div>
            <MediaCard image='/assets/images/welcome-to-opensea-nft-marketplace.png' title="Welcome to OpenSea"   color="white" h={330} h1={200}/>
       
            </div>
            <div>
              
         <MediaCard image='/assets/images/image3.png' title="Async-Art-Paving the way for programmable dynamically "   color="white" h={330} h1={200}/>
        
            </div>
            
       
        
         
        </Slider>
      </div>
    );
  }
}


export default Slidr;