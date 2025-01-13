import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

const PrivateRouter = () => {
  const name="Uysal"
  const password = "1234"

  return name==="Uysal" && password==="1234" ? (<Outlet/>) : (<Navigate to="/login"/>)
}

export default PrivateRouter