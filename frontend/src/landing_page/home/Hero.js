import React from 'react';
function Hero(){
    return (
       <div className="container p-5"> 
          <div className="row text-center">
            <img src='media/homeHero.png' alt="heroImage"className='mb-5'/>
            <h1 className='mt-5'> Invest in Everything </h1>
            <p> Online stock to invest in stock , mutual funds and derivaties and many more</p>
            <button  className="p-3 btn btn-primary fs-5 mb-5" style={{width:"20%",margin:"0 auto"}}> Singn up </button>
          </div>
       </div>
    );
}
export default Hero;