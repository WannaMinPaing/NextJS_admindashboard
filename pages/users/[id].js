import styles from './single.module.css'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from "../../components/navbar/navbar";
import Image from 'next/image'
import BorderColorOutlinedIcon from '@mui/icons-material/BorderColorOutlined';
import Chart from '../../components/chart/chart'
import Table from '../../components/table/table'

 const single = () => {
  return (
    <div className={styles.single}>
      <Sidebar/>
      <div className={styles.singleContainer}>
      <Navbar/>
      <div className={styles.top} >
        <div className={styles.left}>
          <div className={styles.editButton}><BorderColorOutlinedIcon/></div>
          <h1 className={styles.title}>Information</h1>
          <div className={styles.item}>
            <Image src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg" alt="" className={styles.itemImg} width={100} height={100}/>
            <div className={styles.details }>
              <h1 className={styles.itemTitle}>Wanna Min Paing</h1>

              <div className={styles.detailItem}>
                <span className={styles.itemKey}>Email:</span>
                <span className={styles.itemValue}>paingwanna@gmail.com</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.itemKey}>Phone:</span>
                <span className={styles.itemValue}>09799703132</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.itemKey}>Address:</span>
                <span className={styles.itemValue}>No-467/B,ATK Str,Hlaing Tharyar</span>
              </div>
              <div className={styles.detailItem}>
                <span className={styles.itemKey}>Country:</span>
                <span className={styles.itemValue}>Myanmar</span>
              </div>

            </div>
          </div>
        </div>
        <div className={styles.right}>
          <Chart className={styles.chart} chartLabel="Detail Report" title="Last 7 Months Detail" />
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.listTitle}> Latest Information </div>
        <Table/>
      </div>
      </div> 
    </div>
  )
}

export default single;
 