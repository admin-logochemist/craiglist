// eslint-disable-next-line react-hooks/exhaustive-deps
import React from 'react'
import Link from 'next/link';
import styles from "../styles/postadd.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useSelector } from 'react-redux';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faDollar } from '@fortawesome/free-solid-svg-icons';
import { faHeader } from '@fortawesome/free-solid-svg-icons';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { selectOpenResturant } from '../components/features/ResSlice';
export default function postadd() {
    const selectJob = useSelector(selectOpenResturant);

    return (
        <section id={styles.section}>
        <div class="navbar fixed-top navbar-expand-sm" id={styles.navhead}>
        <div class="container navContainer">
            
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" id="navbarButton">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id={styles.navbarCollapse}>
                <div class="navbar-nav">
                    <a href="" class="nav-item nav-link text-uppercase mx-1" id={styles.navlist}>WL</a>
                    <a href="" class="nav-item nav-link text-uppercase mx-1" id={styles.navlist}>Indoor</a>
                    <a href="" class="nav-item nav-link text-uppercase mx-1" id={styles.navlist}>Job</a>
                    <a href="" class="nav-item nav-link text-uppercase mx-1" id={styles.navlist}>Science / Biotech</a>
                    <a href="" class="nav-item nav-link text-uppercase mx-1" id={styles.navlist}>Account</a>
                </div>
            </div>
        </div>
    </div>
            <div className={styles.jobpost_wrapper}>
            <div className={styles.jobpost_job_postings}>
              <a href="#" className={styles.jobpost_link}></a>
                <div className={styles.jobpost_image}>
                  <h3>{selectJob?.data().posttitle}</h3>
                  <div  className={styles._overlay}></div>
                </div>
                <div className={styles.jobpost_body}>
                    <p className={styles.classifications}>
                      <span className={styles.jobclass}>
                      <span className={styles.jobclass_type_location}>
                        </span> 
                        <span className={styles.jovalue}><FontAwesomeIcon icon={faLocationDot} />{selectJob?.data().city}</span>
                      </span>
                      <span className={styles.jovalue}><span className={styles.jobclass_type_job_category}>
                        </span> 
                        <span className={styles.jovalue}><FontAwesomeIcon icon={faDollar} />{selectJob?.data().compensation}</span>
                      </span>
                      <span className={styles.jovalue}><span className={styles.jobclass_type_job_type}>
                        </span> 
                        <span className={styles.jovalue}><FontAwesomeIcon icon={faHeader} />{selectJob?.data().posttitle}</span>
                      </span>
                      <span className={styles.jobclass}><span className={styles.jobclass_type_working_hours}>
                        </span> 
                        <span className={styles.jovalue}><FontAwesomeIcon icon={faCheckCircle} />{selectJob?.data().select}</span>
                      </span>
                    </p>
                    <p>{selectJob?.data().discription}</p>
                </div>
                <div className={styles.jobpost_nav}>
                </div>
            </div>
        </div>


        </ section >
    )
}
