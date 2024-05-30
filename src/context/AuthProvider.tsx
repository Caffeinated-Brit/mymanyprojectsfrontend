import React, { createContext, useState, ReactNode } from "react";

interface AuthData {
    user: string;
    pwd: string;
    roles: string[];
    accessToken: string;
}

interface AuthContextType {
    auth: AuthData;
    setAuth: React.Dispatch<React.SetStateAction<AuthData>>;
}

export const AuthContext = createContext<AuthContextType>({
    auth: {
        user: '',
        pwd: '',
        roles: [],
        accessToken: ''
    },
    setAuth: () => {}
});

interface AuthProviderProps {
    children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [auth, setAuth] = useState<AuthData>({
        user: '',
        pwd: '',
        roles: [],
        accessToken: ''
    });

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;