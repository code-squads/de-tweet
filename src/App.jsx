import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from './context/customAuth';
// import ProtectedRoute from './components/ProtectedRoute';
import { CustomThemeProvider } from './context/customTheme';

import { PageNotFound } from "./pages/PageNotFound";

import LandingPage from "./pages/LandingPage";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Profile from './pages/Profile';

import './App.css';
import './theme.css';
import Test from './components/Test/Test';

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/tester" element={<Test />} />
            <Route path='/home' element={<Home />} />

            <Route
              path="/profile"
              element={
                // <ProtectedRoute>
                  <Profile />
                // </ProtectedRoute>
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
    </BrowserRouter>
  );
}

export default App;
