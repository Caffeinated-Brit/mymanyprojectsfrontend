import { useNavigate, Link } from "react-router-dom";

const Home = () => {

    /*
    <Link to="/home">Home(You Are Here)</Link>
            <Link to="/login">Login</Link>
     */
    return (
        <div className="main-container">
        <section>
            <h1>Links</h1>
            <br />
            <h2>Public</h2>
            <Link to="/projects">My Projects</Link>
            <br />
            <h2>Private</h2>
            <Link to="/dashboard">User Dashboard</Link>
            <br />
            <h2>Admin</h2>
            <Link to="/register">Register</Link>
            <Link to="/admin">Admin Page</Link>
        </section>
        </div>
    )
}

export default Home