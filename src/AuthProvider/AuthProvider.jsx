import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";

// Context //
export const ContextProvider = createContext();

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();




const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
const [loader, setLoader] = useState(true)

  const signUpWithGoogle = () => {
    setLoader(true);
    return signInWithPopup(auth, googleProvider);
  };

  const registerWithEmailAndpassword = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInWithEmailPassword = (email, password) =>  {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);

  }

  const handleSignOut = () =>{
    return signOut(auth);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const authInfo = {
    user,
    loader,
    signUpWithGoogle,
    registerWithEmailAndpassword,
    signInWithEmailPassword,
    handleSignOut,
  };

  return (
    <ContextProvider.Provider value={authInfo}>
      {children}
    </ContextProvider.Provider>
  );
};

export default AuthProvider;
