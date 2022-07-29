import React from 'react'
import styles from '../../styles/Products.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { StarRate, ShareSharp, Favorite } from '@material-ui/icons'

const ProductDetail = ({title,category,price,description}) => {
    return (
        <>
        <HeaderStore/>
            <div>
                <span className={styles.HeadingProduct}>{title}</span>
            </div>
            <div className={styles.IconSec}>
                <span>
                    <StarRate className={styles.IconRate} />
                    <StarRate className={styles.IconRate} />
                    <StarRate className={styles.IconRate} />
                    <StarRate className={styles.IconRate} />
                    <StarRate className={styles.IconRate} />
                </span>
                <span>
                    <ShareSharp className={styles.IconShare} />
                    <Favorite className={styles.IconFavrite} />
                </span>
            </div>
            <div>
                <span className={styles.Brand}>Brand:{category}</span>
            </div>
            <div className={styles.Rate}>
                <h2 className={styles.price}>${price}</h2>
                <span><s>%40 off</s></span>
            </div>
            <div className={styles.ProductDetailImgdiv}>
                        <div className="row">
                            <div className="col-lg-2" id={styles.ProductImgcol}>
                             <span>{description}</span>
                             
                            </div>
                            <div className="col-lg-4" id={styles.ProductImgcol2}>
                               
                                <div className={styles.Img}>
                                <span><img src="https://ae01.alicdn.com/kf/H4a063726da3c4502a6ca00b55b553b53e/Chest-Bags-Crossing-Beg-for-Boys-Sling-Bag-Men-Sling-Pack-Waterproof-Young-People-Satchel-Nylon.jpg" alt=""  className={styles.ProductDetailImg}/></span>
                                <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQWX0RgVyt50MuNjemqkDgdpP2j5IRhv2sTCxK8fYV82ksky5D4q8Y7pjsncyN_0mZPi4&usqp=CAU" alt="" className={styles.ProductDetailImg}/></span>
                                <span><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcDGxUEmWTiD3TOpjqgluq7LT2nGn-PtYjFqaRkpyaa6Hv7at2qTtAAUOL5FMnlVc7r8Q&usqp=CAU " alt="" className={styles.ProductDetailImg}/></span>
                                </div>
                                <div className={styles.button}>
                                    <button>-</button>
                                    <button>0</button>
                                    <button>+</button>
                                </div>
                            </div>
                            
                        </div>

            </div>
        </>
    )
}

export default ProductDetail
