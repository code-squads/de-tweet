import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MetamaskStateProvider } from "use-metamask";
import { ToastContainer } from 'react-toastify';

import { AuthProvider } from './context/customAuth';
import { CustomThemeProvider } from './context/customTheme';

import ProtectedRoute from './components/ProtectedRoute';
import Test from './components/Test/Test';

import { PageNotFound } from "./pages/PageNotFound";
import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from './pages/Profile';
import Web3Tester from './pages/Web3Tester';

import 'react-toastify/dist/ReactToastify.css';
import './theme.css';
import './App.css';
import LandingPage2 from './pages/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <MetamaskStateProvider>
        <CustomThemeProvider>
          <AuthProvider>
            <Routes>
              <Route path="/" element={<LandingPage />} />
              {/* <Route path="/landingPage" element={<LandingPage2 />} /> */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/tester" element={<Test />} />
              <Route path="/web3test" element={<Web3Tester />} />
              <Route path='/home' element={
                <ProtectedRoute>
                  <Home />
                </ProtectedRoute>
              } />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />

              <Route
                path="*"
                element={
                  <PageNotFound />
                }
              />
            </Routes>
          </AuthProvider>
        </CustomThemeProvider>
      </MetamaskStateProvider>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
