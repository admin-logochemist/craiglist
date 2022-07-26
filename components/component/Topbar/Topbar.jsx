import React from 'react'
import styles from '../../../styles/SellerDashboard.module.css'
import {NotificationsNone, Language,Settings} from '@material-ui/icons' 

function Topbar() {
  return (
    <div className={styles.Topbar}>
      <div className={styles.TopbarWrapper}>
         <div className={styles.topleft}>
           <span className={styles.Logo}>weblisted</span>
         </div>
         <div className={styles.topRight}>
            <div className={styles.topbarIconContainer}>
              <NotificationsNone />
              <span className={styles.topIconBag}>2</span>
            </div>
            <div className={styles.topbarIconContainer}>
            <Language />
            <span className={styles.topIconBag}>2</span>
          </div>
          <div className={styles.topbarIconContainer}>
          <Settings />
        </div>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU" alt="" className={styles.topAvatar} />
         </div>
      </div>
    </div>
  ) 
  
}

export default Topbar