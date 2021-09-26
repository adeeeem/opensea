import React from "react";
import ReactDOM from 'react-dom';
import { Carousel } from '@trendyol-js/react-carousel';
import MediaCard from './body_cards';
import image from './images/harrypack-promocard.png';
import image1 from './images/kinesis-promocard.png';
import image2 from './images/nfh-promocard.png';
import image3 from './images/antony-promocard.png';
import image4 from './images/big-time-promo-card.png';
import image5 from './images/tomfry-promocard3.png';
import {pink,teal,blue,green, purple }  from '@mui/material/colors';


export default function Slidr() {
  
   return(
      <Carousel>
           <MediaCard  image={image} title=" Harry Pack" desc=" Exploring a surel dream like dimension" color={purple [300] } />
       
        
         <MediaCard image={image2} title=" Non-Fungible Heroes" desc="8888 heroes seeking to beguile and bewilder" color={pink [400] } />
         
       
         <MediaCard image={image1} title=" Kenisis Art" desc=" An experimental art studio exploring genrative motion" color={green[200] }/>
       
      
           <MediaCard  image={image3} title=" Zero Contact" desc=" Exploring a surel dream like dimension" color={teal[400] }/>
       
     
         <MediaCard image={image4} title=" Play Big Time" desc="8888 heroes seeking to beguile and bewilder" color="black" />
       
      
         <MediaCard image={image5} title=" Time Fry" desc=" An experimental art studio exploring genrative motion" color={blue[900] }/>
        
         </Carousel>
        
  )
  
}

 
 
       
    
 
  
