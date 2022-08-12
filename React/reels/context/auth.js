import React from 'react'
import { auth } from '../firebase'
export const AuthContext = React.createContext();
import { signInWithEmailAndPassword } from 'firebase/auth';

function AuthWrapper({ children }) {
  console.log("Auth wrapper called");
  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password);
  }


  //this contains all the shared methods 
  const store = {
    login
  }
  return (
    <AuthContext.Provider value={store}>
    {children}
    </AuthContext.Provider>
  )
}

export default AuthWrapper