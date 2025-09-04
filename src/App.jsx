import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import NavBar from "./components/NavBar";
import AppRoutes from "./routes/AppRoutes";
import { EmojiProvider } from "./context/EmojiContext";

function App() {
  return (
    <EmojiProvider>
      <Router>
        <NavBar />
        <AppRoutes />
      </Router>
    </EmojiProvider>
  );
}

export default App;
