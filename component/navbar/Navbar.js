import { Link } from "react-router-dom";
import React, { Component } from "react";
import WOW from 'wowjs';
import './Navbar.css';
import '../../index.css'
// let openNav = document.querySelector('#open_nav');
// let CloseNav = document.querySelector('.close_nav');
// let nav_main = document.querySelector('.nav_main');
class Navbar extends Component {


 
  CloseBtn(){

  // e.preventDefaulte;
 const  CloseNav = document.querySelector('.close');
 const  nav_main = document.querySelector('.nav_main');
 nav_main.style.marginLeft = '-500px ';
 CloseNav.style.opacity = '0';
// console.log('ahmed')
  };
  
 
render(){

    return ( 
      
      // <React.Fragment>
        <div className='nav_main'>
    
        <div id="myNav" className="overlay fixed_navbar ">
        <span className="close">
          <i className ="fa fa-times" aria-hidden="true"  onClick={() => this.CloseBtn()}></i>
       
        </span>
          {/* onClick={this.props.handleClose} */}
         <div className="main_content">
            <Link className='item' to="/">home</Link>
            <Link className='item' to="/About">about</Link>
            <Link className='item' to="/Services">services</Link>
            <Link className='item' to="/Clients">clients</Link>
            <Link className='item' to="/Contact">contact</Link> 
  </div>
</div>
{/* onclick="openNav()" */}

 <span id='open_nav'  >&#9776;</span>  
     
        </div>
        // </React.Fragment>
     );
     
}
}
     

export default Navbar;
 