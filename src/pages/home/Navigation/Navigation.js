import React from 'react';
import "./Navigation.css"

import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar';
import image from "../../../images/Logo/portfoliojpg.jpg"
import { Link } from 'react-router-dom';

const Navigation = () => {
    return (
       <div>
           
       
    
      
        <ProSidebar  className="sidebar-style">
        
        <SidebarHeader>
            <div className="image-container">
            <img src={image}  className="portfolio-image" style={{width:"270px",height:"300px"}} alt="" />
         <h5 className="name-style">Rafeul Anam Udoy</h5>
            </div>
        

        </SidebarHeader>
    <SidebarContent  >
        <div className="menu-stye">
            <Link className="link-style" to="/home">  <i className="fas fa-home "> </i>Home</Link>
            <hr  className="style-one"/>
            <Link className="link-style"  to="/about"> <i className="far fa-address-card  "></i>About Me</Link>
            <hr />
            <Link className="link-style" to="/resume" > <i className="far fa-address-card    "></i> Resume</Link>
            <hr />
            <Link className="link-style" to="/resume" > <i className="far fa-address-card    "></i> My Projects</Link>
            <hr />
            <Link className="link-style" to="contact"> <i className="fas fa-address-book "></i> Contact</Link>
            <hr />
        </div>
        </SidebarContent>
        <SidebarFooter>
         <span className="social-media-style  fw-bold ">
            <h5 className="text-center mt-4 mb-3">Social media</h5>
         <i class="fab fa-facebook"></i>
         <i class="fab fa-twitter-square "></i>
         <i class="fab fa-yahoo" ></i>
         </span>
        </SidebarFooter>
      </ProSidebar>
      </div>
          
     
    );
};

export default Navigation;