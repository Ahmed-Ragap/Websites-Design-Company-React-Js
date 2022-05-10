
import React, { Component } from "react";


import award from '../../img/award.png';
import img_1 from '../../img/home_1.jpg';
import img_2 from '../../img/home_2.jpeg';
import img_3 from '../../img/home.jpg';
import img_4 from '../../img/home_4.jpg';
import './footer.css'
class Contact extends Component {
    render(){
       
  
    return ( 
        <div>
            <footer>
               <div className='container'>
                   <div className='row'>
                       {/* columan-one */}
                       <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s">
                           <img className='logo' src={award} alt=""/>
                           <h2 className='logo_head'>hellow</h2>
                           <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
                           <div className="Working_Days wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                               <h3>Working Days</h3>
                               <span>MON - FRI: 09AM - 05PM</span>
                               <span>SAT: 09AM - 01PM</span>
                               <span>SUN: Enjoy Day</span>
                           </div>
                       </div>
                       {/* columan-tow */}
                       <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".7s">
                         <h2>menu</h2>
                         <ul>
                             <li>
                                 <a href="#">home</a>
                             </li>
                             <li>
                                 <a href="#">about us</a>
                             </li>
                             <li>
                                 <a href="#">service</a>
                             </li>
                             <li>
                                 <a href="#">Terms & Conditions </a>
                             </li>
                             <li>
                                 <a href="#">FAQ</a>
                             </li>
                             <li>
                                 <a href="#">Privacy Policy </a>
                             </li>
                             
                         </ul>
                       </div>
                       {/* columan-three */}
                       <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".9s">
                           <h2>Popular Posts</h2>
                           {/* content-one */}
                           <div className='content'>
                               <img className='left' src={img_2} alt=""/>
                               <div className='sup_info'>
                                   <span>Ipsum is simply dummy text.</span>
                                   <br />
                                   <span className='head'>
                                   <i class="fa fa-calendar" aria-hidden="true"></i>
                                   Nov 10, 2020
                                   </span>
                               </div>
                           </div>
                           {/* content-tow */}
                           <div className='content'>
                               <img className='left' src={img_3} alt=""/>
                               <div className='sup_info'>
                                   <span>Ipsum is simply dummy text.</span>
                                   <br />
                                   <span className='head'>
                                   <i class="fa fa-calendar" aria-hidden="true"></i>
                                   Nov 10, 2020
                                   </span>
                               </div>
                           </div>
                           {/* content-three */}
                           <div className='content'>
                               <img className='left' src={img_4} alt=""/>
                               <div className='sup_info'>
                                   <span>Ipsum is simply dummy text.</span>
                                   <br />
                                   <span className='head'>
                                   <i class="fa fa-calendar" aria-hidden="true"></i>
                                   Nov 10, 2020
                                   </span>
                               </div>
                           </div>
                       </div>
                       {/*columan-four  */}
                       <div className="col-md-6 col-lg-3 wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.2s">
                           <h2>Recent Works</h2>
                           <div className='more'>
                           <img src={img_4} alt=""/>
                           <img src={img_2} alt=""/>
                           <img src={img_3} alt=""/>
                           <img src={img_4} alt=""/>
                           <img src={img_2} alt=""/>
                           <img src={img_1} alt=""/>
                           {/* <img src={img_3} alt=""/>
                           <img src={img_2} alt=""/> */}
                        </div>
                       </div>
                       
                   </div>
                   <hr style={{backgroundColor:'rgba(255, 255, 255, 0.2)'}}/>
                   <div className='row row-2'>
                       <div className="col-md-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".3s"> 
                           <div className='item'>
                           <i class="fa fa-phone" aria-hidden="true"></i>
                           <h2>phone <span>+0123 456 789</span></h2>
                           </div>
                           
                       </div>
                       <div className="col-md-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                           <div className='item'>
                           <i class="fa fa-envelope-o" aria-hidden="true"></i>
                           <h2>mail <span>mail@example.com</span></h2>
                           </div>
                       </div>
                       <div className="col-md-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".9s">
                           <div className='item'>
                           <i class="fa fa-map-marker" aria-hidden="true"></i>
                           <h2>address<span>1234 North Luke Lane, South Bend,<br /> IN 360001</span></h2>
                           </div>
                       </div>
                   </div>
               </div>
            </footer>
            {/* copy right block */}
            <div className='copy_right'>
                <div className='container'>
                    <div className='main-cont'>
                <div className='left_cont'>
                    <h3>Copyright 	&copy; 2021 <span>ahmed</span> __ All Rights Reserved</h3>
                    </div>
                    <div className='right_cont'>
                        <button> <a href="https://www.facebook.com/ahmed.apdo.332/" target='_blank'><i class="fa fa-facebook" aria-hidden="true"></i></a></button>
                        <button><a href="https://github.com/Ahmed-Ragap" target='_blank'><i class="fa fa-github" aria-hidden="true"></i></a></button>
                        <button> <a href="https://www.linkedin.com/in/ahmed-ragap-2b01b4168/" target='_blank'><i class="fa fa-linkedin" aria-hidden="true"></i></a></button>
                        <button><i class="fa fa-pinterest-p" aria-hidden="true"></i></button>
                    </div>
                    </div>
                    </div>
            </div>













        </div>
     );
}
}
 
 export default Contact;