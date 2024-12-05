"use client";

import React, { useState } from "react";

const PostMessage = ({ userEmail }) => {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        await fetch('/api/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_email: userEmail, content }),
        });
        alert("Message posted!");
        setContent("");
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Enter your message"
            ></textarea>
            <button type="submit">Post Message</button>
        </form>
    );
};

export default PostMessage;
