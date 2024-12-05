"use client";

import React, { useEffect, useState } from "react";

const Messages = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const fetchMessages = async () => {
            const res = await fetch('/api/messages');
            const data = await res.json();
            setMessages(data);
        };
        fetchMessages();
    }, []);

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
