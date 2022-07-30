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
import CategorySale from '../components/component/CategorySale'
import { collection, onSnapshot, orderBy, query, where } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { useSelector, useDispatch } from 'react-redux';
import { selectItems } from '../components/features/BasketSlice';
import Link from 'next/link'
import ReactStars from 'react-stars'
import HeaderStore from '../components/component/HeaderStore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Store() {
    const items = useSelector(selectItems);
    const [product, setProduct] = useState([]);
    const [category, setCategory] = useState([]);
    const objArr =
        [
            {
                text: 'soap1',
                image: 'https://images.philips.com/is/image/PhilipsConsumer/TAKH402PK_00-IMS-en_PK?$jpglarge$&wid=1250',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope2',
                image: 'https://media1.popsugar-assets.com/files/thumbor/yB0aMusFqZ55vNPX2GmL-aePMPQ/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2021/03/29/961/n/1922507/62692a665eb11019_netimg5NIAFJ/i/Fun-Print-Vizliter-TWS-Deep-Bass-Wireless-Headphones-50.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope3',
                image: 'https://www.czone.com.pk/images/thumbnails-large/1-czone.com.pk-1540-10975-280121091957-1540-10975-050421043210.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope4',
                image: 'https://allmytech.pk/wp-content/uploads/2020/02/wh-xb700-blue-square.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope5',
                image: 'http://sc04.alicdn.com/kf/H965d4d7fd5384d7396744d047413ce6bj.png',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope6',
                image: 'http://jrd-fixit.weebly.com/uploads/1/2/5/6/12563852/8891411_orig.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope6',
                image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtwQ70LT96EAZUa_yguXSx6X2KNDH5PYQhDg&usqp=CAU',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'rope6',
                image: 'http://cdn.shopify.com/s/files/1/0536/4803/1936/products/61laGENJKfL._SL1200.jpg?v=1651917031',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            // {
            //     text: 'rope6',
            //     image: 'image2',
            //     content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            // }
            // ,
            // {
            //     text: 'rope6',
            //     image: 'image2',
            //     content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            // }
            // ,
            // {
            //     text: 'rope6',
            //     image: 'image2',
            //     content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            // }
            // ,
            // {
            //     text: 'rope6',
            //     image: 'image2',
            //     content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            // }

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
                image: 'https://thumbs.dreamstime.com/b/composition-variety-grocery-products-white-background-31618939.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair. 2',
                image: 'https://media.gettyimages.com/photos/unbranded-canned-goods-conserves-sauces-and-oils-picture-id168383797?s=612x612',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..3',
                image: 'https://previews.123rf.com/images/belchonock/belchonock1804/belchonock180430008/98944480-different-cooking-utensils-on-white-background.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..4',
                image: 'https://img.freepik.com/premium-vector/set-kitchen-utensils-isolated-vector-illustration-white-background_125494-1090.jpg?w=2000',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..5',
                image: 'https://s3.envato.com/files/348051170/cc46.jpg',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..6',
                image: 'https://elements-twenty20-photos-0.imgix.net/production/uploads/items/d5b18cdf-39e6-4dd1-b33d-9fc3aa3a36e0/source?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=700&s=2d57e6ffa963791127efbd06c7d9fe56',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..6',
                image: 'https://media.istockphoto.com/photos/brown-antique-table-with-round-table-top-picture-id131936828?k=20&m=131936828&s=612x612&w=0&h=nHlkXsyAuvGgSZ7FJNBHQd8XHXDPzWQfCzz816KxXnk=',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
            ,
            {
                text: 'Mini Hair  Straightener And Straightener | Mini Hair..6',
                image: 'https://media.istockphoto.com/photos/concept-of-product-categories-furniture-and-decor-on-white-background-picture-id1135527778',
                content: "Some quick example text to build on the card title and make up the bulk of the cards content."
            }
           
        ]

    useEffect(() => {

        
        getProduct()
        getCategory()

    }, [])

    const renderProductSale = () => {

        return product.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return <ProductSale 
                obj={item}
            />

        })
    }
    const renderCategorySale = () => {

        return category.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return <CategorySale 
                obj={item}
            />
        })
    }
    const getProduct = () => {


        onSnapshot(
            query(collection(db, "addProduct")), (snapshot) => {
                setProduct(snapshot.docs)
                console.log(snapshot.docs);
            })
    };
    const getCategory = () => {


        onSnapshot(
            query(collection(db, "ProductCat")), (snapshot) => {
                setCategory(snapshot.docs)
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
            <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 mt-5" id={styles.Mall}>
                    <h5>CATEGORY</h5>
                    <div className="row">
                      {renderCategorySale()}
                        {/*Add Conts*/}
                    </div>
                </div>
            </div>
        </div>

            <div className='container' id={styles.Mall}>
            <h5>PRODUCTS</h5>
                <div className='row'>
                {renderProductSale()}
                </div>
            </div>
           

          

            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12 mt-5" id={styles.Mall}>
                        <h5>WEBLISTED MALL</h5>
                        <div className={styles.mallborder}>
                            {objArrz.map((items, index) => (
                                <div className={styles.cart}>
                                    <img src="/cartpic.jpg" alt="" />
                                    <span>{items.text}</span>
                                    <span className={styles.text}>$:5</span>
                                    <Button>Add To cart</Button>
                                </div>))}
                         

                        </div>
                    </div>
                </div>
            </div>

            <div className='container' id={styles.Mall}>
            <h5>CATEGORY</h5>
                <div className='row'>
                {objArr.map((items, index) => (
                    <div className='col'>
                        <Card style={{ width: '18rem', marginTop: '1rem' }}>
                            <Card.Img className={styles.imgsize} variant="top" src={items.image}/>
                            <Card.Body>
                                <Card.Title>{items.text}</Card.Title>
                                <Card.Title>Price 50$</Card.Title>
                                <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias omnis 
                                      </Card.Text>
                                <ReactStars
                                count={5}
                                size={24}
                                value={5}
                                color2={'#ffd700'} />
                                <div className={styles.spaciz}>
                                <Button className={styles.btzxp} variant="primary">Add to cart</Button>
                                <Button className={styles.btzxp} variant="primary">View item</Button>
                                </div>
                            </Card.Body>
                        </Card>
                       
                    </div>
                    ))}
                </div>
            </div>

            <div className='container' id={styles.Mall}>
                <h5>FOR SALE</h5>
                <div className='row'>
                    {forSale.map((items, index) => (
                        <div className='col'>
                            <Card style={{ width: '18rem', marginTop: '1rem' }}>
                                <Card.Img className={styles.imgsize} variant="top" src={items.image} />
                                <Card.Body>
                                    <Card.Title>{items.text}</Card.Title>
                                    <Card.Title>Price 50$</Card.Title>
                                    <Card.Text>
                                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias omnis 
                                </Card.Text>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={5}
                                        color2={'#ffd700'} />
                                    <div className={styles.spaciz}>
                                        <Button className={styles.btzxp} variant="primary">Add to cart</Button>
                                        <Button className={styles.btzxp} variant="primary">View item</Button>
                                    </div>
                                </Card.Body>
                            </Card>

                        </div>
                    ))}
                </div>
            </div>

            <div className='container' id={styles.Mall}>
            <h5>FEATURED PRODUCTS</h5>
            <div className='row'>
                {forSale.map((items, index) => (
                    <div className='col'>
                        <Card style={{ width: '18rem', marginTop: '1rem' }}>
                            <Card.Img className={styles.imgsize} variant="top" src={items.image} />
                            <Card.Body>
                                <Card.Title>{items.text}</Card.Title>
                                <Card.Title>Price 50$</Card.Title>
                                <Card.Text>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias omnis 
                            </Card.Text>
                                <ReactStars
                                    count={5}
                                    size={24}
                                    value={5}
                                    color2={'#ffd700'} />
                                <div className={styles.spaciz}>
                                    <Button className={styles.btzxp} variant="primary">Add to cart</Button>
                                    <Button className={styles.btzxp} variant="primary">View item</Button>
                                </div>
                            </Card.Body>
                        </Card>

                    </div>
                ))}
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
                                <li>weblisted Shop</li>
                                <li>Contact Us</li>
                                <li>Purchase Protection</li>
                                <li>weblisted Pick up Points</li>
                                <li>Fulfilled by weblisted FBD</li>
                            </ul>
                            <br />
                        </div>
                        <div className={styles.listdiv}>
                            <span>Make Money With Us</span>
                            <ul className={styles.footerul}>
                                <li>weblisted University </li>
                                <li>Sell on weblisted</li>
                                <li>Join weblisted Affiliate Program</li>
                            </ul>

                        </div>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-3" id={styles.footerlist}>
                        <div className={styles.listdiv}>
                            <span>weblisted</span>
                            <ul className={styles.footerul}>
                                <li>Digital Payments </li>
                                <li>weblisted Cares </li>
                                <li>weblisted Blog </li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                                <li>Privacy Policy</li>
                                <li>Online Shopping App</li>
                                <li>Online Grocery Shopping</li>
                                <li>weblisted Exclusive</li>
                                <li> How to shop on weblisted</li>
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