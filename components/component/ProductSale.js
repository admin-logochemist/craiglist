import React from 'react'
import styles from '../../styles/store.module.css'
import { selectResturant } from '../features/ResSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/BasketSlice';
import Router from 'next/router';
function ProductSale({obj}) {
    console.log(obj); 
    const router = useRouter();
    const  dispatch = useDispatch();
    const openResturant=()=>{
        let payload = obj
         dispatch(selectResturant(payload));
         router.push('/Products', obj)
console.log(obj)
      }
      const addItemsToBasket =  () => {
  
        const product = obj.data()
      
        dispatch(addToBasket(product));
       
        // localStorage.setItem('remail', productemail);
    
        // if(localStorage.getItem("remail")===productemail){   
    
        // }else{
          
        // }
    
    
     
      }
        
      function handleClickedd() {
        router.push({ pathname: "/addFood", state: obj });
        
      }
      console.log(obj);
  return (
    <div className={styles.cart}>
    <img src={obj.data().image} alt="" />
    <span>{obj.data().title}</span>
    <span className={styles.text}>{obj.data().price}</span>
    <button  onClick={addItemsToBasket}>Add To Cart</button>
    <button onClick={openResturant}>See More</button>
</div>
  )
}

export default ProductSale