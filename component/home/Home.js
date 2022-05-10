import React, { Component } from "react";

import { Parallax, Background } from 'react-parallax';
import './home.css'
import award from '../../img/award.png';
import year from '../../img/year.png';
import img_1 from '../../img/home_1.jpg';
import img_2 from '../../img/home_2.jpeg';
import img_3 from '../../img/home.jpg';
import img_4 from '../../img/home_4.jpg';
import avatar1 from '../../img/avatar1.jpg';
import avatar2 from '../../img/avatar2.jpg';
import avatar3 from '../../img/avatar3.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Home extends Component {
   
render(){
 const settings = {
//   dots: true,
//   fade: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1500,
  autoplay:true,
  autoplaySpeed: 4000,
  cssEase: "linear"
      };

    return (  
        <div>
        
                {/* block one */}
                <div className='home_page'>
                    <div className='over'></div>
                    <div className='container'>
                        <div className='row first_one'>
                            <div className='col-sm-12 col-lg-5'>
                                <div className='content wow fadeInDown' data-wow-duration="1s" data-wow-delay=".3s">
                                    <h1 className=''>WE MANAGE YOUR BUSINESS </h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing 
                                        elit.Libero consectetur voluptatem beatae 
                                        dicta delectus quis quas nihil quo
                                        adipisci placeat.</p>
                                        <button>
                                           <a href="#"> read more</a>
                                            <span></span><span></span><span></span><span></span>
                                            </button>
                                      
                                </div>
                            </div>
                            <div className='col-sm-12 col-lg-7 '>
                               <div className='second_content text-center wow fadeInUp ' data-wow-duration="1s" data-wow-delay=".3s">
                               
                               </div>
                            </div>
                        </div>
                       
                    </div>
                   
                </div>
{/* sup header */}
<div className='sup_home'>
    
    <div className=' row '>
                          <div className='col-sm-6 col-lg-3 col_one wow fadeInUp' data-wow-duration="1s" data-wow-delay=".3s">
                            <div className='overlay'></div>
                                <div className='content'>
                                <i className="fa fa-commenting-o" aria-hidden="true"></i>
                                <h2>hellow</h2>
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Repellendus quis aspernatur numquam  </span>
                                </div>
                          </div>
                          <div className='col-sm-6 col-lg-3 col_tow wow fadeInUp' data-wow-duration="1s" data-wow-delay=".6s">
                            <div className='overlay'></div>
                                <div className='content'>
                                <i className="fa fa-refresh" aria-hidden="true"></i>
                                <h2>hellow</h2>
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Repellendus quis aspernatur numquam  </span>
                                </div>
                          </div>
                          <div className='col-sm-6 col-lg-3 col_three wow fadeInUp' data-wow-duration="1s" data-wow-delay=".9s">
                            <div className='overlay'></div>
                                <div className='content'>
                                <i className="fa fa-television" aria-hidden="true"></i>
                                <h2>hellow</h2>
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Repellendus quis aspernatur numquam  </span>
                                </div>
                          </div>
                          <div className='col-sm-6 col-lg-3 col_four wow fadeInUp' data-wow-duration="1s" data-wow-delay="1.5s">
                            <div className='overlay'></div>
                                <div className='content'>
                                <i className="fa fa-heart-o" aria-hidden="true"></i>
                                <h2>hellow</h2>
                                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                                    Repellendus quis aspernatur numquam </span>
                                </div>
                          
                        </div>
    </div>
</div>

                {/*  */}
<div className= "Choose_us">
<div className="container">
    <div className="row">
        <div className="col-lg-8">
            <div className="row">
                <div className="col-lg-12 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                    <h3 className="">Why Choose us</h3>
                    <p> Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <div className="row ">
                <div className="col-lg-6">
                    <div className="feature wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
                        <h5 className="head">
                            <span className="icon-small">
                            <i className="fa fa-lightbulb-o" aria-hidden="true"></i>
                            </span>Powerful Theme
                        < span className="info">.</span>
                        </h5>
                        <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type <a href="#" >[ ... ]</a></p>
                    </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
                    <div className="feature ">
                        <h5 className="head">
                            <span className="icon-small">
                            <i className="fa fa-tachometer" aria-hidden="true"></i>
                            </span>Clean Code .

                        <span className="info">.</span>
                        </h5>
                        <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type <a href="#" >[ ... ]</a></p>
                    </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".1.1s">
                    <div className="feature ">
                        <h5 className="head">
                            <span className="icon-small">
                            <i className="fa fa-clone" aria-hidden="true"></i>
                            </span>Easy to Customize .
                        <span className="info">.</span>
                        </h5>
                        <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type <a href="#" >[ ... ]</a></p>
                    </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.4s">
                    <div className="feature ">
                        <h5 className="head">
                            <span className="icon-small">
                            <i className="fa fa-list-alt" aria-hidden="true"></i>
                            </span>Revolution Slider .
                        <span className="info">.</span>
                        </h5>
                        <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type <a href="#" >[ ... ]</a></p>
                    </div>
                    </div>
                        </div>
                      </div>
                    <div className="col-lg-4">
                {/* this is slider */}
         <div className="main_slide wow fadeInUp" data-wow-duration="1s" data-wow-delay=".5s">
             <div className='overlay'></div>
        <Slider {...settings}>
          <div className='main'>
            <span className='start'>"</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, quis nam nihil porro corporis consectetur distinctio temporibus excepturi obcaecati fugit necessitatibus, nostrum voluptatem explicabo. Labore debitis eius, voluptate, provident atque repellat amet magnam quaerat minus error corrupti voluptates placeat nostrum? Est laboriosam maxime repudiandae dignissimos magnam corporis rem ipsam facilis?</p>
            <span className='end'>"</span>
            <div className='info'>
                <img src={avatar1} alt="img_2"/>
                <div className='right-cont'>
                    <h2>Nik Jorden</h2>
                    <h3>Sr Front End </h3>
                    <div className='icon'>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
       
          </div>
          <div className='main'>
            <span className='start'>"</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, quis nam nihil porro corporis consectetur distinctio temporibus excepturi obcaecati fugit necessitatibus, nostrum voluptatem explicabo. Labore debitis eius, voluptate, provident atque repellat amet magnam quaerat minus error corrupti voluptates placeat nostrum? Est laboriosam maxime repudiandae dignissimos magnam corporis rem ipsam </p>
            <span className='end'>"</span>
            <div className='info'>
                <img src={avatar2} alt="img_2"/>
                <div className='right-cont'>
                    <h2>Haris Morgan</h2>
                    <h3>CEO</h3>
                    <div className='icon'>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
           
          </div>
          <div className='main'>
            <span className='start'>"</span>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque, quis nam nihil porro corporis consectetur distinctio temporibus excepturi obcaecati fugit necessitatibus, nostrum voluptatem explicabo. Labore debitis eius, voluptate, provident atque repellat amet magnam quaerat minus error corrupti voluptates placeat nostrum? Est laboriosam maxime repudiandae dignissimos magnam corporis</p>
            <span className='end'>"</span>
            <div className='info'>
                <img src={avatar3} alt="img_3"/>
                <div className='right-cont'>
                    <h2>Rinks Cooper</h2>
                    <h3>Sr Back End </h3>
                    <div className='icon'>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            
          </div>
         
         
        </Slider>
        </div>
     
                   </div>
                </div>
                {/* start last row block elements  */}
                <div className='row last_row'>
                    <div className="col-md-6 col-lg-4 features  wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
                        <div className='container'>
                            <div className='content'>
                                {/* <div className='ovarlay_animation'></div> */}
                           <button> <i className="fa fa-clone" aria-hidden="true"></i></button>
                            <h3>features</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing 
                            elit. Ex quidem laudantium architecto, 
                            corrupti aut excepturi!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 features wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
                        <div className='container'>
                            <div className='content'>
                            {/* <div className='ovarlay_animation'></div> */}
                           <button> <i className="fa fa-clone" aria-hidden="true"></i></button>
                            <h3>features</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing 
                            elit. Ex quidem laudantium architecto, 
                            corrupti aut excepturi!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 features wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
                        <div className='container'>
                            <div className='content'>
                            {/* <div className='ovarlay_animation'></div> */}
                           <button> <i className="fa fa-clone" aria-hidden="true"></i></button>
                            <h3>features</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing 
                            elit. Ex quidem laudantium architecto, 
                            corrupti aut excepturi!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 features wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
                        <div className='container'>
                            <div className='content'>
                            {/* <div className='ovarlay_animation'></div> */}
                           <button> <i className="fa fa-clone" aria-hidden="true"></i></button>
                            <h3>features</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing 
                            elit. Ex quidem laudantium architecto, 
                            corrupti aut excepturi!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 features wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
                        <div className='container'>
                            <div className='content'>
                            {/* <div className='ovarlay_animation'></div> */}
                           <button> <i className="fa fa-clone" aria-hidden="true"></i></button>
                            <h3>features</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing 
                            elit. Ex quidem laudantium architecto, 
                            corrupti aut excepturi!</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-4 features wow fadeInUp" data-wow-duration="1s" data-wow-delay="1.2s">
                        <div className='container'>
                            <div className='content'>
                            {/* <div className='ovarlay_animation'></div> */}
                           <button> <i className="fa fa-clone" aria-hidden="true"></i></button>
                            <h3>features</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing 
                            elit. Ex quidem laudantium architecto, 
                            corrupti aut excepturi!</p>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </div>
               





<div className='achievement'>
  <div className='container'>
      <h2 className='head wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s'>achievement</h2>
    <div className='row'>
<div className="col-md-7 col-lg-8 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
<p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. printer took a galley of type and scrambled it to make a type specimen book.</p>

<p className='end'>Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>

<div className='row'>
    <div className="col-md-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".6s">
        <div className='main-con'>
        <img src={award} alt="award"/>
        <h2>2015
            <span>NATIONAL AWARD</span>
        </h2>
        </div>
    </div>
    <div className="col-md-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s">
        <div className='main-con'>
        <img src={award} alt="award"/>
        <h2>2016
            <span>GLOBAL AWARD</span>
        </h2>
        </div>
    </div>
    <div className="col-md-4 wow fadeInUp" data-wow-duration="1s" data-wow-delay="1s">
        <div className='main-con'>
        <img src={award} alt="award"/>
        <h2>2017
            <span>HONOR AWARD</span>
        </h2>
        </div>
    </div>
</div>
</div>
<div className="col-md-5 col-lg-4 pooster wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
<img className="img-responsive wow fadeInUp" data-wow-duration="1s" data-wow-delay=".8s" src={year} alt="year"/>
</div>
</div>
</div>
</div>

{/* start oponion block elements */}
<div className='oponion'>
    <div className='overlay'></div>
<div className='container'>
    <div className='row'>
        <div className="col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".2s">
            <h2>Great Theme for Your Business</h2>
            <p>Great Theme for Your Business
Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
<div className='item'>
<i class="fa fa-check" aria-hidden="true"></i>
<span>Simply dummy text of the Lorem Ipsum is printing and type setting.</span>
</div>
<div className='item'>
<i class="fa fa-check" aria-hidden="true"></i>
<span>Simply dummy text of the Lorem Ipsum is printing and type .</span>
</div>
<div className='item'>
<i class="fa fa-check" aria-hidden="true"></i>
<span>Simply dummy text of the Lorem Ipsum is printing and  setting.</span>
</div>
<div className='item'>
<i class="fa fa-check" aria-hidden="true"></i>
<span>Simply dummy text of the Lorem Ipsum is printing and type setting.</span>
</div>
<div className='item'>
<i class="fa fa-check" aria-hidden="true"></i>
<span>Simply dummy text of the Lorem Ipsum is printing and </span>
</div>
<div className='item'>
<i class="fa fa-check" aria-hidden="true"></i>
<span>Simply dummy text of the Lorem Ipsum is printing and type setting.</span>
</div>
<button>
<a href="#"> read more</a>
<span></span><span></span><span></span><span></span>
</button>
        </div>
        <div className="col-md-6 wow fadeInUp" data-wow-duration="1s" data-wow-delay=".4s">
            <h2>Powerful Skills</h2>
            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            <div className='sup_img'>
                <img src={img_1} alt="img1"/>
                <img src={img_2} alt="img2"/>
                <img src={img_4} alt="img4"/>
                <img src={img_3} alt="img3"/>
                <img src={img_4} alt="img4"/>
                <img src={img_1} alt="img1"/>
            
            </div>
        </div>
    </div>
 </div>
</div>
</div>





      
    );
}
}
export default Home;