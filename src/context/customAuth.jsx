import React, { createContext, useState, useEffect } from "react";

import { AUTH_TOKEN_KEY } from "../constant/auth";

// Store core auth info like username, id, avatar, etc
// interface IEntityInfo {
//   username: string,
//   name: string,
// }

// // Store additional info for quick access
// interface IData {
//   bookmarks: string[],
// }

// // Final values & fn that are required in consumer
// interface AuthContextValues {
//   loggedIn: boolean,
//   isProcessingLogin: boolean,
//   entityInfo: IEntityInfo | null,
//   data: IData | null,
//   login: () => void,
//   logout: () => void,
// }

// Actual context for authorisation
const AuthContext = createContext({
  loggedIn: false,
  isProcessingLogin: false,
  entityInfo: null,
  data: null,
  login: () => {},
  logout: () => {},
});

// Import this in app.tsx or root level component for your theme
const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isProcessingLogin, setIsProcessingLogin] = useState(false);
  const [entityInfo, setEntityInfo] = useState(null);
  const [data, setData] = useState(null);

  const login = () => {
    if (loggedIn) {
      console.log("Already logged in !");
      return false;
    }

    localStorage.setItem(AUTH_TOKEN_KEY, "loginTokenID")

    setLoggedIn(true);
    setEntityInfo({ username: "abc@gmail.com", name: "John Doe" });
    setData({ bookmarks: ['google.com', 'twitter.com'] });
    return true;
  };

  const logout = () => {
    if (!loggedIn) {
      console.log("Already logged out !");
      return false;
    }

    // Remove token from cookies localstorage etc
    localStorage.removeItem(AUTH_TOKEN_KEY);

    // Update login status in the context
    setLoggedIn(false);
    setData(null);
    setEntityInfo(null);
    return true;
  };

  const contextValue = {
    loggedIn,
    isProcessingLogin,
    entityInfo,
    data,
    login,
    logout,
  };

  useEffect(() => {
    // Pull saved login state from localStorage cookies etc
    setIsProcessingLogin(true);

    const authToken = localStorage.getItem(AUTH_TOKEN_KEY);
    if(authToken){
      setTimeout(()=>{
        login();
        setIsProcessingLogin(false);
      }, 200);
    }
    else {
      setTimeout(()=>{
        setIsProcessingLogin(false);
      }, 1000);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <AuthContext.Provider value={contextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);



export { AuthProvider, useAuth };
