import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import app from "../../firebase/firebase.config";
import axios from "axios";
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

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    signOut(auth);
  };

  const profileUpdate = (name, phone) => {
    console.log(name, phone);
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      phoneNumber: phone,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail = currentUser?.email || user?.email;
      const loggedUser = { email: userEmail };
      setUser(currentUser);
      console.log("current User", currentUser);
      setLoading(false);
      if (currentUser) {
        axios
          .post("http://localhost:7000/jwt", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("token response in auth provider", res.data);
          });
      } else {
        axios
          .post("http://localhost:7000/logout", loggedUser, {
            withCredentials: true,
          })
          .then((res) => {
            console.log("logout api", res.data);
          });
      }
    });
    return () => {
      return unsubscribe();
    };
  }, [user?.email]);

  const authInfo = {
    user,
    loading,
    createUser,
    Login,
    googleSignIn,
    profileUpdate,
    logOut,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
