import React from 'react';
import './registration.css';
function Registration(){
    return(
       <form>
           <div>
           <h1 className='upper_part'>
                REGISTRATION
           </h1>
           </div>
           <div className='lower_part'>
           <div>
           <label className='textpos'>Name            :-</label>
           <input type='text'></input>
           </div>
           <div>
           <label className='textpos'>Email Address   :-</label>
           <input type='text'></input>
           </div>
           <div>
           <label className='textpos'>Address         :-</label>
           <input type='text'></input>
           </div>
           <div>
           <label className='textpos'>Phone Number    :-</label>
           <input type='text'></input>
           </div>
           <div>
           <label className='textpos'>Password         :-</label>
           <input type='text'></input>
           </div>
           </div>
           <div className='tap'>
           <label>Register</label>
           </div>

       </form>
    );
};

export default Registration;
