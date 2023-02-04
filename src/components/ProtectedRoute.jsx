import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";

import { useAuth } from "../context/customAuth";

const ProtectedRoute = (props) => {
  const { loggedIn, entityInfo, isProcessingLogin } = useAuth();

  useEffect(() => {
    console.log("Check,",isProcessingLogin,loggedIn, entityInfo);

    if(!isProcessingLogin){
      if(!loggedIn || !entityInfo) 
        Navigate({to: "/"});
    }
  }, [loggedIn, entityInfo, isProcessingLogin]);

  return (
    <div>
      Protected Route !!
      { props.children }
    </div>
  )
}

export default ProtectedRoute;