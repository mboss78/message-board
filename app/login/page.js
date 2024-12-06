"use client"; // Required for client-side rendering

import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useRouter } from "next/navigation"; // Import useRouter
import styles from "./login.module.css"; // Import the CSS module

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

    const router = useRouter(); // Initialize the router

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
        alert("Login successful!");

        // Redirect to the main page after successful login
        router.push("/");

    } catch (err) {
      setError(err.message);
    }
  };

  return (
      <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Login</h2>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleLogin}>
              <input
                  className={styles.inputField}
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
              />
              <input
                  className={styles.inputField}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className={styles.button}>Login</button>
          </form>
      </div>
  );
};

export default Login;
