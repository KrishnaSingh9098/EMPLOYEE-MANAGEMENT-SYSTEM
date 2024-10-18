import React, { useState } from "react";

const Login = ({handleLogin}) => {
    console.log(handleLogin)
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email,password)
        console.log('Email:', email);
        console.log('Password:', password);
        setEmail("");
        setPassword("");
    };

    return (
        <div className="flex h-screen w-screen items-center justify-center p-4">
            <div className="border-2 border-emerald-600 p-6 rounded-xl w-full max-w-sm">
                <form 
                    onSubmit={submitHandler}
                    className="flex flex-col items-center justify-center"
                >
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        type="email"
                        placeholder="Enter Your Email"
                        className="border-2 border-emerald-600 py-4 px-3 text-lg outline-none bg-transparent placeholder:text-gray-400 rounded-full w-full mb-3"
                    />
                    <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password"
                        placeholder="Enter Your Password"
                        className="border-2 border-emerald-600 py-4 px-3 text-lg outline-none bg-transparent placeholder:text-gray-400 rounded-full w-full mb-5"
                    />
                    <button
                        type="submit"
                        className="border-2 bg-emerald-600 py-4 border-none px-5 text-lg text-white outline-none rounded-full w-full"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
