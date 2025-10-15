import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { auth } from "../../Firebase/Firebase";
import { useEffect, useState } from "react";
import { GoogleAuthProvider } from "firebase/auth";

const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [authLoading, setAuthLoading] = useState(true);

  // create User
  const createUser = (email, password) => {
    setAuthLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign/login in user
  const signInUser = (email, password) => {
    setAuthLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign in with google
  const signInWithGoogle = () => {
    setAuthLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // sign out
  const signOutUser = () => {
    setAuthLoading(true);
    return signOut(auth);
  };

  // user is login or not
  useEffect(() => {
    // set the user on the state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setAuthLoading(false);
    });

    // clear the observer or unmount
    return () => unsubscribe();
  }, []);

  // auth Info
  const authInfo = {
    createUser,
    signInUser,
    signOutUser,
    signInWithGoogle,
    user,
    authLoading,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
