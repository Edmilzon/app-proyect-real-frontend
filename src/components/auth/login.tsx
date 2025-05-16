'use client'
import { useState } from "react"

export default function login(){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('login submitted', {email, password});
    }
    return(
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <h2 className="text-2xl font-semibold text-center mb-4">Login</h2>
                <form onChange={handleSubmit} className="flex flex-col">
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700"> Email:</label>
                        <input 
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700">Password:</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="w-full p-2 border rounded-md focus:ring focus:ring-blue-300"
                        />
                    </div>
                    <button 
                        type="submit"
                        className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        No tienes cuenta
                        <button className="text-blue-500 hover:underline ml-1">Regístrate</button>
                    </p>
                </div>
            </div>
        </div>
    )
}