import { Avatar, Box, Button, Container, FormControl, IconButton, Input, InputAdornment, InputLabel, MenuItem, OutlinedInput, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import AccountCircle from "@mui/icons-material/AccountCircle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const TextFieldComp = () => {
  const [err, setErr] = useState(false);
  const currencies = [
    {
      value: 'USD',
      label: '$',
    },
    {
      value: 'EUR',
      label: '€',
    },
    {
      value: 'BTC',
      label: '฿',
    },
    {
      value: 'JPY',
      label: '¥',
    },
  ];
  return (
    <div>
      <Container>
        <Typography variant="h4" sx={{ textAlign: "center", mt: 4 }}>
          TEXT-FIELD
        </Typography>
        <Box onClick={() => setErr(!err)} sx={{ mt: 4 }}>
          <TextField
            required
            id="outlined-basic"
            label="required"
            variant="outlined"
            defaultValue="E-mail giriniz."
            // margin="dense" //! Ufak bir margin değeri verir.
          />

          <TextField
            id="outlined-helperText"
            label="Helper text"
            defaultValue="Default Value"
            helperText={err && "Yanlış Girdiniz!"}
            sx={{ ml: 4 }}
          />

          <TextField
            error={err}
            id="standard-error-helper-text"
            label={err && "Error"}
            defaultValue="Hello World"
            helperText="Incorrect entry."
            variant="standard"
          />
        </Box>

        <Box sx={{mt:5}}>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          defaultValue="EUR"
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <FormControl variant="standard">
            <InputLabel htmlFor="input-with-icon-adornment">
              With a start adornment
            </InputLabel>
            <Input
              id="input-with-icon-adornment"
              startAdornment={
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              }
            />
          </FormControl>
        </Box>

        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={err? "password" : "text" }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password"
                  onClick={()=> setErr(!err)}
                  edge="end"
                >
                 {err ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
      </Container>

      <Button fullWidth variant="contained" color='error' sx={{gap:3, background: "gray"}}>
        SUBMIT
        <Avatar alt="Travis Howard" src="https://cdn.pixabay.com/photo/2021/08/11/11/15/man-6538205_1280.jpg" />
      </Button>
    </div>
  );
};

export default TextFieldComp;
