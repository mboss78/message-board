"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Messages from "../components/Messages"; // Import from components folder
import PostMessage from "../components/PostMessage"; // Import from components folder
import { auth } from "../firebase";
import styles from "./mainpage.module.css"; // Import the CSS module

export default function Page() {
    const [user, setUser] = useState(null);
    const [messages, setMessages] = useState([]);  // Track messages list
    const router = useRouter();

    // Function to fetch messages from the backend (API endpoint)
    const fetchMessages = async () => {
        const res = await fetch("/api/messages");
        const data = await res.json();
        setMessages(data);  // Update the messages state with the new list
    };

    useEffect(() => {
        // Listen for changes in authentication status
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });
        return unsubscribe;
    }, []);

    useEffect(() => {
        if (user) {
            fetchMessages();  // Fetch messages initially when the user logs in
        }
    }, [user]);  // Runs only when the user is authenticated

    // Function to handle new message posting
    const handleMessagePosted = async (newMessage) => {
        // Option 1: Immediately update the local state without re-fetching from the server
        setMessages((prevMessages) => [newMessage, ...prevMessages]); // Add new message to the front of the list

        // Option 2: Re-fetch the entire list after posting a new message
        const res = await fetch("/api/messages");
        const data = await res.json();
        setMessages(data);  // Update state with the fresh list
    };

    return (
        <div style={{ backgroundColor: "#f0f0f0", minHeight: "100vh" }}> {/* Apply background to the whole page */}
            <div className={styles.mainContainer}>
                {user ? (
                    <>
                        <div className={styles.header}>
                            <h1 className={styles.welcomeText}>Welcome, {user.email}</h1>
                            <button className={styles.logoutButton} onClick={() => auth.signOut()}>Logout</button>
                        </div>
                        <Messages messages={messages} />
                        <PostMessage userEmail={user.email} onMessagePosted={handleMessagePosted} />
                    </>
                ) : (
                        <>
                            <div className={styles.loggedOutMessage}>
                                <p>Please log in to see the message board.</p>
                            </div>
                            <div className={styles.loggedOutButtons}>
                                <button onClick={() => router.push("/login")}>Login</button>
                                <button onClick={() => router.push("/signup")}>Sign Up</button>
                            </div>
                        </>
                )}
            </div>
        </div>
    );
}
