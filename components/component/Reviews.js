import React from 'react'
import styles from '../../styles/Products.module.css'
import "bootstrap/dist/css/bootstrap.min.css";
import { StarRate, ShareSharp, Favorite, ThumbUp } from '@material-ui/icons'
import ReactStars from 'react-stars'

const Reviews = () => {

const ratingChanged = (newRating) => {
        console.log(newRating)
}
  return (
       <div className="container">
          <div className="row" id={styles.reviewsMain}>
                <div className="col-lg-12" id={styles.reviewsheadCol}>
                  <span className={styles.reviewshead}>Ratings & Reviews of Brand Design Fashion trendy men chest shoulder crossbody mini backpack light weight bag use for boys also </span>
                </div>
                <div className="col-lg-12" id={styles.ReviewDetail}>
                    <span className={styles.RatingAvg}>5.0 <p>/5</p></span>
                    <span>
                  { /* <StarRate className={styles.IconRateReview} />
                    <StarRate className={styles.IconRateReview} />
                    <StarRate className={styles.IconRateReview} />
                    <StarRate className={styles.IconRateReview} />
  <StarRate className={styles.IconRateReview} />  */}
                                    <ReactStars
                                    count={5}
                                    onChange={ratingChanged}
                                    size={50}
                                    color2={'#ffd700'}
                                 
                                    />
                    </span>
                    <span>Rating</span>
                </div>
                <div className="col-lg-12" id={styles.reviews}>
                  <span className={styles.reviewshead}>Product Reviews</span>
                </div>
                <div className="col-lg-12" id={styles.reviewsSection}>
                    <span>   
                    <StarRate className={styles.IconRate} />
                    <StarRate className={styles.IconRate} />
                    <StarRate className={styles.IconRate} />
                    <StarRate className={styles.IconRate} />
                    <StarRate className={styles.IconRate} />
                    </span>
                    <span>
                      <ThumbUp  className={styles.thumbup} /> 0
                    </span>
                      <span className={styles.ReviewsBOX}>
                      Thanks For Rating And For More Discounts Become A Follower Of Our Store And Get Big Deals Free
                      </span>
              </div>    
          </div>
       </div>
  )
}

export default Reviews;