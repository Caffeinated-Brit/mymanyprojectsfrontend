import { instance } from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();

    const logout = async () => {
        setAuth({accessToken: "", pwd: "", roles: [], user: ""});
        try {
            const response = await instance('/logout', {
                withCredentials: true
            });
            console.log("logout successful")
        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout