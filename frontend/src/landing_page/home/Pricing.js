import React from 'react';
function Pricing(){
    return(
    <div className='container'>
       <div className='row'>
        <div className='col-4 mt-5'>
            <h1 className='mb-3'>
                Unbeatable Pricing
            </h1>
            <p> We pioneered the concept of discount brocking and price in india .flat free no hidden charge</p>
            <a href='/' style={{textDecoration:"none"}}> see pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
        </div>
        <div className='col-2'></div>
        <div className='col-6 mt-5'>
            <div className='row text-center'>
                <div className='col p-2 border'>
                    <h1 className='mb-3'> $ 100</h1>
                    <p> Free Equity delivery and <br/>Direct mutual result</p>
                </div>
                <div className='col p-2 border'>
                    <h1 className='mb-3'> $ 1000 </h1>
                    <p> Stock and Bond <br/>and Direct mutual result</p>
                </div>
            </div>
        </div>
       </div>
       </div>
    );
}
export default Pricing;