import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";

const Auth = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const [isLogin, setIsLogin] = useState(true);

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    useEffect(() => {
        if (location.state?.mode === "signup") {
            setIsLogin(false);
        } else {
            setIsLogin(true);
        }
    }, [location.state]);

    const handleChange = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const resetForm = () => {
        setFormData({
            firstName: "",
            lastName: "",
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        });
    };

    const handleSignup = () => {
        const {
            firstName,
            lastName,
            username,
            email,
            password,
            confirmPassword,
        } = formData;

        if (
            !firstName.trim() ||
            !lastName.trim() ||
            !username.trim() ||
            !email.trim() ||
            !password ||
            !confirmPassword
        ) {
            alert("Please fill all fields.");
            return;
        }

        if (password !== confirmPassword) {
            alert("Passwords do not match.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const emailExists = users.some(
            (user) => user.email.toLowerCase() === email.toLowerCase()
        );

        if (emailExists) {
            alert("Email already exists.");
            return;
        }

        const usernameExists = users.some(
            (user) => user.username.toLowerCase() === username.toLowerCase()
        );

        if (usernameExists) {
            alert("Username already exists.");
            return;
        }

        const newUser = {
            firstName,
            lastName,
            username,
            email,
            password,
        };

        users.push(newUser);

        localStorage.setItem("users", JSON.stringify(users));

        alert("Account created successfully!");

        resetForm();

        setIsLogin(true);
    };

    const handleLogin = () => {
        const { email, password } = formData;

        if (!email.trim() || !password) {
            alert("Please enter email and password.");
            return;
        }

        const users = JSON.parse(localStorage.getItem("users")) || [];

        const user = users.find(
            (user) =>
                user.email.toLowerCase() === email.toLowerCase() &&
                user.password === password
        );

        if (!user) {
            alert("Invalid email or password.");
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify(user));

        alert(`Welcome ${user.firstName}!`);

        resetForm();

        navigate("/dashboard");
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        if (isLogin) {
            handleLogin();
        } else {
            handleSignup();
        }
    };
    return (
        <div className="flex min-h-screen">

            {/* Left Side */}
            <div className="hidden md:flex md:w-1/2 bg-blue-600 justify-center items-center text-white">

                <div className="text-center px-10">

                    <h1 className="text-5xl font-bold mb-4">
                        {isLogin ? "Welcome Back" : "Create Account"}
                    </h1>

                    <p className="text-lg">
                        {isLogin
                            ? "Log in to continue your learning journey."
                            : "Join us today and start your learning journey."}
                    </p>

                </div>

            </div>

            {/* Right Side */}
            <div className="flex flex-1 justify-center items-center bg-gray-50 py-10">

                <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">

                    <h1 className="text-3xl font-bold text-center mb-2">
                        {isLogin ? "Login" : "Sign Up"}
                    </h1>

                    <p className="text-center text-gray-500 mb-8">
                        {isLogin
                            ? "Welcome back! Please login to your account."
                            : "Create your account to continue"}
                    </p>

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-5"
                    >{/* Signup Only */}
                        {!isLogin && (
                            <>
                                {/* First Name */}
                                <div>
                                    <label className="font-medium">First Name</label>
                                    <input
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        placeholder="Enter first name"
                                        className="w-full h-11 mt-2 rounded-lg border px-4 shadow-sm outline-none focus:border-blue-500"
                                    />
                                </div>

                                {/* Last Name */}
                                <div>
                                    <label className="font-medium">Last Name</label>
                                    <input
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        placeholder="Enter last name"
                                        className="w-full h-11 mt-2 rounded-lg border px-4 shadow-sm outline-none focus:border-blue-500"
                                    />
                                </div>

                                {/* Username */}
                                <div>
                                    <label className="font-medium">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        value={formData.username}
                                        onChange={handleChange}
                                        placeholder="Enter username"
                                        className="w-full h-11 mt-2 rounded-lg border px-4 shadow-sm outline-none focus:border-blue-500"
                                    />
                                </div>
                            </>
                        )}

                        {/* Email */}
                        <div>
                            <label className="font-medium">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                className="w-full h-11 mt-2 rounded-lg border px-4 shadow-sm outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Password */}
                        <div>
                            <label className="font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Enter your password"
                                className="w-full h-11 mt-2 rounded-lg border px-4 shadow-sm outline-none focus:border-blue-500"
                            />
                        </div>

                        {/* Confirm Password */}
                        {!isLogin && (
                            <div>
                                <label className="font-medium">Confirm Password</label>
                                <input
                                    type="password"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm Password"
                                    className="w-full h-11 mt-2 rounded-lg border px-4 shadow-sm outline-none focus:border-blue-500"
                                />

                            </div>
                        )}
                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full h-11 rounded-lg bg-blue-600 text-white font-semibold transition hover:bg-blue-700 cursor-pointer"
                        >
                            {isLogin ? "Log In" : "Create Account"}
                        </button>

                    </form>

                    {/* Toggle Login / Signup */}
                    <div className="flex justify-center gap-2 mt-6 text-sm">

                        {isLogin ? (
                            <>
                                <p>Don't have an account?</p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        resetForm();
                                        setIsLogin(false);
                                    }}
                                    className="text-blue-600 font-semibold hover:underline cursor-pointer"
                                >
                                    Create Account
                                </button>
                            </>
                        ) : (
                            <>
                                <p>Already have an account?</p>

                                <button
                                    type="button"
                                    onClick={() => {
                                        resetForm();
                                        setIsLogin(true);
                                    }}
                                    className="text-blue-600 font-semibold hover:underline cursor-pointer"
                                >
                                    Login
                                </button>
                            </>
                        )}

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Auth;