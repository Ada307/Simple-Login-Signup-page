import {Link,useNavigate} from 'react-router-dom';

function Navbar(){
    const navigate=useNavigate();
    const isLoggedIn=!!localStorage.getItem('user');
    const handleLogout=()=>{
        localStorage.removeItem('user');
        navigate('/login');};
    return(
        <nav>
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', maxWidth:'1200px', margin:'0 auto'}}>
            <div>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
            {isLoggedIn &&(<><Link to="/dashboard">Dashboard</Link><button onClick={handleLogout}>Logout</button></>)}
            </div>
        </div>
        </nav>
    );
}

export default Navbar;