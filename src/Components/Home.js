import React from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nev from './Navbar'; 
import {Carousel} from 'react-bootstrap'; 
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import cor1 from './images/cor1.png';
import cor2 from './images/cor2.jpg';
import cor3 from './images/cor3.jpg';
import idly from './images/idly.jpg';
import biryani from './images/biryani.jpg';
import strawberry from './images/strawberry.jpg';
// import brinjal from './images/brinjal.jpg';
// import masala from './images/masala.jpg';
// import samosa from './images/samosa.jpg';
import Footer from './Footer.js';


 //import { Link } from 'react-router-dom';


const Home = () => {
        return(
            <> 
            <div>
          {/* <ul>
            <li><Link to={'/'}>Home</Link>
          </li>
           <li><Link to={'/SignUp'}>SignUp Page</Link></li> 
          </ul> */}
         <Nev/>
         
        </div> 
        <div className="demo">
           <div >
            <br></br>
            <br></br>
            <br></br>
            <br/>
           <marquee class="marq"
                ScrollAmount={15}
                 bgcolor="orange"
                 direction="left"
                 loop="">
            <i>Flat 30% offer on First Order</i>
        </marquee>
           </div>
            <div className='p-5' >  
            <Carousel interval={1500}>  
          <Carousel.Item id="a8">  
          <img style={{maxHeight:"100vh"}}  
              className="d-block w-100"  
              src={cor1}  height={'600px'} width={'1400px'}
              alt="First slide"  
            />  
            <Carousel.Caption>  
                
            </Carousel.Caption>  
          </Carousel.Item>  
          <Carousel.Item id="a8">  
            <img  
              className="d-block w-100"  
              src={cor2}  height={'600px'} width={'1400px'}
              alt="Second slide"  
            />  
          
            <Carousel.Caption>  
                
            </Carousel.Caption>  
          </Carousel.Item>  
          <Carousel.Item id="a8">  
            <img  
              className="d-block w-100"  
              src={cor3}  height={'600px'} width={'1400px'}
              alt="Third slide"  
            />  
          
            <Carousel.Caption>  
                
            </Carousel.Caption>  
          </Carousel.Item>  
        </Carousel>  
        <br></br>
        
              <center><h3><i>ABOUT US</i></h3></center>
              <div className="a9">
              <i>Welcome to <b>Book & Eat</b>, the premier food ordering app designed to make your dining experience
               more convenient and enjoyable. We are committed to providing a seamless food ordering process
               that saves you time and effort while connecting you with the best restaurants in your area.
                
               Our mission is to help you discover new dining experiences while enjoying the convenience of
               delivery. Whether you're in the mood for pizza, sushi, or something in between, our extensive 
              selection of restaurants has something for everyone. 

              Our team is dedicated to providing exceptional customer service and making your experience with 
              Book & Eat as smooth and enjoyable as possible. We're always striving to improve our app and welcome
               any feedback or suggestions you may have.

               Thank you for choosing Book & Eat as your go-to food ordering app. We're excited to help you 
               discover new dining experiences and make your life easier.</i>
              </div>
        </div>
       <br/>
       
       <div >
        <center><h3><b>Menu</b></h3></center>
       </div>
       <br/>

        <div className='container'>
        <div className='row'>
         <div className='col-md-3 '> 
        <Card style={{ width: '18rem'}} className='shadow-lg ' >
      <Card.Img variant="top" src={idly} style={{height:'200px'}}/>
      <Card.Body>
        <Card.Title>Idly</Card.Title>
        <Card.Text>
          <p>40/-</p>     
        </Card.Text>
        <form action="/breakfast" class="inline">
                <button type='submit' className='btn   mt-2 btn-warning'>view more..</button>
              </form>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-3'> 
        <Card style={{ width: '18rem' }} className='shadow-lg '>
      <Card.Img variant="top" src={biryani} style={{height:'200px'}}/>
      <Card.Body>
      <Card.Title>Chicken Biryani</Card.Title>
        <Card.Text>
          <p>199/-</p>     
        </Card.Text>
        <form action="/lunch" class="inline">
                <button type='submit' className='btn   mt-2 btn-warning'>view more..</button>
              </form>
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-1'></div>
        <div className='col-md-3'> 
        <Card style={{ width: '18rem' }} className='shadow-lg '>
      <Card.Img variant="top" src={strawberry} style={{height:'200px'}}/>
      <Card.Body>
      <Card.Title>Stawberry Smoothiee</Card.Title>
        <Card.Text>
          <p>129/-</p>     
        </Card.Text>
        <form action="/snacks" class="inline">
                <button type='submit' className='btn mt-2 btn-warning'>view more..</button>
              </form>
        
      </Card.Body>
    </Card>
        </div>
        <div className='col-md-1'></div>

        </div>
        <br/>
        <br/>
        <br/>

        
        
        </div>
        </div>
        
        
              <Footer/>
            </> 
            
             
        )
        
}

export default Home;