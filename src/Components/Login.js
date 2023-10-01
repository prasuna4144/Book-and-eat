import React from 'react';
import '../App.css'



import {Link , useNavigate} from 'react-router-dom';



function LoginPage() {
    return ( 
      <div className='hai' >

      <center>
        <div className='row' >
          <div  className='col-md-6'></div>
      <div className='col-md-6 w-100'>
      <div className='wrapper d-flex align-items-center justify-content-center w-130'  >
        <div className='login shadow-lg'>
            
          <h2>Login Page</h2>
          <form class="needs-validation">
                <div className="form-group was-validated mb-2">
                    <label style={{color:'white'}}  htmlFor="email" className="form-label">Email Address</label>
                    <input type="email" className="form-control" required placeholder='Please Enter Your Email' style={{background:'transparent'}}></input>
                    
                </div>
                <div className="form-group  was-validated mb-2">
                    <label  style={{color:'white'}} htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" required placeholder='Please Enter Your Password'style={{background:'transparent'}}></input>
                    
                </div>
                <div className="form-group form-check mb-2">
                    <input type="checkbox" className="form-check-input"></input>
                    <label style={{color:'white'}}htmlFor="check" className="form-check-label">Remember me</label>
                    
                </div>
                
                <form action="/" class="inline">
                <button type='submit' className='btn  w-100 mt-2'style={{backgroundColor:'#fff',borderRadius:'40px'}}>Login</button>
              </form>
                {/* <button type='submit' className='btn btn-success w-100 mt-2'>SIGN UP</button> */}
               <br></br>
                <p style={{color:'white'}}>if not Registered ? <Link to='/signup'> Sign Up</Link> </p>         
          </form>
          
        </div>
      
    </div>
   
    </div>  
    </div>   
    </center>
    </div>

    );
  }
  
  export default LoginPage;