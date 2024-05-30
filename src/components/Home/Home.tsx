import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import  useLogout from "../../hooks/useLogout"

const Home = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/Home');
    }

    return (
        <section>
            <h1>Links</h1>
            <br />
            <h2>Public</h2>
            <Link to="/home">Home(You Are Here)</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            <br />
            <h2>Private</h2>
            <Link to="/dashboard">Dashboard</Link>
            <Link to="/admin">Admin Page</Link>
        </section>
    )
}

export default Home