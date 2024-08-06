import React, { useState } from 'react';
import { useAuth } from '../Component/AuthContext';
import { useNavigate } from 'react-router-dom';
import './LoginForm.css';
import RegisterForm from './RegisterForm';

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && username === storedUser.username && password === storedUser.password) {
            login();
            navigate('/');
        } else {
            alert('Invalid credentials');
        }
    };

    return (
        
        <div class="container">
	<section id="content" >
		<form onSubmit={handleSubmit}>
			<h1 className='' style={{justifyContent:"center",textAlign:'center',marginBottom:"40px",color:"white",fontFamily:"boloto"}}>Login Form</h1>
			<div className='usedata'>
				<input type="text" placeholder="Username" required="" id="username"  onChange={(e) => setUsername(e.target.value)}/>
			</div>
			<div className='usedata'>
				<input type="password" placeholder="Password" required="" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
			</div>
			<div className='' style={{marginTop:"20px"}}>
				<input type="submit" value="Log in" className='btn btn-primary w-100' />
				
			</div>
		</form>
        <div class="button mt-4">
             <a href='/register' className='' style={{color:"white",fontWeight:"bold",fontSize:"1.2rem" }}>Register Here</a>
			{/* <a href="#">Download source file</a> */}
		</div>
	</section>
    {/* <RegisterForm/> */}
   
</div>
    );
};

export default LoginForm;
