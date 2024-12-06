"use client";

import React from "react";

const Messages = ({ messages }) => {
    return (
        <div>
            <h2>Messages</h2>
            <ul>
                {messages.map((msg) => (
                    <li key={msg.id}>
                        <strong>{msg.user_email}</strong>: {msg.content}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Messages;
