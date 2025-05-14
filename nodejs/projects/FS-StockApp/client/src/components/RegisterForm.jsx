import React from 'react'
import { Button, TextField } from "@mui/material";
const RegisterForm = ({
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    handleSubmit,
    /* and other goodies */
  }) => {
  return (
    <form onSubmit={handleSubmit}>
    <TextField
      name="username"
      label="Username"
      variant="outlined"
      fullWidth
      value={values.username}
      onChange={handleChange}
      helperText={touched.username && errors.username} //validationda verdiğimiz kalıba uymazsa rengi errora çevirmesi için error attribute ı benden false/true degeri bekliyor ondan dolayı daha sağlıklı olması için boolean deger döndürüyoruz.
      // touched da kullanıcının inputa tıklayıp tıklamadığını yakalıyor
      error={touched.username && errors.username}
      onBlur={handleBlur} // kullanıcının input alanından ayrıldığını yaklayan event
      margin="normal"
    />
    <TextField
      name="firstName"
      label="First Name"
      variant="outlined"
      fullWidth
      value={values.firstName}
      onChange={handleChange}
      helperText={touched.firstName && errors.firstName}
      error={touched.firstName && errors.firstName}
      onBlur={handleBlur}
      margin="normal"
    />
    <TextField
      name="lastName"
      label="Last Name"
      variant="outlined"
      fullWidth
      value={values.lastName}
      onChange={handleChange}
      helperText={touched.lastName && errors.lastName}
      error={touched.lastName && errors.lastName}
      onBlur={handleBlur}
      margin="normal"
    />
    <TextField
      name="email"
      label="E-Mail"
      variant="outlined"
      fullWidth
      value={values.email}
      onChange={handleChange}
      helperText={touched.email && errors.email}
      error={touched.email && errors.email}
      onBlur={handleBlur}
      margin="normal"
      type="email"
    />
    <TextField
      name="password"
      label="Password"
      variant="outlined"
      fullWidth
      value={values.password}
      onChange={handleChange}
      helperText={touched.password && errors.password}
      error={touched.password && errors.password}
      onBlur={handleBlur}
      margin="normal"
      type="password"
    />
    <Button
      variant="contained"
      fullWidth
      sx={{ background: "black" }}
      type="submit"
    >
      Submit
    </Button>
  </form>
  )
}

export default RegisterForm
