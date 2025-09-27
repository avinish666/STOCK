
import React from "react";

function Hero() {
  return(

   <section className="container-fluid " id="supportHero">
          <div className="p-5 " id="supportWrapper">
                 <a href="/" ><h3> Support Portal </h3> </a>
                <a href="/" style={{marginLeft:"650px"}}> <h3> Track Tickets </h3></a>
             </div>
             <div className="row p-5 m-5"> 
              <div className="col-6 " > 
                <h1 className="fs-3"> Search for an items or browse help for a topics to create a ticket </h1>
                <input placeholder="How do i acivate F & o"/><br/>
                <a href="/">track account opening     </a>
                <a href="/">track segment activation </a><br/>
                <a href="/">Inradays margins</a>
                <a href="/">Kite user manual</a>
                 </div>
               <div className="col-6 p-5 ">  
                <h1 className="fs-3 "> features </h1> 
                <ol>
                <li> <a href="/"> Current take over </a></li>
                
              <li> <a href="/"> lets start earning </a> </li>
                </ol>
               </div>
             </div>
   </section>
  );
}

export default Hero;