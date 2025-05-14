import { Button, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { useEffect, useState } from "react";
import ProductsTable from "../components/Table/ProductsTable";
import useStockCall from "../hook/useStockCall";
import ProductModal from "../components/Modal/ProductModal"

const Products = () => {
  const { getStockData, getProCatBrand } = useStockCall();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [initialState, setInitialState] = useState({
        name:"",
        categoryId:"",
        brandId:"",
      })

  useEffect(() => {
    // getStockData("products");
    // getStockData("brands");
    // getStockData("categories");
    getProCatBrand()
  }, []);
  return (
    <div>
      <Container>
        <Typography variant="h4" color="secondary.second" align="center">
          Products
        </Typography>
        <Button variant="contained" sx={{ mb: 2 }} onClick={handleOpen}>
          NEW PRODUCT
        </Button>
        <ProductModal open={open} handleClose={handleClose} initialState={initialState}/>
        <ProductsTable />
      </Container>
    </div>
  );
};

export default Products;
