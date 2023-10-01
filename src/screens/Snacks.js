import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { Modal } from 'react-bootstrap'
import snacks from '../Data2'
import Nev from '../Components/Navbar'; 
import Footer from '../Components/Footer.js';

export default function Snacks() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  
  const [quantity, setquantity] = useState(1);
  const [product, setProduct] = useState([]);
  const [selecteditem, setSelecteditem] = useState([
    {
    'name':'',
    'image':'',
    'description':''
    }]
    );

  useEffect(() => {
    setProduct(snacks)
  }, []);

  const handleShow = (products) => {
    console.log(products)
    let newitem = [{
      'name':products.name,
      'image':products.image,
      'description':products.description
      }]
      // console.log(newitem)
    setSelecteditem([...newitem]);
    console.log(selecteditem)
    setShow(true);
  }

  const changeItems = (qty, pro) => {
    let price = pro.default_price;
    let updated_price = price * qty;
    pro.prices = updated_price;
    console.log(pro);
    setProduct([...product, pro]);
  }

  return (
    <div className="demo1">
      <Nev/>
      <br/>
      <br/>
      <br/>
      <br/>
      
      <div className='row' id="c2">
      <h2 style={{color:'black'}}>Snacks</h2>
        {
          
          <div className='col-md-12 m-3 shadow-lg p-3 bg-white rounded '  id="c1">{
           
            product.map((item, i) => {

              return (

                <div className='col-md-3 m-3 shadow-lg p-3  bg-white rounded'id="dd" >
                  <div onClick={() =>handleShow(item)}>
                    <h3>{item.name}</h3>
                    <img src={item.image} width="200px" height="200px" id="c3"/>
                  
                  </div>
                  
                  <div className="flex-container">
                    <div className='w-100'>
                      <div className='m-1 w-100'>
                        <h4>Price :<br></br> {item.prices * quantity}</h4>
                      </div>

                    </div>
                    
                    <div className='w-100 m-1'>

                      <h4>Quantity:</h4>
                      <select className="form-control" onChange={(e) => { changeItems(e.target.value, item) }} >
                        {
                          [...Array(10).keys()].map((x, i) => {
                            // console.log(i)
                            // <h2>haiii</h2>
                            return <option value={i + 1}>{i + 1}</option>
                          })
                        }
                      </select>
                      
                    </div>
                  </div>
                  <div className="flex-container">
                    <div className='m-1 w-100'><br></br>
                      <button className="btn1">Order Now</button>
                    </div>
                    
                  </div>
                    
                </div>
                
              )
                        
            }
            
            )


          }
          </div>
        }
      </div>
      {
       show ? 
      
      <>
            <Modal  show={show} onHide={handleClose} >
              <Modal.Header closeButton>
                <Modal.Title>{selecteditem[0].name}</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <img src={selecteditem[0].image} className="img-fluid" style={{height:'300px',width:"100%"}}></img>
                <p>{selecteditem[0].description}</p>
              </Modal.Body>

              <Modal.Footer>
                              {/* <button className="btn">Order Now</button> */}
              </Modal.Footer>
            </Modal>
            </>
          : ''
          }
          <Footer/>
    </div>
  )
}
