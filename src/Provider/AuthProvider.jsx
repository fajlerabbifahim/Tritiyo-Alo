import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";

export const AuthContext = createContext(null);

function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loader, useLoader] = useState(true);
  const registerUser = (email, password) => {
    useLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    useLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    useLoader(true);
    return signOut(auth);
  };
  const updateUserProfile = (updatedData) => {
    return updateProfile(auth.currentUser, updatedData);
  };
  const singInWithGoogle = (googleProvider) => {
    return signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      useLoader(false);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    name: "fahim",
    registerUser,
    loginUser,
    logOut,
    user,
    loader,
    updateUserProfile,
    singInWithGoogle,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
}

export default AuthProvider;
