import { Link } from "react-router-dom";
import React, { useState } from "react";
import { apiPost } from "../utils/api";

const Forgot = () => {
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState(null);

  async function handle(e) {
    e.preventDefault();
    setInfo(null);
    try {
      const res = await apiPost("/forgot-password", { email });
      setInfo(
        `If account exists, reset link sent. (Demo token: ${
          res.token || "sent to email"
        })`
      );
    } catch (err) {
      setInfo("Something went wrong");
    }
  }

  return (
    <main id="content" role="main" className="w-full max-w-md mx-auto p-6">
      <div className="mt-7 bg-white rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Forgot password?
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Remember your password?&nbsp;
              <Link
                className="text-blue-600 hover:underline font-medium"
                to="/login"
              >
                Login here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            {/*  FIX: added onSubmit */}
            <form onSubmit={handle}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-bold ml-1 mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    id="email"
                    className="py-3 px-4 w-full border-2 border-gray-200 rounded-md text-sm focus:border-blue-500"
                    required
                  />
                </div>

                {/* FIX: Button keeps submit type  */}
                <button
                  type="submit"
                  className="py-3 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-600 transition font-semibold"
                >
                  Reset password
                </button>
              </div>
            </form>

            {info && <div className="mt-4 text-blue-600">{info}</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Forgot;
