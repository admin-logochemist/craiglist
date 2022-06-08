import React from 'react';
import styles from '../../styles/post.module.css'

const SideBar = ({ openClass }) => {
  return (
      <div>
  
    <nav id={openClass === 'open' ? styles.opneSidebar : ''}>
    
      <ul id={styles.navlist}>
      <h3>Job</h3>
        <li>
          <a id={styles.menu_item} href="/">
            home
          </a>
        </li>

        <li>
          <a id={styles.menu_item} href="/burgers">
            account/finance
          </a>
        </li>

        <li>
          <a id={styles.menu_item} href="/pizzas">
            website designing
          </a>
        </li>
        <li>
          <a id={styles.menu_item} href="/desserts">
            engineering 
          </a>
        </li>
      </ul>

    </nav>
    </div>
  );
};

export default SideBar;
