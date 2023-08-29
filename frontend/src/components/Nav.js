import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

const Navbar = () => {
  const { logout } = useLogout()
  const { user } = useAuthContext()

  const handleClick = () => {
    logout()
  }

  return (
    <header>
      <div className="container">
        <Link to="/">
          <h1>Admin CSC</h1>
        </Link>
        <nav>
          {user && (
            <div>
              <span style={{marginRight:"25px "}}>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {!user && (
            <div>
              {/* <button style={{marginRight:"10px "}}><Link to="/login">Login</Link></button> */}
              {/* <button><Link to="/signup">Signup</Link></button> */}
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar