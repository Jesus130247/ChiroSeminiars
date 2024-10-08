export default function Nav({user, setUser}) {
    console.log(user)
    function handleLogout() {
        setUser(null)
    }
    return (
    <header>
        <div className="logo">
            <h1><a href="/ChiroSeminars/">ChiroOceaniaHub</a></h1>
        </div>
        <nav>
            <ul>
                <li><a href="/ChiroSeminars/">Home</a></li>
                <li><a href="/ChiroSeminars/Seminars">Seminars</a></li>
                {user ? <a onClick={handleLogout}>Logout</a> : <li><a href="/ChiroSeminars/Login">Login</a></li>}
                {/* <li><a href="#">Online Courses</a></li> */}
                {/* <li><a href="#">Coaching</a></li> */}
                <li><a href="/ChiroSeminars/AboutUs">About Us</a></li>
                <li><a href="/ChiroSeminars/Contact">Contact</a></li>
            </ul>
        </nav>
    </header> 
    )
}