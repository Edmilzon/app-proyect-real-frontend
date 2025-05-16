'use client'
import { useState } from "react"

export default function login(){
    const[email, setEmail] = useState('');
    const[password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('login submitted', {email, password});
    }
    return(
        <div>
            <h2>Login</h2>
            <form onChange={handleSubmit}>
                <div>
                    <label > Email:</label>
                    <input 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Login</button>
            </form>
            <div>
                <p>
                    No tienes cuenta
                    <button>Registe</button>
                </p>
            </div>
        </div>
    )
}