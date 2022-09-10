import React from 'react'
import { useContext } from 'react'
import { Navigate } from 'react-router-dom'

import { AppContext } from '../Contexts/Context'

const PrivateRoute = ({children}) => {

    const {isAuth}=useContext(AppContext)

if(!isAuth.auth)
{
    return <Navigate to="/login"/>
}

  return (
    children
  )
}

export default PrivateRoute