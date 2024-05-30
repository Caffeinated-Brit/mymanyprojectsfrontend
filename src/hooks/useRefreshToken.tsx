import {instance} from '../api/axios';
import useAuth from './useAuth';

const useRefreshToken = () => {
    const { setAuth } = useAuth();

    const refresh = async () => {
        const response = await instance.get('/refresh', {
            withCredentials: true
        });
        setAuth(prev => {
            //console.log(JSON.stringify(prev));
            //console.log(response.data.accessToken);
            console.log(response.data.role);
            return { ...prev,
                roles: response.data.role,
                accessToken: response.data.accessToken
            }
        });
        return response.data.accessToken;
    }
    return refresh;
};

export default useRefreshToken;