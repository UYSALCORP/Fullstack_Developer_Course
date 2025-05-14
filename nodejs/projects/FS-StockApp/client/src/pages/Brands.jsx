import React from "react";
import useStockCall from "../hook/useStockCall";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import BrandModal from "./../components/Modal/BrandModal";
import BrandsCard from "../components/Cards/BrandsCard";
import { Container } from "@mui/system";
import { Button, Grid, Typography } from "@mui/material";
import { useState } from "react";

const Brands = () => {
  const { getStockData } = useStockCall();
  const { brands } = useSelector((state) => state.stock);

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [initialState, setInitialState] = useState({
    name: "",
    image: "",
  });

  useEffect(() => {
    getStockData("brands");
  }, []);
  return (
    <Container>
      <Typography variant="h4" color="secondary.second" align="center">
        Brands
      </Typography>
      <Button variant="contained" onClick={handleOpen}>
        NEW BRANDS
      </Button>
      <Grid container spacing={2} mt={2}>
        {brands.map((firm, index) => (
          <Grid item xs={12} md={6} lg={4} xl={3} key={index}>
            <BrandsCard
              {...firm}
              setInitialState={setInitialState}
              handleOpen={handleOpen}
            />
          </Grid>
        ))}
      </Grid>

      {open && (
        <BrandModal
          open={open}
          handleClose={handleClose}
          initialState={initialState}
        />
      )}
    </Container>
  );
};

export default Brands;
