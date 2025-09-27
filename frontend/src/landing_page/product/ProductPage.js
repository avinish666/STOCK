import React from 'react';
import Hero from "./Hero";
import LeftSection from "./LeftSection";
import RightSection from "./RightSection";
import Universe from "./Universe";
function ProductPage(){
     return(
             <>
               <Hero/>
               <LeftSection imageURL="media/kite.png" productName="kite" productDescription="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices." tryDemo="" learnMore="" googlePlay=""appstore=""/>

                <RightSection imageURL="media/kiteconnect.png" productName="avinish" productDescription="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase.
                Kite Connect"/>

                 <LeftSection imageURL="media/coin.png" productName="coin" productDescription="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." tryDemo="" learnMore="" googlePlay=""appstore=""/>

                 <RightSection imageURL="media/varsity.png" productName="Varsity Mobile" productDescription="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."/>

                <LeftSection imageURL="media/console.png" productName="console" productDescription="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." tryDemo="" learnMore="" googlePlay=""appstore=""/>
                <p style={{textAlign:"center"}}> Want to know more about our technology stack? Check out the<a href="/"> Zerodha.tech blog.</a></p>
               <Universe/> 
             </>
     );
}
export default ProductPage;