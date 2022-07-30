import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/Header.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
    return (
        <div className='container-fluid' id={styles.header}>
            <div className='row' id={styles.row_header}>
                <div className='col-6' id={styles.head_name}>
                    <span id={styles.name_span}><a href="/">WL</a></span> &nbsp;&nbsp;

                </div>
                <div className='col 6' >
                    <div id={styles.header_rightside}>
                            <span id={styles.header_rightside_text}><a href=""> <FontAwesomeIcon icon={faCartShopping} /><span></span> &nbsp;&nbsp; | account</a></span>
                    </div>
                </div>
            </div>

        </div>
    )
}
