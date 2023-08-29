import { Link } from 'react-router-dom'; // Import the Link component from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'; // Import the useLogout custom hook
import { useAuthContext } from '../hooks/useAuthContext'; // Import the useAuthContext custom hook

// Functional component for the navigation bar
const Navbar = () => {
  const { logout } = useLogout(); // Use the useLogout custom hook to get the logout function
  const { user } = useAuthContext(); // Use the useAuthContext custom hook to get the user data

  // Handle click event for logout button
  const handleClick = () => {
    logout(); // Call the logout function when the button is clicked
  }

  return (
    <header>
      <div className="container">
        {/* Link to the home page */}
        <Link to="/">
          <h1>Admin CSC</h1>
        </Link>
        <nav>
          {/* Render user information and logout button if user is authenticated */}
          {user && (
            <div>
              <span style={{ marginRight: "25px" }}>{user.email}</span>
              <button onClick={handleClick}>Log out</button>
            </div>
          )}
          {/* Render login and signup buttons if user is not authenticated */}
          {!user && (
            <div>
              {/* <button style={{ marginRight: "10px" }}><Link to="/login">Login</Link></button> */}
              {/* <button><Link to="/signup">Signup</Link></button> */}
            </div>
          )}
        </nav>
      </div>
    </header>
  )
}

export default Navbar; // Export the Navbar component to be used elsewhere
