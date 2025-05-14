import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { useSelector } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';
import useStockCall from '../../hook/useStockCall';


const getRowId=(row)=>{
    return row._id
}

export default function ProductsTable() {
    const {products}=useSelector((state)=>state.stock)
    const {deleteStockData} = useStockCall

    
//! valueGetter: data'dan çekemediğimzi bilgileri çekmemizi sağlıyor field kısmında catergoryId.name kullanmamıza izin vermiyor fakat valueGetter'da bunu yapabiliyoruz.


const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'categoryId',
    headerName: 'Category',
    width: 200,
    editable: true,
    valueGetter:((value)=>value.name)
  },
  {
    field: 'brandId',
    headerName: 'Brand',
    width: 200,
    editable: true,
    valueGetter:((value)=>value.name)
  },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
    editable: true,
  },
  {
    field: 'quantity',
    headerName: 'Stock',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    headerAlign:"center",
    align:"center",
    width: 160,
    renderCell: (params)=>(
        <DeleteIcon oncClick={()=>deleteStockData("products", params.id)}/>
    )
  },
];

  return (
    //! Mui Grid Table 
    <Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
      getRowId={getRowId}
        rows={products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        //* Rows per page -> pageSizeOptions
        pageSizeOptions={[5, 10, 15, 20]}
        checkboxSelection
        disableRowSelectionOnClick
        //! Slots | En üstteki yapı | column, filter vs.
        slots={{toolbar: GridToolbar}}
      />
    </Box>
  );
}
