import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import NewReport from "./pages/NewReport";

function Home() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Community Mangrove Watch</h1>
      <p className="mb-4">Welcome! Choose an option below:</p>
      <nav className="space-x-4">
        <Link to="/new-report" className="text-blue-600 underline">
          Create New Report
        </Link>
      </nav>
    </div>
  );
}

function App() {
  return (
    <Routes>
      {/* Root page */}
      <Route path="/" element={<Home />} />
      {/* New Report page */}
      <Route path="/new-report" element={<NewReport />} />
    </Routes>
  );
}

export default App;
