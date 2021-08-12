import React, { createContext, useState, useEffect, useContext } from "react";
import { signin } from "../services/requests/auth";
const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadStorageData() {
      const storageUser = await localStorage.getItem("@MIXAPP:user");
      const storageToken = await localStorage.getItem("@MIXAPP:token");

      if (storageUser && storageToken) {
        setUser(JSON.parse(storageUser));
        setLoading(false);
      } else if (!storageUser && !storageToken) {
        setLoading(false);
      }
    }

    loadStorageData();
  }, []);

  async function signIn(login, password) {
    const response = await signin(login, password);
    setUser(response.data);
    await localStorage.setItem("@MIXAPP:user", JSON.stringify(response.data));
    await localStorage.setItem("@MIXAPP:token", response.token);
  }

  function signOut() {
    localStorage.clear().then(() => {
      setUser(null);
    });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: !!user,
        signIn: signIn,
        signOut: signOut,
        loading: loading,
        user: user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider.");
  }

  return context;
}
export default AuthContext;
