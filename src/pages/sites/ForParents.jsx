import React from "react";
import { ScrollRestoration } from "react-router-dom";

function ForParents() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 pt-20">
      <ScrollRestoration />
      <div className="text-center">
        <h1 className="text-4xl font-bold text-textPrimary">For Parents</h1>
        <p className="text-secondary mt-2 font-medium">Placeholder layout for parents feedback and tools.</p>
      </div>
    </div>
  );
}

export default ForParents;
