// import { render } from "@testing-library/react";
import React, { Component } from "react";
import axios from 'axios'
import './clients.css'
import moukup from '../../img/mac-4.png';
class Clients extends Component{
    
    state = {
        users : []
    }
    componentDidMount(){
        axios.get("https://www.breakingbadapi.com/api/characters").then(res => {
            console.log(res.data)
            this.setState({
              users:res.data 
            })
        })
    }
    
    render(){

    return ( 
        <div >
            <div className='header_serv'>
                <div className='overlay'></div>
                <div className='container'>
                    <div className='top'>
                 <div className='top_cont wow fadeInUp' data-wow-duration="1s" data-wow-delay=".2s">
                 
                  <i class="fa fa-television" aria-hidden="true"></i>
                   <div className='cont'>
                     <h3>543</h3>
                    <span>Projects Done</span>
                   </div>
                 </div>
                 <div className='top_cont wow fadeInUp' data-wow-duration="1s" data-wow-delay=".4s">
                 <i class="fa fa-heart-o" aria-hidden="true"></i>
                   <div className='cont'>
                     <h3>1233</h3>
                    <span>Satisfied Clients</span>
                   </div>
                 </div>
                 
                 <div className='top_cont wow fadeInUp' data-wow-duration="1s" data-wow-delay=".6s">
                 <i class="fa fa-trophy" aria-hidden="true"></i>
                   <div className='cont'>
                     <h3>120</h3>
                    <span>Awards</span>
                   </div>
                 </div>
                 <div className='top_cont wow fadeInUp' data-wow-duration="1s" data-wow-delay=".8s">
                  <i class="fa fa-smile-o" aria-hidden="true"></i>
                   <div className='cont'>
                     <h3>120</h3>
                    <span>Happy Clients</span>
                   </div>
                 </div>
                 </div>
                 {/*  */}
                 <div className='bottom_cont wow fadeInUp' data-wow-duration="1s" data-wow-delay="1s">
                     <img src={moukup} alt=""/>
                 </div>
                </div>
            </div>
         {/* 
         ============================================
         =================================
         ========================
         */}
    <div className='clients'>
        <div className='container'>
        <h2 className=' wow fadeInUp' data-wow-duration="1s" data-wow-delay="s">Clients</h2>
            <div className='row'> 
            {this.state.users.map(user => 
    
        <div className='col-md-4'>
            {/* <h2 id={user.id}>{user.name}</h2> */}
            <div className='main wow fadeInUp' data-wow-duration="1s" data-wow-delay=".2s">
                <div className='overlay'></div>
               <img className=' wow fadeInUp' data-wow-duration="1s" data-wow-delay=".4s" src={user.img} alt=""/>
                <h3>client <span> {user.char_id}</span></h3>
                <span className='saide_info'> name: <span>{user.name}</span> </span>
                <span className='saide_info'> nickname: <span>{user.nickname}</span></span>
                <span className='saide_info'> occupation: <span>{user.occupation}</span></span>
                <span className='saide_info'> status: <span>{user.status}</span></span>
               
            </div>
        </div>
        )}

    </div>
</div>
</div> 


</div>
     );
}
}
 
export default Clients;
