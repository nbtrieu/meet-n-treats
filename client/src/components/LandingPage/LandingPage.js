import React from 'react';
import './landingpage.css';
import image from '../../assets/landing.png';
import {useNavigate} from "react-router-dom";


const LandingPage = () => {

  const navigate = useNavigate();

  return (
    <div className='app-landing_page'>
       <div className='app-landing_page__container'>
            <div className='app-landing_page__container__header-title'>
                <h1>PAWSWIPE</h1>
            </div>
            <div className='app-landing_page__container__header-background' style={{backgroundImage: `url(${image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            height: "80vh",
            width: "98vw",
            opacity: "0.9",

      }}> 

      <div className='app-landing_page__container__header-background-page'>
          <div className='app-landing_page__container__header-background__text'>
            <h1>
              Meeeeeeeeeooooooooowww<br/>wwwwwwwwwwwww
              </h1>
          </div>

          <div className='app-landing_page__container__header-background__btn'>
            <div className='app-landing_page__container__header-background__btn__login'>
                <button className='btn' onClick ={()=>{ navigate("/login")}}>Login</button>
                </div>
                <div className='app-landing_page__container__header-background__btn__signup'>
                <button className='btn' onClick ={()=>{ navigate("/register")}}>Sign Up</button>
                </div>
            </div>

        </div>
            </div>
         <div className='App-feature-1'>
          <hr className='line'></hr>
           <div className='fill-img-1'>
            <img className='images' src={image}></img>
            <div className='feature'>
              <h1>App Feature 1</h1>
            </div>

           </div>
          
         </div>
         <div className='App-feature-2'>
          <hr className='line'></hr>
           <div className='fill-img-2'>
            <div className='feature-2'>
              <h1>App Feature 2</h1>
            </div>
            <img className='imagess' src={image}></img>

           </div>
          
         </div>
         <div className='App-feature-3'>
          <hr className='lines'></hr>
           <div className='fill-img-1'>
            <img className='images' src={image}></img>
            <div className='feature'>
              <h1>App Feature 1</h1>
            </div>

           </div>
           <hr className='linee'></hr>
         </div>





        </div>

    </div> 
  )
}

export default LandingPage