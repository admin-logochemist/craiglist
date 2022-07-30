import React,{useState} from 'react'
import styles from '../../styles/store.module.css'
import { selectResturant } from '../features/ResSlice';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../features/BasketSlice';
import Router from 'next/router';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ReactStars from 'react-stars'
import ProductList from '../../pages/ProductList';
function CategorySale({obj}) {
    console.log(obj); 
    const router = useRouter();
    const  dispatch = useDispatch();
    const [category, setCategory] = useState();

    const ProductCategory = (e) => { 
      // setSubcat(e.target.id)
      // console.log(e.target.id)
      router.push({ pathname: '/ProductList', query: {  ProductCategory: e} })
    }


    const handleCapacity=(e)=>{
      setCategory(e.target.value);
    }






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
//     <div className={styles.cart}>
//     <img src={obj.data().image} alt="" />
//     <span>{obj.data().title}</span>
//     <span className={styles.text}>{obj.data().price}</span>
//     <button  onClick={addItemsToBasket}>Add To Cart</button>
//     <button onClick={openResturant}>See More</button>
// </div>
    <>
<div className='col' id={styles.imgsizelip}>
      <Card style={{ width: '18rem', marginTop: '1rem', cursor:'pointer' }}
      
      >
        <Card.Img className={styles.imgsizelip} variant="top" src={obj.data().image} />
        <Card.Body>
          <Card.Title onClick={(e) => ProductCategory(obj.data().itemid)} >{obj.data().category}</Card.Title>
        </Card.Body>
      </Card>
      </div>
    </>      

  )
}

export default CategorySale;