import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-calendar/dist/Calendar.css";
import Script from 'next/script'
import Calendar from "react-calendar/dist/umd/Calendar";
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Web Listed</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
          rel="stylesheet"
          
        />
       
      </Head>
      <main>
        <br />
        <Container>
          <Row>
            <Col sm="3" className={styles.bg_1}>
            <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js" integrity="sha384-cVKIPhGWiC2Al4u+LWgxfKTRIcfu0JTxR+EQDz/bgldoEyl4H0zUF0QKbrJ0EcQF" crossorigin="anonymous" />
        <Script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js" integrity="sha384-IQsoLXl5PILFhosVNubq5LC7Qb9DXgDA9i+tQ8Zj3iwWAwPtgFTxbJ8NT4GN1R8p" crossorigin="anonymous" />

              <h1>
                <img src="https://painting.demoapp-lc.com/wp-content/uploads/2022/05/weblisted-01.png" alt="" className="img_logo"/>
              </h1>
              <p>
                {" "}
                <a href="http://google.com/" className={styles.a_1}>
                  Create a posting
                </a>
              </p>
              <p>
                {" "}
                <a href="/SignIn" className={styles.a_1}>
                  My account
                </a>
              </p>
              <p>
                {" "}
                <input
                  className={styles.input_1}
                  type="search"
                  name=""
                  id=""
                  placeholder="Search craigslist"
                />
                <br />
              </p>
              <p>
                {" "}
                <a href="http://google.com/" className={styles.a_2}>
                  Event calendarR
                </a>
              </p>
              <Calendar />
              <br />
              <ul>
                <li className={styles.a_3}>
                  {" "}
                  <a href="">help, faq, abuse, legal</a>{" "}
                </li>
                <li className={styles.a_3}>
                  {" "}
                  <a href="">avoid scams & fraud</a>{" "}
                </li>
                <li className={styles.a_3}>
                  {" "}
                  <a href="">personal safety tips</a>{" "}
                </li>
                <li className={styles.a_3}>
                  {" "}
                  <a href="">terms of use</a>{" "}
                </li>
                <li className={styles.a_3}>
                  {" "}
                  <a href="">privacy policy</a>{" "}
                </li>
                <li className={styles.a_3}>
                  {" "}
                  <a href="">system status</a>{" "}
                </li>
                {/* <li className={styles.a_3}> <a href='' >help, faq, abuse, legal</a> </li> */}
              </ul>

              <ul>
                <li className={styles.a_3}>
                  {" "}
                  <a href="">about craigslist</a>{" "}
                </li>
                <li className={styles.a_3}>
                  {" "}
                  <a href="">craigslist open source</a>{" "}
                </li>
                <li className={styles.a_3}>
                  {" "}
                  <a href="">craigslist blog</a>{" "}
                </li>
                <li className={styles.a_3}>
                  {" "}
                  <a href="">best-of-craigslist</a>{" "}
                </li>
                <li className={styles.a_3}>
                  {" "}
                  <a href="">"craigslist joe"</a>{" "}
                </li>
                <li className={styles.a_3}>
                  {" "}
                  <a href="">
                    craig newmark <br />
                    philanthropies
                  </a>{" "}
                </li>
                {/* <li className={styles.a_3}> <a href='' >help, faq, abuse, legal</a> </li> */}
              </ul>
            </Col>
            <Col sm="7">
              <div className={styles.banner}>
                <h1>Dallas</h1>
              </div>
              <br />
              <div className="row">
                <div className="col-sm-4 col_a">
                  <table className="table">
                    <thead className={styles.header_1}>
                      <tr>
                        {/* <th scope="col"></th> */}
                        {/* <th scope="col"></th> */}
                        <th className={styles.th_1}>Communitys</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>activities</td>
                        <td>lost+found</td>
                      </tr>
                      <tr>
                        <td><a href="./post">artists</a></td>
                        <td>missed connections</td>
                      </tr>
                      <tr>
                        <td>childcare</td>
                        <td>musicians</td>
                      </tr>
                      <tr>
                        <td>events</td>
                        <td>pets</td>
                      </tr>
                      <tr>
                        <td>general</td>
                        <td>politics</td>
                      </tr>
                      <tr>
                        <td>events</td>
                        <td>pets</td>
                      </tr>
                      <tr>
                        <td>groups</td>
                        <td>rants & raves</td>
                      </tr>
                      <tr>
                        <td>local news</td>
                        <td>rideshare</td>
                      </tr>
                      <tr>
                        <td></td>
                        <td>volunteers</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-5 a2">
                  <table className="table">
                    <thead className={styles.header_1}>
                      <tr>
                        {/* <th scope="col"></th> */}
                        <th className={styles.th_1}>Housing</th>
                        {/* <th ></th> */}
                        <th></th>
                        {/* <th></th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>apts / housing</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>housing swap</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>housing wanted</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>office / commercial</td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td>parking / storage</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>real estate for sale</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>rooms / shared</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>rooms wanted</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>sublets / temporary</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>vacation rentalss</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-3 a1">
                  <table className="table">
                    <thead className={styles.header_1}>
                      <tr>
                        {/* <th scope="col"></th> */}
                        <th className={styles.th_1}>Jobs</th>
                        <th></th>
                        {/* <th></th> */}
                        {/* <th></th> */}
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>accounting+finance</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>admin / office</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>arch / engineering</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>art / media / design</td>
                        <td> </td>
                      </tr>
                      <tr>
                        <td>biotech / science</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>business / mgmt</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>customer service</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>education</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>etc / misc</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>food / bev / hosp</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>general labor</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>government</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>human resources</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>legal / paralegal</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>manufacturing</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>marketing / pr / ad</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>nonprofit sector</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>real estate</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>retail / wholesale</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>sales / biz dev</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>salon / spa / fitness</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>security</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>skilled trade / craft</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>software / qa / dba</td>
                        <td></td>
                      </tr>
                      {/* <tr>
                        <td>systems / network</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>technical support</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>transport</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>tv / film / video</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>web / info design</td>
                        <td></td>
                      </tr>
                      <tr>
                        <td>writing / editing</td>
                        <td></td>
                      </tr> */}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="row t1">
                <div className="col-sm-2">
                  <table className="table">
                    <thead className={styles.header_1}>
                      <tr>
                        {/* <th scope="col"></th> */}
                        {/* <th scope="col"></th> */}
                        <th className={styles.th_1}>Services</th>
                        <th></th>
                        <th></th> <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>automotive</td>
                        <td>labor/move</td>
                      </tr>
                      <tr>
                        <td>beauty</td>
                        <td>legal</td>
                      </tr>
                      <tr>
                        <td>cell/mobile</td>
                        <td>lessons</td>
                      </tr>
                      <tr>
                        <td>computer</td>
                        <td>marine</td>
                      </tr>
                      <tr>
                        <td>creative</td>
                        <td>pet</td>
                      </tr>
                      <tr>
                        <td>cycle</td>
                        <td>real estate</td>
                      </tr>
                      <tr>
                        <td>event</td>
                        <td>skilled trade</td>
                      </tr>
                      <tr>
                        <td>farm+garden</td>
                        <td>sm biz ads</td>
                      </tr>
                      <tr>
                        <td>financial</td>
                        <td>travel/vac</td>
                      </tr>
                      <tr>
                        <td>health/well</td>
                        <td>write/ed/tran</td>
                      </tr>
                      <tr>
                        <td>household</td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="col-sm-5 space_2">
                  {" "}
                  <table className="table">
                    <thead className={styles.header_2}>
                      <tr>
                        {/* <th scope="col"></th> */}
                        <th className={styles.th_1}>For Sale</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>antiques</td>
                        <td>farm+garden</td>
                      </tr>
                      <tr>
                        <td>appliances</td>
                        <td>free</td>
                      </tr>
                      <tr>
                        <td>arts+crafts</td>
                        <td>furniture</td>
                      </tr>
                      <tr>
                        <td>atv/utv/sno</td>
                        <td>garage sale</td>
                      </tr>
                      <tr>
                        <td>general</td>
                        <td>politics</td>
                      </tr>
                      <tr>
                        <td>auto parts</td>
                        <td>general</td>
                      </tr>
                      <tr>
                        <td>aviation</td>
                        <td>heavy equip</td>
                      </tr>
                      <tr>
                        <td>baby+kid</td>
                        <td>household</td>
                      </tr>
                      <tr>
                        <td>barter</td>
                        <td>jewelry</td>
                      </tr>
                      <tr>
                        <td>barter</td>
                        <td>jewelry</td>
                      </tr>
                      <tr>
                        <td>barter</td>
                        <td>jewelry</td>
                      </tr>
                      <tr>
                        <td>barter</td>
                        <td>jewelry</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </Col>
            <Col sm="2" className={styles.bg_1}>
              <h1>
                <img src="https://painting.demoapp-lc.com/wp-content/uploads/2022/05/weblisted-01.png" alt="" className="img_logo" />
              </h1>
              <p className="P_1">
              <select name="lang" id="chlang" className='js-only' >
                <option value="?lang=da&amp;setlang=1">dansk</option>
                <option value="?lang=de&amp;setlang=1">deutsch</option>
                <option selected="" value="?lang=en&amp;setlang=1">
                  english
                </option>
                <option value="?lang=es&amp;setlang=1">español</option>
                <option value="?lang=fr&amp;setlang=1">français</option>
                <option value="?lang=it&amp;setlang=1">italiano</option>
                <option value="?lang=pt&amp;setlang=1">português</option>
                <option value="?lang=fi&amp;setlang=1">suomi</option>
                <option value="?lang=sv&amp;setlang=1">svenska</option>
                <option value="?lang=vi&amp;setlang=1">tiếng việt</option>
                <option value="?lang=tr&amp;setlang=1">türkçe</option>
                <option value="?lang=ru&amp;setlang=1">русский</option>
                <option value="?lang=zh&amp;setlang=1">中文</option>
                <option value="?lang=ja&amp;setlang=1">日本語</option>
                <option value="?lang=ko&amp;setlang=1">한국말</option>
              </select>
              </p>

              <div className="accordion" id="accordionExample">
              <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo1">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo1" aria-expanded="false" aria-controls="collapseTwo1">
         USA
      </button>
    </h2>
    <div id="collapseTwo1" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      adelaide
auckland
bangladesh
beijing
brisbane
canberra
christchurch
darwin
guangzhou
hangzhou
hong kong
indonesia
malaysia
manila
melbourne
micronesia
okinawa
osaka
perth
seoul
shanghai
shenzhen
singapore
sydney
taiwan
tasmania
thailand
tokyo
vietnam
wellington
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingTwo">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      asia/pacific
      </button>
    </h2>
    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div className="accordion-body">
      adelaide
auckland
bangladesh
beijing
brisbane
canberra
christchurch
darwin
guangzhou
hangzhou
hong kong
indonesia
malaysia
manila
melbourne
micronesia
okinawa
osaka
perth
seoul
shanghai
shenzhen
singapore
sydney
taiwan
tasmania
thailand
tokyo
vietnam
wellington
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header" id="headingThree">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      cl worldwide
      </button>
    </h2>
    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div className="accordion-body">
       
africa
egypt
ethiopia
ghana
kenya
morocco
south africa
tunisia
americas
asia
europe
middle east
oceania

      </div>
    </div>
  </div>
</div>
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}
