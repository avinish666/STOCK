import React from 'react';
function Awards (){
    return (
      <div className='row p-5 mb-5'>
        <div className='col-6'>
           <img src="media/largestBroker.svg" alt="Avinish"></img>
        </div>
           <div className='col-6  p-5 mb-5 mt-3'>
                   <h1> Largest stock Brocker in India</h1>
                    <p className='mb-5'> +2 million zerodha clients contribute to over 15%  of all volume in india daily by trading and investing </p>
                    <div className='row'>
                        <div className='col-6'>
                    <ul>
                        <li> <p>future and options </p></li>
                        <li> <p>derivaties and commodities </p> </li>
                         <li> <p> Currency and derivaties </p></li>
                    </ul>
                    </div>
                       <div className='col-6'>
                    <ul>
                        <li> <p> stock and ipo </p></li>
                        <li> <p> Bond and security  </p> </li>
                         <li> <p> Bonds and goverment  </p></li>
                    </ul>
                    </div>
                    <img src="media/pressLogos.png" alt="avinish" style={{width:"90%"}}/>
                    </div>
                    </div>
           </div>
    );
}
export default Awards;