import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useState } from "react";
import useStockCall from "../../hook/useStockCall";
import { useSelector } from "react-redux";
import { modalStyle } from "../../styles/globalStyles";
import { useNavigate } from "react-router-dom";

export default function ProductModal({ handleClose, open, initialState }) {
  const { createStockData, updateStockData } = useStockCall();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      updateStockData("purchases", info);
    } else {
      createStockData("pruchases", info);
    }
    handleClose();
  };

  const { brands, firms, products } = useSelector((state) => state.stock);

  const [info, setInfo] = useState({
    initialState,
  });

  const handleChange = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
    handleClose();
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Firm</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info?.firmId?._id || info?.firmId || ""}
                label="Category"
                onChange={handleChange}
              >
                <MenuItem onClick={() => navigate("/stock/firms")}>
                  Add New Firm
                </MenuItem>
                <hr />
                {firms.map((firm, index) => (
                  <MenuItem key={index} value={firm._id}>
                    {firm.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Brand</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info.info?.brandId?._id || info?.brandId  || ""}
                label="Brands"
                onChange={handleChange}
              >
                {brands.map((brand, index) => (
                  <MenuItem key={index} value={brand._id}>
                    {brand.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Product</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={info?.productId?._id || info?.productId  || ""}
                label="Brands"
                onChange={handleChange}
              >
                {products.map((product, index) => (
                  <MenuItem key={index} value={product._id}>
                    {product.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Quantity"
              name="quantity"
              id="quantity"
              type="number"
              variant="outlined"
              onChange={handleChange}
              value={info.quantity}
              required
            />
            <TextField
              label="Price"
              name="price"
              id="price"
              type="text"
              variant="outlined"
              onChange={handleChange}
              value={info.price}
              required
            />
            <Button type="submit" variant="contained" fullWidth>
              ADD NEW PURCHASE
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
