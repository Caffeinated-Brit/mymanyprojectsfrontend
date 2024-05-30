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
            <h1>Home</h1>
            <br />
            <p>You are logged in!</p>
            <br />
            <Link to="/neditor">Go to the Editor page(under construction)</Link>
            <br />
            <Link to="/admin">Go to the Admin page(must have admin privileges)</Link>
            <br />
            <Link to="/lounge">Go to the Lounge(under construction)</Link>
            <br />
            <Link to="/home">Go to the Home page</Link>
            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </section>
    )
}

export default Dashboard