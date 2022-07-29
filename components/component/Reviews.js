import React from 'react'
import styles from '../../styles/store.module.css'
import { selectResturant } from '../features/ResSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/BasketSlice';
import ReactStars from 'react-stars' 
import Router from 'next/router';
function Rwviews({obj}) {
    
  return (
<div>
<h1>{obj.data().usersName}</h1>
<h1>{obj.data().review}</h1>
<ReactStars
count={5}
size={24}
value={obj.data().ratings}
color2={'#ffd700'} />
</div>
  )
}

export default Rwviews