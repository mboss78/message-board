"use client";

import React, { useState } from "react";

const PostMessage = ({ userEmail, onMessagePosted }) => {
    const [content, setContent] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Post the new message to the API
        const res = await fetch('/api/messages', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user_email: userEmail, content }),
        });

        if (res.ok) {
            const newMessage = await res.json(); // Assuming the API returns the new message

            // Call the callback to update the list of messages in the parent component
            onMessagePosted(newMessage);
        } else {
            alert("Failed to post message");
        }

        setContent("");  // Clear the content field
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
