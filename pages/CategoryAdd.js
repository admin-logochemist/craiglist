import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Header from './Header';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/ProductAdd.module.css'
import { addDoc, getDocs, collection, serverTimestamp, updateDoc, doc } from 'firebase/firestore';
import { db, storage } from '../firebase';
import { getDownloadURL, ref, uploadString } from 'firebase/storage';
function CategoryAdd() {
    const [category, setCategory] = useState('')
    const [ProductData, setProductData] = useState([]);
    const [file, setFile] = useState('');
    const [flag, setFlag] = useState(false)
    var data = [];
 
    const handleCapacity = (e) => {
        setCategory(e.target.value);

    }
    const addInagetoPost = (e) => {
        const reader = new FileReader();
        if (e.target.files[0]) {
            reader.readAsDataURL(e.target.files[0])
        }
        reader.onload = (readerEvent) => {
            setFile(readerEvent.target.result);

        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, 'ProductCat'), {
               category:category,
                time: serverTimestamp(),
            })

            const ImageRef = ref(storage, `ProductCat/${docRef.id}/image`);
            //  await uploadString(ImageRef,file,"data_url").then(async (snapshot)=>{
            //      const downloadUrl=await getDownloadURL(ImageRef);
            //      await updateDoc(doc(db,"resturant",docRef.id),{
            //          image:downloadUrl
            //      })
            //  }
            await uploadString(ImageRef, file, 'data_url').then(
                async (snapshot) => {
                    const downloadUrl = await getDownloadURL(ImageRef);
                    await updateDoc(doc(db, "ProductCat", docRef.id), {
                        image: downloadUrl,
                        itemid:docRef.id
                    })
                }

            )
            alert("form submited")
        } catch (err) {
            alert(err)
        }
    }

    return (
        <>
            <div className={styles.CategoryAdd}>
                <Header />
            </div>
            
                <div>
                    <h3 className={styles.productAddHeading}> Add Category</h3>
                    <div className="col-lg-12" id={styles.ProductAddForm} >
                        <div className="container">
                            <section className="panel panel-default">
                                <div className="panel-heading">
                                </div>
                                <div className="panel-body">
                                    <div action="designer-finish.html" className="form-horizontal" role="form">
                                        <div className="form-group">
                                            <label for="name" className="col-sm-3 control-label">Category</label>
                                            <div className="col-sm-9">
                                                <input type="text" className="form-control" name="name" id="name" placeholder="Enter Your Category" value={category} onChange={(e) => setCategory(e.target.value)} />
                                            </div>
                                        </div>
                                     
                                   
                                        <div className="form-group">
                                            <label for="name" className="col-sm-3 control-label">Image Upload</label>
                                            <div className="col-sm-3">
                                                <input type="file" className="form-control" onChange={addInagetoPost} />
                                            </div>

                                        </div>

                                        
                                        <div className="form-group">
                                            <div className="col-sm-offset-3 col-sm-9">
                                                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
           




        </>
    );
}

export default CategoryAdd;