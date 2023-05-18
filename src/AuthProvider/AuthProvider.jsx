import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { createContext, useState } from 'react';
import app from "../firebase/firebase.config";


// Context //
export const ContextProvider = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();


const AuthProvider = ({children}) => {
    const [user, setUser] = useState("Ali Ashraf");


    const signUpWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
      };
    


    const authInfo = {
        user,
        signUpWithGoogle,
    }



    return (
        <ContextProvider.Provider value={authInfo}>
            {children}
        </ContextProvider.Provider>
    );
};

export default AuthProvider;