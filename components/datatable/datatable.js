import styles from './datatable.module.css'
import { DataGrid } from '@mui/x-data-grid';
import {userColumns,userRows} from '../../src/datatablesource'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import PreviewIcon from '@mui/icons-material/Preview';
import Link from 'next/link';
import PersonAddAltRoundedIcon from '@mui/icons-material/PersonAddAltRounded';
import { useTheme } from 'next-themes'
import { useState } from 'react';

const DatatableUser = () => {
  
  const { resolvedTheme } = useTheme();
  const [data,setData] = useState(userRows)
  const handleDelete = (id)=>{
    setData(data.filter( (item)=> item.id != id));
  }
  const actionColumn = [
    {
      field:"action",
      headerName:"Action",
      width:200,
      renderCell:(params)=>{
        return(
          <div className={styles.cellAction}>
              <Link href="/users/test" style={{textDecoration:"none"}}><div className={styles.viewButton}><PreviewIcon color="primary"/></div></Link>
              <div className={styles.deleteButton}><DeleteOutlineIcon color="error"  onClick={()=>handleDelete(params.row.id)} /></div>
          </div>
        )
      }
    }
  ]
  return ( 
    <div className={styles.datatable} style={{color: resolvedTheme === 'dark' ? "white" : "black" }}>
      <div className={styles.datatableTitle}>
        Add New User
        <Link href="/users/new" className={styles.linkTag}><PersonAddAltRoundedIcon fontSize="large" color="primary" className={styles.addIcon}/></Link>
      </div>
        <DataGrid
        rows={data}
        columns={userColumns.concat(actionColumn)} 
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        
      />
    </div>
  )
}

export default DatatableUser
