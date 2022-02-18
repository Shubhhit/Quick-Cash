import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import './StorePage.css';
import Product from "../../Image/Slider1.svg";
// import ProductFooter from '../../Image/ProductFooter.svg';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import RedXR from '../../Products/RedXR.svg';
import White13 from '../../Products/White13.svg';
import BlueXR from '../../Products/BlueXR.svg';
import White12 from '../../Products/White12.svg';
import Purple12 from '../../Products/Purple12.svg';
import { BsSearch } from 'react-icons/bs';

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
        items: 1.8,
      },
    },
  };

const StorePage = () => {

  return (
    <div>
      <div className="store_bg_color">
        <Container>
          <Row>
            <Col lg={1}></Col>
            <Col lg={5}>
              <h1 className="store_h1">Explore our Largest <span style={{color:"#1F34E9"}}>Marketplace.</span></h1>
              <p>
                A New Place To Collect and Connect Across The World. It’s come
                with a creative design, homepage options, different explore and
                digital asset pages and items.
              </p>
              <div class='search-box'>
        <form class='search-form'>
        <div class="p-1 bg-light rounded rounded-pill shadow-sm mb-4">
            <div class="input-group">
              <input type="search" placeholder="What're you searching for?" aria-describedby="button-addon1" class="form-control border-0 bg-light"/>
              <div class="input-group-append">
                <button id="button-addon1" type="submit" class="btn btn-link text-primary"><i class="fa fa-search search_bar"></i></button>
              </div>
            </div>
          </div>
        </form>
      </div>
              <Row>
                  <Col>
                    <h4 className="rates">32K</h4>
                    <h6 style={{color:"#1F34E9"}}>Luxury Bags</h6>
                  </Col>
                  <Col>
                    <h4 className="rates">20K</h4>
                    <h6 style={{color:"#1F34E9"}}>Luxury Watches</h6>
                  </Col>
                  <Col>
                    <h4 className="rates">10K</h4>
                    <h6 style={{color:"#1F34E9"}}>Electronics</h6>
                  </Col>
              </Row>
            </Col>
            <Col lg={6}>
            <OwlCarousel className='owl-theme' margin={40}
                autoplay
                nav={false}
                dots={true}
                items={1}
                touchDrag={true}
                lazyLoad={true}
                loop
                responsive={state.responsive}>
                <div class='item'>
                    <div className="p_name_price">
                        <h6>Apple iPhone XR (64GB)</h6>
                        <h5>₹37,999.00</h5>
                        <button className="buy_btn">Buy</button>
                    </div>
                    
                    <img src={Product} className="product"></img>
                    
                </div>
                <div class='item'>
                    <div className="p_name_price">
                          <h6>Apple iPhone XR (64GB)</h6>
                          <h5>₹37,999.00</h5>
                          <button className="buy_btn">Buy</button>
                    </div>
                    <img src={Product} className="product"></img>
                   
                </div>
                <div class='item'>
                    <div className="p_name_price">
                          <h6>Apple iPhone XR (64GB)</h6>
                          <h5>₹37,999.00</h5>
                          <button className="buy_btn">Buy</button>
                    </div>
                    <img src={Product} className="product"></img>
                    
                </div>
                <div class='item'>
                    <div className="p_name_price">
                          <h6>Apple iPhone XR (64GB)</h6>
                          <h5>₹37,999.00</h5>
                          <button className="buy_btn">Buy</button>
                    </div>
                    <img src={Product} className="product"></img>
                </div>
            </OwlCarousel>
            </Col>

          </Row>
        </Container>
      </div>

      <div>
        <section className="explore section bg-light px-4" id="explore">
        {/* start container */}
        <div className="container">
          <div className="row position-relative">
            <div className="col-lg-12 p-0">
              <nav className="mt-5">
                <div className="heading float-start mt-3">
                  <h2 className="fw-explore">Explore</h2>
                </div>
                <div className="nav nav-tabs align-items-center justify-content-center row" id="nav-tab" role="tablist">
                  <button className="nav-link active text-uppercase col-md-2" id="nav-all-tab" data-bs-toggle="tab" data-bs-target="#nav-all" type="button" role="tab" aria-controls="nav-all" aria-selected="true"><span className="icon"> All
                    </span></button>
                  <button className="nav-link text-uppercase col-md-2" id="nav-games-tab" data-bs-toggle="tab" data-bs-target="#nav-games" type="button" role="tab" aria-controls="nav-games" aria-selected="true"><span className="icon">  Luxury Bags
                    </span></button>
                  <button className="nav-link text-uppercase col-md-2" id="nav-art-tab" data-bs-toggle="tab" data-bs-target="#nav-art" type="button" role="tab" aria-controls="nav-art" aria-selected="true"><span className="icon">Luxury Watches
                    </span></button>
                  <button className="nav-link text-uppercase col-md-2" id="nav-memes-tab" data-bs-toggle="tab" data-bs-target="#nav-memes" type="button" role="tab" aria-controls="nav-memes" aria-selected="true"><span className="icon">Electronics
                    </span></button>
                  <button className="nav-link text-uppercase col-md-2" id="nav-Collection-tab" data-bs-toggle="tab" data-bs-target="#nav-Collection" type="button" role="tab" aria-controls="nav-Collection" aria-selected="true"><span className="icon"> Digital Assets
                    </span></button>
                </div>
              </nav>
            </div>
            <div className="tab-content mt-5 pt-4" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                <div className="row">
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content  border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image ">
                        <img src={White13} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone 13 Mini (64GB)  (Product) White</h6>
                        <div className=""> 
                        {/* d-flex */}
                          {/* <p className="text-muted">6 in stock</p> */}
                          <h5 className="ms-auto text-muted-price">Price : <span>49,999.00
                            </span></h5>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex mt-3 align-items-center">
                          <div>
                            <button className="cart_btn">Add To Cart</button>
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="buy_bttn">Buy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content  border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image ">
                        <img src={RedXR} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone XR (64GB)  (Product) RED</h6>
                        <div className="">
                          {/* <p className="text-muted">8 in stock</p> */}
                          <h5 className="ms-auto text-muted-price">Price : <span>34,999.00
                              </span></h5>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex mt-3 align-items-center">
                          <div>
                          <button className="cart_btn">Add To Cart</button>
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="buy_bttn">Buy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image">
                        <img src={BlueXR} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone XR (64GB)  (Product) BLUE</h6>
                        <div className="">
                          {/* <p className="text-muted">3 in stock</p> */}
                          <h5 className="ms-auto text-muted-price">Price : <span>35,999.00
                              </span></h5>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex mt-3 align-items-center">
                          <div>
                          <button className="cart_btn">Add To Cart</button>
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="buy_bttn">Buy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image">
                        <img src={White12} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone 12 (64GB)  (Product) WHITE</h6>
                        <div className="">
                          {/* <p className="text-muted">2 in stock</p> */}
                          <h5 className="ms-auto text-muted-price">Price : <span>54,999.00
                              </span></h5>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex mt-3 align-items-center">
                          <div>
                          <button className="cart_btn">Add To Cart</button>
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="buy_bttn">Buy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image">
                        <img src={Purple12} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone 12 (64GB)  (Product) PURPLE</h6>
                        <div className="">
                          {/* <p className="text-muted">2 in stock</p> */}
                          <h5 className="ms-auto text-muted-price">Price : <span>53,999.00
                              </span></h5>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex mt-3 align-items-center">
                          <div>
                          <button className="cart_btn">Add To Cart</button>
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="buy_bttn">Buy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image">
                        <img src={BlueXR} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone XR (64GB)  (Product) BLUE</h6>
                        <div className="">
                          {/* <p className="text-muted">3 in stock</p> */}
                          <h5 className="ms-auto text-muted-price">Price : <span>35,999.00
                              </span></h5>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex mt-3 align-items-center">
                          <div>
                          <button className="cart_btn">Add To Cart</button>
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="buy_bttn">Buy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image">
                        <img src={White13} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone 13 Mini (64GB)  (Product) White</h6>
                        <div className=""> 
                        {/* d-flex */}
                          {/* <p className="text-muted">6 in stock</p> */}
                          <h5 className="ms-auto text-muted-price">Price : <span>49,999.00
                            </span></h5>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex mt-3 align-items-center">
                          <div>
                            <button className="cart_btn">Add To Cart</button>
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="buy_bttn">Buy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image">
                        <img src={RedXR} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone XR (64GB)  (Product) RED</h6>
                        <div className="">
                          {/* <p className="text-muted">8 in stock</p> */}
                          <h5 className="ms-auto text-muted-price">Price : <span>34,999.00
                              </span></h5>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex mt-3 align-items-center">
                          <div>
                          <button className="cart_btn">Add To Cart</button>
                            </div>
                          <div className="bid-button ms-auto">
                            <button className="buy_bttn">Buy</button>
                          </div>
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

        <section className="explore section bg-light " id="explore">
        <div className="container">
          <div className="row position-relative">
            <div className="col-lg-12 p-0">
              <nav className="">
                <div className="heading float-start mt-3">
                  <h2 className="fw-explore">Discover Best Products</h2>
                </div>
              </nav>
            </div>
            <div className="tab-content pt-4" id="nav-tabContent">
              <div className="tab-pane fade show active" id="nav-all" role="tabpanel" aria-labelledby="nav-all-tab">
                <div className="row">

                  <div className="col-lg-3 mt-4">
                    <div className="tab-content  border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image ">
                        <img src={RedXR} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone XR (64GB)  (Product) RED</h6>
                        <div className="">
                          {/* <p className="text-muted">8 in stock</p> */}
                          <h5 className="ms-auto text-muted-price">Price : <span>34,999.00
                              </span></h5>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex mt-3 align-items-center">
                          <div>
                          <button className="cart_btn">Add To Cart</button>
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="buy_bttn">Buy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image">
                        <img src={BlueXR} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone XR (64GB)  (Product) BLUE</h6>
                        <div className="">
                          {/* <p className="text-muted">3 in stock</p> */}
                          <h5 className="ms-auto text-muted-price">Price : <span>35,999.00
                              </span></h5>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex mt-3 align-items-center">
                          <div>
                          <button className="cart_btn">Add To Cart</button>
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="buy_bttn">Buy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image">
                        <img src={White12} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone 12 (64GB)  (Product) WHITE</h6>
                        <div className="">
                          {/* <p className="text-muted">2 in stock</p> */}
                          <h5 className="ms-auto text-muted-price">Price : <span>54,999.00
                              </span></h5>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex mt-3 align-items-center">
                          <div>
                          <button className="cart_btn">Add To Cart</button>
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="buy_bttn">Buy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                      </div>
                      <div className="card-image">
                        <img src={Purple12} alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone 12 (64GB)  (Product) PURPLE</h6>
                        <div className="">
                          {/* <p className="text-muted">2 in stock</p> */}
                          <h5 className="ms-auto text-muted-price">Price : <span>53,999.00
                              </span></h5>
                        </div>
                        {/* <hr /> */}
                        <div className="d-flex mt-3 align-items-center">
                          <div>
                          <button className="cart_btn">Add To Cart</button>
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="buy_bttn">Buy</button>
                          </div>
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
    </div>
  );
};

export default StorePage;
