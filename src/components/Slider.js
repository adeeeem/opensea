import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import MediaCard from './body_cards';

import {pink,teal,blue,green, purple }  from '@mui/material/colors';
import "./Slider.css";
import { SliderRail } from "@mui/material";

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
            <MediaCard  image= '/assets/images/harrypack-promocard.png' title=" Harry Pack" desc=" Exploring a surel dream like dimension  "  color={purple [300] } h={590}  h1={500}  />
       
            </div>
            <div>
            <MediaCard image='/assets/images/nfh-promocard.png' title=" Non-Fungible Heroes" desc="8888 heroes seeking to beguile and bewilder " color={pink [400]} h={590}  h1={500} />
         
            </div>
            <div>
            <MediaCard image='/assets/images/kinesis-promocard.png' title=" Kenisis Art" desc=" An experimental art studio exploring genrative motion" color={green[500] } h={590} h1={500}/>
       
            </div>
            <div>
            <MediaCard  image='/assets/images/antony-promocard.png' title=" Zero Contact" desc=" Exploring a surel dream like dimension" color={teal[400] } h={590} h1={500}/>
       
            </div>
            <div>
            <MediaCard image='/assets/images/d.png' title=" Play Big Time" desc="8888 heroes seeking to beguile and bewilder" color="black" h={590} h1={500} />
       
            </div>
            <div>
              
         <MediaCard image='/assets/images/tomfry-promocard3.png' title=" Time Fry" desc=" An experimental art studio exploring genrative motion" color={blue[900] } h={590} h1={500}/>
        
            </div>
            
        </Slider>
      </div>
    );
  }
}


export default Slidr;