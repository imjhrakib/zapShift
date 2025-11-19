import React, { useState } from "react";
import useAuth from "../../../hooks/useAuth";

const ResetPassword = () => {
  const { resetPassword } = useAuth();
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      setMsg("Please enter a email");
      return;
    }
    resetPassword(email)
      .then(() => setMsg("If this email exists, a reset link has been sent."))
      .catch((error) => console.log(error.message));
  };

  return (
    <div className="flex items-center justify-center">
      <div>
        <h2 className="text-center my-5 text-2xl font-bold">Forgot Password</h2>
        <form onSubmit={handleReset}>
          <input
            className="border p-2 mr-4 rounded-lg"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button className="btn btn-success" onClick={handleReset}>
            Send Reset Link
          </button>

          {msg && <p className="text-red-500 ml-2">{msg}</p>}
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
