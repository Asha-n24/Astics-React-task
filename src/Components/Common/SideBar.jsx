import React, { Component } from 'react';
import SideNav, {
    NavItem,
    NavIcon,
    NavText,
} from "@trendmicro/react-sidenav";
import "@trendmicro/react-sidenav/dist/react-sidenav.css";
import "./SideBar.css"
import { AiFillHome } from "react-icons/ai";
import { Popover } from "antd";
import {
    RiStethoscopeFill,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { removeCookieData, ClearCookie } from "../CookiesFunc";
import profileimg from "../Images/profileimg.png"

const popoverContent = function () {
    return (
        <div>
            <Button
                className="logoutbtn"
                onClick={() => {
                    ClearCookie();
                    localStorage.clear();
                    window.location.href = `${window.location.origin}/`;
                }}
            >
                Logout &nbsp;
            </Button>
        </div>
    );
};

class SideBar extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <div className="SideMenu2">
                    <SideNav>
                        <SideNav.Nav defaultSelected="Dashboard">

                            <NavItem eventKey="Dashboard" title="Dashboard">
                                <NavIcon>
                                    <Link to="/dashboard/list">
                                        <AiFillHome size="23px" color="#fff" />
                                    </Link>
                                </NavIcon>
                                <NavText>Home</NavText>
                            </NavItem>

                        </SideNav.Nav>
                    </SideNav>
                </div>
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light sidenavstyle">
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <a class="navbar-brand ml-4" href="#">Dashboard</a>

                        <div class="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">

                            <div class="navbar-nav mr-auto mt-2 mt-lg-0" >

                                <div
                                    style={{ display: "flex", flexDirection: "row", cursor: "pointer" }}
                                    id="name-css"
                                >
                                    <div className="userdiv">


                                        {localStorage.getItem("userName")}

                                    </div>
                                    <Popover
                                        className="const_popover"
                                        placement="bottom"
                                        content={() => popoverContent.bind(this)()}
                                        trigger="click"
                                    >
                                        <div className="dashboardheader_rightcontent">
                                            <img src={profileimg} className="user-img" />
                                        </div>
                                    </Popover>
                                </div>

                            </div>

                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}



export default SideBar;
