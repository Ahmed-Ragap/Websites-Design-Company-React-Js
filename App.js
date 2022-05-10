import './index.css'
import './App.css'
import WOW from 'wowjs';
import {  HashRouter, Route} from "react-router-dom";
import React , {Component} from 'react';
import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
import About from './component/about/About'
import Services from './component/services/Services'
import Clients from './component/clients/Clients'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'



class App extends Component  {
  
  componentDidMount() {
    new WOW.WOW({
      live: false
  }).init();
  }
  
  openNavbar(){

    const  CloseNav = document.querySelector('.close');
    const  nav_main = document.querySelector('.nav_main');
    //  const  open = document.querySelector('.open');
     CloseNav.style.opacity = '1';
     nav_main.style.marginLeft = '0 ';


  }

      render(){
      return (
        <React.Fragment>
    <HashRouter>
            {/* open saide navbar */}
            <button className='open' onClick={() => this.openNavbar()}>
    <i class="fa fa-bars" aria-hidden="true" ></i>
    </button>
    {/* <span className='color_size'>ahmed</span> */}

       <Navbar /> 
      <Route exact path='/' component={Home} />
      <Route path='/About' component={About} />   
      <Route path='/Clients' component={Clients} />
      <Route path='/Services' component={Services} />
     <Route path='/Contact' component={Contact} />   
    
     <Footer />
     
    </HashRouter>
 
    </React.Fragment>
       );
    }
}

export default App;
