import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Signup(){
    const [name, setName]=useState('');
    const [email,setEmail]=useState('');
    const [password, setPassword]=useState('');
    const [error,setError]=useState('');
    const navigate=useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        setError('');
    if(!email||!password||!name){
        setError('Please fill in all fields');
        return;
    }
    if(!email.includes('@')||!email.includes('.')){
        setError('Please enter a valid email');
        return;
    }
    if(password.length<6){
      setError('Password must be at least 6 characters');
      return;
    }
    const users=JSON.parse(localStorage.getItem('users'))||[];
    if(users.find((u)=>u.email===email)){
      setError('Email already registered');
      return;
    }
    const newUser={name, email, password};
    users.push(newUser);
    localStorage.setItem('users',JSON.stringify(users));
    localStorage.setItem('user',JSON.stringify({name}));
    navigate('/dashboard');
    };

    return(
        <div className="container">
            <h2>Signup</h2>
            {error && <p className="error">{error}</p>}
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
                <label>Email</label>
                <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
                <label>Password</label>
                <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;