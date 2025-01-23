'use client'

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const LoginPage = () => {

    const[username, setUsername] = useState('');
    const[password, setPassword] = useState('');
    const router = useRouter();

    const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log("sending login request", {username, password})
        const response = await axios.post('/api/auth/login', { username, password });
        localStorage.setItem('token', response.data.token);
         console.log("Login successful", response);
            if(response.data.isAdmin){
              router.push('/admin');
            } else {
              router.push('/');
            }
    } catch (error) {
      console.error("Login Failed on frontend", error);
    }
    };


    return (
        <div className="max-w-md mx-auto mt-8">
            <h2 className="text-2xl font-semibold mb-4">
                Login
            </h2>
            <form onSubmit={handleLogin} className="space-y-4">
                <div>
                    <label htmlFor="username" className="block mb-1 font-medium"> Username</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block mb-1 font-medium">Password</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Login
                </button>
            </form>
        </div>
    );




};

export default LoginPage;