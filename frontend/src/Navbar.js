import { Link } from 'react-router-dom'

const Navbar = ({getUser, info}) => {
  const logOut =() =>{
    getUser({})
  }
  return (
    <nav className="navbar">
        <h1>Kormi Sheba</h1>
        <div className="links">
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
            {info.username && <Link to="/userprofile">Users Profile</Link>}
            {!info.username && <Link to="/signup">Sign Up</Link>}
            {!info.username && <Link to="/login">Login</Link>}
            {info.username && <button onClick={logOut}>Logout</button>}
        </div>
    </nav>
  )
}

export default Navbar