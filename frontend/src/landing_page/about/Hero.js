
import React from "react";

function Hero() {
  return(

      <div className="Container ">
        <div className="row p-5 mt-5 ">
           <p className="fs-2 text-center">
            We pioneered the discount broking model in India.<br/>
              Now, we are breaking ground with our technology.
           </p>
        </div>
         <div className="row p-5 mt-5 border-top text-muted fs-6" style={{lineHeight:"1.8", fontSize:"1rem"}}>
                        <div className="col-6 p-5">
                            <p> We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that <a href="/">traders </a><br/> and investors face in India in terms of cost, support, and technology.<br/> We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.

                             Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.<br/>

                             Over 1.6+ crore clients place <a href="/" style={{textdecoration:"none"}}>billions</a> of orders every year through our powerful ecosystem of investment platforms,<br/> contributing over 15% of all Indian retail trading volumes.</p>
                        </div>
                        <div className="col-6 p-5">
                            In addition, we run a number of popular open online educational and community initiatives to empower retail traders and <a href="/">investors.</a><br/>

Rainmatter, our fintech fund and incubator, has invested in several <a href="/">fintech</a> startups with the goal of growing the Indian capital markets.<br/>

And yet, we are always up to something new every day. Catch up on the latest updates <br/>on our blog or see what the media is saying about us or learn more about our business and product philosophies.
                        </div>
        </div>
      </div>
  );
}

export default Hero;
