import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown,faUser,faBars,faHome,faSignal,faPlusCircle} from '@fortawesome/free-solid-svg-icons';
import './Home.css'

const Home = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
      <div className='container-fluid'>
 {/* --------------------for desktop-------------   */}
    <div className=''>  
      <div className='row'>
        <div className='col-2  d-lg-block d-none '>
            <div className='h-100 side-menu' style={{backgroundColor:'#F8F9FA',paddingTop:"20px"}}>
            <div className='ms-3'>
            <li><FontAwesomeIcon icon={faHome} /> <Link to=""><span style={{color:"#0D6EFD"}}>Instant</span></Link></li>
            <li><FontAwesomeIcon icon={faSignal} /> <Link to="">Schcdule</Link></li>
            <li><FontAwesomeIcon icon={faSignal} /> <Link to="">Usage</Link></li>
            </div>
            <div className='user '>
                <div className='d-flex align-items-center my-1'>
                <FontAwesomeIcon className='ms-2 me-2' icon={faUser} style={{color:'white',backgroundColor:"#CFD4D9",padding:"10px",borderRadius:"50px",fontSize:"15px"}} /> 
                <h6 className='mt-2 me-4'>User Name</h6>
            <FontAwesomeIcon icon={faCaretDown} style={{color:'#6C757D'}}/> 
                </div>
            </div>
            </div>
        </div>
{/* --------------------for Mobile-------------   */}
    <div className='col-12  mt-3 d-lg-none d-block'>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title></Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <li><FontAwesomeIcon icon={faHome} /> <Link to=""><span style={{color:"#0D6EFD"}}>Instant</span></Link></li>
            <li><FontAwesomeIcon icon={faSignal} /> <Link to="">Schcdule</Link></li>
            <li><FontAwesomeIcon icon={faSignal} /> <Link to="">Usage</Link></li>
        </Offcanvas.Body>
      </Offcanvas>
  </div>
      <div className='col-12 col-md-10  py-3'>
        <div className='row align-items-center top-menu '>
            <div className=' col-4 text-end'>
                <button className='home-btn'>URL</button>
            </div>   
            <div className='col-4 text-center '>
                <h2 style={{color:'#0D6EFD',fontSize:'16px'}}>Text</h2>      
            </div>   
            <div className='col-4 d-flex align-items-center text-center'>
                <h2 style={{color:'black',fontSize:'16px'}}>Document</h2>
                <div className='d-lg-none d-block ms-5 '>
            <Button  onClick={handleShow} style={{padding:0,backgroundColor:"transparent",border:'0'}}>
            <FontAwesomeIcon icon={faBars} style={{color:'black'}} /> 
            </Button>
            </div>
        </div>
        </div> 
        <div className='row justify-content-center'style={{marginTop:"55px"}}>
            <div className='col-7'>
                <div className='d-flex'>
                <input type="text" className="form-control me-3" id="exampleFormControlInput1" />
                <div className='add-btn d-flex align-items-center'>
                <FontAwesomeIcon icon={faPlusCircle} />
                <button > Add</button>
                </div>
                </div>
            <button  type="submit" className="submit-btn mb-4 d-block ms-auto">Confirm identity</button>
            </div>
            <div className='col-12'>
            <div className='tables'>
                <h2>Recent Summaries</h2>
            <div class="table-responsive">
            <table class="table table-striped">
            <thead>
            <tr>
            <th scope="col">#</th>
            <th scope="col">URL</th>
            <th scope="col">Location</th>
            <th scope="col">Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
            <th scope="row">1234</th>
            <td style={{color:'#0D6EFD'}}>dolores.chambers@example.com</td>
            <td>Lafayette, California</td>
            <td>$5.22</td>
            </tr>
            <tr>
            <th scope="row">1234</th>
            <td style={{color:'#0D6EFD'}}>denna.curtis@example.com</td>
            <td>Thornton</td>
            <td>$6.48</td>
            </tr>
            <tr>
            <th scope="row">1234</th>
            <td style={{color:'#0D6EFD'}}> bill.sanders@example.com</td>
            <td>Stockton, New Hampshire</td>
            <td>$8.99</td>
            </tr>
            <tr>
            <th scope="row">1234</th>
            <td style={{color:'#0D6EFD'}}> debra.holt@example.com</td>
            <td>Syracuse, Connecticut</td>
            <td>$14.81</td>
            </tr>
            <tr>
            <th scope="row">1234</th>
            <td style={{color:'#0D6EFD'}}> natahan.robert@example.com </td>
            <td>Lansing, Illinois</td>
            <td>$11.70</td>
            </tr>
            <tr>
            <th scope="row">1234</th>
            <td style={{color:'#0D6EFD'}}> michelle.rivera@example.com</td>
            <td>Kent, Utah</td>
            <td>$17.84</td>
            </tr>
            </tbody>
            </table>
            </div>
            </div>
        </div> 
      </div>
      </div>
    </div>
     </div>
     </div>
    );
};

export default Home;