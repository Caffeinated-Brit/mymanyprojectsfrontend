import {Outlet, useNavigate} from "react-router-dom"
import useLogout from "../../hooks/useLogout";
import {useEffect} from "react";

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
            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                <h1 style={{ textAlign: 'center' }}>My Many Projects</h1>


                <div style={{ position: 'absolute', right: '5%' }}>

                    {auth.accessToken ? (
                        <button onClick={signOut}>Logout</button>
                    ) : (
                        <button onClick={handleLoginRedirect}>Login</button>
                    )}
                </div>


            </div>

            <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
                {auth.accessToken && (
                        <h3 style={{ fontSize: '1.5rem', justifyContent: 'center', position: 'relative' }}>Welcome {auth.user}</h3>
                )}
            </div>

            <main className={"App"}>
                <Outlet/>
            </main>

        </div>
    )
}

export default Layout