import { THEME_ID } from "../../constant/themes";
import { useAuth } from "../../context/customAuth"
import { useCustomTheme } from "../../context/customTheme";
import { TestContainer } from "./test.styled"

// import { useEffect } from "react";

const Test = () => {
  const auth = useAuth();
  const theme = useCustomTheme();

  // useEffect(()=>{
  //   console.log("Auth updated", auth);
  // }, [auth]);

  // useEffect(()=>{
  //   console.log("Theme updated", theme);
  // }, [theme]);
  
  return (
    <TestContainer>
      <h5>Custom Auth & theme test</h5>
      <br/>
      <button onClick={()=>theme.changeTheme(THEME_ID.LIGHT)} className="theme-button">
        Light theme
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={()=>theme.changeTheme(THEME_ID.DARK)} className="theme-button">
        Dark theme
      </button>
      &nbsp;&nbsp;&nbsp;&nbsp;
      <button onClick={theme.toggleTheme} className="theme-button">
        Toggle theme
      </button>
      <br/><br/>
        {
          auth.loggedIn ?
          <>
            Hi { auth.entityInfo?.name } 👋
          </>
          :
          auth.isProcessingLogin ?
          <>
            Loading .... 
          </>
          :
          <>
            Please login
          </>
        }
        &nbsp;&nbsp;&nbsp;&nbsp;
        {
          auth.loggedIn ?
            <button onClick={auth.logout}>
              Logout
            </button>
          :
          <button onClick={auth.login}>
            Login
          </button>
        }
        {
          auth.loggedIn &&
          <div>
            <br/>
            Auth entity details:
            <br/>
            Username: { auth.entityInfo?.username }
            <br/>
            Name: { auth.entityInfo?.name }

            <br/><br/>

            Auth meta-data: <br/>
            { auth.data?.bookmarks.map(bm => (
              <div key={bm}>
                { bm }
                <br/>
              </div>
            )) }
          </div>
        }
    </TestContainer>
  )
}

export default Test