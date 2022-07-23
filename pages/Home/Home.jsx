import styles from '../../../craiglist/styles/DashboardHome.module.css'
import Chart from '../../components/component/Chart/Chart';
import FeaturedInfo from '../../components/component/FeaturedInfo/FeaturedInfo'
import WidgetLg from '../../components/component/WidgetLg/WidgetLg';
import WidgetSm from '../../components/component/WidgetSm/WidgetSm';
import DashboardProductAddForm from '../../components/component/DashboardProductAddForm/DashboardProductAddForm';
import { userData } from '../DummyData'

function Home() {


  return (
    <div className="container" id={styles.home}>
      <div className="row">
        <div className="col-lg-12 col-md-12 col-sm-12">
          <FeaturedInfo />
        </div>
      </div>
      <div className="row" id={styles.Chart}>
        <div className="col-lg-12 col-md-12 col-sm-12">
         {/* <Chart data={userData} title="User Analytics" grid dataKey="Active User"  /> */}
         <DashboardProductAddForm />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6" id={`${styles.homeWidgets}`}>
          <WidgetSm />
        </div>  
        <div className="col-lg-6" id={`${styles.homeWidgets}`}>
          <WidgetLg />
        </div>

      </div>

    </div>
  )
}

export default Home;
