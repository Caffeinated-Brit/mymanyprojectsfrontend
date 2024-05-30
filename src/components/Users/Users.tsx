import { useEffect, useState } from "react";
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import { useNavigate, useLocation } from "react-router-dom";
import './Users.css';

interface User {
    id: number;
    username: string;
}

const Users = () => {
    const [users, setUsers] = useState<User[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const axiosPrivate = useAxiosPrivate();
    const navigate = useNavigate();
    const location = useLocation();

    const getUsers = async (controller: AbortController) => {
        try {
            const response = await axiosPrivate.get('/users', {
                signal: controller.signal
            });
            setUsers(response.data);
            setError(null); // Clear any previous errors
        } catch (err: any) {
            if (err.code !== 'ERR_CANCELED') {
                console.error(err);
                setError('Failed to load users');
                navigate('/login', { state: { from: location }, replace: true });
            }
        }
    };

    useEffect(() => {
        let isMounted = true;
        const controller = new AbortController();

        getUsers(controller);

        return () => {
            isMounted = false;
            controller.abort();
        };
    }, [axiosPrivate, navigate, location]);

    const deleteUser = async (userId: number) => {
        console.log("Deleting user with id: " + userId);
        const controller = new AbortController();
        try {
            await axiosPrivate.delete(`/users/${userId}`, {
                signal: controller.signal
            });
            getUsers(controller);
        } catch (err: any) {
            if (err.code !== 'ERR_CANCELED') {
                console.error(err);
                setError('Failed to delete user');
                navigate('/login', { state: { from: location }, replace: true });
            }
        }
    };

    return (
        <article>
            <h2>Users List</h2>
            {error ? (
                <p>{error}</p>
            ) : users && users.length > 0 ? (
                <ul>
                    {users.map((user) => (
                        <li key={user.id} className="list-item">
                            {user.username}
                            <button className="button" onClick={() => deleteUser(user.id)}>Delete</button>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No users to display</p>
            )}
            <br />
        </article>
    );
};

export default Users;