import React from "react";
import { Link } from "react-router-dom";

const NotLoggedIn = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h2 className="text-2xl font-semibold text-red-600 mb-3">
                ⚠ You are not logged in
            </h2>
            <p className="text-gray-600 mb-5">Please login to continue</p>
            <Link
                to="/login"
                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
                Go to Login
            </Link>
        </div>
    );
};

export default NotLoggedIn;
