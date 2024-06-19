import {Outlet, useNavigate} from "react-router-dom"
import useLogout from "../../hooks/useLogout";
import useAuth from "../../hooks/useAuth";
import {useEffect} from "react";

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

    // reloads the page for when the login button is used
    useEffect(() => {
    }, [auth.accessToken, navigate]);


//TODO: when the page is reloaded the button defaults to login, perhaps use usestate
    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <h1 style={{ textAlign: 'center' }}>My Many Projects</h1>

                {auth.accessToken ? (
                    <button style={{ position: 'absolute', right: '5%' }} onClick={signOut}>Logout</button>
                ) : (
                    <button style={{ position: 'absolute', right: '5%' }} onClick={handleLoginRedirect}>Login</button>
                )}
            </div>

            <main className={"App"}>
                <Outlet/>
            </main>

        </div>
    )
}

export default Layout