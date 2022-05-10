
import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './about.css'
import img_1 from '../../img/home_1.jpg';
import img_2 from '../../img/home_2.jpeg';
import home from '../../img/home.jpg';
import achive_1 from '../../img/1.png';
import achive_2 from '../../img/2.png';
import achive_3 from '../../img/3.png';
import achive_4 from '../../img/4.png';

// import paper1 from '../../img/paper1.png';
// import paper2 from '../../img/paper2.png';

class About extends Component {
    render(){
     const settings = {
      // dots: true,
    //   fade: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      speed: 1500,
      autoplay:true, 
      autoplaySpeed: 4000,
      cssEase: "linear"
          };
    return ( 
        <div>
         <div className='about wow fadeInDown' data-wow-duration="1s" data-wow-delay=".3s">
             <div className='overlay'></div>
             <div className='container wow fadeInUp' data-wow-duration="1s" data-wow-delay=".6s">
                 <h2>About Us</h2>
                 <p>Lorem Ipsum is simply dummy text ever sincehar the 1500s, when an unknownshil printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</p>
                
                   
              </div>
         </div>
         <div className='slider wow fadeInUp' data-wow-duration="1s" data-wow-delay=".6s">
             <div className='container'>
         <Slider {...settings}>
                        <div className='main_slide'>
                            <div className='left_content'>
                                <div className='overlay'></div>
                                <img src={img_1} alt=""/>
                            </div>
                            <div className='right_content'>
                                <h3>Lorem Ipsum is simply </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam, provident quos ea neque repellat. Incidunt provident consequatur voluptatibus architecto accusamus laudantium exercitationem perferendis obcaecati</p>
                                <div className='item'>
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</span>
                                </div>
                                <div className='item'>
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</span>
                                </div>
                                <div className='item'>
                                <i class="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</span>
                                </div>
                                <div className='item'>
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</span>
                                </div>
                               
                            </div>
                        </div>
                        {/* slider-2 */}
                        <div className='main_slide'>
                            <div className='left_content'>
                            <div className='overlay'></div>
                                <img src={img_2} alt=""/>
                            </div>
                            <div className='right_content'>
                                <h3>Lorem Ipsum is simply </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam, provident quos ea neque repellat. Incidunt provident consequatur voluptatibus architecto accusamus laudantium exercitationem perferendis obcaecati</p>
                              
                                <div className='item'>
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</span>
                                </div>
                                <div className='item'>
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</span>
                                </div>
                                <div className='item'>
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</span>
                                </div>
                                <div className='item'>
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</span>
                                </div>
                            </div>
                      </div>
                      {/* slide-3 */}
                      <div className='main_slide'>
                            <div className='left_content'>
                            <div className='overlay'></div>
                                <img src={home} alt=""/>
                            </div> 
                            <div className='right_content'>
                                <h3>Lorem Ipsum is simply </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quisquam, provident quos ea neque repellat. Incidunt provident consequatur voluptatibus architecto accusamus laudantium exercitationem perferendis obcaecati</p>
                              
                                <div className='item'>
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</span>
                                </div>
                                <div className='item'>
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</span>
                                </div>
                                <div className='item'>
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</span>
                                </div>
                                <div className='item'>
                                <i className="fa fa-check-square-o" aria-hidden="true"></i>
                                <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis</span>
                                </div>
                            </div>
                      </div>
                 </Slider>        
             </div>
        </div>
        {/* start achievement block elements */}
        <div className='achievement'>
        <div className='container'>
            <div className='row'>
            <div className=' col-md-6 col-lg-3 one'>
                    <div className='main wow fadeInUp' data-wow-duration="1s" data-wow-delay="0">
                        <img src={achive_1} alt=""/>
                        <div className='right_content'>
                            <h3>1263
                                <span>Satisfied Clients</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className=' col-md-6 col-lg-3 tow'>
                    <div className='main wow fadeInUp' data-wow-duration="1s" data-wow-delay=".3s">
                        <img src={achive_2} alt=""/>
                        <div className='right_content'>
                            <h3>1263
                                <span>Satisfied Clients</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className=' col-md-6 col-lg-3 three'>
                    <div className='main wow fadeInUp' data-wow-duration="1s" data-wow-delay=".6s">
                        <img src={achive_3} alt=""/>
                        <div className='right_content'>
                            <h3>1263
                                <span>Satisfied Clients</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className=' col-md-6 col-lg-3 four'>
                    <div className='main wow fadeInUp' data-wow-duration="1s" data-wow-delay=".9s">
                        <img src={achive_4} alt=""/>
                        <div className='right_content'>
                            <h3>1263
                                <span>Satisfied Clients</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        {/* start about_sup_info block elements */}
        <div className='about_sup_info'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-6 '>
                   
                        <div className='main_content img_cont wow fadeInUp' data-wow-duration="1s" data-wow-delay="0s">
                        <div className='overlay'><i className="fa fa-search-plus" aria-hidden="true"></i></div>
                            <img src={home} alt=""/>
                            
                        </div>
                    </div>
                    {/* col-2 */}
            <div className='col-md-6'>
                <div className='main_content text_cont wow fadeInUp' data-wow-duration="1s" data-wow-delay=".3s">
                    <h3>Lorem ipsum.</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi fuga iure nostrum labore  <span>tempora esse molestiae obcaecati harum debitis, iste velit amet quam nihil inventore ipsa dignissimos a dolore earum eaque. Quibusdam sequi distinctio,ex aliquid vel nam temporibus quam natus saepe debitis similique maiores inventore maxime libero accusantium vitae aut officia magnam laboriosam doloribus! </span>Alias blanditiis id aut tenetur porro iure magnam nisi tempora! Ipsa doloremque quo ex eum iure fugiat eligendi laboriosam inventore? Quae repellendus nulla molestias molestiae fuga dolor, unde, officiis at, quod eius sunt tempore tempora sapiente enim ipsa distinctio! Voluptatem,<mark> ad deserunt! Incidunt ducimus optio ad aliquid. Facere culpa quae ratione rerum tempore.</mark></p>
                    <a href="">read more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className='col-md-6 col-sm-6 '>
                <div className='main_content text_cont wow fadeInUp' data-wow-duration="1s" data-wow-delay=".3s">
                    <h3>Lorem ipsum.</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi fuga iure nostrum labore  <span>tempora esse molestiae obcaecati harum debitis, iste velit amet quam nihil inventore ipsa dignissimos a dolore earum eaque. Quibusdam sequi distinctio,ex aliquid vel nam temporibus quam natus saepe debitis similique maiores inventore maxime libero accusantium vitae aut officia magnam laboriosam doloribus! </span>Alias blanditiis id aut tenetur porro iure magnam nisi tempora! Ipsa doloremque quo ex eum iure fugiat eligendi laboriosam inventore? Quae repellendus nulla molestias molestiae fuga dolor, unde, officiis at, quod eius sunt tempore tempora sapiente enim ipsa distinctio! Voluptatem,<mark> ad deserunt! Incidunt ducimus optio ad aliquid. Facere culpa quae ratione rerum tempore.</mark></p>
                    <a href="">read more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
            <div className='col-md-6  '>
            
                <div className='main_content img_cont wow fadeInUp' data-wow-duration="1s" data-wow-delay=".6s">
                <div className='overlay'><i className="fa fa-search-plus" aria-hidden="true"></i></div>
                    <img src={home} alt=""/>
                    
                </div>
            </div>
            <div className='col-md-6'>
                
                <div className='main_content img_cont wow fadeInUp' data-wow-duration="1s" data-wow-delay=".3s">
                <div className='overlay'> <i className="fa fa-search-plus" aria-hidden="true"></i></div>
                    <img src={home} alt=""/>
                   
                </div>
            </div>
            <div className='col-md-6 '>
                <div className='main_content text_cont wow fadeInUp' data-wow-duration="1s" data-wow-delay=".6s">
                    <h3>Lorem ipsum.</h3>
                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum excepturi fuga iure nostrum labore  <span>tempora esse molestiae obcaecati harum debitis, iste velit amet quam nihil inventore ipsa dignissimos a dolore earum eaque. Quibusdam sequi distinctio,ex aliquid vel nam temporibus quam natus saepe debitis similique maiores inventore maxime libero accusantium vitae aut officia magnam laboriosam doloribus! </span>Alias blanditiis id aut tenetur porro iure magnam nisi tempora! Ipsa doloremque quo ex eum iure fugiat eligendi laboriosam inventore? Quae repellendus nulla molestias molestiae fuga dolor, unde, officiis at, quod eius sunt tempore tempora sapiente enim ipsa distinctio! Voluptatem,<mark> ad deserunt! Incidunt ducimus optio ad aliquid. Facere culpa quae ratione rerum tempore.</mark></p>
                    <a href="">read more <i className="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
      
        
        </div>
    </div>
    </div>
</div>
     );
  }
}
export default About;
