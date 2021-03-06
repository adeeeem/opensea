import axios from "axios";
import Cookies from "js-cookie";
import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { Link, Route, Switch, useRouteMatch } from "react-router-dom";
import "../../../assets/css/adminStyle.css";
import "../../../assets/css/bootstrap.min.css";
import "../../../assets/css/style.css";
import Logo from "../../../assets/img/logo.png";
import patient from "../../../assets/img/patients/patient.jpg";
import "../../../assets/plugins/fontawesome/css/all.min.css";
import "../../../assets/plugins/fontawesome/css/fontawesome.min.css";
import ChangePassword from "./ChangePassword";
import CollectionNfts from "./User/CollectionNfts";
import CubeNFTs from "./User/CubeNFTs";
import DropCubes from "./User/DropsCubes";
import MyCollection from "./User/MyCollection";
import MyCubes from "./User/MyCubes";
import MyDrops from "./User/MyDrops";
import MyNFTs from "./User/MyNFTs";
import MySeasons from "./User/MySeasons";
import NewCube from "./User/NewCube";
import NewDrop from "./User/NewDrop";
import NewNFT from "./User/NewNFT";
import NewSeason from "./User/NewSeason";
import ProfileSetting from "./User/ProfileSetting";
import RandomDrop from "./User/RandomDrop";
import SeasonDrops from "./User/SeasonDrops";
import UserDashboardDefaultScreen from "./User/UserDashboardDefaultScreen";
import UserSidebar from "./User/UserSidebar";

axios.defaults.headers.common["Authorization"] = `Bearer ${Cookies.get(
  "Authorization"
)}`;

