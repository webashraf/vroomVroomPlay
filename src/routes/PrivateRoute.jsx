import React, { useContext } from 'react';
import { ContextProvider } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {

    const {user} = useContext(ContextProvider);

    return user ?  children :  <Navigate to={"/login"}></Navigate>

};

export default PrivateRoute;