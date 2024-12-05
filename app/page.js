"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // For navigation between pages
import Messages from "../components/Messages"; // Import from components folder
import PostMessage from "../components/PostMessage"; // Import from components folder
import { auth } from "../firebase";

export default function Page() {
   const [user, setUser] = useState(null);
   const router = useRouter(); // Use Next.js router for navigation

   useEffect(() => {
       const unsubscribe = auth.onAuthStateChanged((currentUser) => {
           setUser(currentUser);
       });
       return unsubscribe;
   }, []);

   return (
       <div>
           {user ? (
               <>
                   <h1>Welcome, {user.email}</h1>
                   <button onClick={() => auth.signOut()}>Logout</button>
                   <PostMessage userEmail={user.email} />
                   <Messages />
               </>
           ) : (
               <>
                   <p>Please log in to see the message board.</p>
                   <button onClick={() => router.push("/login")}>Login</button>
                   <button onClick={() => router.push("/signup")}>Sign Up</button>
               </>
           )}
       </div>
   );
}
