import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import about_services from '../../img/5.png';
import text from '../../img/text.png';
import avatar1 from '../../img/avatar1.jpg';
import avatar2 from '../../img/avatar2.jpg';
import avatar3 from '../../img/avatar3.jpg';
import waking from '../../img/waking.jpeg';


import './services.css'
const Services = () => {
    const settings = {
        // dots: true,
      //   fade: true,
        infinite: true,
        speed: 100,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1500,
        autoplay:true, 
        autoplaySpeed: 4000,
        cssEase: "linear",
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                // dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
            };
    return ( 
        <div >
           <div className='services wow fadeInDown' data-wow-duration="1s" data-wow-delay=".3s">
               <div className='overlay'></div>
               <div className='container'>
                   <div className='row'>
                       <div className='col-md-6'>
                           <div className='main_content left justify-content-right wow fadeInUp' data-wow-duration="1s" data-wow-delay=".5s">
                               <h3>Lorem Ipsum is simply
                                   <br /> ever sincehar </h3>
                                   <span>Lorem ipsum dolor sit, amet consectetur<br /> adipisicing elit. Atque alias, vitae</span>
                            </div>
                          </div>
                                <div className='col-md-6'>
                                    <div className='main_content right wow fadeInUp' data-wow-duration="1s" data-wow-delay=".7s">
                                        <img className='img-responsive' src={waking} alt=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* start about_services  */}
                    <div className='about_services'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-md-12 col-lg-5 wow fadeInUp' data-wow-duration="1s" data-wow-delay=".3s">
                                    <div>
                                    <img src={about_services} alt=""/>
                                    </div>
                                </div>
                                <div className='col-md-12 col-lg-7'>
                                  <div className='main wow fadeInUp' data-wow-duration="1s" data-wow-delay=".6s">
                                      <h3>Lorem ipsum dolor sit, amet consectetur <span>adipisicing</span></h3>
                                      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur blanditiis laborum est culpa quibusdam quia officiis aperiam enim nisi, minus fuga iusto adipisci similique</p>

                                      <p className='first'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed soluta perspiciatis voluptatibus debitis, quam architecto illo odit quisquam nulla odio ipsum incidunt vitae eum aperiam quia enim pariatur, animi natus.</p>
                                      <img src={text} alt=""/>
                                      <button>
                                           <a href="#"> read more</a>
                                            <span></span><span></span><span></span><span></span>
                                        </button>
                                  </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* start services sup info slider */}
                    <div className='services_sup_info wow fadeInUp' data-wow-duration="1s" data-wow-delay=".3s">
                        <div className='container'>
                        <Slider {...settings}>
                       <div className='main_content'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum aspernatur illum voluptatibus dolor, sed excepturi voluptate ad mollitia autem.</p>
                        <div className='bottom_contents'>
                            <img src={avatar1} alt=""/>
                            <div className='right_content'>
                                <h3>lorem</h3>
                                <span>lorem ipsum</span>
                                <div className='icon'>
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                       </div>
                       <div className='main_content'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum aspernatur illum voluptatibus dolor, sed excepturi voluptate ad mollitia autem.</p>
                        <div className='bottom_contents'>
                            <img src={avatar2} alt=""/>
                            <div className='right_content'>
                                <h3>lorem</h3>
                                <span>lorem ipsum</span>
                                <div className='icon'>
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                       </div>
                       <div className='main_content'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum aspernatur illum voluptatibus dolor, sed excepturi voluptate ad mollitia autem.</p>
                        <div className='bottom_contents'>
                            <img src={avatar3} alt=""/>
                            <div className='right_content'>
                                <h3>lorem</h3>
                                <span>lorem ipsum</span>
                                <div className='icon'>
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                       </div>
                       <div className='main_content'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum aspernatur illum voluptatibus dolor, sed excepturi voluptate ad mollitia autem.</p>
                        <div className='bottom_contents'>
                            <img src={avatar1} alt=""/>
                            <div className='right_content'>
                                <h3>lorem</h3>
                                <span>lorem ipsum</span>
                                <div className='icon'>
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                       </div>
                       <div className='main_content'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum aspernatur illum voluptatibus dolor, sed excepturi voluptate ad mollitia autem.</p>
                        <div className='bottom_contents'>
                            <img src={avatar2} alt=""/>
                            <div className='right_content'>
                                <h3>lorem</h3>
                                <span>lorem ipsum</span>
                                <div className='icon'>
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                       </div>
                       <div className='main_content'>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ipsum aspernatur illum voluptatibus dolor, sed excepturi voluptate ad mollitia autem.</p>
                        <div className='bottom_contents'>
                            <img src={avatar3} alt=""/>
                            <div className='right_content'>
                                <h3>lorem</h3>
                                <span>lorem ipsum</span>
                                <div className='icon'>
                                <i class="fa fa-facebook-square" aria-hidden="true"></i>
                                <i class="fa fa-linkedin-square" aria-hidden="true"></i>
                                <i class="fa fa-twitter-square" aria-hidden="true"></i>
                                </div>
                            </div>
                        </div>
                       </div>
                            </Slider>
                        </div>
                      </div>
                      {/* start clients_say */}
                      <div className='services_info wow fadeInDown' data-wow-duration="1s" data-wow-delay="0s">
                          
                          <div className='main'>
                              {/* left saide */}
                              <div className=' cont left_cont'>
                              <div className='overlay'></div>
                                <div className='right_cont_inside wow fadeInUp' data-wow-duration="1s" data-wow-delay=".3s">
                                <i class="fa fa-diamond" aria-hidden="true"></i>
                                <h3> Beautiful Blog</h3>
                                <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .....</p>
                                <a href="">read more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                              </div>
                              {/* right saide */}
                              <div className=' cont right_cont wow fadeInUp' data-wow-duration="1s" data-wow-delay=".6s">
                              <div className='overlay'></div>
                                <div className='right_cont_inside wow fadeInUp' data-wow-duration="1s" data-wow-delay=".9s">
                                <i class="fa fa-clock-o" aria-hidden="true"></i>
                                <h3>Creative Ideas</h3>
                                <p>Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. printer took a galley of type and scrambled it to make a type specimen book. Standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book .....</p>
                                <a href="">read more <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                                </div>
                              </div>
                          </div>
                      </div>
                </div>
            );
        }
 
export default Services;
