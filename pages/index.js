import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Sidebar from '../components/sidebar/sidebar'
import Navbar from '../components/navbar/navbar'
import Widget from '../components/widget/widget'
import Featured from '../components/featured/featured'
import Chart from '../components/chart/chart'
import Table from '../components/table/table'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet" /> 
      </Head>

      <main className={styles.home} >
          <Sidebar/>
          <div className={styles.homeContainer}>
            <Navbar/>
            <div className={styles.widgets}>
              <Widget type="user" />
              <Widget type="order"/>
              <Widget type="earning"/>
              <Widget type="balance"/>
            </div>
            <div className={styles.charts}>
              <Featured/>
              <Chart chartLabel="Report"   title="Last 7 Months Detail"/>
            </div>
            <div className={styles.listContainer} >
              <div className={styles.listTitle}> Latest Information </div>
              <Table/>
            </div>
          </div>
      </main>

    </div>
  )
}

// https://www.youtube.com/watch?v=yKV1IGahXqA
//49