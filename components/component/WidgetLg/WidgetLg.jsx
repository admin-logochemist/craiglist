import React from 'react'
import styles from '../../../styles/WidgetLg.module.css'
import cn from 'classnames';
import { DataGrid } from '@mui/x-data-grid';


const columns = [
    { field: 'id', headerName: 'Order ID', width: 70 },
    { field: 'ItemName', headerName: 'Item Name', width: 130 },
    { field: 'Price', headerName: 'Price', width: 130 },
    {
      field: 'Status',
      headerName: 'Status',
      type: 'number',
      width: 90,
    },
    {
      field: 'Name',
      headerName: 'Customer Name',
      description: 'This column has a value getter and is sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.row.Name || ''} ${params.row.id || ''}`,
    },
  ];
  
  const rows = [
    { id: 1, Price: '$100', ItemName: 'Burger', Status: "Delivered" , Name:"Ghayas Shantu" },
    { id: 2, Price: '$10', ItemName: 'Pasta', Status: "Delivered" ,  Name:"Apha Biscuit"  },
    { id: 3, Price: '$54', ItemName: 'Hot soup', Status: "Delivered",Name:"Ghayas Shantu"  },
    { id: 4, Price: '$60', ItemName: 'loraChin', Status: "Pending",Name:"Apha Biscuit"  },
    { id: 5, Price: '$200', ItemName: 'Pizza', Status: null ,Name:"Ghayas Shantu"} ,
    { id: 6, Price: '$55', ItemName: null, Status: "On Way",Name:"Apha Biscuit" },
    { id: 7, Price: '$615', ItemName: 'maccao', Status: "Cancel",Name:"Apha Biscuit" },
    { id: 8, Price: '$10', ItemName: 'Wayn', Status: "On Way",Name:"Apha Biscuit" },
    { id: 9, Price: '$5', ItemName: 'Harvey', Status: "Delivered",Name:"Apha Biscuit" },
  ];

function WidgetLg() {

    const Button = ({ type }) => {
        return <button className={styles.WidgetLgButton} type >{type}</button>
    };

    return (
        <div className={styles.WidgetLg}>
            <h3 className={styles.WidgetLgTitle}>Latest  Order</h3>
            <div style={{ height: 400, width: '100%' }}>
            <DataGrid
              rows={rows}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              checkboxSelection
            />
          </div>
        </div>
    )
}

export default WidgetLg
