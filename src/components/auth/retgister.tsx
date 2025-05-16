'use client'
import { useState } from "react"

export default function register () {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e: any) => {
        e.preventDefault();
        console.log('register submitted', {name, email, password});
    }
    return(
        <div>
            <h2>Register</h2>
            <form onChange={handleSubmit}>
                <div>
                    <label >Nombre</label>
                    <input 
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)} 
                        required
                    />
                </div>
                <div>
                    <label >Email</label>
                    <input 
                        type="email" 
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="">password</label>
                    <input 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}