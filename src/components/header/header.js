
import './header.css'
import aws from "../../assets/aws.png";
import query from "../../assets/querytip.PNG";
 import chart from "../../assets/charttip.PNG";
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { AiFillBulb,AiOutlineReload } from "react-icons/ai";
import { RiVipDiamondFill } from "react-icons/ri";
 import { useState } from 'react';

export default function Header()
{
    const [showQ,setShowQ]=useState(false)
    const [showC,setShowC]=useState(false)

    const showTip=(value)=>
    {
        console.log("in",showQ)
        if(value === "q") setShowQ(true)
        else setShowC(true)
    }
    const hideTip=(value)=>{
        if(value === "q") setShowQ(false)
        else setShowC(false)
    }
    return(
        <>
        <Navbar className="navbarContainer"  expand="lg">
                <Navbar.Brand className="d-flex align-items-center ms-2">
                    <img src={aws}  alt="aws logo" className="d-inline-block align-top" />
                    <h5 className="navTitle" style={{fontWeight:'bold'}}>Everything  AWS</h5>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto ">
                    <div id="searchId">
                    <Nav.Link   href="#"><NavLink   className="navItem"  to="/search" activeClassName="setItem" onMouseEnter={()=>{showTip("q")}}  onMouseLeave={()=>{hideTip("q")}}>📝Data</NavLink></Nav.Link>
                   {
                    showQ &&

                    <div id="searchTooltip" className="d-flex">
                        <div><img src={query} alt="querytip" /></div>
                        <div>
                            <h6>Interactive Data</h6>
                            <p>Your data can be shown in three formats:card,gallery and grid</p>
                        </div>
                    </div>

                    }           
                    </div>
                    <div id="chartId">
                    <Nav.Link   href="#"><NavLink to="/chart" className="navItem" activeClassName="setItem" onMouseEnter={()=>{showTip("c")}}  onMouseLeave={()=>{hideTip("c")}}>📊Insights</NavLink></Nav.Link>
                    {
                        showC &&
                    
                    <div id="chartTooltip" className="d-flex">
                        <div><img src={chart} alt="charttip" /></div>
                        <div>
                            <h6>Visualize</h6>
                            <p>Create detailed visual reports with a couple of clicks</p>
                        </div>
                    </div> 
                    }
                    </div>                                 
                    </Nav>
                    <Nav>
                        
                        <Nav.Link className="polymer" href="https://www.polymersearch.com/?utm_source=aws" target="_blank" >
                            <h6 style={{color:'white'}}><svg data-v-8968df12="" width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg" class="">
                                <path data-v-8968df12="" fill-rule="evenodd" clip-rule="evenodd" d="M8.269 7.118a1.42 1.42 0 010-2.322 1.708 1.708 0 00-1.936-2.813 2.143 2.143 0 01-3.096-.799A1.71 1.71 0 000 1.946 1.707 1.707 0 002.667 3.36a2.143 2.143 0 013.096.798c.128.257.318.476.55.639.8.562.804 1.748.01 2.316a2.144 2.144 0 01-3.088-.802A1.707 1.707 0 10.731 8.47a1.42 1.42 0 010 2.323 1.707 1.707 0 102.685 1.4c0-.58-.288-1.091-.731-1.4a1.419 1.419 0 01-.01-2.315 2.143 2.143 0 013.088.802A1.71 1.71 0 009 8.52c0-.58-.288-1.092-.731-1.401z" fill="#fff"></path>
                                </svg>  Try Polymer</h6></Nav.Link>
                    </Nav>
                </Navbar.Collapse>
        </Navbar>
        </>
    )
}