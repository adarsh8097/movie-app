import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registerform.css';

const RegisterForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();
        // Replace with actual registration logic
        if (username && password && email) {
            // Simulate registration logiclet 
            const user = { username, password, email };
            localStorage.setItem('user', JSON.stringify(user)); // Store user info in localStorage
            console.log('User registered:', user);
            console.log('User registered:', { username, password, email });

            navigate('/login'); // Redirect to login after successful registration
        } else {
            alert('Please fill in all fields');
        }
    };

    return (
        <div className="container">
            <section id="content">
                <form onSubmit={handleRegister}>
                    <h1 className="" style={{ justifyContent: "center", textAlign: 'center', marginBottom: "40px", color: "white", fontFamily: "boloto" }}>Register Form</h1>
                    <div className="usedata">
                        <input type="text" placeholder="Username" required="" id="username" onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="usedata">
                        <input type="email" placeholder="Email" required="" id="email" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="usedata">
                        <input type="password" placeholder="Password" required="" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="" style={{ marginTop: "20px" }}>
                        <input type="submit" value="Register" className="btn btn-primary w-100" />
                    </div>
                </form>
                <div className="button">

                    <a href="/login" className='' style={{color:"white",marginTop:"20px", fontWeight:"bold"}}>Login here</a>
                </div>
            </section>
        </div>
    );
};

export default RegisterForm;
