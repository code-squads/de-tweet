import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { useMetamask } from 'use-metamask'
import { toast } from "react-toastify";

// import { AUTH_TOKEN_KEY } from "../constant/auth";

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
  metamaskNotFound: false,
  isProcessingLogin: false,
  entityInfo: null,
  data: null,
  login: () => {},
  logout: () => {},
});

//Created check function to see if the MetaMask extension is installed
const isMetaMaskInstalled = () => {
  //Have to check the ethereum binding on the window object to see if it's installed
  const { ethereum } = window;
  return Boolean(ethereum && ethereum.isMetaMask);
};

// Import this in app.tsx or root level component for your theme
const AuthProvider = (props) => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isProcessingLogin, setIsProcessingLogin] = useState(true);
  const [metamaskNotFound, setMetamaskNotFound] = useState(true);
  const navigate = useNavigate();
  
  const [entityInfo, setEntityInfo] = useState(null);
  const [data, setData] = useState(null);
  const { metaState, connect, getAccounts, getChain } = useMetamask();

  //Created check function to see if the MetaMask extension is installed
  const isMetaMaskInstalled = () => {
    //Have to check the ethereum binding on the window object to see if it's installed
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask);
  };

  const login = () => {
    if (loggedIn) {
      console.log("Already logged in !");
      return false;
    }

    setIsProcessingLogin(true);

    getAccounts()
      .then(accounts => {
        console.log("accounts:", accounts);
        if(accounts.length){
          setIsProcessingLogin(false);
          setEntityInfo({ address: accounts[0] });
          setData({});
          setLoggedIn(true);
        } else {
          window.ethereum
            .request({ method: 'eth_requestAccounts' })
            .then(accounts => {
              console.log("Connected", accounts);
              if(accounts.length){
                setIsProcessingLogin(false);
                setLoggedIn(true);
                setEntityInfo({ address: accounts[0] });
                toast.success('Successfuly logged in !!', {
                  position: "top-right",
                  autoClose: 2000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                navigate('/home');
              } else {
                throw new Error('Metamask connected, but got no accounts', accounts);
              }
            })
            .catch(err => {
              toast.error('Request rejected in metamask window !!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              });
              console.log("Request not approved !", err);
              setIsProcessingLogin(false);
              setLoggedIn(false);
            })
        }
      })
      .catch(err => {
        console.log("Error getting accounts", err);
        setIsProcessingLogin(false);
      })

    return true;
  };

  const logout = () => {
    if (!loggedIn) {
      console.log("Already logged out !");
      return false;
    }

    // Update login status in the context
    setLoggedIn(false);
    setData(null);
    setEntityInfo(null);
    return true;
  };

  const contextValue = {
    loggedIn,
    isProcessingLogin,
    metamaskNotFound,
    entityInfo,
    data,
    login,
    logout,
  };

  useEffect(() => {
    // Pull saved login state from localStorage cookies etc
    setIsProcessingLogin(true);

    console.log("Metamask status", metaState);

    if(!isMetaMaskInstalled()){
      toast.error('Please install Metamask !!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setMetamaskNotFound(true);
      setIsProcessingLogin(false);
    }

    getAccounts()
      .then(accounts => {
        console.log("accounts:", accounts);
        if(accounts.length){
          setIsProcessingLogin(false);
          setEntityInfo({ address: accounts[0] });
          setData({});
          setLoggedIn(true);
        } else {
          setIsProcessingLogin(false);
          setLoggedIn(false);
        }
      })
      .catch(err => {
        console.log("Error getting accounts", err);
        setIsProcessingLogin(false);
        setLoggedIn(false);
      })

  }, []);

  return <AuthContext.Provider value={contextValue} {...props} />;
};

const useAuth = () => React.useContext(AuthContext);



export { AuthProvider, useAuth };
