import { Box, Button, Container, Typography } from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import DeleteIcon from '@mui/icons-material/Delete';
import React from "react";

const TypoButtons = () => {
  return (
    <Container maxWidth="md">
      <Typography
        variant="h2"
        component="h3"
        gutterBottom
        align="center"
        color="error"
        sx={{ background: "#eee", mt: 4, border: "1px solid red" }}
      >
        Typography, Container, Box, Button
      </Typography>
      <Typography variant="button" sx={{mr:4, background:"yellow", color:"navy"}}>span olacak</Typography>
      <Typography variant="button" color="error">span olacak</Typography>
      <Typography variant="body1">P etiketi</Typography>
      <Typography variant="body2">P etiketi</Typography>

      <Box sx={{display:"flex", flexDirection:"column", mt:4}}>
      <Button variant="contained" color="success" size="large" startIcon={<SendIcon/>}>Contained</Button>
      <Button variant="outlined" color="error" sx={{mt:2}} endIcon={<DeleteIcon/>}>Outlined</Button>
      </Box>
    </Container>
  );
};

export default TypoButtons;
