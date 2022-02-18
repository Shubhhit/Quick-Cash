import React from 'react';
import './HomePage.css';
import {Row, Col, Container,Card,Button} from 'react-bootstrap';
import Sell from '../../Image/Sell.svg';
import { ImArrowRight2 } from 'react-icons/im';
import Watch from '../../Image/Watch.svg';
import Laptop from '../../Image/Laptop.svg';
import Bag from '../../Image/Bag.svg';
import NFT from '../../Image/NFT.svg';
import Check from '../../Image/Check.svg';

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
    </div>
  )
}

export default HomePage