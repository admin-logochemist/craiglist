import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/scams.module.css"

export default function scams() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
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
                                            scams
                                        </p>
                                    </li>
                                </ul>
                            </nav>


                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id={styles.main_container}>
                <div className="row">
                    <section className={styles.simple_page_content}>
                        <p className={styles.navlinks}><a href="safety">personal safety</a>&nbsp; |&nbsp; <a href="">prohibited</a>&nbsp; |&nbsp; <a href="">recalls</a>&nbsp; |&nbsp; <a href="">forum</a></p>
                        <h2>Avoiding Scams</h2>
                        <p><span ><strong>Deal locally, face-to-face </strong>—follow this one rule and avoid 99% of scam attempts.</span></p>
                        <ul>
                            <li><strong>Do not&nbsp;provide payment to anyone you have not met in person.</strong></li>
                            <li><strong>Beware offers involving shipping - </strong>deal with locals you can meet in person.</li>
                            <li><strong>Never wire funds (e.g. Western Union)</strong> - anyone who asks you to is a scammer.</li>
                            <li><strong>Don't accept cashier/certified checks or money orders</strong> - banks cash fakes, then hold you responsible.</li>
                            <li><strong>Transactions are between users only</strong>, no third party provides a "guarantee".</li>
                            <li><strong>Never give out financial info</strong> (bank account, social security, paypal account, etc).</li>
                            <li><strong>Do not rent or purchase sight-unseen</strong>—that amazing "deal" may not exist.</li>
                            <li><strong>Refuse background/credit checks</strong> until you have met landlord/employer in person.</li>
                            <li><strong>"weblisted voicemails" </strong>- Any message asking you to access or check "weblisted voicemails" or "weblisted voice messages" is fraudulent - <strong>no such service exists.</strong></li>
                        </ul>
                        <hr />
                        <h4>Who should I notify about fraud or scam attempts?</h4>
                        <p><strong>United States</strong></p>
                        <ul>
                            <li><a href="">Internet Fraud Complaint Center</a></li>
                            <li><a href="">FTC complaint form</a> and hotline: 877-FTC-HELP (877-382-4357)</li>
                            <li><a href="">Consumer Sentinel/Military (for armed service members and families)</a></li>
                            <li><a href="">SIIA Software and Content Piracy reporting</a></li>
                            <li><a href="">Ohio Attorney General Consumer Complaints</a></li>
                            <li><a href="">New York Attorney General, Avoid Online Investment Fraud</a></li>
                        </ul>
                        <p><strong>Canada</strong></p>
                        <ul>
                            <li><a href="">Canadian Anti-Fraud Centre</a> or 888-495-8501 (toll-free)</li>
                        </ul>
                        <p>If you are defrauded by someone you met in person, contact your local police department.</p>
                        <p>If you suspect that a weblisted post may be connected to a scam, please <a href="">send us the details</a>.</p>
                        <hr />
                        <h3>Recognizing scams</h3>
                        <p>Most scams attempts involve one or more of the following:</p>
                        <ul>
                            <li>Email or text from someone that is not local to your area.</li>
                            <li>Vague initial inquiry, e.g. asking about "the item." Poor grammar/spelling.</li>
                            <li>Western Union, Money Gram, cashier check, money order, Paypal, Zelle, shipping, escrow service, or a "guarantee."</li>
                            <li>Inability or refusal to meet face-to-face to complete the transaction.</li>
                        </ul>
                        <hr />
                        <h3>Examples of Scams</h3>
                        <p>1. Someone <em>claims your</em> transaction is guaranteed, that a buyer/seller is officially certified, OR<em> that a third party of any kind will handle or provide protection</em> for a payment:</p>
                        <ul>
                            <li>These claims are fraudulent, as transactions are between users only.</li>
                            <li>The scammer will often send an official looking (but fake) email that appears to come from weblisted or another third party, offering a guarantee, certifying a seller, or pretending to handle payments.</li>
                        </ul>
                        <p><strong>2.&nbsp;</strong><strong><em>D</em></strong><strong><em>istant person</em> offers a genuine-looking (but fake) <em>cashier's check</em></strong><strong>:</strong></p>
                        <ul>
                            <li>You receive an email or text (examples below) offering to buy your item, pay for your services in advance, or rent your apartment, sight unseen and without meeting you in person.</li>
                            <li>A cashier's check is offered for your sale item as a deposit for an apartment or for your services.</li>
                            <li>Value of cashier's check often far exceeds your item—scammer offers to "trust" you, and asks you to wire the balance via money transfer service.</li>
                            <li>Banks will cash fake checks AND THEN HOLD YOU RESPONSIBLE WHEN THE CHECK FAILS TO CLEAR, sometimes including criminal prosecution.</li>
                            <li>Scams often pretend to involve a 3rd party (shipping agent, business associate, etc.).</li>
                        </ul>
                        <p><strong>3. Someone requests <em>wire service</em> payment via <em>Western Union or MoneyGram</em>:</strong></p>
                        <ul>
                            <li>Deal often seems too good to be true, price is too low, or rent is below market, etc.</li>
                            <li>Scam "bait" items include apartments, laptops, TVs, cell phones, tickets, other high value items.</li>
                            <li>Scammer may (falsely) claim a confirmation code from you is needed before he can withdraw your money.</li>
                            <li>Common countries currently include: Nigeria, Romania, UK, Netherlands—but could be anywhere.</li>
                            <li>Rental may be local, but owner is "travelling" or "relocating" and needs you to wire money abroad.</li>
                            <li>Scammer may pretend to be unable to speak by phone (scammers prefer to operate by text/email).</li>
                        </ul>
                        <p><strong>4. <em>Distant person</em> offers to send you a <em>cashier's check or money order</em> and then have you <em>wire money</em>:</strong></p>
                        <ul>
                            <li>This is ALWAYS a scam in our experience—the cashier's check is FAKE.</li>
                            <li>Sometimes accompanies an offer of merchandise, sometimes not.</li>
                            <li>Scammer often asks for your name, address, etc. for printing on the fake check.</li>
                            <li>Deal often seems too good to be true.</li>
                        </ul>
                        <p><strong>5. <em>Distant seller</em> suggests use of an <em>online escrow service</em>:</strong></p>
                        <ul>
                            <li>Most online escrow sites are FRAUDULENT and operated by scammers.</li>
                            <li>For more info, do a google search on "<a href="">fake escrow</a>" or "<a href="">escrow fraud</a>."</li>
                        </ul>
                        <p><strong>6. <em>Distant seller</em> asks for a partial payment upfront, after which they will <em>ship</em> goods:</strong></p>
                        <ul>
                            <li>He says he trusts you with the partial payment.</li>
                            <li>He may say he has already shipped the goods.</li>
                            <li>Deal often <em>sounds too good to be true</em>.</li>
                        </ul>
                        <p><strong>7. <em>Foreign company</em> offers you a job receiving payments from customers, then <em>wiring funds</em></strong><strong>:</strong></p>
                        <ul>
                            <li>Foreign company may claim it is unable to receive payments from its customers directly.</li>
                            <li>You are typically offered a percentage of payments received.</li>
                            <li>This kind of "position" may be posted as a job, or offered to you via email.</li>
                        </ul>
                        <hr />
                        <h3>Actual scam emails sent to weblisted users:</h3>
                        <p>&nbsp;</p>
                        <p><span>Hi,</span></p>
                        <div><span>I am selling this car because my platoon has been sent back to Afganistan and don't want it get old in my backyard. The price is low because I need to sell it before November 16th. It has no damage, no scratches or dents, no hidden defects. It is in immaculate condition, meticulously maintained and hasn't been involved in any accident...I do have the title , clear, under my name. The <span id="lw_1267122116_0" className={styles.yshortcuts}>Denali</span> has 35,000 miles VIN#&nbsp;<span>1GKEK63U16J138428&nbsp;</span>.</span></div>
                        <div><span>It is still available for sale if interested, price as stated in the ad $4,300. The car is in Baltimore, MD, in case it gets sold I will take care of shipping. Let me know if you are interested, email back.</span></div>
                        <div><span> Regards!!!</span></div>
                        <div>&nbsp;</div>
                        <div><hr /></div>
                        <div>&nbsp;</div>
                        <div><span>First of all I want to thank you for your interest for my car. I sell it at this price($2,980.00 ) because I have been divorced recently. Now the car is in my property and as a woman i don't need it. This car is in excellent <span id="lw_1267121877_0" className={styles.yshortcuts}>working conditions</span>, no scratches, flaws or any kind of damage, slightly used in 100% working and looking conditions and comes with a <span id="lw_1267121877_1" className={styles.yshortcuts}>clear title</span>.</span></div>
                        <p><span>From the beginning you have to know that for the payment I request only secure pay, I prefer the payment to be done using eBay services. We will use a safe payment method because I am affiliated at <span id="lw_1267121877_2" className={styles.yshortcuts}>eBay</span> and I have a purchase protection account for $20,000.00 The final price that I want for this car is $2,980.00 including shipping and handling.<br /><br />If you are interested in buying it please provide me your full name and address so I can initiate the deal through eBay.<br /><br />I will wait your answer very soon.</span></p>
                        <p>&nbsp;</p>
                        <hr />
                        <p>&nbsp;</p>
                        <p><span>Hello,</span></p>
                        <p><span>I am looking for caring and honest person to watch my 3 years old daughter while I work, during our stay in the state and a friend introduced weblisted.com to me, I was searching on Childcare Babysitter, when your Ad post pumped up as a Childcare and Babysitter, am interested in your service as my babysitter/Childcare.. My Little daughters is (Mellina ) , I would like you to watch over her while i am at work in your Location , I reside in United Kingdom,I will be coming to the States in about two weeks time , Cos I just got a contract with Boss Perfume fashion industry down there, I work as a model and the contract will last for a month, the duration of our service wil be from 10am to 5pm, monday thru friday, I would like to know if she will be taken care of in your childcare centre/Home, or the hotel room where i would be lodging, It's Okay by me, any of this ways.<br /><br />My little daughter (Mellina ) is 3 years old, I will be waiting patiently for your email indicating the cost of everything,I mean the price for your service,how long you will be available to take care of her,how much u charge per week. she is just three years old as i have said earlier and i will be glad to update you and make the payment in advance to show you how serious i am. So please get back to me as soon as you can if you will be able to handle her and take very good care of her for me. <br /><br />Email me back<br />Your's faithfully</span></p>
                        <p>&nbsp;</p>
                        <hr />
                        <pre><br />&gt; Thanks for your mail,Since the cost of your bike is $800 i just contacted<br />my client about the cost of your bike and it present condition and he said<br />there is no problem about that.So my client said he will be issuing you a<br />Certified Check of $4000 while you wire 3000 to me through Western Union<br />Money Trasfer and you deduct the cost of your bike $800 and keep the<br />remaining $200 which my client said you should take for the terms of<br />Transaction and Agreement between you and my client.So i will like you to<br />send me your full contact information to where my client will be sending you<br />&gt; the Certified Check like this:<br />&gt; name.........<br />&gt; full address.............<br />&gt; city...............<br />&gt; state.............<br />&gt; country..........<br />&gt; zipcode............<br />&gt; cell/office/home phone number.......................<br />&gt; I will look forward to the requested information as soon as  possible so<br />that the check can be sent out to you immediately  And do get back to me<br />with the Pics of the bike so tha! t my client will  be Able to see What he<br />is paying off.Get back to me immediately. Looking torwards your<br />&gt; respond,<br />&gt; Best Regards.<br /><br /></pre>
                    </section>
                </div>
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

            </div>
          
        </>
    )
}
