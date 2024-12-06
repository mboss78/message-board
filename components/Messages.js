"use client";

import React, { useEffect, useRef } from "react";
import styles from "./messages.module.css"; // Import the CSS module

const Messages = ({ messages }) => {
    const messagesEndRef = useRef(null); // Reference to the bottom of the message list

    // Scroll to the bottom every time the messages list updates
    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages]); // This effect runs whenever messages change

    return (
        <div className={styles.messagesContainer}>
            <ul className={styles.messagesList}>
                {messages.map((msg) => (
                    <li key={msg.id} className={styles.messageItem}>
                        <div className={styles.messageContent}>{msg.content}</div>
                        <strong>{msg.user_email}</strong>                        
                    </li>
                ))}
                <div ref={messagesEndRef} />
            </ul>
        </div>
    );
};

export default Messages;
