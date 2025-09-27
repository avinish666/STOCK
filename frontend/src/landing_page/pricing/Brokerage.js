
import React from "react";

function Brokerage() {
  return(

        <div className="Container border-top">
        <div className="row p-5 mt-5  text-center border-top">
    
          <div className="col-8 p-4 ">
            <a href="/" style={{textDecoration:"none"}}><h3 className="fs-3"> Brokerage Calculator </h3></a>
            <ul style={{textAlign:"left",marginLeft:"5rem"}}>
<li>Equity Delivery (Buying & Holding Shares)</li>


<li>You don’t pay any brokerage for buying shares and</li>

<li>Example: If you buy ₹1,00,000 worth of shares</li>

    </ul>
           </div>
           <div className="col-4 p-4 ">
            <a href="/" style={{textDecoration:"none"}}><h3 className="fs-3" > List of charges </h3></a>
              
            <ul className="fs-5">
              <li> $100</li>
              <li> $300</li>
              <li> $700</li>
            </ul>
           </div>


        </div>

      </div>
  );
}

export default Brokerage;
