import {Outlet, useNavigate} from "react-router-dom"
import useLogout from "../../hooks/useLogout";
import {useEffect} from "react";
import './Layout.css';

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
    const linkStyle = {
        display: 'block',
        color: 'black',
        textDecoration: 'none',
        textAlign: 'center'
    };

    return (
        <div>

            <div className="top-container">

                <h1 style={{ textAlign: 'center' }}>
                    <a href="home" style={{display: 'block',
                        color: 'black',
                        textDecoration: 'none',
                        textAlign: 'center'}}>My Many Projects</a>
                </h1>

                <div className="button-container">
                    {auth.accessToken ? (
                        <button className="button-5" role="button" onClick={signOut}>Logout</button>
                    ) : (
                        <button className="button-5" role="button" onClick={handleLoginRedirect}>Login</button>
                    )}
                </div>

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