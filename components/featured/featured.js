import styles from "./featured.module.css"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CircularProgressWithLabel from './CircularProgressWithLabel';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const featured = () => {
  return (
    <div className={styles.featured}>
      <div className={styles.top}>
        <h1 className={styles.title}>Total Revenue</h1>
        <MoreVertIcon  fontSize="small"  />
      </div>
      <div className={styles.bottom}>
        <div className={styles.featuredChart}>
           <CircularProgressWithLabel value={80}  size="1rem"  />
        </div>
        <p className={styles.title}>Total sales made today </p>
        <p className={styles.amount}>$240 </p>
        <p className={styles.desc}>We will use useEffect and useState to dynamically update the color of the LinearProgress component</p>
        <div className={styles.summary}>
            <div className={styles.item}>
                <div className={styles.itemTitle}>Target</div>
                <div  className={`${styles.itemResult} ${styles.negative}`}>
                  <KeyboardArrowDownIcon size="small" />
                  <div className={styles.resultAmount}>$12.4k</div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.itemTitle}>Last Week</div>
                <div  className={`${styles.itemResult} ${styles.positive}`}>
                  <KeyboardArrowUpIcon size="small" />
                  <div className={styles.resultAmount}>$12.4k</div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.itemTitle}>Last Month</div>
                <div className={`${styles.itemResult} ${styles.positive}`}>
                  <KeyboardArrowUpIcon size="small" />
                  <div className={styles.resultAmount}>$12.4k</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default featured;
