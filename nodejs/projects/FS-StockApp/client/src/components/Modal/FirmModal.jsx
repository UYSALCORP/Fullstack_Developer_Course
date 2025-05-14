import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { TextField } from "@mui/material";
import { useState } from "react";
import useStockCall from "../../hook/useStockCall";
import { useEffect } from "react";
import { modalStyle } from "../../styles/globalStyles";

export default function FirmModal({ open, handleClose, initialState }) {
  const { createStockData, updateStockData } = useStockCall();

  //! Lifting State Up yaptık burada
  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  const [info, setInfo] = useState({
    name: "",
    address: "",
    phone: "",
    image: "",
  });

  const handleChange = (e) => {
    // console.log(e);
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (info._id) {
      updateStockData("firms", info);
    } else {
      createStockData("firms", info);
    }
    handleClose();
  };
  // console.log(updateStockData)

  useEffect(() => {
    setInfo(initialState);
  }, [initialState]);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={modalStyle}>
          <Box component="form" onSubmit={handleSubmit}>
            <TextField
              name="name"
              type="text"
              variant="outlined"
              label="Firm Name"
              required
              fullWidth
              onChange={handleChange}
              value={info.name}
            />
            <TextField
              sx={{ mt: 2 }}
              name="address"
              type="text"
              variant="outlined"
              label="Firm Address"
              required
              fullWidth
              onChange={handleChange}
              value={info.address}
            />
            <TextField
              sx={{ mt: 2 }}
              name="phone"
              type="text"
              variant="outlined"
              label="Firm Phone"
              required
              fullWidth
              onChange={handleChange}
              value={info.phone}
            />
            <TextField
              sx={{ mt: 2, mb: 3 }}
              name="image"
              type="text"
              variant="outlined"
              label="Firm Image"
              required
              fullWidth
              onChange={handleChange}
              value={info.image}
            />
            <Button type="submit" variant="contained" fullWidth>
              SUBMIT FIRM
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}
