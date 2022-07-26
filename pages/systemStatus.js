

import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/systemStatus.module.css'

export default function systemStatus() {
    return (
        <>
            <div className={styles.global_header}>
                <a className={styles.header_logo} name="logoLink" href="/">WL</a>

                <nav className={styles.breadcrumbs_container}>

                    <ul className={styles.breadcrumbs}>
                        <li className={styles.crumb}>
                            <p>
                                <a href="/about/">about</a>&nbsp;
                                <span className={styles.breadcrumb_arrow}>&gt;</span>&nbsp;
                            </p>
                        </li>
                        <li className={styles.crumb}>
                            <p>
                                systemStatus
                            </p>
                        </li>
                    </ul>
                </nav>
            </div>
            <div className="container">
                <div className="row"id={styles.row}>
                <section className={styles.simple_page_content}>
                


                <section className={styles.resolved_issues}>
                    <h1 className={styles.system_status_heading_box}>recently resolved issues
                        <small className={styles.system_status_heading_subtext}>
                            We think we've squished all the bugs in this section.
                            If you're still seeing any of them, let us know at the
                            <a href="">help desk</a>.
                        </small>
                    </h1>
                    <ul className={styles.issue_list}>
                            <li>
                                <a name="s481"></a>
                                <div className="alert alert-md alert-warning issue-alert"  id={styles.alert} role="alert">
                                    <h2 className={styles.issue_title}>issues with paid posts</h2>
                                    <span className={styles.issue_time}>Updated Fri, Apr  1 2022 - 17:05 UTC</span>
                                </div>
                                <p>currently experiencing some issues accepting paid posts, working on it</p>
                            </li>
                            <li>
                                <a name="s480"></a>
                                <div className="alert alert-md alert-warning issue-alert" role="alert">
                                    <h2 className={styles.issue_title}>Maintenance @ 11:00 PM PST Tuesday February 22nd</h2>
                                    <span  className={styles.issue_time}>Updated Fri, Apr  1 2022 - 16:14 UTC</span>
                                </div>
                                <p>Posting to paid categories will be unavailable for a brief period starting around 11:00 PM PST on Tuesday February 22nd.  We apologize for the inconvenience. </p>
                            </li>
                    </ul>
                </section>
        
        
                    </section>
                </div>
            </div>
        </>
    )
}
