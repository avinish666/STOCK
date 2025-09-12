import React from 'react';
function Education(){
    return (
        <div className='container'>
       <div className='row mt-5'>
         <div className='col-6'>
            <img src="media/education.svg" alt="avinish" style={{width:"90%"}}></img>
         </div>
         <div className='col-6'>
            <h1 className="bt-3 mt-5 fs-2">
                free and open market education
            </h1>
            <p  className='mt-5'> Versity , The largest stock market eduction book in the world covering Everything from basics to advance</p>
           <a href='/'style={{textDecoration:"none"}} > varsity <i class="fa fa-long-arrow-right" aria-hidden ="true" ></i></a>
          <p className='mt-5'> Trading&Q, the most active trading and investing community in india for all your market related</p>
                  <a href='/'style={{textDecoration:"none"}} > Trading & Q <i class="fa fa-long-arrow-right" aria-hidden ="true" ></i></a>
         </div>
       </div>
       </div>
    );
}
export default Education;