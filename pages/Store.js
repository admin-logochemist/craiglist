import React, { useState, useEffect } from 'react'
import Header from '../pages/Header'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/store.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import Carousel from 'react-bootstrap/Carousel';
import ProductSale from '../components/component/ProductSale'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from '../components/features/BasketSlice';
import Link from 'next/link'
import ReactStars from 'react-stars'
import HeaderStore from '../components/component/HeaderStore';
function Store() {
    const items = useSelector(selectItems);
    const [product, setProduct] = useState([]);

    const objArr =
        [
            {
                text: 'soap1',
                image: 'image1',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope2',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope3',
                image: 'image3',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope4',
                image: 'image4',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope5',
                image: 'image5',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope6',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope6',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope6',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope6',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope6',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope6',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope6',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }

        ]

    const objArrz =
        [
            {
                text: 'mini bluethoot',
                image: 'image1',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'mini bluethoot',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'mini bluethoot2',
                image: 'image3',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'mini bluethoot3',
                image: 'image4',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'mini bluethoot4',
                image: 'image5',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'mini bluethoot5',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }


        ]
    const forSale =
        [
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair.. ',
                image: 'image1',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair. 2',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..3',
                image: 'image3',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..4',
                image: 'image4',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..5',
                image: 'image5',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..6',
                image: 'image2',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }


        ]

    useEffect(() => {
        getProduct()

    }, [])

    const renderProductSale = () => {

        return product.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return <ProductSale
                obj={item}
            />

        })
    }

    const getProduct = () => {


        onSnapshot(
            query(collection(db, "addProduct"), where("category", "==", "gigOffered")), (snapshot) => {
                setProduct(snapshot.docs)
                console.log(snapshot.docs);
            })
    };

    return (
        <div className={styles.body}>
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
                            <li>SELL ON weblisted</li>
                            <li>CUSTOMER CARE</li>
                            <li>TRACK MY ORDER</li>
                        </ul>
                    </div>
                </div>

            </div>
            <HeaderStore />
            {/*        <div className="container">
                <div className="row">
                    <div className='col-lg-12' id={styles.col12}>
                        <img src="/weblisted-store-logo.png" alt="" className={styles.storelogo} />

                        <div className={styles.Searchdiv}>
                            <div className="form-control " id={styles.search}>
                                <input type="text" placeholder='SEARCH' name="" id="" />
                                <FontAwesomeIcon icon={faSearch} className={styles.icon} />
                            </div>
                        </div>
                        <div className={styles.storeAddProduct}>
                       
                        <span>
                        <Link to='/CheckOut'><FontAwesomeIcon icon={faCartShopping} className={styles.iconCart} /> </Link>
                        
                        </span>
                        <button><a href="/ProductAdd/ProductAdd">Add product</a></button>
                        </div>
                        {items.length}

                    </div>

          
                </div>
            </div>
    */}
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 col-sm-12 ">
                        <Carousel variant="dark">
                            <Carousel.Item className={styles.Carousel_Item} >
                                <img
                                    className="d-block w-100"
                                    src="/weblisted_banner1.jpg"
                                    alt="First slide"
                                    id={styles.sliderImgz}
                                />

                            </Carousel.Item>
                            <Carousel.Item className={styles.Carousel_Item}>
                                <img
                                    className="d-block w-100"
                                    src="/weblisted_banner2.jpg"
                                    alt="Second slide"
                                    id={styles.sliderImg}

                                />

                            </Carousel.Item>
                            <Carousel.Item className={styles.Carousel_Item}>
                                <img
                                    className="d-block w-100"
                                    src="/weblisted_banner3.jpg"
                                    alt="Third slide"
                                    id={styles.sliderImg}

                                />

                            </Carousel.Item>
                        </Carousel>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row" id={styles.rowmart}>
                    <div className="col-lg-3 col-md-4 col-sm-4" id={styles.banner}>
                        <button className={styles.btns} >
                            <img src="/martlogo.png" alt="" />
                            <span>MART </span>
                        </button>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.btnsIcon} />

                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4" id={styles.banner}>
                        <button className={styles.btns} >
                            <img src="/martlogo.png" alt="" />
                            <span>FASHION</span>
                        </button>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.btnsIcon} />
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-4" id={styles.banner}>
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
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-5" id={styles.Mall}>
                        <h5>FLAT SALE</h5>
                        <div className={styles.mallborder}>
                            {renderProductSale()}
                            {/*Add Conts*/}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-5" id={styles.Mall}>
                        <h5>weblisted MALL</h5>
                        <div className={styles.mallborder}>
                            {objArrz.map((items, index) => (
                                <div className={styles.cart}>
                                    <img src="/cartpic.jpg" alt="" />
                                    <span>{items.text}</span>
                                    <span className={styles.text}>$:5</span>
                                </div>))}
                            {/* <div className={styles.cart}>
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
                            </div>*/}

                        </div>
                    </div>
                </div>
            </div>



            <div className="container">


                <div className="row mt-5" id={styles.catrow}>
                    <h5>CATEGORY</h5>

                    <div className='col-md-12 col-lg-12 col-sm-12  col-xs-12' id={styles.category}>

                        <div className="row">
                            {objArr.map((items, index) => (
                                <div className='col' id={styles.col}>
                                    <img src="/category.png" alt="" className={styles.catimg} />
                                    <span>{items.text}</span>
                                </div>

                            ))}
                        </div>

                    </div>

                </div>

            </div>



            <div className="container">
                <div className="row mt-4" id={styles.forsale}>
                    <h3>FOR SALE</h3>
                    {forSale.map((items, index) =>
                        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>

                            <div className={styles.forsaleCart}>
                                <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                                <div className={styles.FsaleCart}>
                                    <span>{items.text}</span><br />
                                    <span className={styles.cartPrice}>$ 99</span> <br />
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={5}
                                        color2={'#ffd700'} />
                                </div>
                            </div>

                        </div>
                    )}

                </div>
            </div>

            <div className="container">
                <div className="row mt-4" id={styles.forsale}>
                    {forSale.map((items, index) =>
                        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                            <div className={styles.forsaleCart}>
                                <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                                <div className={styles.FsaleCart}>
                                    <span>{items.text}</span><br />
                                    <span className={styles.cartPrice}>$ 99</span> <br />
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3}
                                        color2={'#ffd700'} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="container">
                <div className="row mt-4" id={styles.forsale}>
                    {forSale.map((items, index) =>
                        <div className='col-lg-2 col-md-2 col-sm-2 col-xs-2' id={styles.fscol}>
                            <div className={styles.forsaleCart}>
                                <img src="/Forsales.webp" alt="" className={styles.forsaleCartImg} />
                                <div className={styles.FsaleCart}>
                                    <span>{items.text}</span><br />
                                    <span className={styles.cartPrice}>$ 99</span> <br />
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={4}
                                        color2={'#ffd700'} />
                                </div>
                            </div>
                        </div>
                    )}

                </div>
            </div>

            <div className="container-fluid">
                <div className="row mt-4" id={styles.footrtstore}>
                    <div className="col-lg-3 col-md-3 col-sm-3" id={styles.footerlist}>
                        <div className={styles.listdiv}>
                            <span>Customer Care</span>
                            <ul className={styles.footerul}>
                                <li>Help Center</li>
                                <li>How to Buy</li>
                                <li>Corporate & Bulk Purchasing</li>
                                <li>Returns & Refunds</li>
                                <li>Daraz Shop</li>
                                <li>Contact Us</li>
                                <li>Purchase Protection</li>
                                <li>Daraz Pick up Points</li>
                                <li>Fulfilled by Daraz FBD</li>
                            </ul>
                            <br />
                        </div>
                        <div className={styles.listdiv}>
                            <span>Make Money With Us</span>
                            <ul className={styles.footerul}>
                                <li>Daraz University </li>
                                <li>Sell on Daraz</li>
                                <li>Join Daraz Affiliate Program</li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3" id={styles.footerlist}>
                        <div className={styles.listdiv}>
                            <span>weblisted</span>
                            <ul className={styles.footerul}>
                                <li>Digital Payments </li>
                                <li>Daraz Cares </li>
                                <li>Daraz Blog </li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Privacy Policy</li>
                                <li>Online Shopping App</li>
                                <li>Online Grocery Shopping</li>
                                <li>Daraz Exclusive</li>
                                <li> How to shop on Daraz</li>
                            </ul>
                        </div>

                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                        <div className={styles.footlinks}>
                            <img src="/barstore.png" alt="" className={styles.footImg} />
                            <div className={styles.footlinktext}>
                                <span>happy shopping </span>
                                <span>Download App</span>
                            </div>
                        </div>
                        <div>
                            <img src="/linkimg.png" alt="" className={styles.footImglink} />
                            <img src="/linkimg.png" alt="" className={styles.footImglink} />
                            <img src="/linkimg.png" alt="" className={styles.footImglink} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Store;