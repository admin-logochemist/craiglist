import React from 'react'
import styles from '../../styles/store.module.css'
import { selectResturant } from '../features/ResSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/BasketSlice';
import ReactStars from 'react-stars' 
import Router from 'next/router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
function Reviews({obj}) {
    
  return (

<>
<Card className={styles.cardsz}>
<Card.Body>
  <Card.Title>{obj.data().usersName}</Card.Title>
  <ReactStars
  count={5}
  size={24}
  value={obj.data().ratings}
  color2={'#ffd700'} />
  <Card.Text>
  {obj.data().review}
  </Card.Text>
</Card.Body>
</Card>
</>

  )
}

export default Reviews;




// <div className='col'  id={styles.revis} >
// <h5>{obj.data().usersName}</h5>
// </div>
// <div className='col'>
// <ReactStars
// count={5}
// size={24}
// value={obj.data().ratings}
// color2={'#ffd700'} />
// </div>
// <div className='col' >
// <p>{obj.data().review}</p>
// </div>