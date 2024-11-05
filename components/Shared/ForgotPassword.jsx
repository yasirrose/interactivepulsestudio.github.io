"use client";
import React, { useState } from "react";
import Link from "next/link";

const ForgotPassword = ({ onGoToResetPassword }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    console.log("Email:", email);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setMessage("If an account with that email exists, a password reset link has been sent.");
    setLoading(false);

    onGoToResetPassword(); 
  };

  return (
    <div className="signin-screen">
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-column-fluid flex-lg-row">
          <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
            <div className="d-flex flex-center flex-lg-start flex-column">
              <Link href="/" className="mb-7">
                <img alt="Logo" src="/ipstudio.png" style={{ maxWidth: "200px" }} />
              </Link>
            </div>
          </div>

          <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
            <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
              <div className="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
                <form className="form w-100" onSubmit={handleSubmit}>
                  <div className="text-center mb-11">
                    <h1 className="text-gray-900 fw-bolder mb-3">Forgot Password</h1>
                  </div>

                  <div className="fv-row mb-8">
                    <input
                      type="email"
                      placeholder="Email"
                      className="form-control bg-transparent"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="d-grid mb-10">
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                      <span className="indicator-label">Send Reset Link</span>
                      {loading && (
                        <span className="indicator-progress">
                          Please wait...{" "}
                          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
                        </span>
                      )}
                    </button>
                  </div>

                  {message && <div className="text-success text-center">{message}</div>}

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
