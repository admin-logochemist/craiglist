import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../pages/Header'
import ReactImageMagnify from 'react-image-magnify';
import styles from '../styles/Products.module.css'
import ProductDetail from '../components/component/ProductDetail';
import Reviews from '../components/component/Reviews';
import { useSelector } from 'react-redux';
import { selectOpenResturant } from '.././components/features/ResSlice';
import HeaderStore from '../components/component/HeaderStore';
const Products = () => {



    const selectResturant = useSelector(selectOpenResturant)
    return (


        <div className="container-fluid" id={styles.Fluid}>
            <div className="row" id={styles.Fluid}>
                <Header />
                <HeaderStore />
                <div className="container" id={styles.Products}>

                    <div className="row">

                        <div className="col-lg-1">
                            <div className={styles.ProductImg}></div>
                        </div>
                        <div className="col-lg-10" id={styles.ProductsDetails}>
                            <div className="row" >
                                <div className="col-lg-3">
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Wristwatch by Ted Baker London',
                                        isFluidWidth: true,
                                        src: selectResturant?.data().image,
                                    },
                                    largeImage: {
                                        src: selectResturant?.data().image,
                                        width: 1200,
                                        height: 1800
                                    }
                                }} />
                                {/*<div className={styles.ProductImageMagnify}>
                                <span><img src="https://ae01.alicdn.com/kf/H4a063726da3c4502a6ca00b55b553b53e/Chest-Bags-Crossing-Beg-for-Boys-Sling-Bag-Men-Sling-Pack-Waterproof-Young-People-Satchel-Nylon.jpg" alt=""  className={styles.ProductDetailImg2}/></span>
                                <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWX0RgVyt50MuNjemqkDgdpP2j5IRhv2sTCxK8fYV82ksky5D4q8Y7pjsncyN_0mZPi4&usqp=CAU" alt="" className={styles.ProductDetailImg2}/></span>
                                <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDGxUEmWTiD3TOpjqgluq7LT2nGn-PtYjFqaRkpyaa6Hv7at2qTtAAUOL5FMnlVc7r8Q&usqp=CAU " alt="" className={styles.ProductDetailImg2}/></span>
                            </div>*/}
                                
                                </div>
                                <div className="col-lg-6" id={styles.detailsSection}>
                                    <ProductDetail title={selectResturant?.data().title} description={selectResturant?.data().description} category={selectResturant?.data().category} price={selectResturant?.data().price}/>
                                </div>
                                <div className="col-lg-3"></div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                    <div className="row" id={styles.ReviewsRow}>

                    <div className="col-lg-1">
                    </div>
                    <div className="col-lg-10" id={styles.ProductsDetails}>
                        <div className="row" >
                            <div className="col-lg-12">
                                <Reviews />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>

                </div>
            </div>
        </div>

    )
}

export default Products;