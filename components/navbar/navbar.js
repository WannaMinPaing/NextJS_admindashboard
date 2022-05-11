import styles from './navbar.module.css'
import Image from "next/image";
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import ViewListOutlinedIcon from '@mui/icons-material/ViewListOutlined';
import { useTheme } from 'next-themes'

const Navbar = () => {
  const { theme, setTheme } = useTheme()
  const { resolvedTheme } = useTheme();
  const handleDarkChange = () =>{
     theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  
  return (
    <div className={styles.navbar}>
        <div className={styles.wrapper}>

            <div className={styles.search}> 
              <input type="text" placeholder="Search..."/><SearchIcon/>
            </div>

            <div className={styles.items}>
              <div className={styles.item}> <LanguageIcon className={styles.icon} />English </div>
              <div className={styles.item} onClick={handleDarkChange}  style={{color: resolvedTheme === 'dark' ? "white" : "black" }} > <DarkModeOutlinedIcon className={styles.icon}/> </div>
              <div className={styles.item}> <NotificationsNoneOutlinedIcon className={styles.icon}/>
                    <div className={styles.counter}>1</div>
              </div>
              <div className={styles.item}> <ChatBubbleOutlineIcon className={styles.icon}/>
                    <div className={styles.counter}>2</div>
              </div>
              <div className={styles.item}> <FullscreenExitIcon className={styles.icon}/> </div>
              <div className={styles.item}> <ViewListOutlinedIcon className={styles.icon}/> </div>
              <div className={styles.item}> 
                
                <Image src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg" alt="" className={styles.avatar} width={30} height={30} />
              </div>

            </div>

        </div>
    </div>
  )
}

export default Navbar
