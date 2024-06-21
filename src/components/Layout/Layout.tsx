import {Outlet, useNavigate} from "react-router-dom"
import useLogout from "../../hooks/useLogout";
import {useEffect} from "react";
import './Layout.css';

//TODO: remove
import useAuth from '../../hooks/useAuth'

const Layout = () => {
    const navigate = useNavigate();
    const logout = useLogout();
    const { auth } = useAuth();


    const signOut = async () => {
        await logout();
        navigate('/Home');
    }
    const handleLoginRedirect = () => {
        navigate('/login');
    };

    //console.log(auth)
    // reloads the page for when the login button is used
    useEffect(() => {
    }, [auth.accessToken, navigate]);


    return (
        <div>
            <div className="container">
                <h1 className="title">My Many Projects</h1>
            </div>


            <div className="button-container">
                {auth.accessToken ? (
                    <button onClick={signOut}>Logout</button>
                ) : (
                    <button onClick={handleLoginRedirect}>Login</button>
                )}
            </div>

            <h5 className="subtitle">by Josh</h5>


            <div className="welcome-container">
                {auth.accessToken && (
                        <h3 className="welcome-message">Welcome {auth.user}</h3>
                )}
            </div>

            <main className={"App"}>
                <Outlet/>
            </main>

        </div>
    )
}

export default Layout