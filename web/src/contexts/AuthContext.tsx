import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

import { api } from '@/lib/axios';
import axios from 'axios';

type UserType = {
	name: string;
	avatar_url: string;
}

type AuthContextType = {
    isAuthenticated: boolean;
    user: UserType | null;
    loading: boolean;
    signIn: (provider: string) => void;
	checkLogin: () => Promise<boolean>;
}

export const Context = createContext({} as AuthContextType);

type AuthContextProviderType = {
	children: ReactNode
}

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
    const [user, setUser] = useState<AuthContextType['user']>(null);
    const [loading, setLoading] = useState(true);
    
    const { push } = useRouter();

    useEffect(() => {
        (async () => {            
            const isAuthenticated = await checkLogin();
            if(isAuthenticated){
                push('/inicio');
            }

            setLoading(false);
        })();
    }, []);

    async function signIn(provider: string){
        const response = await axios.get('/api/exemplo'); ///user/auth/${provider}

        console.log(response.data);
        return;

        if(response.data){
            Cookies.set('auth.token', response.data.token.access_token, { expires: response.data.token.expires_in });
            Cookies.set('auth.provider', provider, { expires: response.data.token.expires_in });

            setUser({
                name: response.data.name,
                avatar_url: response.data.avatar_url
            });
        }
    }

    async function checkLogin(){
        const token = Cookies.get('auth.token');
        const provider = Cookies.get('auth.provider');

        if(token && provider){
            const response = await api.get(`/user/auth/${provider}/check-login`);
            return response.data.success;
        } else{
            setUser(null);
        }
    }

    const isAuthenticated = !!user;

    return(
        <Context.Provider value={{ isAuthenticated, user, signIn, checkLogin, loading }}>
            {children}
        </Context.Provider>
    );
};

export const useAuth = () => useContext<AuthContextType>(Context);