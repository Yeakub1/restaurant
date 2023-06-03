import React, { useContext } from 'react';
import { AuthContext } from '../components/Provider/AuthProvider';

const useAuth = () => {
    const auth = useContext(AuthContext)
    return auth;
};

export default useAuth;