import { createContext, useState } from 'react';
import getAuth  from "firebase/auth"
import app from '../firebase/firebase.config';


// Context //
export const ContextProvider = createContext();

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState("Ali Ashraf");
    


    const authInfo = {
        user
    }



    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;