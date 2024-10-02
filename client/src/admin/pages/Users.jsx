import { useEffect, useState } from "react";
import { getAllUsers } from '../../services/userService';

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        getAllUser();
    }, []);

    const getAllUser = async () => {
        try {
            const userData = await getAllUsers();
            console.log(userData)
            setUsers(userData);
        } catch (e) {
            setError(e.message);
            console.error(e);
        }
    };

    return (
        <div>
            <h2>Admin Users</h2>
            {error && <p className="text-red-500">{error}</p>}
            <ul>
                {users.map(user => (
                    <li key={user._id} className="text-green-700">{user.firstName}</li>
                ))}
            </ul>
        </div>
    );
}

export default Users;
