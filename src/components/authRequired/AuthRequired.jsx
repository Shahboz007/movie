import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { CreatedContext } from '../../pages/context/UserContext'

const AuthRequired = () => {

  const {isAuthenticate} = useContext(CreatedContext)

  return isAuthenticate?(
    <Outlet/>
  ):(
    <Navigate to='/login' replace='true'/>
  )
}

export default AuthRequired