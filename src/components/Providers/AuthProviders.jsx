/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProviders = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // create user
  const SignUp = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   signIn user
  const SignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   update profile
  const ProfileUpdate = (user, name, photoUrl) => {
    setLoading(true);
    return updateProfile(user, {
      displayName: name,
      photoURL: photoUrl,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  //   user observing
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  //   logout
  const logOut = () => {
    return signOut(auth);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };

  const authInfo = {
    user,
    loading,
    SignUp,
    SignIn,
    ProfileUpdate,
    logOut,
    googleSignIn,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProviders;
