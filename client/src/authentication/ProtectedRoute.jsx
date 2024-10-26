/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute({ component: Component }) {
    const navigate = useNavigate();

    useEffect(() => {
        validateToken();
    }, [navigate]);

    const validateToken = () => {
        const user = localStorage.getItem('token');
        if (!user) {
            navigate('/login');
        }
    }
    const user = localStorage.getItem('token');
    if (!user) {
        return null;
    }

    return <Component />;
}

export default ProtectedRoute;
