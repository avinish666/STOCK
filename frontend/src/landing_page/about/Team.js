// Team.js
import React from "react";

function Hero() {
  return(
        <div className="Container ">
        <div className="row p-5   mb-5">
           <h className=" text-center fs-5">
                        People
            
           </h>
        </div>
         <div className="row p-3 border-top  text-center" >
                        <div className="col-6 p-3 ">
                        <img src="media/001.jpg" alt="avinish" style={{borderRadius:"100%", width:"440px"}}/>
                            <h1 className="mt-3"> Subhash kumar</h1>
                            </div>
                        <div className="col-6 p-3 text-muted">
                         <p className="a" style={{lineHeight:"3rem"}}>
                               Nithin bootstrapped and founded Zerodha in 2010 to overcome<br/> the hurdles he faced during his decade long stint as a trader.<br/>
                               Today, Zerodha has changed the landscape of the Indian broking industry.<br/>
                               He is a member of the SEBI Secondary Market Advisory Committee (SMAC) <br/>and the Market Data Advisory Committee (MDAC).<br/>
                               Playing basketball is his zen.

 <a href="/" style={{textDecoration:"none"}}>Connect on Homepage</a> <br/><a href="/" style={{textDecoration:"none"}}>TradingQnA </a><br/> <a href="/" style={{textDecoration:"none"}}> Twitter</a>
                         </p>
        </div>
      </div>
      </div>
  );
}

export default Hero;