import { useLocation, Navigate, Outlet} from "react-router-dom";

import useAuth from '../../hooks/useAuth'

//TODO: come back and fix this
// @ts-ignore
const RequireAuth = ({ allowedRoles }) => {
    const {auth} = useAuth();
    const location = useLocation();

    //TODO:remove this
    console.log(auth)


    return (
        (Array.isArray(auth?.roles) ? auth.roles : [auth?.roles]).find(role => allowedRoles?.includes(role))
            ? <Outlet/>
            : auth?.user
                ? <Navigate to="/unauthorized" state={{from: location}} replace/>
                : <Navigate to="/login" state={{from: location}} replace/>
    );
}

    /*
    return (
        auth?.roles?.find(role => allowedRoles?.includes(role))
            ? <Outlet />
            : auth?.user
                ? <Navigate to="/unauthorized" state={{ from: location }} replace />
                : <Navigate to="/login" state={{ from: location }} replace />
    );
}

*/



export default RequireAuth;