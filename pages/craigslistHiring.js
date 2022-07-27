import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from '../styles/craigslistHiring.module.css'

export default function craigslistHiring() {
    return (
        <>
            <div className={styles.global_header}>
                <a className={styles.header_logo} name="logoLink" href="/">WL</a>

                <nav className={styles.breadcrumbs_container}>

                    <ul className={styles.breadcrumbs}>
                        <li className={styles.crumb}>
                            <p>
                                <a href="/about/">About</a>&nbsp;
                                <span className={styles.breadcrumb_arrow}>&gt;</span>&nbsp;
                            </p>
                        </li>
                        <li className={styles.crumb}>
                            <p>
                                weblisted Hiring
                            </p>
                        </li>
                    </ul>
                </nav>
            </div>


            <section className={styles.simple_page_content}>
                <div>
                    <p className={styles.p}><span><strong>weblisted is hiring!</strong></span></p>
                    <p className={styles.p}><span>The following positions are available in San Francisco:</span></p>
                    <ul>
                        <li><span className={styles.li}><a href="" target="_blank">JavaScript Developer</a></span></li>
                        <li><span className={styles.li}><a href="" target="_blank">Network Engineer</a></span></li>
                        <li><span className={styles.li}><a href="" target="_blank">User Operations</a></span></li>
                    </ul>
                </div>
                <div>
                    <p className={styles.p3}><span>weblisted offers:</span></p>
                    <ul>
                        <li><span className={styles.li}>an unusually philanthropic company mission and philosophy</span></li>
                        <li><span className={styles.li}>non-garden-variety tech challenges at billion-page-view-per-day scale</span></li>
                        <li><span className={styles.li}>a tech nirvana, no VCs, MBAs, sales, marketing, biz dev, or pivoting<br /></span></li>
                        <li><span className={styles.li}>big company stability and benefits -- without the <a href="">dysfunction and despair</a></span></li>
                        <li><span className={styles.li}>at or above&nbsp;market&nbsp;pay for you -- free classifieds for humanity</span></li>
                    </ul>
                    <p className={styles.p3}><span>weblisted benefits include:</span></p>
                    <ul>
                        <li><span className={styles.li}>100% paid (including eligible dependents) health and dental insurance</span></li>
                        <li><span className={styles.li}>weblisted-provided health reimbursement account ($4K-$10K)</span></li>
                        <li><span className={styles.li}>3-to-1 match on your&nbsp;charitable donations (up to 10% of salary)</span></li>
                        <li><span className={styles.li}>401(k) match (up to 6% of salary), with immediate vesting</span></li>
                        <li><span className={styles.li}>4 weeks paid time off and 10 paid holidays</span></li>
                        <li><span className={styles.li}>paid parental leave</span></li>
                        <li><span className={styles.li}>commuting stipend (up to $360/month)</span></li>
                        <li><span className={styles.li}>wellness stipend (up to $150/month)</span></li>
                        <li><span className={styles.li}>mobile phone and at-home internet stipend (up to $250/month)</span></li>
                        <li><span className={styles.li}>bike-friendly culture, in-office bicycle parking</span></li>
                        <li><span className={styles.li}>SF HQ - 25' ceilings, all natural light,&nbsp;adjustable height desks<br /></span></li>
                    </ul>
                    <p className={styles.p5}><span>weblisted is an equal opportunity employer and does not discriminate based on sex (e.g. pregnancy, perceived pregnancy, childbirth, breastfeeding, related medical conditions), age, genetic information, marital/domestic partner status, medical condition (including cancer, genetic characteristics, or AIDS/HIV), mental/physical disability, national origin or ancestry (e.g. language use;&nbsp;driver’s license granted under Vehicle Code section 12801.9), race/color, religion, creed, gender (e.g. actual/perceived gender identity, expression, or transition, and transgender or gender non-conformance), sexual orientation, weight, height, military/veteran status, or any other characteristic protected by federal, state, or local laws.</span></p>
                </div>
            </section>
            <footer className={styles.footer}>
                <ul className={styles.clfooter}>
                    <li>© 2022 <span className={styles.desktop}>weblisted</span><span className={styles.mobile}>WL</span></li>
                    <li><a href="">help</a></li>
                    <li><a href="">safety</a></li>
                    <li className={styles.desktop}><a href="">privacy</a></li>
                    <li className={styles.desktop}><a href="">feedback</a></li>
                    <li><a href="">terms</a></li>
                    <li><a href="">about</a></li>
                    <li><a href="">weblisted app</a></li>
                    <li><a href="">WL is hiring</a></li>
                </ul>
            </footer>
        </>
    )
}
