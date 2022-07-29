import React, { useState, useEffect }from 'react'
import styles from '../../styles/store.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
// import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector,useDispatch } from 'react-redux';
import { selectItems } from '../features/BasketSlice';
import { useRouter } from 'next/router';
import Link from 'next/link'
function HeaderStore() {
    const items=useSelector(selectItems);
    const route = useRouter();
    const [usersName, setUsersName ] = useState("");
    const [usersEmail, setUsersEmail ] = useState("");
useEffect(() => {
// Perform localStorage action
const users = localStorage.getItem('displayName')
const usersemail = localStorage.getItem('email')
console.log(users,"local storage")
setUsersName(((users!==null)&&(users!==undefined)) ? users : "")
setUsersEmail(((usersemail!==null)&&(usersemail!==undefined)) ? usersemail : "Login")
}, [])
const signOut=()=>{
    if(usersName!=="logged Out"){
      localStorage.clear();
      const users = null;
        route.push("/");
    }
    }
  return (
    <div className="container">
                <div className="row">
                    <div className='col-lg-12' id={styles.col12}>
                        <img src="/weblisted-store-logo.png" alt="" className={styles.storelogo} />

                        <div className={styles.Searchdiv}>
                            <div className="form-control" id={styles.search}>
                                <input type="text" placeholder='SEARCH' name="" id="" />
                                <FontAwesomeIcon icon={faSearch} className={styles.icon} />
                            </div>
                           
                        </div>
                        <div className={styles.colz}>
                        {((usersName!==null)&&(usersName!=="")) ?
                        <p onClick={signOut} className={styles.a_1}>
                        {usersName}
                        <br/>
                         <button className={styles.logoutbtn}>Logout </button>
                      </p>
                        : 
                        <a href="/SignIn" className={styles.a_1}>
                        Login
                        </a> }
                        </div>
                        <div className={styles.storeAddProduct}>
                       
                        <span>
                        <span onClick={()=>route.push('/CheckOut')} ><FontAwesomeIcon icon={faCartShopping} className={styles.iconCart} /> </span>
                        
                        </span>
                        <button className={styles.logoutbtn}><a href="/ProductAdd/ProductAdd">Add product</a></button>
                        </div>
                        {items.length}
                       
                    </div>

                    {/*<div className="col-lg-12" id={styles.divrecomm}>
                        <span>Most  Recommended</span>
                        <div className={styles.recom} ></div>
                        <div className={styles.recpost} id={styles.recpost1} >
                            <span className={styles.cart}>
                                <img src="/00v0v_6SFtGULNQ54z_0kE0dL_600x450.jpg" alt="" className={styles.image} />
                                <span className={styles.text}>Class Room</span>
                            </span>
                        </div>
    </div>*/}
                </div>
            </div>
  )
}

export default HeaderStore