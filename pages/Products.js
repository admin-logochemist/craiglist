import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import Header from '../pages/Header'
import ReactImageMagnify from 'react-image-magnify';
import styles from '../styles/Products.module.css'
import ProductDetail from '../components/component/ProductDetail';
import Reviews from '../components/component/Reviews';
import { useSelector } from 'react-redux';
import ReactStars from 'react-stars'
import { selectOpenResturant } from '.././components/features/ResSlice';
import { db, storage } from '../firebase';
import { getDocs, addDoc, collection, serverTimestamp, updateDoc, doc, onSnapshot, query, where } from 'firebase/firestore';
import HeaderStore from '../components/component/HeaderStore';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
const Products = () => {
    const [review, setReview] = useState("");
    const [question, setQuestion] = useState("");
    const [food, setFood] = useState("");
    const [product, setProduct] = useState([]);
    const [usersName, setUsersName] = useState("");
    const [rating, setRating] = useState(0);
    const [resReviews, setResReviews] = useState();
    const [userData, setUserData] = useState([])
    const [updateFlag, setUpdateFlag] = useState(false)
    const [tRating, setTRating] = useState(0)
    const datas = []

    const getReviews = () => {


        onSnapshot(
            query(collection(db, "review"), where("id", "==", selectResturant.id)), (snapshot) => {
                setProduct(snapshot.docs)

            })
    }

    useEffect(() => {
        getReviews()
        const users = localStorage.getItem('displayName')
        console.log(users, "local storage")
        setUsersName(((users !== null) && (users !== undefined)) ? users : "Login")
    }, [])

    useEffect(() => {
        addReviews()
    }, [product])
    const handleSubmit = async (e) => {

        try {
            const docRef = await addDoc(collection(db, 'review'), {
                review: review,
                usersName: usersName,
                ratings: rating,
                id: selectResturant.id


            })



            alert("Review submited")
        } catch (err) {
            alert(err)
        }


    }
    const addReviews = () => {

        const totalRating = selectResturant?.data()?.totalRating
        const total = totalRating + rating
        const ratings = product.length
        const totalRat = total / ratings
        const reviewsRef = doc(db, "addProduct", selectResturant.id);
        // Set the "capital" field of the city 'DC'
        updateDoc(reviewsRef, {
            totalRating: totalRat
            // address: fdata.address,
        });
        //   setTRating(totalRat)
        setUpdateFlag(!updateFlag)
    }
    const renderReviews = () => {

        return product.map((item, index) => {
            // eslint-disable-next-line react/jsx-key
            return <Reviews
                obj={item}
            />

        })
    }

    product && console.log(product.length)
    const selectResturant = useSelector(selectOpenResturant)
    console.log(selectResturant?.data()?.totalRating, "Ghayasd")



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

                                    {console.log("danny", selectResturant?.data().totalRating)}
                                    <ProductDetail title={selectResturant?.data().title} description={selectResturant?.data().description} category={selectResturant?.data().category} price={selectResturant?.data().price} ratings={selectResturant?.data().totalRating} />
                                </div>
                                <div className="col-lg-3"></div>
                            </div>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                    <div className="row" id={styles.ReviewsRow}>
                        <div className="col-lg-1">
                        </div>
                        <div className="col" id={styles.ProductsDetails}>

                            <div className="row">
                                {/* <div className="col-lg-12">
                            <div className={styles.ratingstar}>
                        
                            <div className='col' id={styles.ceitre}>
                            <h5>{usersName} </h5>
                            </div>
                           
                            <div className='col' id={styles.ceitre}>
                            <ReactStars
                                count={5}
                                size={24}
                                onChange={(e) => setRating(e)}
                                color2={'#ffd700'} />
                                </div>
                               
                                <div className='col' id={styles.ceitre}>
                            <textarea id="w3review" name="w3review" rows="3" cols="45" value={review} onChange={(e)=>setReview(e.target.value)}> ss </textarea>
                            </div>
                           
                            <div className='col' id={styles.ceitre}>
                            <button className={styles.re_btn} onClick={handleSubmit}>Write a Review</button>
                            </div>
                        </div>
                        </div>*/}
                                <Card style={{ width: '50rem', marginBottom: '50px' }}>
                                    <Card.Body>
                                        <Card.Title>Write Review--</Card.Title>
                                        <Card.Title>{usersName}</Card.Title>
                                        <Card.Text>
                                            <div className='col' id={styles.ceitre}>
                                                <textarea id="w3review" name="w3review" rows="3" cols="120" value={review} onChange={(e) => setReview(e.target.value)}> ss </textarea>
                                            </div>
                                        </Card.Text>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            onChange={(e) => setRating(e)}
                                            color2={'#ffd700'} />
                                        <Button onClick={handleSubmit} variant="primary">Submit Review</Button>
                                    </Card.Body>
                                </Card>


                            </div>

                            <div className='row' id={styles.cofis}>
                                {renderReviews()}
                            </div>


                        </div>
                        <div className="col-lg-1">
                        </div>
                    </div>

                </div>
            </div>
        </div>

    )
}

export default Products;