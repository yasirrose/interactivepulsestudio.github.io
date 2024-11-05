"use client"; 
import React, { useState } from "react";
import Signin from "../../components/Shared/Signin";
import Signup from "../../components/Shared/Signup";
import ForgotPassword from "../../components/Shared/ForgotPassword";
import ResetPassword from "../../components/Shared/ResetPassword";
import Resend from "../../components/Shared/Resend";

const Auth = () => {
  const [authStep, setAuthStep] = useState("signin"); 

  const handleSignIn = () => {
    console.log("Signing in...");
  };

  const handleForgotPassword = () => {
    setAuthStep("forgotPassword"); 
  };

  const handleGoToResetPassword = () => {
    setAuthStep("resetPassword"); 
  };

  const handleGoToResend = () => {
    setAuthStep("resend"); 
  };

  const handleSignUp = () => {
    setAuthStep("signup"); 
  };

  const handleBackToSignIn = () => {
    setAuthStep("signin"); 
  };

  const handleGoToSignin = () => {
    setAuthStep("signin"); 
  };

  return (
    <div className="auth-page">
      {authStep === "signin" && (
        <Signin
          onSignIn={handleSignIn}
          onForgotPassword={handleForgotPassword}
          onSignUp={handleSignUp} 
        />
      )}

      {authStep === "signup" && (
        <Signup onBackToSignin={handleBackToSignIn} /> 
      )}

      {authStep === "forgotPassword" && (
        <ForgotPassword onGoToResetPassword={handleGoToResetPassword} />
      )}

      {authStep === "resetPassword" && (
        <ResetPassword onGoToResend={handleGoToResend} />
      )}

      {authStep === "resend" && (
        <Resend onGoToSignin={handleGoToSignin} />
      )}
    </div>
  );
};

export default Auth;
