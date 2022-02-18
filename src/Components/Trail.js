import React from 'react'

const Trail = () => {
  return (
    <div>
        <section className="explore section bg-light px-4" id="explore">
        {/* start container */}
        <div className="container">
          <div className="row position-relative">
            <div className="col-lg-12 p-0">
              <nav className="mt-5">
                <div className="heading float-start mt-3">
                  <h2 className="fw-bold">Explore</h2>
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
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        {/* <div className="avatar-xs">
                          <img src="images/slider/user/img-1.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">@Deniva_Pannini</h6> */}
                      </div>
                      <div className="card-image mt-3">
                        <img  alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Apple iPhone 13 Mini (64GB)  (Product) White</h6>
                        <div className=""> 
                        {/* d-flex */}
                          {/* <p className="text-muted">6 in stock</p> */}
                          <h5 className="ms-auto text-muted">Price : <span className="text-success">37,999.00
                            </span></h5>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <button>Add To Cart</button>
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Buy</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-2.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        {/* <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">@Keven_Chrisi</h6> */}
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-2.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Liguid Wave</h6>
                        <div className="d-flex">
                          <p className="text-muted">8 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">2.15
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-3.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        {/* <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">@David_Alex</h6> */}
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-3.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Maccky Alex</h6>
                        <div className="d-flex">
                          <p className="text-muted">3 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">1.20
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-4.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        {/* <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">@Steva_Robart</h6> */}
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-4.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">The Chirstoper</h6>
                        <div className="d-flex">
                          <p className="text-muted">2 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">2.30
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-5.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        {/* <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">@jimmy_dom</h6> */}
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-5.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">The Chirstoper</h6>
                        <div className="d-flex">
                          <p className="text-muted">2 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">2.30
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-6.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        {/* <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">@mickel_fenn</h6> */}
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-6.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">The Chirstoper</h6>
                        <div className="d-flex">
                          <p className="text-muted">2 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">2.30
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-1.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        {/* <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">
                          @kristian_fel</h6> */}
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-7.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">The Chirstoper</h6>
                        <div className="d-flex">
                          <p className="text-muted">2 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">2.30
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-8.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        {/* <h6 className="mb-0 ms-2 fw-semibold text-muted f-14">@Deniv_Pannini</h6> */}
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-8.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">The Chirstoper</h6>
                        <div className="d-flex">
                          <p className="text-muted">2 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">2.30
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="col-lg-12">
                      <div className="text-center">
                        <button className="btn btn-white text-dark shadow"><i className="mdi mdi-restart f-18 align-middle" /> View All Item</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-games" role="tabpanel" aria-labelledby="nav-games-tab">
                <div className="row">
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-1.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        {/* <h6 className="mb-0 ms-3 fw-bold text-muted">@Deniva_Pannini</h6> */}
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-1.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Robotic Body Art</h6>
                        <div className="d-flex">
                          <p className="text-muted">6 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">1.53
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4 ">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-2.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="mb-0 ms-3 fw-bold text-muted">@Keven_Chrisi</h6>
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-4.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Liguid Wave</h6>
                        <div className="d-flex">
                          <p className="text-muted">8 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">2.15
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-5.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="mb-0 ms-3 fw-bold text-muted">@David_Alex</h6>
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-8.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Maccky Alex</h6>
                        <div className="d-flex">
                          <p className="text-muted">3 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">1.20
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-6.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="mb-0 ms-3 fw-bold text-muted">@Deniv_Pannini</h6>
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-1.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">The Chirstoper</h6>
                        <div className="d-flex">
                          <p className="text-muted">2 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">2.30
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="col-lg-12">
                      <div className="text-center">
                        <button className="btn btn-white text-dark shadow"><i className="mdi mdi-restart f-18 align-middle" /> View All Item</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-art" role="tabpanel" aria-labelledby="nav-art-tab">
                <div className="row">
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-1.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="mb-0 ms-3 fw-bold text-muted">@Deniva_Pannini</h6>
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-2.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Robotic Body Art</h6>
                        <div className="d-flex">
                          <p className="text-muted">6 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">1.53
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-2.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="mb-0 ms-3 fw-bold text-muted">@Keven_Chrisi</h6>
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-6.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Liguid Wave</h6>
                        <div className="d-flex">
                          <p className="text-muted">8 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">2.15
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-8.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="mb-0 ms-3 fw-bold text-muted">@David_Alex</h6>
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-7.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Maccky Alex</h6>
                        <div className="d-flex">
                          <p className="text-muted">3 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">1.20
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="col-lg-12">
                      <div className="text-center">
                        <button className="btn btn-white text-dark shadow"><i className="mdi mdi-restart f-18 align-middle" /> View All Item</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-memes" role="tabpanel" aria-labelledby="nav-memes-tab">
                <div className="row">
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-1.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="mb-0 ms-3 fw-bold text-muted">@Deniva_Pannini</h6>
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-1.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Robotic Body Art</h6>
                        <div className="d-flex">
                          <p className="text-muted">6 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">1.53
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-2.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="mb-0 ms-3 fw-bold text-muted">@Keven_Chrisi</h6>
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-4.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Liguid Wave</h6>
                        <div className="d-flex">
                          <p className="text-muted">8 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">2.15
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-3.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="mb-0 ms-3 fw-bold text-muted">@David_Alex</h6>
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-7.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Maccky Alex</h6>
                        <div className="d-flex">
                          <p className="text-muted">3 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">1.20
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="col-lg-12">
                      <div className="text-center">
                        <button className="btn btn-white text-dark shadow"><i className="mdi mdi-restart f-18 align-middle" /> View All Item</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="nav-Collection" role="tabpanel" aria-labelledby="nav-Collection-tab">
                <div className="row">
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-1.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="mb-0 ms-3 fw-bold text-muted">@Deniva_Pannini</h6>
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-5.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Robotic Body Art</h6>
                        <div className="d-flex">
                          <p className="text-muted">6 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">1.53
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 mt-4">
                    <div className="tab-content p-4 border-0">
                      <div className="header d-flex align-items-center justify-content-start">
                        <div className="avatar-xs">
                          <img src="images/slider/user/img-8.jpg" alt="" className="img-fluid rounded-circle" />
                        </div>
                        <h6 className="mb-0 ms-3 fw-bold text-muted">@David_Alex</h6>
                      </div>
                      <div className="card-image mt-3">
                        <img src="images/explore/img-3.png" alt="" className="img-fluid" />
                      </div>
                      <div className="body-content mt-3">
                        <h6 className="fw-bold">Maccky Alex</h6>
                        <div className="d-flex">
                          <p className="text-muted">3 in stock</p>
                          <p className="ms-auto text-muted">Price : <span className="text-success">1.20
                              ETH</span></p>
                        </div>
                        <hr />
                        <div className="d-flex mt-3 align-items-center">
                          <div className="history">
                            <i className="mdi mdi-restart f-20 align-middle" />View History
                          </div>
                          <div className="bid-button ms-auto">
                            <button className="btn btn-sm btn-primary rounded-pill">Bid</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-5">
                    <div className="col-lg-12">
                      <div className="text-center">
                        <button className="btn btn-white text-dark shadow"><i className="mdi mdi-restart f-18 align-middle" /> View All Item</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end container */}
      </section>
    </div>
  )
}

export default Trail;