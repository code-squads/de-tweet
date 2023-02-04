import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { AuthProvider } from './context/customAuth';
import ProtectedRoute from './components/ProtectedRoute';
import { CustomThemeProvider } from './context/customTheme';

import Home from "./pages/Tester";
import { PageNotFound } from "./pages/PageNotFound";

import LandingPage from "./pages/LandingPage";
import Signup from "./pages/Signup";
import Tester from './pages/Tester';
import Profile from './pages/Profile';

import './App.css';
import './theme.css';

function App() {
  return (
    <BrowserRouter>
      <CustomThemeProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/tester" element={<Tester />} />
            <Route path='/home' element={<Home />} />

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
    </BrowserRouter>
  );
}

export default App;
