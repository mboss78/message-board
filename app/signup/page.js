"use client"; // Required for client-side rendering

import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../../firebase";
import { setDoc, doc } from "firebase/firestore";
import { useRouter } from "next/navigation"; // Import useRouter
import styles from "./signup.module.css"; // Import the CSS module

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const router = useRouter();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // Save user data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        email: user.email,
        createdAt: new Date(),
      });

        alert("Signup successful!");

        // Redirect to the main page after successful signup
        router.push("/");

    } catch (err) {
      setError(err.message);
    }
  };

  return (
      <div className={styles.formContainer}>
          <h2 className={styles.formTitle}>Signup</h2>
          {error && <p className={styles.error}>{error}</p>}
          <form onSubmit={handleSignup}>
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
              <button type="submit" className={styles.button}>Signup</button>
          </form>
      </div>
  );
};

export default Signup;
