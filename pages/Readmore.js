import React from 'react'
import styles from "../styles/postadd.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function () {
  return (
    <div class="navbar fixed-top navbar-expand-sm" id={styles.navhead}>
        <div class="container navContainer">
            
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" id="navbarButton">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id={styles.navbarCollapse}>
                <div class="navbar-nav">
                    <a href="/" class="nav-item nav-link text-uppercase mx-1" id={styles.navlist}>WL</a>
                    <a href="" class="nav-item nav-link text-uppercase mx-1" id={styles.navlist}>Indoor</a>
                    <a href="" class="nav-item nav-link text-uppercase mx-1" id={styles.navlist}>Job</a>
                    <a href="" class="nav-item nav-link text-uppercase mx-1" id={styles.navlist}>Science / Biotech</a>
                    <a href="" class="nav-item nav-link text-uppercase mx-1" id={styles.navlist}>Account</a>
                </div>
            </div>
        </div>
    </div>
  )
}
