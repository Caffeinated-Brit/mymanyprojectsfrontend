import {Outlet} from "react-router-dom"

const Layout = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>My Many Projects</h1>
            <main className={"App"}>
                <Outlet/>
            </main>

        </div>
    )
}

export default Layout