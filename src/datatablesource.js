import styles from '../components/datatable/datatable.module.css'
import Image from 'next/image'

export const userColumns =[
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'user', headerName: 'User', width: 230,renderCell:(params)=>{
        return(
        <div className={styles.cellWithImg}>
            <Image className={styles.cellImg} src={params.row.img} alt="avatar" width={32} height={32} />
            {params.row.username}
        </div>
         )}
    },
    {field:'email',headerName:"Email",width:230},
    {field:'age',headerName:"Age",width:100},
    {field:'status',headerName:"Status",width:160,
        renderCell:(params)=>{
            return(
                <div className={`${styles["cellWithStatus"]} ${styles[params.row.status]}`}>{params.row.status}</div>
            )
        }
    }
]

export const userRows = [
    {
        id: 1,
        username:"Smith",
        img:"https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg",
        status:"active",
        email:"1name@gmail.com",
        age:22,
    },
    {
        id: 2,
        username:"John",
        img:"https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
        status:"pending",
        email:"2name@gmail.com",
        age:32,
    },
    {
        id: 3,
        username:"Rain",
        img:"https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg",
        status:"active",
        email:"3name@gmail.com",
        age:32,
    },
    {
        id: 4,
        username:"Honey",
        img:"https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
        status:"pending",
        email:"4name@gmail.com",
        age:42,
    },
    {
        id: 5,
        username:"Kelly",
        img:"https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg",
        status:"passive",
        email:"5name@gmail.com",
        age:52,
    },
    {
        id: 6,
        username:"Latest",
        img:"https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
        status:"active",
        email:"6name@gmail.com",
        age:66,
    },
]