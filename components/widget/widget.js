import styles from './widget.module.css';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const widget = ({type}) => {
  let data;
  //temporary
  const amount=100;
  const diff=20;

  switch(type){
    case "user"    : data={ title:"USERS",   isMoney:false, link:"See all users",    icon:<PersonIcon className={styles.icon} style={{color:"crimson",backgroundColor:"rgba(255,0,0,0.2)" }} /> };break;
    case "order"   : data={ title:"ORDERS",  isMoney:false, link:"See all orders",   icon:<ShoppingCartOutlinedIcon className={styles.icon}  style={{color:"goldenrod",backgroundColor:"rgba(218,165,32,0.2)" }} /> };break;
    case "earning" : data={ title:"EARNING", isMoney:true,  link:"See all earnings", icon:<MonetizationOnOutlinedIcon className={styles.icon} style={{color:"green",backgroundColor:"rgba(0,128,0,0.2)" }} /> };break;
    case "balance" : data={ title:"BALANCE", isMoney:true,  link:"See all balance",  icon:<AccountBalanceWalletOutlinedIcon className={styles.icon} style={{color:"purple",backgroundColor:"rgba(128,0,128,0.2)" }} /> };break;
    default : break;
  }
  return (
    <div className={styles.widget}>
        <div className={styles.left}>
          <span className={styles.title}>{data.title}</span>
          <span className={styles.counter}>{data.isMoney && "$" }{amount}</span>
          <span className={styles.link}>{data.link}</span>
        </div>
        <div className={styles.right}>
          <div className={`${styles.percentage} ${styles.positive}`} > <KeyboardArrowUpIcon/> {diff}% </div>
          {data.icon}
        </div>
    </div>
  )
}

export default widget