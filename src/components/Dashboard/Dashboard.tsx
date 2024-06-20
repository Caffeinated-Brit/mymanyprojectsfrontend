import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import  useLogout from "../../hooks/useLogout"

const Dashboard = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/Home');
    }

    return (
        <section>
            <h1>Dashboard</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/admin">Go to the Admin page(must have admin privileges)</Link>
            <br />
            <Link to="/home">Go to the Home page</Link>
            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </section>
    )
}

export default Dashboard