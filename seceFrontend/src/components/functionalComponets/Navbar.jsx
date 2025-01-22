import { useState } from "react";
import "../../css/Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  var [dropdown, showdropdown] = useState(false);
  const toggeledropdown = () => {
    showdropdown((dropdown) => !dropdown);
  };

  return (
    <header>
      <nav>
        <ol className="navbar">
          <li>
            <Link to="/home" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/card" className="link">
              Card
            </Link>
          </li>
          <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li>
          <li>
            <Link to="/profile" className="link">
              Profile
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>

          <div>
            <span className="link" onMouseEnter={toggeledropdown}>
              Hooks
            </span>
            {dropdown && (
              <ol onMouseLeave={toggeledropdown}>
                <li>
                  <Link to="/use-state" className="link">
                    useState
                  </Link>
                </li>
                <li>
                  <Link to="/use-effect" className="link">
                    UseEffect
                  </Link>
                </li>
                <li>
                  <Link to="/use-effect-api" className="link">
                    UseEffectAPI
                  </Link>
                </li>
              </ol>
            )}
          </div>

          <li>
            <Link to="/" className="link">
              Logout
            </Link>
          </li>
        </ol>
      </nav>
    </header>
  );
};
export default Navbar;
