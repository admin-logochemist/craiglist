import React from 'react'
import Header from '../pages/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/store.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-bootstrap/Carousel';
import Image from "next/image"


function Store() {
    return (
        <>
            <div className={styles.header00}>
                <Header />
            </div>

            <div className="container-fluid">

                <div className="row" id={styles.collist}>
                    <div className='col-lg-1'></div>
                    <div className="col-lg-11" >
                        <ul className={styles.storeheadul}>
                            <li>SAVE MORE ON APP</li>
                            <li>AFFILIATE PROGRAM</li>
                            <li>SELL ON CRAIGLIST</li>
                            <li>CUSTOMER CARE</li>
                            <li>TRACK MY ORDER</li>
                        </ul>
                    </div>

                </div>

            </div>
            <div className="container">
                <div className="row">
                    <div className='col-lg-12' id={styles.col12}>
                        <img src="/weblisted-store-logo.png" alt="" className={styles.storelogo} />

                        <div className={styles.Searchdiv}>
                            <div className="form-control " id={styles.search}>
                                <input type="text" placeholder='SEARCH' name="" id="" />
                                <FontAwesomeIcon icon={faSearch} className={styles.icon} />
                            </div>
                        </div>
                        <a href='' > <FontAwesomeIcon icon={faCartShopping} className={styles.iconCart} /> </a>
                    </div>
                    {/*<div className="col-lg-12" id={styles.divrecomm}>
                        <span>Most  Recommended</span>
                        <div className={styles.recom} ></div>
                        <div className={styles.recpost} id={styles.recpost1} >
                            <span className={styles.cart}>
                                <img src="/00v0v_6SFtGULNQ54z_0kE0dL_600x450.jpg" alt="" className={styles.image} />
                                <span className={styles.text}>Class Room</span>
                            </span>
                        </div>
    </div>*/}
                </div>
            </div>

            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12">
                        <Carousel variant="dark">
                            <Carousel.Item className={styles.Carousel_Item} >
                                <img
                                    className="d-block w-100"
                                    src="/silder1.jpg"
                                    alt="First slide"
                                    id={styles.sliderImg}
                                />
                                <Carousel.Caption className={styles.Carousel_Caption}>
                                    <h1>First slide label</h1>
                                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className={styles.Carousel_Item}>
                                <img
                                    className="d-block w-100"
                                    src="/slider3.jpg"
                                    alt="Second slide"
                                    id={styles.sliderImg}

                                />
                                <Carousel.Caption className={styles.Carousel_Caption}>
                                    <h1>Second slide label</h1>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                            <Carousel.Item className={styles.Carousel_Item}>
                                <img
                                    className="d-block w-100"
                                    src="/slider2.png"
                                    alt="Third slide"
                                    id={styles.sliderImg}

                                />
                                <Carousel.Caption className={styles.Carousel_Caption}>
                                    <h1>Third slide label</h1>
                                    <p>
                                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                    </p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row" id={styles.rowmart}>
                    <div className="col-lg-3" id={styles.banner}>
                        <button className={styles.btns} >
                            <img src="/martlogo.png" alt="" />
                            <span>Mart</span>
                        </button>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.btnsIcon} />

                    </div>
                    <div className="col-lg-3" id={styles.banner}>
                        <button className={styles.btns} >
                            <img src="/martlogo.png" alt="" />
                            <span>FASHION</span>
                        </button>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.btnsIcon} />
                    </div>
                    <div className="col-lg-3" id={styles.banner}>
                        <button className={styles.btns} >
                            <img src="/martlogo.png" alt="" />
                            <span>BEAUTY</span>
                        </button>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.btnsIcon} />
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row" id={styles.Mall2}>
                    <div className="col-lg-12 mt-5" id={styles.Mall}>
                        <h5>FLAT SALE</h5>
                        <div className={styles.mallborder}>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mt-5" id={styles.Mall}>
                        <h5>CRAIGLIST MALL</h5>
                        <div className={styles.mallborder}>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                            <div className={styles.cart}>
                                <img src="/cartpic.jpg" alt="" />
                                <span>mini bluethoot</span>
                                <span className={styles.text}>$:5</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mt-5" id={styles.catrow}>
                    <h5>CATEGORY</h5>
                    <div className='col-md-12' id={styles.category}>
                        <div className="row">
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>    <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>    <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className="w-100"></div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                            <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>    <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>    <div className='col' id={styles.col}>
                                <img src="/category.png" alt="" className={styles.catimg} />
                                <span>Cleanig gloves</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>


            <div className="container">
                <div className="row mt-4" id={styles.forsale}>
                    <h3>FOR SALE</h3>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row mt-4" id={styles.forsale}>
                    <h3>FOR SALE</h3>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <div className="container">
                <div className="row mt-4" id={styles.forsale}>
                    <h3>FOR SALE</h3>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>
                    <div className='col-lg-2' id={styles.fscol}>
                        <div className={styles.forsaleCart}>
                            <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                            <div className={styles.FsaleCart}>
                                <span>Mini Hair  Straightener And Straightener | Mini Hair.. </span><br />
                                <span className={styles.cartPrice}>$ 99</span> <br />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                                <FontAwesomeIcon icon={faStar} className={styles.IconRating} />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Store