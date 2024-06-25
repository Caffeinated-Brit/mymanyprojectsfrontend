import { Link } from "react-router-dom"
import Users from '../Users/Users'

const Admin = () => {
    return (
        <div className="main-container">
        <section>
            <h1>Admins Page</h1>
            <br />
            <Users />
            <br />
            <div className="flexGrow">
                <Link to="/Home">Home</Link>
            </div>
        </section>
        </div>
    )
}

export default Admin