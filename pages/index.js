import React, { useState, useEffect } from 'react';
import BannerBox from '../components/component/BannerBox';
import Head from "next/head";
import Image from "next/image";
import Link from 'next/link'
import { useRouter } from 'next/router';
import { db, storage } from "../firebase";
import { addDoc, collection, serverTimestamp, updateDoc, doc, getDocs, where,query, onSnapshot, } from 'firebase/firestore';
import styles from "../styles/Home.module.css";
import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
// import "react-calendar/dist/Calendar.css";
import Script from 'next/script';
import DatePicker from 'sassy-datepicker';
// import JobList from "../components/component/JobList";
import { auth } from '../firebase';
import { useSelector,useDispatch } from 'react-redux';
import { logout, selectUser } from '../components/features/UderSlice.js';
import { async } from '@firebase/util';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Slider from '../components/component/Slider';

 function Home() {
 
  const router = useRouter();
  
const [Datecalendar, setDateCalender]= useState("");
  const [details, setDetails] = useState(null);
  const [searchPost, setSearchPost] = useState()
  const [housingOffered, setHousingOffered] = useState([])
  const [community, setCommunity] = useState([])
  const [radioData, setRadioData] = useState([])
  const [services, setServices] = useState([])
  const [cityName,setCityName] = useState();
  const [sale, setSale] = useState([])
  const [address, setAddress] = useState("")
  const [location, setLocation] = useState("") 
  const [selectData, setSelectData] = useState()
  const [subcat, setSubcat] = useState()
  var data = [];
  const dispatch = useDispatch();
  const user =useSelector(selectUser);

  const [usersName, setUsersName ] = useState("");

  useEffect(() => {
    // Perform localStorage action

    const users = localStorage.getItem('displayName')
    console.log(users,"local storage")
    setUsersName(((users!==null)&&(users!==undefined)) ? users : "")
  }, [])

  const postdata = (e) => { 
    // setSubcat(e.target.id)
    console.log(e.target.id)
    router.push({ pathname: '/post', query: { openCat: e.target.id, city: cityName, date: Datecalendar } })
  }
  const signOut=()=>{
    auth.signOut().then(()=>{
      localStorage.clear()
      dispatch(logout())

        router.push("/SignIn");
    })
}


const handleCapacity=(e)=>{
  setCityName(e.target.value);
}
 




const checkData = (item) => {
  setSelectData(item)

}

const city =async()=>{

 await fetch("https://geolocation-db.com/json/0f761a30-fe14-11e9-b59f-e53803842572")
  .then(response =>response.json()) 
  .then((data) => {
  const locations=''
  if (address && address?.length) {
    setCityName(address)
setLocation(locations)
  }else{
    setCityName(data.city.toLowerCase().replace(/\s/g, ''))

  }
}
  )
  .catch((error) => console.error(error))
  
}
useEffect(() => {

  city();


}, [])




 


const onChange = (date) => {
  let calendarDate = new Date(date).toLocaleDateString();
  // var timestamp2 = new Date(date)
  // console.log(timestamp2.getUTCDate(), "Date")
  setDateCalender(calendarDate)
  console.log(Datecalendar, "Datess")

};
const currentDate = () => {
  let calendarDate =new Date(Date.now());
  // console.log(date.toString());
  console.log(calendarDate.toLocaleDateString(), "Date")

};


const handleSubmit = () => {
  router.push({pathname: "/PostSearch", query: { cDate:Datecalendar ,sinput:searchPost}  })
}

  return (

    <>
    

      <div className="container-fluid" id={styles.fluid}>
        <div className='row' id={styles.home_row}>
          <div className='col-lg-3 col-md-12 col-sm-12' id={styles.bg_1}>
            <span>
              <img src="https://painting.demoapp-lc.com/wp-content/uploads/2022/05/weblisted-01.png" alt="" className={styles.img_logo} />
            </span>
            <span className={styles.sidebarAC}>
            {((usersName!==null)&&(usersName!=="")) ?
            <a href="/Create_post" className={styles.a_1}>
            Create a posting
          </a>
            : 
            
            <a href="/SignIn" className={styles.a_1}>
            Create a posting
          </a> }
          <br/>
          {((usersName!==null)&&(usersName!=="")) ?
          <a href="/Mypost" className={styles.a_1}>
             My Post
          </a>
          : 
          ""
          }
            </span>
            <span>
            {((usersName!==null)&&(usersName!=="")) ?
              <p onClick={signOut} className={styles.a_1}>
              {usersName}
              <br/>
               <button className={styles.logoutbtn}>Logout </button>
            </p>
              : 
              <a href="/SignIn" className={styles.a_1}>
              My account
              </a> }
             
            </span>
            <span>

              <span className='form-control' id={styles.siderSearch} >
                <input onChange={(e) => setSearchPost(e.target.value)} value={searchPost} type="text" placeholder='Search' className={styles.homesidebar} />
                 <button onClick={handleSubmit}><FontAwesomeIcon icon={faSearch} /></button>
              </span>
             {/* <span id={styles.form_input}>
              <a href="/Store">Store</a>
        </span> */}
              <br />
            </span> 
            <span>

              <a href="http://google.com/" className={styles.a_2}>
                Event calendar
              </a>
            </span>
            <div className={styles.calendar_main}>
            <DatePicker onChange={onChange}  className={styles.calendardate} />
                         </div>
            <div className={styles.list_001}>
            <ul className={styles.home_ul}>
              <li className={styles.a_3}>

                <a href="/About">Help, Faq, Abuse, Legal</a>
              </li>
              <li className={styles.a_3}>

                <a href="/scams">Avoid Scams & Fraud</a>
              </li>
              <li className={styles.a_3}>

                <a href="">Personal Safety Tips</a>
              </li>
              <li className={styles.a_3}>

                <a href="/termsOfUse">Terms Of Use</a>
              </li>
              <li className={styles.a_3}>

                <a href="/privacy">Privacy Policy</a>
              </li>
              <li className={styles.a_3}>

                <a href="/systemStatus">System Status</a>
              </li>
              {/* <li className={styles.a_3}> <a href='' >help, faq, abuse, legal</a> </li> */}
            </ul>

            <ul className={styles.home_ul}>
              <li className={styles.a_3}> 

                <a href="/About">About weblisted</a>
              </li>
              <li className={styles.a_3}>

                <a href="/opensource">weblisted Open Source</a>
              </li>
              <li className={styles.a_3}>

                <a href="/craigslistHiring">weblisted Hiring</a>
              </li>
              <li className={styles.a_3}>

                <a href="/bestofcraigslist">Best-Of-weblisted</a>
              </li>
              <li className={styles.a_3}>

                <a href="">"weblisted Joe"</a>
              </li>
              <li className={styles.a_3}>

                <a href="https://craignewmarkphilanthropies.org/">
                  Craig newmark <br />
                  Philanthropies
                </a>
              </li>
            </ul>
            </div>
          </div>

          {/*-------rehman code-----*/}

          <div className="col-lg-7 col-md-12 col-sm-12" id={styles.index_content}>
            <h1 className={styles.Head}>{cityName}</h1>
                <div className="row" id={styles.slider}>
                <Slider />
                <BannerBox />
                <BannerBox />
                
               
                </div>
                
            <div className="row">
              <div className="col-lg-9">
                <div className="row">
                  <div className="col-md-6" >
                    <h6 className={styles.comhead}>Community</h6>
                    <div className="row" id={styles.homecat1}>
                      <div className="col-md-6">
                        <ul>
                          <li onClick={(e) => postdata(e)} id="activity partners" className={styles.comlist}>
                            activites
                          </li><li onClick={(e) => postdata(e)} id="artists" className={styles.comlist}>
                            artists
                          </li><li onClick={(e) => postdata(e)} id="childcare" className={styles.comlist}>
                            childcare
                          </li><li onClick={(e) => postdata(e)} id="classes" className={styles.comlist}>
                            classes
                          </li>
                          <li onClick={(e) => postdata(e)} id="events" className={styles.comlist}>
                            events
                          </li>
                          <li onClick={(e) => postdata(e)} id="general" className={styles.comlist}>
                            general
                          </li>
                          <li onClick={(e) => postdata(e)} id="groups" className={styles.comlist}>
                          groups
                          </li>
                          <li onClick={(e) => postdata(e)} id="local news and views" className={styles.comlist}>
                          local news and views
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul>


                          <li onClick={(e) => postdata(e)} id="lost+found" className={styles.comlist}>
                            lost+found
                          </li><li onClick={(e) => postdata(e)} id="misssed" className={styles.comlist}>
                            misssed
                          </li>
                          <li onClick={(e) => postdata(e)} id="connections" className={styles.comlist}>
                            connections
                          </li>
                          <li onClick={(e) => postdata(e)} id="musicians" className={styles.comlist}>
                            musicians
                          </li><li onClick={(e) => postdata(e)} id="pets" className={styles.comlist}>
                            pets
                          </li><li onClick={(e) => postdata(e)} id="politics" className={styles.comlist}>
                            politics
                          </li><li onClick={(e) => postdata(e)} id="rant & raves" className={styles.comlist}>
                            rant & raves
                          </li><li onClick={(e) => postdata(e)} id="rideshare" className={styles.comlist}>
                            rideshare
                          </li>
                          <li onClick={(e) => postdata(e)} id="volunteers" className={styles.comlist}>
                          volunteers
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-6" id={styles.home_list01}>
                    <h6 className={styles.comhead}>Housing</h6>
                    <ul>


                      <li onClick={(e) => postdata(e)} id="apartments / housing for rent" className={styles.comlist}>
                        apts / housing
                      </li> <li onClick={(e) => postdata(e)} id="housing swap" className={styles.comlist}>
                        housing swap
                      </li> <li onClick={(e) => postdata(e)} id="housing wanted" className={styles.comlist}>
                        housing wanted
                      </li>
                      <li onClick={(e) => postdata(e)} id="office & commercial" className={styles.comlist}>
                        office / commercial
                      </li>
                      <li onClick={(e) => postdata(e)} id="parking & storage" className={styles.comlist}>
                        parking / storage
                      </li>
                      <li onClick={(e) => postdata(e)} id="real estate - by broker" className={styles.comlist}>
                        real estate for sale
                      </li>
                      <li onClick={(e) => postdata(e)} id="rooms & shares" className={styles.comlist}>
                        rooms / shared
                      </li>
                      <li onClick={(e) => postdata(e)} id="rooms wanted" className={styles.comlist}>
                        rooms wanted
                      </li>
                      <li onClick={(e) => postdata(e)} id="sublets & temporary" className={styles.comlist}>
                        sublet / temporary
                      </li>
                      <li onClick={(e) => postdata(e)} id="vacation rentals" className={styles.comlist}>
                        vocation rentals
                      </li>


                    </ul>
                  </div>

                  <div className="col-lg-12" id={styles.home_list01}>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6" id={styles.home_list01}>
                    <h6 className={styles.comhead}>Services</h6>
                    <ul>
                      <li onClick={(e) => postdata(e)} id="automotive services" className={styles.comlist}>
                      automotive services
                      </li>
                      <li onClick={(e) => postdata(e)} id="beauty services" className={styles.comlist}>
                      beauty services
                      </li>
                      <li onClick={(e) => postdata(e)} id="cell phone / mobile services" className={styles.comlist}>
                      cell phone / mobile services
                      </li>
                      <li onClick={(e) => postdata(e)} id="computer services" className={styles.comlist}>
                      computer services
                      </li>
                      <li onClick={(e) => postdata(e)} id="creative services" className={styles.comlist}>
                        <span >creative services</span>
                      </li> <li onClick={(e) => postdata(e)} id="cycle services" className={styles.comlist}>
                      cycle services
                      </li>
                      <li onClick={(e) => postdata(e)} id="event services" className={styles.comlist}>
                      event services
                      </li>
                      <li onClick={(e) => postdata(e)} id="farm & garden services" className={styles.comlist}>
                      farm & garden services
                      </li>
                      <li onClick={(e) => postdata(e)} id="financial services" className={styles.comlist}>
                      financial services
                      </li>
                      <li onClick={(e) => postdata(e)} id="health/wellness services" className={styles.comlist}>
                      health/wellness services
                      </li>
                      <li onClick={(e) => postdata(e)} id="household services" className={styles.comlist}>
                      household services
                      </li>
                      <li onClick={(e) => postdata(e)} id="labor / hauling / moving" className={styles.comlist}>
                      labor / hauling / moving
                      </li>
                      <li onClick={(e) => postdata(e)} id="legal services" className={styles.comlist}>
                      legal services
                      </li> <li onClick={(e) => postdata(e)} id="lessons & tutoring " className={styles.comlist}>
                      lessons & tutoring 
                      </li>
                      <li onClick={(e) => postdata(e)} id="marine services" className={styles.comlist}>
                      marine services
                      </li>
                      <li onClick={(e) => postdata(e)} id="pets" className={styles.comlist}>
                        pet
                      </li>
                      <li onClick={(e) => postdata(e)} id="real estate services" className={styles.comlist}>
                      real estate services
                      </li>
                      <li onClick={(e) => postdata(e)} id="skilled trade services" className={styles.comlist}>
                      skilled trade services
                      </li>
                      <li onClick={(e) => postdata(e)} id="small biz ads" className={styles.comlist}>
                      small biz ads
                      </li>
                      <li onClick={(e) => postdata(e)} id="travel/vacation services" className={styles.comlist}>
                      travel/vacation services
                      </li>
                      <li onClick={(e) => postdata(e)} id="writing / editing / translation" className={styles.comlist}>
                      writing / editing / translation
                      </li>

                    </ul>
                  </div>
                  <div className="col-md-6" id={styles.home_list01}>
                    <div className="row">
                      <h6 className={styles.comhead}>For Sale</h6>
                      <div className="col-md-6">
                        <ul>
                          <li onClick={(e) => postdata(e)} id="photo/video" className={styles.comlist}>
                            photo/video
                          </li>
                          <li onClick={(e) => postdata(e)} id="free stuff" className={styles.comlist}>
                            free stuff
                          </li>

                          <li onClick={(e) => postdata(e)} id="motorcycle parts" className={styles.comlist}>
                            motorcycle parts
                          </li>

                          <li onClick={(e) => postdata(e)} id="business/commercial" className={styles.comlist}>
                            business/commercial
                          </li>

                          <li onClick={(e) => postdata(e)} id="barter" className={styles.comlist}>
                            barter
                          </li>

                          <li onClick={(e) => postdata(e)} id="tickets" className={styles.comlist}>
                            tickets
                          </li>

                          <li onClick={(e) => postdata(e)} id="health and beauty" className={styles.comlist}>
                            health and beauty
                          </li>

                          <li onClick={(e) => postdata(e)} id="video gaming" className={styles.comlist}>
                            video gaming
                          </li>

                          <li onClick={(e) => postdata(e)} id="computers" className={styles.comlist}>
                            computers
                          </li>

                          <li onClick={(e) => postdata(e)} id="cars & trucks" className={styles.comlist}>
                            cars & trucks
                          </li>

                          <li onClick={(e) => postdata(e)} id="garage & moving sales" className={styles.comlist}>
                            garage & moving sales
                          </li>

                          <li onClick={(e) => postdata(e)} id="bicycles" className={styles.comlist}>
                            bicycles
                          </li>

                          <li onClick={(e) => postdata(e)} id="wanted" className={styles.comlist}>
                            wanted
                          </li>

                          <li onClick={(e) => postdata(e)} id="farm & garden" className={styles.comlist}>
                            farm & garden
                          </li>


                          <li onClick={(e) => postdata(e)} id="bicycle parts" className={styles.comlist}>
                            bicycle parts
                          </li>

                          <li onClick={(e) => postdata(e)} id="tools" className={styles.comlist}>
                            tools
                          </li>

                          <li onClick={(e) => postdata(e)} id="antiques" className={styles.comlist}>
                            antiques
                          </li>

                          <li onClick={(e) => postdata(e)} id="appliances" className={styles.comlist}>
                            appliances
                          </li>
                          <li onClick={(e) => postdata(e)} id="atvs/utvs/snowmobiles" className={styles.comlist}>
                            atvs/utvs/snowmobiles
                          </li>
                          <li onClick={(e) => postdata(e)} id="books & magazines" className={styles.comlist}>
                            books & magazines
                          </li>
                          <li onClick={(e) => postdata(e)} id="jewelry" className={styles.comlist}>
                            jewelry
                          </li>
                          <li onClick={(e) => postdata(e)} id="clothing & accessories" className={styles.comlist}>
                            clothing&accessories
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6" id={styles.home_list01}>
                        <ul>

                          <li onClick={(e) => postdata} id="rvs" className={styles.comlist}>
                            rvs
                          </li>
                          <li onClick={(e) => postdata(e)} id="household items" className={styles.comlist}>
                            household items
                          </li>
                          <li onClick={(e) => postdata(e)} id="auto wheels & tires" className={styles.comlist}>
                            auto wheels & tires
                          </li>
                          <li onClick={(e) => postdata(e)} id="motorcycles/scooter" className={styles.comlist}>
                            motorcycles/scooter
                          </li>
                          <li onClick={(e) => postdata(e)} id="cell phones" className={styles.comlist}>
                            cell phones
                          </li>

                          <li onClick={(e) => postdata(e)} id="arts & crafts" className={styles.comlist}>
                            arts & crafts
                          </li>  <li onClick={(e) => postdata(e)} id="boats" className={styles.comlist}>
                            boats
                          </li>

                          <li onClick={(e) => postdata(e)} id="trailers" className={styles.comlist}>
                            trailers
                          </li>
                          <li onClick={(e) => postdata(e)} id="toys & games" className={styles.comlist}>
                            toys & games
                          </li>
                          <li onClick={(e) => postdata(e)} id="electronics" className={styles.comlist}>
                            electronics
                          </li>

                          <li onClick={(e) => postdata(e)} id="boat parts" className={styles.comlist}>
                            boat parts
                          </li>
                          <li onClick={(e) => postdata(e)} id="collectibles" className={styles.comlist}>
                            collectibles
                          </li>
                          <li onClick={(e) => postdata(e)} id="heavy equipment" className={styles.comlist}>
                            heavy equipment
                          </li>
                          <li onClick={(e) => postdata(e)} id="auto parts" className={styles.comlist}>
                            auto parts
                          </li>
                          <li onClick={(e) => postdata(e)} id="aviation" className={styles.comlist}>
                            aviation
                          </li>
                          <li onClick={(e) => postdata(e)} id="furniture" className={styles.comlist}>
                            furniture
                          </li>
                          <li onClick={(e) => postdata(e)} id="cds/dvds/vhs" className={styles.comlist}>
                            cds/dvds/vhs
                          </li>
                          <li onClick={(e) => postdata(e)} id="baby & kid stuff" className={styles.comlist}>
                            baby & kid stuff
                          </li>
                          <li onClick={(e) => postdata(e)} id="musical instruments" className={styles.comlist}>
                            musical instruments
                          </li>
                          <li onClick={(e) => postdata(e)} id="materials" className={styles.comlist}>
                            materials
                          </li>
                          <li onClick={(e) => postdata(e)} id="general for sale" className={styles.comlist}>
                            general for sale
                          </li>
                          <li onClick={(e) => postdata(e)} id="computer parts" className={styles.comlist}>
                            computer part
                          </li>

                        </ul>
                      </div>
                    </div>

                    <div className="col-lg-12">
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3" id={styles.home_list01}>
                <div className="col-md-12">
                  <h6 className={styles.comhead}>Jobs</h6>
                  <ul>
                    <li onClick={(e) => postdata(e)} id="et cetera" className={styles.comlist}>
                      et cetera
                    </li>
                    <li onClick={(e) => postdata(e)} id="software/qa/dba/etc" className={styles.comlist}>
                      software/qa/dba/etc
                    </li>
                    <li onClick={(e) => postdata(e)} id="science/biotech" className={styles.comlist}>
                      science/biotech
                    </li>
                    <li onClick={(e) => postdata(e)} id="salon/spa/fitness" className={styles.comlist}>
                      salon/spa/fitness
                    </li>
                    <li onClick={(e) => postdata(e)} id="food/beverage/hospitality" className={styles.comlist}>
                      food/beverage/hospitality
                    </li>
                    <li onClick={(e) => postdata(e)} id="real estate" className={styles.comlist}>
                    real estate
                    </li>
                    <li onClick={(e) => postdata(e)} id="skilled trades/artisan" className={styles.comlist}>
                      skilled trades/artisan
                    </li>
                    <li onClick={(e) => postdata(e)} id="writing/editing" className={styles.comlist}>
                      writing/editing
                    </li>
                    <li onClick={(e) => postdata(e)} id="nonprofit" className={styles.comlist}>
                      nonprofit
                    </li>
                    <li onClick={(e) => postdata(e)} id="marketing/advertising/pr" className={styles.comlist}>
                      marketing/advertising/pr
                    </li>
                    <li onClick={(e) => postdata(e)} id="admin" className={styles.comlist}>
                      admin
                    </li>
                    <li onClick={(e) => postdata(e)} id="general labor" className={styles.comlist}>
                      general labor
                    </li>
                    <li onClick={(e) => postdata(e)} id="government" className={styles.comlist}>
                    government
                    </li>
                    <li onClick={(e) => postdata(e)} id="manufacturing" className={styles.comlist}>
                      manufacturing
                    </li>
                    <li onClick={(e) => postdata(e)} id="retail/wholesale" className={styles.comlist}>
                      retail/wholesale
                    </li>
                    <li onClick={(e) => postdata(e)} id="legal/paralegal" className={styles.comlist}>
                      legal/paralegal
                    </li>
                    <li onClick={(e) => postdata(e)} id="human resource" className={styles.comlist}>
                      human resource
                    </li>

                    <li onClick={(e) => postdata(e)} id="customer service" className={styles.comlist}>
                      customer service
                    </li><li onClick={(e) => postdata(e)} id="tv/film/video/radio" className={styles.comlist}>
                      tv/film/video/radio
                    </li>

                    <li onClick={(e) => postdata(e)} id="healthcare" className={styles.comlist}>
                      healthcare
                    </li>
                    <li onClick={(e) => postdata(e)} id="art/media/design" className={styles.comlist}>
                      art/media/design
                    </li>

                    <li onClick={(e) => postdata(e)} id="architect/engineer/cad" className={styles.comlist}>
                      architect/engineer/cad (no IT/computer jobs here please)
                    </li>

                    <li onClick={(e) => postdata(e)} id=">web/html/info design" className={styles.comlist}>
                      web/html/info design
                    </li>

                    <li onClick={(e) => postdata(e)} id="technical support" className={styles.comlist}>
                      technical support
                    </li>
                    <li onClick={(e) => postdata(e)} id="education/teaching" className={styles.comlist}>
                      education/teaching
                    </li>
                    <li onClick={(e) => postdata(e)} id="systems/networking" className={styles.comlist}>
                      systems/networking
                    </li>
                    <li onClick={(e) => postdata(e)} id="sales" className={styles.comlist}>
                      sales
                    </li>
                    <li onClick={(e) => postdata(e)} id="transportation" className={styles.comlist}>
                      transportation
                    </li>
                    <li onClick={(e) => postdata(e)} id="business/mgmt" className={styles.comlist}>
                      business/mgmt
                    </li><li onClick={(e) => postdata(e)} id="security" className={styles.comlist}>
                      security
                    </li>
                    <li onClick={(e) => postdata(e)} id="account/finance" className={styles.comlist}>
                      account/finance
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/*-------end code-----*/}


          <div className='col-lg-2 col-md-12 col-sm-12' id={styles.bg_1}>
            <span >
              <img src="https://painting.demoapp-lc.com/wp-content/uploads/2022/05/weblisted-01.png" alt="" className={styles.logo_img} />
            </span>
            <p className="P_1">
              <select name="lang" id="chlang" className='js-only' >
                <option value="?lang=da&amp;setlang=1">dansk</option>
                <option value="?lang=de&amp;setlang=1">deutsch</option>
                <option selected="" value="?lang=en&amp;setlang=1">
                  English
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

            <div >
              <div className={styles.home_select_div}>
                <span>
                  USA
                </span> <br />
                <select id="" className={styles.home_select} onClick={handleCapacity}>
                  <option value="adelaide" > adelaide</option>
                  <option value="bangladesh"> bangladesh</option>
                  <option value="beijing"> beijing</option>
                  <option value="brisbane">brisbane</option>
                  <option value="canberra">canberra</option>
                  <option value="christchurch">christchurch</option>
                  <option value="darwin">darwin</option>
                  <option value="guangzhou">guangzhou</option>
                  <option value="hangzhou"> hangzhou</option>
                  <option value="hong kong">hong kong</option>
                  <option value="indonesia">indonesia</option>
                  <option value="malaysia"> malaysia</option>
                  <option value="malaysia"> malaysia</option>
                  <option value="melbourne">  melbourne</option>
                  <option value="micronesia">  micronesia</option>
                  <option value="osaka">osaka</option>
                  <option value="perth">  perth</option>
                  <option value="seoul"> seoul</option>
                  <option value="shanghai"> shanghai</option>
                  <option value="singapore">  singapore</option>
                  <option value="sydney">sydney</option>
                  <option value="taiwan">taiwan</option>
                  <option value="tasmania"> tasmania</option>
                  <option value="thailand">thailand</option>
                  <option value="tokyo"> tokyo</option>
                  <option value="vietnam">vietnam</option>
                  <option value="wellington"> wellington</option>

                </select>
              </div>
              <div className={styles.home_select_div}>
                <span>
                  Asia Pacific
                </span> <br />
                <select id="" className={styles.home_select} onClick={handleCapacity}>
                  <option value="Austrailia"> Austrailia</option>
                  <option value="bangladesh"> Bangladesh</option>
                  <option value="Brunei"> Brunei</option> 
                  <option value="Combodia">Combodia</option>
                  <option value="Burma">Burma</option>
                  <option value="Canada">Canada</option>
                  <option value="China">China</option>
                  <option value="Chile">Chile</option>
                  <option value="Cooks Island"> Cooks Island</option>
                  <option value="Fiji">Fiji</option>
                  <option value="India">India</option>
                  <option value="Malaysia"> Malaysia</option>
                  <option value="Indonesia">Indonesia</option>
                  <option value="Japan">Japan</option>
                  <option value="Maldives">Maldives</option>
                  <option value="Laos">Laos</option>
                  <option value="Pakistan">Pakistan</option>
                  <option value="North Korea">North Korea</option>
                  <option value="New Zealand">New Zealand</option>
                  <option value="Napal">Napal</option>
                  <option value="Singapore">Singapore</option>
                  <option value="Sri-Lanka">Sri-Lanka</option>
                  <option value="Vietnam"> Vietnam</option>
                  <option value="United State">United State</option>
                  <option value="Russia"> Russia </option>
                  <option value="vietnam">vietnam</option>
                  <option value="Thailand"> Thailand</option>

                </select>
              </div>

              <div className={styles.home_select_div}>
                <span>
                  WL Worldwide
                </span> <br />
                <select name="" id="" className={styles.home_select} onClick={handleCapacity} >
                  <option value="africa">africa</option>
                  <option value="egypt">egypt</option>
                  <option value="ethiopia">ethiopia</option>
                  <option value="ghana">ghana</option>
                  <option value="morocco">morocco</option>
                  <option value="kenya">kenya</option>
                  <option value="south africa">south africa</option>
                  <option value="tunisia">tunisia</option>
                  <option value="americas">americas</option>
                  <option value="asia">asia</option>
                  <option value="europe">europe</option>
                  <option value="middle east">middle east</option>
                  <option value="oceania">oceania</option>

                </select>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" id={styles.footer}>  
        <div className={styles.footer_home}>
          <ul className={styles.clfooter_home}>
            <li>© 2022  <span className={styles.desktop}>weblisted </span><span className={styles.mobile}>WL</span></li>&nbsp;&nbsp;
            <li><a href="">help</a></li> &nbsp;&nbsp;&nbsp;&nbsp;
            <li><a href="">safety</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li className={styles.desktop}><a href="">privacy</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li className={styles.desktop}><a href="">feedback</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li><a href="">terms</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
            <li><a href="">about</a></li>&nbsp;&nbsp;&nbsp;&nbsp;
            </ul>
        </div>
      </div>
    </>
  );
}  

export default Home;