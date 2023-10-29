import { ReactNode, createContext, useContext, useState } from 'react';
import Cookies from 'js-cookie';

import { api } from '@/lib/axios';

type UserType = {
	name: string;
	avatar_url: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: UserType | null;
    signIn: (provider: string) => void;
	checkLogin: (provider: string) => Promise<boolean>;
}

export const Context = createContext({} as AuthContextType);

type AuthContextProviderType = {
	children: ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
    const [user, setUser] = useState<AuthContextType['user']>(null);

    async function signIn(provider: string){
        const response = await api.get(`/user/auth/${provider}`);

        if(response.data){
            Cookies.set('auth.token', response.data.token.access_token, { expires: response.data.token.expires_in });

            setUser({
                name: response.data.name,
                avatar_url: response.data.avatar_url
            });
        }
    }

    async function checkLogin(provider: string){
        const token = Cookies.get('auth.token');

        if(token){
            const response = await api.get(`/user/auth/${provider}/check-login`);
            return response.data.success;
        } else{
            setUser(null);
        }
    }

    const isAuthenticated = !!user;

    return(
        <Context.Provider value={{ isAuthenticated, user, signIn, checkLogin }}>
            {children}
        </Context.Provider>
    );
};

export const useAuth = () => useContext<AuthContextType>(Context);