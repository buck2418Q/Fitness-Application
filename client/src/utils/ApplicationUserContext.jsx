import { jwtDecode } from "jwt-decode";
import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ApplicationUserContext = createContext(null);
export const ApplicationUserProvider = ({ children }) => {
    const [appUserId, setUserId] = useState(null);
    const [appUserData, setUserData] = useState(null);
    const [appUserName, setUserName] = useState('');
    const [appUserEmail, setUserEmail] = useState('');
    const [appUserofilePicture, setProfilePicture] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token') || sessionStorage.getItem('token');
        const decodedToken = jwtDecode(token);
        console.log('decodedToken',decodedToken)
        setUserId(decodedToken.id);
        setUserName(decodedToken.userName);
        setUserEmail(decodedToken.email);
        setProfilePicture(decodedToken.profilePicture)

    }, [])
    return (
        <ApplicationUserContext.Provider value={{ appUserId, appUserData, appUserEmail, appUserName, appUserofilePicture }}>
            {children}
        </ApplicationUserContext.Provider>
    );
}

export const useApplicationUser = () => useContext(ApplicationUserContext);
