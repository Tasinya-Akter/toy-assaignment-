import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { themeContext } from '../Firebase/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(themeContext);
    let location = useLocation();
    if(loader){
        return <p>loading........</p>
    }
    if(user){
        return children
    }else {
        return <Navigate to="/login" state={{from: location}} replace />
    }
  
}

export default PrivateRoute