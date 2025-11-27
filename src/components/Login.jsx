import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

function Login(){
    const [name, setName]=useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit=(e)=>{
        e.preventDefault();
        setError('');
    if(!email||!password||!name){
        setError('Please fill in all fields');
        return;
    }
    if(!email.includes('@') || !email.includes('.')) {
        setError('Please enter a valid email');
        return;
    }
    if(password.length < 6) {
        setError('Password must be at least 6 characters');
        return;
    }

    const users=JSON.parse(localStorage.getItem('users'))||[];
    const user=users.find((u)=>u.email===email && u.password===password && u.name===name);
    if(!user){
      setError('Invalid email or password');
      return;
    }

    localStorage.setItem('user',JSON.stringify({name}));
    navigate('/dashboard');
    };

    return(
        <div className="container">
        <h2>Login</h2>
            {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="name" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter your name"/>
            <label>Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email"/>
            <label>Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} placeholder="Enter your password"/>
            <button type="submit">Login</button>
        </form>
    </div>
    );
}

export default Login;