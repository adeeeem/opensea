import React from "react"
import './header.css';
import * as n from 'react-bootstrap'
export default function Header() {

  return (


    <n.Navbar bg="light" expand="xl" className="s">
      <n.Navbar.Brand href="#"><img src='assets/images/opensea.svg' height="30" width="41" alt='OpenSea' />OpenSea</n.Navbar.Brand>
      <n.Navbar.Toggle aria-controls="navbarScroll" />
      <n.Navbar.Collapse id="navbarScroll">
        <form class="navbar-form navbar-left" action="/action_page.php">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search" name="search" />
            <div class="input-group-btn">
              <button class="btn btn-default" type="submit">
                <i class="glyphicon glyphicon-search"></i>
              </button>
            </div>
          </div>
        </form>


        <div className="dropdown dark_color">
          <n.NavDropdown title="Marketplace" style={{color: "black"+'!important'}}  id="navbarScrollingDropdown" >

            <n.NavDropdown.Item className=" dark_color" href="#All NFTS"><img src='assets/images/allnfts-light.svg' height="20" width="31" />ALL NFTS</n.NavDropdown.Item>
            <n.NavDropdown.Item className=" dark_color" href="#NEW"><img src='assets/images/new-light.svg' height="20" width="31" />NEW</n.NavDropdown.Item>
            <n.NavDropdown.Item className=" dark_color" href="#ART"><img src='assets/images/art-light.svg' height="20" width="31" />ART</n.NavDropdown.Item>
            <n.NavDropdown.Item className=" dark_color" href="#Music"><img src='assets/images/music-light.svg' height="20" width="31" />Music</n.NavDropdown.Item>
            <n.NavDropdown.Item className=" dark_color" href="#Domain names"><img src='assets/images/domain-names-light.svg' height="20" width="31" />Domain names</n.NavDropdown.Item>
            <n.NavDropdown.Item className=" dark_color" href="#Virtual worlds"><img src='assets/images/virtual-worlds-light.svg' height="20" width="31" />Virtual worlds</n.NavDropdown.Item>
            <n.NavDropdown.Item className=" dark_color" href="#action4"><img src='assets/images/collectibles-light.svg' height="20" width="31" />Collectibles</n.NavDropdown.Item>
            <n.NavDropdown.Item className=" dark_color" href="#action5"><img src='assets/images/sports-light.svg' height="20" width="31" />Sports</n.NavDropdown.Item>

          </n.NavDropdown>
        </div>
        <n.NavItem>
          <n.NavLink className="nav-link" to='/aboutus'> Stats</n.NavLink>
        </n.NavItem>

        <n.NavDropdown title="Resources" id="navbarScrollingDropdown">
          <n.NavDropdown.Item href="#Create">Help Center</n.NavDropdown.Item>
          <n.NavDropdown.Item href="#action4">Platform Status</n.NavDropdown.Item>
          <n.NavDropdown.Item href="#action5">Partners</n.NavDropdown.Item>
          <n.NavDropdown.Item href="#Create">Suggestions</n.NavDropdown.Item>
          <n.NavDropdown.Item href="#action4">Discord Comunity </n.NavDropdown.Item>
          <n.NavDropdown.Item href="#action5">Blogs</n.NavDropdown.Item>
          <n.NavDropdown.Item href="#action4">Docs </n.NavDropdown.Item>
          <n.NavDropdown.Item href="#action5">News letter</n.NavDropdown.Item>
        </n.NavDropdown>



      </n.Navbar.Collapse>
    </n.Navbar>

  )





}
