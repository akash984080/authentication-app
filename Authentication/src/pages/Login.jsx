import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { apiPost } from "../utils/api";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState(null);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        setMsg(null);

        try {
            const data = await apiPost("/login", { email, password });

            localStorage.setItem(
                "user",
                JSON.stringify({ id: data.id, name: data.name, email: data.email })
            );

            navigate("/");
        } catch (err) {
            setMsg(err?.body?.message || "Login failed");
        }
    }

    return (
        <div className="flex justify-center  my-12">
            <div className="w-full xl:w-3/4 lg:w-11/12 flex">

                <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                    <h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>

                    <form
                        className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                        onSubmit={handleSubmit}
                    >
                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700"
                                htmlFor="email"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                placeholder="Enter Email"
                                className="w-full px-3 py-2 border rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label
                                className="block mb-2 text-sm font-bold text-gray-700"
                                htmlFor="password"
                            >
                            Password
                            </label>
                            <input
                                id="password"
                                placeholder="Enter Password"
                                type="password"
                                className="w-full px-3 py-2 border rounded"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-6 text-center">
                            <button
                                type="submit"
                                className="w-full px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
                            >
                                Login 
                            </button>

                            {msg && (
                                <div className="text-red-600 text-center font-semibold mt-3">
                                    {msg}
                                </div>
                            )}
                        </div>
                        <hr className="my-4" />
                        <div className="text-center">
                            <Link className="text-blue-500 hover:text-blue-700" to="/signup">
                                Create an Account
                            </Link>
                        </div>
                        <div className="text-center mt-3">
                            <Link className="text-blue-500 hover:text-blue-700" to="/forgot">
                                Forgot Password?
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
