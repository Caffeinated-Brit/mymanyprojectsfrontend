import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import  useLogout from "../../hooks/useLogout"
const Dashboard = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    return (
        <div className="main-container">
        <section>
            <h1>Dashboard</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/admin">Go to the Admin page</Link>
            <br />
            <Link to="/home">Go to the Home page</Link>
        </section>
        </div>
    )
}

export default Dashboard