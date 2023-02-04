import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../context/customAuth";

const ProtectedRoute = (props) => {
  const { loggedIn, entityInfo, isProcessingLogin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    console.log("Check", isProcessingLogin,loggedIn, entityInfo);

    if(!isProcessingLogin){
      if(!loggedIn || !entityInfo){
        console.log("Navigate to Home !!");
        navigate("/");
      }
    }
  }, [loggedIn, entityInfo, isProcessingLogin]);

  useEffect(() => console.log("hello"), []);

  return (
    <>
      {/* Protected Route !! */}
      { props.children }
    </>
  )
}

export default ProtectedRoute;