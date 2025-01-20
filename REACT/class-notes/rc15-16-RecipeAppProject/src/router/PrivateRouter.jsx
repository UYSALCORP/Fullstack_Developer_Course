import React, { useContext } from 'react'
import { RecipeContext } from '../context/RecipeProvider'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRouter = () => {
  const {user, pass} = useContext(RecipeContext)
  return user==="uysal" && pass==="1234" ? <Outlet/> : <Navigate to="/"/> 
}

export default PrivateRouter