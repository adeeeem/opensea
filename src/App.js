import { shadows } from '@mui/system';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState } from 'react';
import { Col, Row,Container } from 'react-bootstrap';
import './App.css';
import CRD from './components/Body_cards2';
import Buton from './components/Button';
import Crd from './components/Card';
import Header from './components/header';
import Slidr from './components/Slider';
import * as n  from 'react-bootstrap'
import Catagory from './components/Catagory'
import Footer from './components/Footer.js'

function App() {
  let [hoverFlag, setHoverFlag] = useState(false);
  let shadows = () => {
    console.log("Flag");
    setHoverFlag(!hoverFlag);
  }
 
  return (
    <>
   
      <Header />
      <Row xs="auto">
        <Col  xs={1} sm="auto" md="auto" lg={5}>
          <div class="style1">
            <h1 class="style2">Discover, collect, and sell extraordinary   NFTs</h1>
            <span class="style3">
              on the world's first &amp; largest NFT marketplace
            </span>
            <Buton />
          </div>
        </Col >
        <Col   xs={1} sm="auto" md="auto" lg={7}>
          <Crd image="assets/images/card.png" desc="miss you japan" a="left" height={394}  

          />
        </Col>
      </Row>
       <Row md={7} sm="auto" >
        <h1>
          <a href="#" class="style4" > Get featured on the home page</a>
        </h1>
      </Row>
      <Row  md={7} sm="auto">

      <h1 class="style5">Exclusive OpenSea drops</h1>
    </Row>
   
      <Slidr/>
     
<Row  md={7} sm="auto">
<h1  class="style5">Trending in 


<n.NavDropdown title="all catagories" >
<n.NavDropdown.Item href="#All catagories">All catagories</n.NavDropdown.Item>
  <n.NavDropdown.Item href="#ART">ART</n.NavDropdown.Item>
  <n.NavDropdown.Item href="#Music">Music</n.NavDropdown.Item>
  <n.NavDropdown.Item href="#Domain names">Domain names</n.NavDropdown.Item>
  <n.NavDropdown.Item href="#Virtual worlds">Virtual worlds</n.NavDropdown.Item>
  <n.NavDropdown.Item href="#Trading cards">Trading cards</n.NavDropdown.Item>
</n.NavDropdown></h1>
 </Row>
  
  <Row className="row-nft ">
  <Col sm="auto"  md="auto" lg={3}><div><img src='assets/images/wallet.svg'  /></div>Once you’ve set up your wallet of choice, connect it to OpenSea by clicking the wallet icon in the top right corner. Learn about the</Col>
  <Col sm="auto"  md="auto" lg={3}><div><img src='assets/images/collection.svg'  /></div>Click My Collections and set up your collection. Add social links, a description, profile & banner images, and set a secondary sales fee.</Col>
  <Col sm="auto"  md="auto" lg={3}><div><img src='assets/images/nft.svg'  /></div>Upload your work (image, video, audio, or 3D art), add a title and description, and customize your NFTs with properties, stats, and unlockable content.</Col>
  <Col sm="auto"  md="auto" lg={3}><div><img src='assets/images/sale.svg' /></div>Choose between auctions, fixed-price listings, and declining-price listings. You choose how you want to sell your NFTs, and we help you sell</Col>
</Row>
<Row>
   <h1 class="style5">Resources for getting started</h1>
   </Row>
   
  <CRD/>
  <Row>
  <h1 class="style5">Browse by category</h1>
  </Row>
  <Catagory/>
  
      <Footer/>
      
    </>
  );

}



function normal(x) {

}



export default App;

