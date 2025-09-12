import React from 'react';
function Stats(){
    return (
    <div className='container p-5'>
      <div className='row mt-0'>
             <div className='col-6 p-5 mt-0'>
              <h1 className='fs-3 mb-5'> Trust with confidence </h1>
               <h2 className='fs-4'> Customer-first always</h2>
               <p className='text-muted'> That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments, making us India’s largest broker; contributing to 15% of daily retail exchange volumes in India.</p>
               <h2 className='fs-4'> No spam or gimmicks</h2>
               <p className='text-muted'> No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.</p>
               <h2 className='fs-4'> The Zerodha universe</h2>
               <p> Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups </p>
                <h2 className='fs-4'> Do better with money</h2>
               <p className='text-muted'> With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
             </div>
             <div className='col-6 p-5 mt-0'>
                <img src="media/ecosystem.png" alt="Subhash" style={{width:"90%",mx:0}}></img>
                <div className='text-center'>
                    <a href="/" className='mx-5' style={{textDecoration:"none"}}> Explore our Products</a>

                    <a href="/" className='' style={{textDecoration:"none"}}> Try our kite </a>
                </div>
             </div>
      </div>
    </div>
    );
}
export default Stats;