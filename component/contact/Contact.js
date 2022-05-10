import './contact.css'
const Contact = () => {
    return ( 
        <div >
          <div className='contact_us'>
              <div className='over'></div>
              <div className='container'>
                  <div className='row'>
                      <div className=' col-sm-12 head_info wow fadeInUp' data-wow-duration="1s" data-wow-delay="0s">
                          <h3>contact</h3>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, maxime sunt deleniti, tempora esse natus porro quas quisquam repellat explicabo ea, iste omnis voluptatum quo laborum similique? Illum consequuntur nihil, deserunt similique odio, quidem provident earum, esse cumque necessitatibus aut sit aliquam veniam? Fugiat eveniet, quaerat voluptatibus earum hic quo cumque, incidunt necessitatibus non officia, soluta magni blanditiis sapiente! Repellat!</p>
                          <ul>
                              <li><i class="fa fa-battery-empty" aria-hidden="true"></i> Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                              <li><i class="fa fa-battery-quarter" aria-hidden="true"></i> Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                              <li><i class="fa fa-battery-half" aria-hidden="true"></i> Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                              <li><i class="fa fa-battery-three-quarters" aria-hidden="true"></i> Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                              <li><i class="fa fa-battery-full" aria-hidden="true"></i> Lorem ipsum dolor sit, amet consectetur adipisicing.</li>
                          </ul>
                      </div>
                      <div className=' col-sm-12 col-md-5 col-xl-6'>
                          <div className='map_content wow fadeInUp' data-wow-duration="1s" data-wow-delay=".3s">
                              <h3>get in touch</h3>
                     
                             <iframe width="98%" height="440" src="https://maps.google.com/maps?width=700&amp;height=440&amp;hl=en&amp;q=cairo+(Title)&amp;ie=UTF8&amp;t=p&amp;z=9&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0">
                                  </iframe>
                                
                                     
                          </div>
                      </div>
                      <div className=' col-sm-12 col-md-7 col-xl-6'>
                          <div className='contact_info wow fadeInUp' data-wow-duration="1s" data-wow-delay=".6s">
                              <h3 className='style'>mail us</h3>
                           <input type="text" placeholder='name' required/>
                           <input type="email" placeholder='email' required />
                           <textarea name="message" id="" cols="30" rows="10" placeholder='message us'></textarea>
                                <button>
                                <a href="#"> send</a>
                                <span></span><span></span><span></span><span></span>
                                </button>
                              </div>
                          </div>
                  </div>
              </div>
          </div>
        </div>
     );
}
 
export default Contact;
