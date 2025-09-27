
import React from "react";

function LeftSection( {imageURL,productName,productDescription,tryDemo,learnMore,googlePlay,appstore})
  {
       return <div className="container mt-3">
              <div className="row">
                  <div className="col-6"> 
                     <img src={imageURL} alt="avinish"/>
                  </div>
                  <div className="col-6 p-5 mt-5">
                      <h1> {productName}</h1>
                      <p> {productDescription} </p>
                      <div >
                      <a href={tryDemo}> try demo</a>
                      <a href={learnMore} style={{marginLeft:"50px"}}> Learn More </a>
                      </div>
                      <div className="mt-3">
                      <a href={googlePlay}><img src="media/googlePlayBadge.svg" alt="avinish"/> </a>
                      <a href={appstore} style={{marginLeft:"50px"}}> <img src="media/appstoreBadge.svg" alt="avinish"/> </a>
                      </div>
                      </div>
              </div>
       </div>
  }

export default LeftSection;
