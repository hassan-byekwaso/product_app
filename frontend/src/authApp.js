// Step 4: Add a simple frontend (React)

// 📁 File: src/AuthApp.js
// Topic: Handling User Authentication (Signup + Login)
// ================================

// 1️⃣ Import tools from React
//    useState lets us store and update data inside our component
import React, { useState } from "react";

// 2️⃣ Import Axios
//    Axios helps us send and receive data between frontend (React)
//    and backend (Node.js + Express)
import axios from "axios";


// ================================
// 🧩 Our main App component
// ================================
function App() {

  // 🧠 Step 1: Create small “state” boxes to store user inputs
  const [name, setName] = useState("");         // Stores the user’s name
  const [email, setEmail] = useState("");       // Stores the user’s email
  const [password, setPassword] = useState(""); // Stores the user’s password
  const [message, setMessage] = useState("");   // Stores feedback from server (like “Login successful”)


  // ================================
  // ✳️ Step 2: Function to handle signup
  // ================================
  const signup = () => {
    // Send the user’s details to our backend signup route
    axios
      .post("http://localhost:5000/product_app/users/signup", {
        name,       // send name from our state
        email,      // send email from our state
        password,   // send password from our state
      })
      .then((res) => {
        // ✅ If successful, show the message sent from the server
        setMessage(res.data.message);
      })
      .catch((err) => {
        // ❌ If something goes wrong, show the error message
        setMessage(err.response?.data?.message || "Error");
      });
  };


  // ================================
  // 🔑 Step 3: Function to handle login
  // ================================
  const login = () => {
    // Send login info to backend
    axios
      .post("http://localhost:5000/product_app/users/login", {
        email,
        password,
      })
      .then((res) => {
        // ✅ Show the message from backend (like “Welcome, John!”)
        setMessage(res.data.message);
      })
      .catch((err) => {
        // ❌ If error, display an error message
        setMessage(err.response?.data?.message || "Error");
      });
  };


  // ================================
  // 🖼️ Step 4: What appears on the screen
  // ================================
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>👤 Simple User Authentication</h2>
      <p style={{ color: "gray" }}>
        You can sign up (register) and then log in using the same details.
      </p>

      {/* Name input box */}
      <input
        placeholder="Name"
        value={name}                       // shows what’s currently typed
        onChange={(e) => setName(e.target.value)} // updates state as user types
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* Email input box */}
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* Password input box */}
      <input
        placeholder="Password"
        type="password"                    // hides what the user types
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginRight: "10px", padding: "5px" }}
      />

      {/* Buttons section */}
      <div style={{ marginTop: "10px" }}>
        {/* Signup button */}
        <button
          onClick={signup}                 // runs signup() when clicked
          style={{ marginRight: "10px", padding: "6px 12px" }}
        >
          📝 Sign Up
        </button>

        {/* Login button */}
        <button
          onClick={login}                  // runs login() when clicked
          style={{ padding: "6px 12px" }}
        >
          🔑 Login
        </button>
      </div>

      {/* Message from server appears here */}
      <p style={{ marginTop: "20px", color: "green" }}>
        {message}
      </p>
    </div>
  );
}

// ✅ Finally, export this App component so React can render it
export default App;