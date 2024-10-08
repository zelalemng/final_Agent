import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../helper/user";

function Header() {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const onLogout = () => {
    logout();

    navigate("/");
  };

  return (
    <header>
      <nav className="bg-white space-y-3 border-gray-200 w-full border-collapse px-4 lg:px-6 py-2.5 dark:bg-gray-800 text-white">
        <div className="flex flex-wrap justify-between items-center">
          <div className="flex justify-start font-bold items-center">
            <Link to="/">Agent</Link>
          </div>
          <div className="flex items-center lg:order-2">
            {user ? (
              <>
                <Link className="mx-5" to="/">
                  Dashboard
                </Link>
                
                
                <button className="btn" onClick={onLogout}>
                  <FaSignOutAlt className="inline-block" /> Logout
                </button>
              </>
            ) : (
              <>
                <Link className="mx-5" to="/login">
                  <FaSignInAlt className="inline-block mx-1" /> Login
                </Link>
                <Link className="mx-5" to="/register">
                  <FaUser className="inline-block mx-1" /> Register
                </Link>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
