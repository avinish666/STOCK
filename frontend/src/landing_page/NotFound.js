import React from 'react';
function NotFound(){
    return (
          <div className="container p-5"> 
          <div className="row text-center">
            <img src='media/homeHero.png' alt="heroImage"className='mb-5'/>
            <h1 className='mt-5'> Page not found </h1>
            <p> Sorry! The page you are looking for does not exist </p>
          </div>
       </div>
    );
}
export default NotFound;