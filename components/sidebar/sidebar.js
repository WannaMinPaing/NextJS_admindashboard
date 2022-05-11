import styles from './sidebar.module.css'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import CategoryIcon from '@mui/icons-material/Category';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import BalconyIcon from '@mui/icons-material/Balcony';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SystemSecurityUpdateGoodIcon from '@mui/icons-material/SystemSecurityUpdateGood';
import DiamondIcon from '@mui/icons-material/Diamond';
import SettingsIcon from '@mui/icons-material/Settings';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import LogoutIcon from '@mui/icons-material/Logout';
import Link from  'next/link';
import { useTheme } from 'next-themes'
 

const Sidebar = () => {
  const { theme, setTheme } = useTheme()

  return (
    <div className={styles.sidebar}>
        <div className={styles.top}>          
            <span className={styles.logo} >Nine Pay</span>
        </div>
        <hr/>
        <div className={styles.center}> 
          <ul className={styles.linkList}>
            <p className={styles.title}>Main</p>
            <li><Link href="/"><a><DashboardIcon className={styles.icon} /> <span>Dashboard</span></a></Link></li>

            <p className={styles.title}>LISTS</p>
            <li><Link href="/users"><a><PersonIcon className={styles.icon} /><span>Users</span></a></Link></li>
            <li><CategoryIcon className={styles.icon} /><span>Products</span></li>
            <li><BorderColorIcon className={styles.icon} /><span>Orders</span></li>
            <li><DeliveryDiningIcon className={styles.icon} /><span>Delivery</span></li>

            <p className={styles.title}>USEFUL</p>
            <li><BalconyIcon className={styles.icon} /><span>State</span></li>
            <li><NotificationsActiveIcon className={styles.icon} /><span>Notifications</span></li>

            <p className={styles.title}>SERVICE</p>
            <li><SystemSecurityUpdateGoodIcon className={styles.icon} /><span>System Health</span></li>
            <li><DiamondIcon className={styles.icon} /><span>Logs</span></li>
            <li><SettingsIcon className={styles.icon} /><span>Setting</span></li>

            <p className={styles.title}>USER</p>
            <li><AssignmentIndIcon className={styles.icon} /><span>Profile</span></li>
            <li><LogoutIcon className={styles.icon} /><span>Logout</span></li>
            
          </ul>
        </div>

        <div className={styles.bottom}>
            <div className={styles.colorOption} onClick={() => setTheme('light')}> </div>
            <div className={styles.colorOption} onClick={() => setTheme('dark')}></div>
        </div>
    </div>
  )
}

export default Sidebar
