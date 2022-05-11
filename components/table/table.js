import styles from './table.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Image from 'next/image'
import { useTheme } from 'next-themes'



const TableUser = () => {
  const { resolvedTheme } = useTheme();
    const rows = [
        {
            id:123324, 
            product:"AAT",
            img:"https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg",
            customer:"Jain",
            date:"22 July",
            amount:50,
            method:"Cash on Delivery",
            status:"Approved",
        },
        {
            id:44845,
            product:"CCV",
            img:"https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
            customer:"Smart",
            date:"1 March",
            amount:650,
            method:"Cash on Delivery",
            status:"Approved",
        },
        {
            id:52352,
            product:"Three",
            img:"https://sa1s3optim.patientpop.com/assets/images/provider/photos/1888657.jpg",
            customer:"Rain",
            date:"15 May",
            amount:770,
            method:"Cash on Delivery",
            status:"Pending",
        },
        {
            id:3266,
            product:"Kelly",
            img:"https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
            customer:"Jon Smith",
            date:"23 Sept",
            amount:230,
            method:"Cash on Delivery",
            status:"Approved",
        },
        {
            id:535523,
            product:"Lonelt",
            img:"https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_1280.jpg",
            customer:"Smith",
            date:"12 April",
            amount:370,
            method:"Cash on Delivery",
            status:"Pending",
        },
    ] 
  return (
    <TableContainer component={Paper} className={styles.table} style={{ backgroundColor: resolvedTheme === 'dark' ? '#1a1a1a' : "white" }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }} >Tracking ID</TableCell>
            <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>Product</TableCell>
            <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>Customer</TableCell>
            <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>Date</TableCell>
            <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>Amount</TableCell>
            <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>Payment Method</TableCell>
            <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id} >
              <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>{row.id} </TableCell>
              <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>
                  <div className={styles.cellWrapper} >
                      <Image src={row.img}   width={32} height={32} className={styles.image}/> {row.product}
                  </div>
              </TableCell>
              <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>{row.customer}</TableCell>
              <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>{row.date}</TableCell>
              <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>{row.amount}</TableCell>
              <TableCell className={styles.tableCell} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>{row.method}</TableCell>
              <TableCell className={styles.tableCell}>
                    <span className={` ${styles["status"]} ${styles[`${row.status}`]} `}>{row.status} </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableUser