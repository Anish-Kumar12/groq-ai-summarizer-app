import { useState } from "react";
import "./App.css";

function App() {
  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-blue-50 via-blue-100 to-teal-100 shadow-md z-50">
        <div className="max-w-7xl mx-5 px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-start">
            <img
              src="./public/logo.png" // keep in public folder
              alt="Groq-AI-Summarizer-App Logo"
              className="h-20 w-auto drop-shadow-md"
            />
          </div>
        </div>
      </nav>

      <div className="pt-24 px-4">
        <h1 className="text-2xl font-bold">Welcome to Groq-AI-Summarizer-App</h1>
        <p className="mt-4 text-gray-600">
          This is where your main content goes...
        </p>
      </div>
    </>
  );
}

export default App;