function UserDashboard(props) {
  let { path } = useRouteMatch();
  let [menuOpenedClass, setMenuOpenedClass] = useState();
  let [slideNavClass, setSlideNavClass] = useState();

  let handleSlideNav = (e) => {
    e.preventDefault();
    if (slideNavClass !== "" && menuOpenedClass !== "") {
      setMenuOpenedClass("");
      setSlideNavClass("");
    } else {
      setMenuOpenedClass("menu-opened");
      setSlideNavClass("slide-nav");
    }
  };

  let [activeTab, setActiveTab] = useState({
    dashboard: "active",
    totalUserAccount: "",
    pendingUserAccount: "",
    resolvedDisputedOrders: "",
    tradeListOrders: "",
    earningsList: "",
    referralEarnings: "",
    settings: "",
    changePassword: "",
    newNFT: "",
    newCube: "",
    myDrops: "",
    newDrop: "",
    newSeason: "",
    newCollection: "",
    myNFTs: "",
    myCubes: "",
    newRandomDrop: ""
  });

  return (
    <div className={`main-wrapper ${slideNavClass}`}>
      {/* <!-- Header --> */}
      <div className={`admin-header ${menuOpenedClass}`}>
        {/* <!-- Logo --> */}
        <div className="header-left">
          <a
            href="/"
            className="logo"
            onClick={(e) => e.preventDefault()}
            style={{ color: '#dd3400' }}
          >
            <img src={Logo} alt="Logo" width="100" height="100" />
            {/* Xmana */}
          </a>
          <a
            href="/"
            className="logo logo-small"
            onClick={(e) => e.preventDefault()}
            style={{ color: '#dd3400' }}
          >
            <img src={Logo} alt="Logo" width="100" height="100" />
            {/* Xmana */}
          </a>
        </div>
        {/* <!-- /Logo --> */}
        {/* 
        <a href="" id="toggle_btn">
          <i className="fa fa-align-left"></i>
        </a> */}

        {/* <!-- Mobile Menu Toggle --> */}
        <a
          href="/"
          className="mobile_btn"
          id="mobile_btn"
          onClick={handleSlideNav}
        >
          <i className="fa fa-bars"></i>
        </a>
        {/* <!-- /Mobile Menu Toggle --> */}

        {/* <!-- Header Right Menu --> */}
        <ul className="nav user-menu">
          {/* <!-- User Menu --> */}
          <li className="nav-item dropdown has-arrow">
            <Dropdown>
              <Dropdown.Toggle
                style={{
                  backgroundColor: "transparent",
                  border: "0",
                  paddingTop: "15px",
                }}
              >
                <span className="admin-img">
                  <img
                    className="avatar-sm rounded-circle"
                    src={patient}
                    width="50"
                    alt="Ryan Taylor"
                  />
                </span>
              </Dropdown.Toggle>

              <Dropdown.Menu alignRight="true" style={{ backgroundColor: "#dd3400" }}>
                <Dropdown.Item>
                  <Link to="/dashboard" style={{ width: "100%" }}>
                    Dashboard
                  </Link>
                </Dropdown.Item>
                <Dropdown.Item>
                  <Link
                    onClick={() => {
                      Cookies.remove("Authorization");
                      localStorage.removeItem("Address")
                      Cookies.remove("PNT");
                    }}
                    to="/"
                    style={{ width: "100%" }}
                  >
                    Logout
                  </Link>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </li>
          {/* <!-- /User Menu --> */}
        </ul>
        {/* <!-- /Header Right Menu --> */}
      </div>
      {/* <!-- /Header --> */}

      <UserSidebar
        match={props.match}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <Switch>
            <Route exact path={`${path}`}>
              <UserDashboardDefaultScreen
                match={props.match}
                setActiveTab={setActiveTab}
              />
            </Route>
            <Route exact path={`${path}/myCubes`}>
              <MyCubes setActiveTab={setActiveTab} />
            </Route>
            <Route exact path={`${path}/newNFT`}>
              <NewNFT setActiveTab={setActiveTab} />
            </Route>
            <Route exact path={`${path}/myNFTs`}>
              <MyNFTs setActiveTab={setActiveTab} />
            </Route>
            {/* myNFTs:"", */}
            <Route exact path={`${path}/newDrop`}>
              <NewDrop setActiveTab={setActiveTab} />
            </Route>
            <Route exact path={`${path}/myCubes/Nfts/:dropId/:cubeId`}>
              <CubeNFTs setActiveTab={setActiveTab} />
            </Route>
            <Route exact path={`${path}/newCube`}>
              <NewCube setActiveTab={setActiveTab} />
            </Route>

            <Route exact path={`${path}/newRandomDrop`}>
              <RandomDrop setActiveTab={setActiveTab} />
            </Route>

            <Route exact path={`${path}/newSeason`}>
              <NewSeason setActiveTab={setActiveTab} />
            </Route>
            <Route exact path={`${path}/mySeason`}>
              <MySeasons setActiveTab={setActiveTab} />
            </Route>

            <Route exact path={`${path}/mySeason/drops/:seasonId`}>
              <SeasonDrops setActiveTab={setActiveTab} />
            </Route>
            <Route exact path={`${path}/newDrop`}>
              <NewDrop setActiveTab={setActiveTab} />
            </Route>

            <Route exact path={`${path}/myDrops`}>
              <MyDrops setActiveTab={setActiveTab} />
            </Route>

            <Route exact path={`${path}/myDrops/cubes/:dropId`}>
              <DropCubes setActiveTab={setActiveTab} />
            </Route>

            <Route exact path={`${path}/newCollection`}>
              <MyCollection setActiveTab={setActiveTab} />
            </Route>


            <Route exact path={`${path}/collection/nfts/:collectionId`}>
              <CollectionNfts setActiveTab={setActiveTab} />
            </Route>
            <Route exact path={`${path}/profilesettings`}>
              <ProfileSetting
                setActiveTab={setActiveTab}
              />
            </Route>
            <Route exact path={`${path}/changepassword`}>
              <ChangePassword setActiveTab={setActiveTab} />
            </Route>
            <Route path={`${path}`}>
              <UserDashboardDefaultScreen
                match={props.match}
                setActiveTab={setActiveTab}
              />
            </Route>
          </Switch>
        </div>
      </div>
    </div>
  );
}

export default UserDashboard;
