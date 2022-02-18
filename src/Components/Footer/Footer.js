import React from 'react';
import './Footer.css';
import QuickCash from '../../Image/Logo1.svg';
import { Link } from 'react-router-dom';
import {Row, Col, Container} from 'react-bootstrap';
import Insta from '../../Image/Insta.svg';
import Browser from '../../Image/Browser.svg';
import Twit from '../../Image/Twit.svg';
import Youtube from '../../Image/Youtube.svg';

const Footer = () => {
  return (
    <div className='footer'>
      <img src={QuickCash} className="quickcash_logo"></img>
      <div className='footer_nav'>
        {/* <ul className='footer_flex'> */}
        <Container>
          <Row className='footer_line'>
            
            <Col>
            </Col>
            <Col lg={5}>
            <ul className='footer_flex'>
            <Link to="/"><li className='li_style'>Home</li></Link>
            <Link to="/"><li className='li_style'>About</li></Link>
            <Link to="/"><li className='li_style'>Sell Now</li></Link>
            <Link to="/"><li className='li_style'>Help</li></Link>
            <Link to="/"><li className='li_style'>Privacy Policy</li></Link>
            </ul>
            </Col>
            <Col>
            </Col>
         
          </Row>

          <Row>
              <Col>
              <p className='copy_write'>© 2021 QuickCash. All rights reserved</p>
              </Col>
              <Col></Col>
              <Col lg={2}>
              <img src={Insta} className="icons"></img>
              <img src={Browser} className="icons"></img>
              <img src={Twit} className="icons"></img>
              <img src={Youtube} className="icons"></img>
              </Col>
          </Row>
          
     
          </Container>
         
     
      </div>
      
    </div>
  )
}

export default Footer