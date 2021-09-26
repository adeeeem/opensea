import { shadows } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import Buton from './body';
import Crd from './body2';
import Header from './header';
import Slidr from './slider';


function App() {
  let [hoverFlag, setHoverFlag] = useState(false);
  let shadows = () => {
    console.log("Flag");
    setHoverFlag(!hoverFlag);
  }
 
  return (
    <>
      <Header />
      <Row>
        <Col>
          <div class="style1">
            <h1 class="style2">Discover, collect, and sell extraordinary   NFTs</h1>
            <span class="style3">
              on the world's first &amp; largest NFT marketplace
            </span>
            <Buton />
          </div>
        </Col>
        <Col >
          <Crd 
          />
        </Col>
      </Row>
      <Row>
        <h1>
          <a href="#" class="style4" > Get featured on the home page</a>
        </h1>
      </Row>
    <h1 class="style5">Exclusive OpenSea drops</h1>

     <Slidr/>
     
    
      
    </>
  );

}



function normal(x) {

}



export default App;

