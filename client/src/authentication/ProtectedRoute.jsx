/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ component: Component, role: role }) {
    const navigate = useNavigate();

    useEffect(() => {
        validateToken();
    }, [navigate]);

    const validateToken = async () => {
        debugger;
        const user = localStorage.getItem('token') || sessionStorage.getItem('token');
        const decodedToken = await jwtDecode(user);
        if (decodedToken.role !== role) {
            navigate('/login');
        }
    }
    const user = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (!user) {
        return null;

    }

    return <Component />;
}

export default ProtectedRoute;
