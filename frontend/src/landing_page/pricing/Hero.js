
import React from "react";

function Hero() {
  return(

   
      <div className="Container">
        <div className="row p-5 mt-5  text-center ">
           <h1> Pricing </h1>
           <p1 className="text-muted text-center"> List of all charges and taxes </p1>
        </div>
        <div className="row p-5 mt-1 text-center">
          <div className="col-4 p-5 mt-1">
               <img src="media/pricingEquity.svg" alt="/"/>
                <h1 className="mt-5 fs-3"> Free equity delivery</h1>
                <p> All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
           </div>
           <div className="col-4 p-5 mt-1">
             <img src="media/intradayTrades.svg" alt="/"/>
                <h1 className="mt-5 fs-3"> Intraday and F&O trades </h1>
                <p>  Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
           </div>
            <div className="col-4 p-5 mt-1">
             <img src="media/pricingEquity.svg" alt="/"/>
                <h1 className="mt-5 fs-3"> Free direct MF </h1>
                <p> All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
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
