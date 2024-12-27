import { jwtDecode } from 'jwt-decode';


export const verifyAndCheckRole = (allowedRoles) => {
    return (req, res, next) => {
        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            return res.status(403).json({ message: 'Access Denied: No Token Provided' });
        }

        try {
            const decodedToken = jwtDecode(token);
            req.user = decodedToken;
            const userRole = decodedToken.role.toLowerCase();

            if (!allowedRoles.includes(userRole)) {
                return res.status(403).json({ message: 'Access Denied: Invalid Role' });
            }
            next();

        } catch (err) {
            return res.status(401).json({ message: 'Invalid Token' });
        }
    };
};
