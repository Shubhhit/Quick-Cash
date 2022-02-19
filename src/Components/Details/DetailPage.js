import React,{useState} from 'react'
import {Row,Col,Image,ListGroup,Card,Button, Container} from 'react-bootstrap';
import Iphone12 from '../../Products/White13.svg';
import './DetailsPage.css';
import RedXR from '../../Products/RedXR.svg';
import White13 from '../../Products/White13.svg';
import BlueXR from '../../Products/BlueXR.svg';
import White12 from '../../Products/White12.svg';
import Purple12 from '../../Products/Purple12.svg';
import Iphone13 from '../../Products/Iphone12.svg';
import IphoneBlack13 from '../../Products/IphoneBlack13.svg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const state = {
  responsive: {
    0: {
      items: 1,
    },
    450: {
      items: 2,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 1,
    },
  },
};

const DetailPage = () => {

  const [counter, setCounter] = useState(1)

const increment = () => {
    setCounter(counter + 1)
}

const decrement = () => {
    setCounter ( counter - 1)
}

  return (
    <div className='details'>
      <Container>
        <Row>
          <Col>
          <img src={Iphone13}></img>
          </Col>

          <Col>
          <h4 className='mb-4 pb-2'>iPhone 12 Pro</h4>
          <hr className='horizon_line'/>
          <div className='d-flex'>
          <span><p style={{color:"#1F34E9" , fontWeight:"600" , fontSize:"20px"}}>₹65,999.00</p></span>
          <span className='ms-2' style={{color:"grey" , fontWeight:"400" , fontSize:"18px"}}><del>₹84,900</del></span>
          <span className='ms-2' style={{color:"red" , fontWeight:"500" , fontSize:"18px"}}>22% Off</span>
          </div>
          
          <Row>
            <Col>
            <p>Availability:</p>
            </Col>
            <Col md={7}>
            <p>In stock</p>
            </Col>
          </Row>

          <Row>
            <Col>
            <p>Category:</p>
            </Col>
            <Col md={7}>
            <p>Accessories</p>
            </Col>
          </Row>

          <p>Free shipping</p>
          <hr className='horizon_line'/>
          <Row>
            <Col>
            <p>Storage Size</p>
            </Col>
            <Col md={7}>
            <select style={{width:"100px", height:"30px"}}>
            <option>64</option>
            <option>128</option>
            <option>256</option>
            <option>512</option>
          </select>
            </Col>
          </Row>
          <hr className='horizon_line'/>
          
          <Row>
            <Col>
            <div class="wrapper1">
            <span className='minus' onClick={decrement}>-</span>
            <span className='num'>{counter}</span>
            <span className='plus' onClick={increment}>+</span>
            </div>
            </Col>
            <Col>
            <button className='details_add_card'>Add To Cart</button>
            </Col>
            <Col>
            <button className='product_buy_now'>Buy Now</button>
            </Col>
          </Row>
          </Col>
          
          <Col lg={3}>
          <h5 style={{color:"#1F34E9"}}>BEST <br/>SELLIING</h5>
          
          
          <OwlCarousel className='owl-theme' margin={40}
                autoplay
                // nav={true}
                dots={true}
                items={1}
                touchDrag={true}
                lazyLoad={true}
                loop
                responsive={state.responsive}>
                <div style={{border:"1px solid grey", padding:"10px 10px"}}>
                  <img src={IphoneBlack13}></img>
                  <h4 style={{textAlign:"center"}}>Apple iPhone 13 Mini (128GB)</h4>
                    <div className='d-flex' style={{marginLeft:"50px"}}>
                    <span><p style={{color:"#1F34E9" , fontWeight:"600" , fontSize:"20px"}}>₹65,999.00</p></span>
                    <span className='ms-2' style={{color:"grey" , fontWeight:"400" , fontSize:"18px"}}><del>₹84,900</del></span>
                    </div>
                </div>

                <div style={{border:"1px solid grey", padding:"10px 10px"}}>
                  <img src={Iphone13}></img>
                  <h4 style={{textAlign:"center"}}>Apple iPhone 12 (128GB)</h4>
                    <div className='d-flex' style={{marginLeft:"50px"}}>
                    <span><p style={{color:"#1F34E9" , fontWeight:"600" , fontSize:"20px"}}>₹65,999.00</p></span>
                    <span className='ms-2' style={{color:"grey" , fontWeight:"400" , fontSize:"18px"}}><del>₹84,900</del></span>
                    </div>
                </div>
            </OwlCarousel>
          </Col>
        </Row>
      </Container>
        <Container>
        <h4 className='details_product'>Product<br/> Infomation</h4>
        <hr className='hr_line'/>
        <ul>
            <li>6.1-inch (15.5 cm diagonal) Super Retina XDR display</li>
            <li>Ceramic Shield, tougher than any smartphone glass</li>
            <li>A14 Bionic chip, the fastest chip ever in a smartphone</li>
            <li>Advanced dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Deep Fusion, Smart HDR 3, 4K Dolby Vision HDR recording</li>
            <li>12MP TrueDepth front camera with Night mode, 4K Dolby Vision HDR recording</li>
            <li>Industry-leading IP68 water resistance</li>
            <li>Supports MagSafe accessories for easy attach and faster wireless charging</li>
            <li>iOS with redesigned widgets on the Home screen, all-new App Library, App Clips and more</li>
        </ul>
        </Container>

        <section className="explore section bg-light " id="explore">
        <div className="container">
          <div className="row position-relative">
            <div className="col-lg-12 p-0">
              <nav className="">
                {/* <div className="heading float-start mt-3"> */}
                  <h2 className="related-products mt-3">RELATED PRODUCTS</h2>
                {/* </div> */}
              </nav>
            </div>
            <div className="tab-content pt-4" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                <div className="row">

                  <div className="col-lg-3 mt-4">
                    <div className="tab-contentt  border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image ">
                        <img src={RedXR} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-boldd">Apple iPhone XR (128GB) - Midnight</h6>
                        <div className="">
                          {/* <p className="text-muted">8 in stock</p> */}
                          <h5 className="ms-auto text-muted-prices">₹ <span>74,999.00
                              </span><span className='price-off'><del>₹ 84,900</del></span></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-contentt  border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image ">
                        <img src={White12} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-boldd">Apple iPhone 12 (64GB) -- Midnight</h6>
                        <div className="">
                          {/* <p className="text-muted">8 in stock</p> */}
                          <h5 className="ms-auto text-muted-prices">₹ <span>89,999.00
                              </span><span className='price-off'><del>₹ 99,999</del></span></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-contentt  border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image ">
                        <img src={White13} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-boldd">Apple iPhone 13 Mini (128GB) - Midnight</h6>
                        <div className="">
                          {/* <p className="text-muted">8 in stock</p> */}
                          <h5 className="ms-auto text-muted-prices">₹ <span>85,999.00
                              </span><span className='price-off'><del>₹ 95,900</del></span></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-contentt  border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image ">
                        <img src={Purple12} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-boldd">Apple iPhone 12 (128GB) - Midnight</h6>
                        <div className="">
                          {/* <p className="text-muted">8 in stock</p> */}
                          <h5 className="ms-auto text-muted-prices">₹ <span>34,999.00
                              </span><span className='price-off'><del>₹ 84,900</del></span></h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
    </div>
  )
}

export default DetailPage