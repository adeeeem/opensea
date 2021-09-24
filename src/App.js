import { shadows } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import './App.css';
import Buton from './body';
import Crd from './body2';
import MediaCard from './body_cards';
import Header from './header';
import image from './images/harrypack-promocard.png';
import image1 from './images/kinesis-promocard.png';
import image2 from './images/nfh-promocard.png';

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
          <Crd onmouseover="dropshadow(4)"
          />
        </Col>
      </Row>
      <Row>
        <h1>
          <a href="#" class="style4" > Get featured on the home page</a>
        </h1>
      </Row>
      <h1 class="style5">Exclusive OpenSea drops</h1>
      <Row>
        <Col>
          {hoverFlag ? (
            <MediaCard onClick={() => shadows()} className="hover" image={image} dec=" Harry Pack" d=" Exploring a surel dream like dimension" color="puple"/>
          ) : (
            <MediaCard onClick={() => shadows()} image={image} dec=" Harry Pack" d=" Exploring a surel dream like dimension"  color="puple"/>
          )}

        </Col>
        <Col>
          <MediaCard image={image1} dec=" Non-Fungible Heroes" d="8888 heroes seeking to beguile and bewilder" color="pink" />
        </Col>
        <Col>
          <MediaCard image={image2} dec=" Kenisis Art" d=" An experimental art studio exploring genrative motion" color="green"/>
        </Col>
      </Row>
    </>
  );

}



function normal(x) {

}



export default App;

