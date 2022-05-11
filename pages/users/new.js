import styles from './new.module.css'
import Sidebar from '../../components/sidebar/sidebar'
import Navbar from "../../components/navbar/navbar";
import PhotoCameraIcon from '@mui/icons-material/PhotoCamera';
import DriveFolderUploadOutlinedIcon from '@mui/icons-material/DriveFolderUploadOutlined';
import {userInputs} from '../../src/formsource';
import { useState } from 'react';
import Image from 'next/image'

export const getStaticProps = async () =>{
  return{
    props:{
      inputs:userInputs,
   }
  }
} 

 const newUser = ({inputs}) => { 
   const [file,setFile] = useState('');
   console.log("fileInput",file)

  return (
    <div className={styles.new}>
      <Sidebar/>
      <div className={styles.newContainer}>
        <Navbar/>

        <div className={styles.top}>
          <h1 className={styles.title}>Add New User </h1>
        </div>

        <div className={styles.bottom}>
          <div className={styles.left}>
            {/* <PhotoCameraIcon sx={{ fontSize: 80 }} className={styles.camera} /> */}
            <Image src={file ? URL.createObjectURL(file) :"https://thumbs.dreamstime.com/z/camera-plus-line-icon-add-photo-vector-166966023.jpg" } width={100} height={100} className={styles.camera}  />
          </div>
          <div className={styles.right}>
            <form className={styles.form}>

              <div className={styles.formInput}>
                <label htmlFor="file">Image:<DriveFolderUploadOutlinedIcon className={styles.icon} /></label>
                <input type="file" id="file" style={{display:"none"}} onChange={ e =>setFile(e.target.files[0])}  />
              </div>

              {inputs.map( (input) =>(
                   <div className={styles.formInput} key={input.id}>
                     <label>{input.label}</label><input type={input.type} placeholder={input.placeholder} />
                  </div>

              ))}
              
              
              <button className={styles.submitButton}>Send</button>
            </form>
          </div>
        </div> {/*Bottom*/}
      </div> 
    </div>
  )
}

export default newUser
