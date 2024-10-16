import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { UserContext } from '../../pages/provider/UserProvider'

const AuthRequired = () => {

  const {isAuthenticate} = useContext(UserContext)

  return isAuthenticate?(
    <Outlet/>
  ):(
    <Navigate to='/login' replace='true'/>
  )
}

export default AuthRequired