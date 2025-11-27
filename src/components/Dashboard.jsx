function Dashboard(){
    const user=JSON.parse(localStorage.getItem('user'));
    return(
        <div className="container">
            <h2>Dashboard</h2>
            <p>Welcome, {user?.name||'User'}!</p>
        </div>
    );
}

export default Dashboard;