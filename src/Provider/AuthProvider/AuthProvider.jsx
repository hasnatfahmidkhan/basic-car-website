import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { AuthContext } from "../../Context/AuthContext/AuthContext";
import { auth } from "../../Firebase/Firebase";
import { useEffect, useState } from "react";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create User
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // sign/login in user
  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  // sign out
  const signOutUser = () => {
    return signOut(auth);
  };

  // user is login or not
  useEffect(() => {
    // set the user on the state
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // clear the observer or unmount
    return () => unsubscribe();
  }, []);

  // auth Info
  const authInfo = { createUser, signInUser, signOutUser, user };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
