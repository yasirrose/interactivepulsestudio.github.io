"use client"; 
import React, { useState } from "react";

const Signup = ({ onBackToSignin }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError(""); 

    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);


    onBackToSignin(); 
  };

  return (
    <div className="signin-screen">
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-column-fluid flex-lg-row">
          <div className="d-flex flex-center w-lg-50 pt-15 pt-lg-0 px-10">
            <div className="d-flex flex-center flex-lg-start flex-column">
              <img alt="Logo" src="/ipstudio.png" style={{ maxWidth: "200px" }} />
            </div>
          </div>

          <div className="d-flex flex-column-fluid flex-lg-row-auto justify-content-center justify-content-lg-end p-12 p-lg-20">
            <div className="bg-body d-flex flex-column align-items-stretch flex-center rounded-4 w-md-600px p-20">
              <div className="d-flex flex-center flex-column flex-column-fluid px-lg-10 pb-15 pb-lg-20">
                <form className="form w-100" onSubmit={handleSubmit}>
                  <div className="text-center mb-11">
                    <h1 className="text-gray-900 fw-bolder mb-3">Sign Up</h1>
                  </div>

                  <div className="fv-row mb-8">
                    <input
                      type="text"
                      placeholder="Username"
                      className="form-control bg-transparent"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      required
                    />
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

                  <div className="fv-row mb-8">
                    <input
                      type="password"
                      placeholder="Password"
                      className="form-control bg-transparent"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>

                  <div className="fv-row mb-8">
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="form-control bg-transparent"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>

                  {error && <p style={{ color: 'red' }}>{error}</p>}

                  <div className="d-grid mb-10">
                    <button type="submit" className="btn btn-primary">
                      <span className="indicator-label">Sign Up</span>
                    </button>
                  </div>
                  <div className="text-gray-500 text-center fw-semibold fs-6">
                    Already a Member?{" "}
                    <button onClick={onBackToSignin} className="link-primary btn p-0">
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
