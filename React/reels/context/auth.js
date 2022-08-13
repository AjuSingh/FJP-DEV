import React, { useEffect, useState } from 'react'
import { auth } from '../firebase'
export const AuthContext = React.createContext();
import { onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";

function AuthWrapper({ children }) {
  const [user, setUser] = useState('');
  const [loading, setLoading] = useState(true); 22
  console.log("Auth wrapper called");
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }

  function logout(){
    return signOut(auth);
  }

  function forgetPassword(email) {
    return sendPasswordResetEmail(auth, email);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
      } else {

      }
    })
    setLoading(false);
  }, [])


  //this contains all the shared methods 
  const store = {
    login,
    user,
    logout,
    forgetPassword,
  }
  return (
    <AuthContext.Provider value={store}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthWrapper