import React from "react"
import './header.css';
import * as n  from 'react-bootstrap'
export default function Header ()
{

return(


<n.Navbar bg="light" expand="xl" className="s">
  <n.Navbar.Brand href="#">OpenSea</n.Navbar.Brand>
  <n.Navbar.Toggle aria-controls="navbarScroll" />
  <n.Navbar.Collapse id="navbarScroll">
  <n.Form className="d-flex">
      <n.FormControl
        type="search"
        placeholder="Search items, collections and accounts    "
        className="mr-1"
        aria-label="Search"
      />
    
    </n.Form>
    
    <n.Nav
      className="mr-auto my-2 my-lg-0 za"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
    <n.NavDropdown title="Marketplace" id="navbarScrollingDropdown">
    <n.NavDropdown.Item href="#All NFTS">ALL NFTS</n.NavDropdown.Item>
        <n.NavDropdown.Item href="#NEW">NEW</n.NavDropdown.Item>
        <n.NavDropdown.Item href="#ART">ART</n.NavDropdown.Item>
        <n.NavDropdown.Item href="#Music">Music</n.NavDropdown.Item>
        <n.NavDropdown.Item href="#Domain names">Domain names</n.NavDropdown.Item>
        <n.NavDropdown.Item href="#Virtual worlds">Virtual worlds</n.NavDropdown.Item>
        <n.NavDropdown.Item href="#action4">Another action</n.NavDropdown.Item>
        <n.NavDropdown.Item href="#action5">Something else here</n.NavDropdown.Item>
    </n.NavDropdown>
      
    <n.NavDropdown title="stats" id="navbarScrollingDropdown">
    <n.NavDropdown.Item href="#Rankings">Rankings</n.NavDropdown.Item>
        <n.NavDropdown.Item href="#ART">ACtivity</n.NavDropdown.Item>
    </n.NavDropdown>
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
      <n.Nav.Link href="#" disabled>
        Link
      </n.Nav.Link>
      <i class="bi bi-person-circle"></i>
    </n.Nav>
    
  </n.Navbar.Collapse>
</n.Navbar>

)





}
