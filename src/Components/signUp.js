import React from 'react';
import '../App.css'
import { Link } from 'react-router-dom';
//import {Link} from 'react-router-dom';
function SignUp() {
    return ( 
        <>
         {/* <div>
          <ul>
            <li><Link to={'/'}>Home</Link>
          </li>
          <li><Link to={'/SignUp'}>SignUp Page</Link></li>
          </ul>

        </div> */}
        <div className='haiii' >
      <div className='wrapper  d-flex align-items-center justify-content-center w-140' >
        <div className="login" >
          <h2 className='mb-3'>Register</h2>
          <form class="needs-validation">
                <div className="form-group was-validated mb-2">
                    <label htmlFor="email" style={{color:'white'}}  className="form-label">Email Address</label>
                    <input type="email" className="form-control"   required placeholder='Enter Your Email' style={{background:'transparent'}}></input>
                    
                </div>
                <div className="form-group  was-validated mb-2">
                    <label htmlFor="password" style={{color:'white'}}   className="form-label">Password</label>
                    <input type="password" className="form-control" required placeholder='Enter Your Password' style={{background:'transparent'}}></input>
                    
                </div>
                <div className="form-group  was-validated mb-2"> 
                    <label htmlFor="password" style={{color:'white'}}  className="form-label">Confirm Password</label>
                    <input type="password" className="form-control" required placeholder='Enter Confirm Password' style={{background:'transparent'}}></input>
                    
                </div>
                
                
                <form action="/login" class="inline">
                <button type='submit' className='btn btn-success w-100 mt-2'>Sign Up</button>
              </form>
          </form>
          
        </div>
          
         
    </div>
   
    </div >
    </>  
    );
  }
  
  export default SignUp;