import { createContext, useState } from 'react';



// Context //
export const ContextProvider = createContext();


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