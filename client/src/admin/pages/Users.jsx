import { useEffect, useState } from "react";
import { getAllUsers } from '../../services/userService';
import Loader from '../../components/Loader'

function Users() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const userData = await getAllUsers();
            setUsers(userData);
        } catch (e) {
            setError(e.message);
            console.error(e);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <Loader />;
    }

    return (
        <div>
            <h2>Admin Users</h2>
            {error && <p className="text-red-500">{error}</p>}
            <ul>
                {users.map(user => (
                    <li className="text-green-500" key={user.id}>{user.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default Users;