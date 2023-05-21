import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { themeContext } from '../Firebase/AuthProvider';
import Spinner from '../Spinner/Spinner';

const PrivateRoute = ({children}) => {
    const {user,loader} = useContext(themeContext);
    let location = useLocation();
    if(loader){
        return <Spinner></Spinner>
    }
    if(user){
        return children
    }else {
        return <Navigate to="/login" state={{from: location}} replace />
    }
  
}

export default PrivateRoute