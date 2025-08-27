import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="h-[70vh] flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-4">404 - Page Not Found</h2>
      <Link to="/" className="text-blue-600 hover:underline">
        Go Home
      </Link>
    </div>
  );
}

export default NotFound;
