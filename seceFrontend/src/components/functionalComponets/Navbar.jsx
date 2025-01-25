import { useState } from "react";
import "../../css/Navbar.css";
import "../../css/UseEffectAPIimage.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  // var [dropdown, showdropdown] = useState(false);
  // const toggeledropdown = () => {
  //   showdropdown((dropdown) => !dropdown);
  // };

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
          {/* <li>
            <Link to="/about" className="link">
              About
            </Link>
          </li> */}
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

          {/* <div>
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
          </div> */}

          <li className="drop">
            <span className="link">Hooks</span>
            <div className="hookslist">
              <li>
                <Link to="/react-life-cycle" className="link">
                  LifeCycle
                </Link>
              </li>
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
              <li>
                <Link to="/use-effect-api-img" className="link">
                  UseEffectAPIimage
                </Link>
              </li>
              <li>
                <Link to="/use-ref" className="link">
                  UseRef
                </Link>
              </li>
              <li>
                <Link to="/use-memo" className="link">
                  UseMemo
                </Link>
              </li>
              <li>
                <Link to="/use-callback" className="link">
                  UseCallBack
                </Link>
              </li>
              <li>
                <Link to="/use-reducer" className="link">
                  UseReducer
                </Link>
              </li>
              <li>
                <Link to="/use-context" className="link">
                  UseContext
                </Link>
              </li>
              <li>
                <Link to="/use-custom" className="link">
                  UseLocalStorage
                </Link>
              </li>
            </div>
          </li>
          <li className="drop">
            <span className="link">Memorization</span>
            <div className="hookslist">
              <li>
                <Link to="/memo" className="link">
                  Memo
                </Link>
              </li>
              <li>
                <Link to="/lazy" className="link">
                  lazy,suspense
                </Link>
              </li>
            </div>
          </li>
          <li>
            <Link to="/hoc" className="link">
              HoC
            </Link>
          </li>
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
