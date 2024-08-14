// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Navbar from './components/partials/Navbar';
import Footer from './components/partials/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import ForgotPasswordPage from './pages/auth/ForgotPasswordPage'; 
import ResetPasswordPage from './pages/auth/ResetPasswordPage';
import ComingSoonPage from './pages/ComingSoonPage';
import { Box, Flex } from '@chakra-ui/react';

import { GoogleOAuthProvider } from '@react-oauth/google';
const googleClientId = import.meta.env.VITE_GOOGLE_CLIENT_ID;


function App() {
  return (
    <AuthProvider>
      <GoogleOAuthProvider clientId={googleClientId}>
      <Router>
      <Flex direction="column" minH="100vh">
        <Navbar />
        <Box flex="1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/forgot-password" element={<ForgotPasswordPage />} />
          <Route path="/reset-password/:resetToken" element={<ResetPasswordPage />} />
          <Route path="/coming-soon" element={<ComingSoonPage />} />
        </Routes>
        </Box>
        <Footer />
      </Flex>
      </Router>
      </GoogleOAuthProvider>
    </AuthProvider>
  );
}

export default App;
