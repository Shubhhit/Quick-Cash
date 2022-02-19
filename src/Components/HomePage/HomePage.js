import React from 'react';
import './HomePage.css';
import {Row, Col, Container,Card,Accordion,Carousel} from 'react-bootstrap';
import Sell from '../../Image/Sell.svg';
import { ImArrowRight2 } from 'react-icons/im';
import Watch from '../../Image/Watch.svg';
import Laptop from '../../Image/Laptop.svg';
import Bag from '../../Image/Bag.svg';
import NFT from '../../Image/NFT.svg';
import Check from '../../Image/Check.svg';
import Circle from '../../Image/Circle.svg';
import Subscribe from '../../Image/Subscribe.svg';
import Banner from '../../Image/Banner.svg';
import Boy from '../../Image/Boy.svg';
import Background from '../../Image/Background.svg';
import Enquire from '../../Image/Image.svg';
import Assess from '../../Image/Image1.svg';
import Collect from '../../Image/Image2.svg';

const HomePage = () => {
  return (
    <div>
        <Container className='home-top-margin'>
        <Row>
            
            <Col className='margin-top'>
            <h1 className='smart-way-h1'>A Smart Way <br/><span className='text-color'>Sell Your Device</span><br/>to with us</h1>
            <p className='smart-way-p'>Sell your item for best price & get instant cash</p>
            <button className='sell-btn'>Sell Now<ImArrowRight2 className='arrow'/></button>
            </Col>

            <Col>
            <img src={Sell} className="sell-img"></img>
            </Col>
        
        </Row>
        </Container>

        <Container>
        <h4 className='our_service'>Our Services</h4>
        <h1 style={{textAlign:'center'}}>What you would like to sell</h1>
        <Row className='service_card'>
            <Col lg={3}>
                <Card>
                <Card.Img variant="top" src={Watch} className="services_img"/>
                <Card.Body>
                    <Card.Title className="text_center">Luxury Watches</Card.Title>
                    
                    <button className="arrow_btn"><ImArrowRight2/></button>
                </Card.Body>
                </Card>
            </Col>

            <Col lg={3}>
                <Card>
                <Card.Img variant="top" src={Bag} className="services_img"/>
                <Card.Body>
                    <Card.Title className="text_center">Luxury Bag</Card.Title>
                    
                    <button className="arrow_btn"><ImArrowRight2/></button>
                </Card.Body>
                </Card>
            </Col>

            <Col lg={3}>
                <Card>
                <Card.Img variant="top" src={Laptop} className="services_img"/>
                <Card.Body>
                    <Card.Title className="text_center">Electronics</Card.Title>
                    
                    <button className="arrow_btn"><ImArrowRight2/></button>
                </Card.Body>
                </Card>
            </Col>

            <Col lg={3}>
                <Card>
                <Card.Img variant="top" src={NFT} className="services_img"/>
                <Card.Body>
                    <Card.Title className="text_center">Digital Assets</Card.Title>
                    
                    <button className="arrow_btn"><ImArrowRight2/></button>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>

        <div>
        
            <Container>
                <Row>
                    <Col>
                        <img src={Boy} className="boy"></img>
                        <img src={Background} className="background"></img>
                    </Col>

                    <Col className='banner-contents'>
                        <h1>How it works</h1>
                        <div className='d-flex mt-5'>
                        <span><img src={Enquire}></img></span>
                        <span><h4 className='mt-3 ms-4'>Enquire</h4>
                        <p className=' ms-4'>Provide details of your asset</p></span>
                        </div>
                        
                        <div className='d-flex mt-5'>
                        <span><img src={Assess}></img></span>
                        <span><h4 className='mt-3 ms-4'>Assess</h4>
                        <p className=' ms-4'>Your device will be assessed for condition</p></span>
                        </div>

                        <div className='d-flex mt-5'>
                        <span><img src={Collect}></img></span>
                        <span><h4 className='mt-3 ms-4'>Collect your cash</h4>
                        <p className=' ms-4'>Visit the nearest store or use our home </p></span>
                        </div>
                    </Col>
                </Row>
                
            </Container>
            <img src={Banner}></img>
        </div>

        <div className='views'>
        <Container>
            <Row>
                <Col lg={3}>
                    <Card className="veiws_card1">
                    <Card.Body>
                        <Card.Title className="text_center"><h1 className="veiws_color1">70k+</h1></Card.Title>
                        <p>We have more than customers</p>
                        </Card.Body>
                    </Card>

                    <Card className="veiws_card11">
                    <Card.Body>
                        <Card.Title className="text_center"><h1 className="veiws_color2">100M+</h1></Card.Title>
                        <p>People who one happy because of our service</p>
                        </Card.Body>
                    </Card>
                </Col>
                <Col lg={3}>
                    <Card className="veiws_card2">
                    <Card.Body>
                        <Card.Title className="text_center"><h1 className="veiws_color2">100+</h1></Card.Title>
                        <p>Services we have completed</p>
                        </Card.Body>
                    </Card>

                    <Card className="veiws_card22">
                    <Card.Body>
                        <Card.Title className="text_center"><h1 className="veiws_color1">200+</h1></Card.Title>
                        <p>Support form world-renowned companies</p>
                        </Card.Body>
                    </Card>
                </Col>

                <Col lg={6} className="satisfaction_width">
                    <h3 className="Customer_satisfaction">Customer satisfaction is our first priority</h3>
                    <p className="Customer_satisfaction_p">We serve many customers, ranging from small businesses, medium entrepreneus to world 
                        renowned companies. Their satisfaction is our pleasure. We strive to provide the best 
                        service by.
                    </p>
                    <div className='check_div'>
                    <img src={Check}></img><small style={{marginLeft:"15px"}}>Provide idea support from our creative team</small><br/><br/>
                    <img src={Check}></img><small style={{marginLeft:"15px"}}>Provide attractive and professional design services</small><br/><br/>
                    <img src={Check}></img><small style={{marginLeft:"15px"}}>Support for service 24 hours a week</small><br/><br/>
                    <img src={Check}></img><small style={{marginLeft:"15px"}}>Helping our customers to grow their business</small><br/><br/>
                    <img src={Check}></img><small style={{marginLeft:"15px"}}>Provide support to market products through online marketplace</small>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
        
        <div>
 
        <Carousel>
            <Carousel.Item interval={1000}>
            <div style={{backgroundColor:"#1F34E9" , height:"400px"}}></div>
                <Carousel.Caption>
                <h3>We are serious about providing our best services to all the customers we help, 
                    Customers satisfaction is our number one priority.</h3>
                <h6>Robert Fox</h6>
                <p>CEO & Head of Products</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
            <div style={{backgroundColor:"#1F34E9" , height:"400px"}}></div>
                <Carousel.Caption>
                <h3>We are serious about providing our best services to all the customers we help, 
                    Customers satisfaction is our number one priority.</h3>
                <h6>Robert Fox</h6>
                <p>CEO & Head of Products</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div style={{backgroundColor:"#1F34E9" , height:"400px"}}></div>
                <Carousel.Caption>
                <h3>We are serious about providing our best services to all the customers we help, 
                    Customers satisfaction is our number one priority.</h3>
                <h6>Robert Fox</h6>
                <p>CEO & Head of Products</p>
                </Carousel.Caption>
            </Carousel.Item>
            </Carousel>  
        </div>

        <div>
            <img src={Circle} className="circle_right"></img>
            <h4 className='frequently_h4'>Frequently Ask Option</h4>
            <h1 className='frequently_h1'>Some of our frequently asked questions</h1>
            <Container>
            <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>What are the services provided to consumers? </Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>What are the services provided to consumers? </Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>What are the services provided to consumers? </Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>What are the services provided to consumers? </Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
                <Accordion.Header>What are the services provided to consumers? </Accordion.Header>
                <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                est laborum.
                </Accordion.Body>
            </Accordion.Item>
            </Accordion>
            </Container>
        </div>  

        <div className='subscribe'>
            <h1 className='subscribe_h1'>Subscribe to Newsletter</h1>
            <div className='email_field'>
                <input placeholder='Your work email address' className='email_input'/>
                <button className='send_btn'>Send</button>
            </div>    
            <Container><img src={Subscribe} className="subscribe"></img></Container>                  
         </div>      
    </div>
  )
}

export default HomePage