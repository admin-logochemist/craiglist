import React, { useState } from "react";
import styles from '../styles/form.module.css'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { addDoc, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore'; 
import { db, storage } from '../firebase';
import { auth } from '../firebase';
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';
import axios from 'axios';
import { login, logout, } from "../components/features/UderSlice";
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux';

function FormSignup() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [bname, setBName] = useState("");
  const [address, setAddress] = useState("")
  const [btype, setBtype] = useState("")
  const [bankac, setBankac] = useState("")
  const [industry, setIndustry] = useState("")
  const [bweb, setBweb] = useState("")
  const [uids, setUids] = useState("")
  const [hasError, Error] = useState("");
  const [select,setSelect]= React.useState();
  const dispatch = useDispatch();
  const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`)
  const router = useRouter()
  const handleCapacity=(e)=>{
      setSelect(e.target.value);
     
  }
    const registers = async() => {

        createUserWithEmailAndPassword(auth,email,password).then((userAuth) => {
            setUids(userAuth.user.uid)
            localStorage.setItem('email', email);
            localStorage.setItem('accid', accId);
             localStorage.setItem('displayName', name);
        }).catch(function(error) {
          var errorMessage = error.message;
          console.log("errorMessage: "+ errorMessage)
        });
      
        const stripe = await stripePromise;
        const RegisterSession =
         await axios.post('/api/connectedaccount',
            {
              
                email: email,
            
            })
            const accId= RegisterSession.data.id
              console.log("accId: "+ accId)
              const link=RegisterSession.data.link
              console.log("link: "+ link)
          
  if(select==='User'|| accId!=null){
          const docRef = await addDoc(collection(db, 'userid'), {
              email:email,
              password:password,
              name:name,
              phone:phone,
              select:select,
              bname:bname,
            accId:accId,
            object: "bank_account",
          country: "US",
          currency: "usd",
          routing_number: "110000000",
          account_number: "000123456789",
          address:address   
            })
          
  
            router.push(select==='user' ? '/' : link)
          }
     
      // router.push(select==='user' ? '/' : '/ResturentOwner')
    
    }
  return (
    
      <div className="login-page" id={styles.login_page}>
        <div className="form" id={styles.form}>
       
            <input type="text" onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" />
            <input type="text" onChange={(e) => setEmail(e.target.value)} placeholder="Enter Your Email" />
            <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Your Password" />
            <select name="" id="" onChange={(e) => setSelect(e.target.value)}>
            <option value="">Select Account</option>
            <option value="User">As User</option>
            <option value="Seller">As Seller</option>
            </select>
            
            <button onClick={registers}>create</button>
       
        </div>
      </div>
    
  )
};

export default FormSignup



