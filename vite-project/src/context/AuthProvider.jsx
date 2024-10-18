import React, { createContext, useState,useEffect} from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  // const [userData, setuserData] = useState(null);
  const [userData, setuserData] = useState({ employee: [], admin: [] });

  useEffect(() => {
    setLocalStorage()
    const { employee, admin } = getLocalStorage();
    setuserData({ employee, admin });
  }, []);

  return (
    <div>
      <AuthContext.Provider value={userData}> {children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
