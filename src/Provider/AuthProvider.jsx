import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext, useEffect } from "react";
import { auth } from "../firebase/firebase";

// ==============Auth context and provider================>
export const AuthContext = createContext();
const provider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  // register
  const createUser = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Login
  const loginUser = (email, password) => {
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  // Logout
  const logOutUser = () => {
    setLoader(true);
    return signOut(auth);
  };
  // Google Login
  const googleLogin = () => {
    setLoader(true);
    return signInWithPopup(auth, provider);
  };
  // update user
  const updateUser = (updateData) => {
    return updateProfile(auth.currentUser, updateData);
  };
  // save user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authData = {
    createUser,
    loginUser,
    logOutUser,
    googleLogin,
    updateUser,
    user,
    setUser,
    loader,
    setLoader,
  };

  return <AuthContext value={authData}>{children}</AuthContext>;
};

export default AuthProvider;
