import "./style.css";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-items">
        <nav>
          <ul>
            <li>
              <NavLink to="/" className="logo">
                The<span>Shop</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="links">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/shop" className="links">
                Products
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="links">
                Blog
              </NavLink>
            </li>
            {/* <li>
              <NavLink
                to=""
                className="links"
                style={({ isActive }) =>
                  isActive ? { color: "white" } : undefined
                }
              >
                Shop
              </NavLink>
            </li> */}
            <li>
              <NavLink to="/contact" className="links">
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="input">
        <img
          className="search-icon"
          alt="search icon"
          src="/assets/Vector.png"
        />
        <input className="search-text" placeholder="Search"></input>
      </div>
      <div className="icons">
        <ul>
          <li>
            <img src="/assets/Icon.png" alt="user"></img>
          </li>
          <li>
            <img src="/assets/fluent_cart-24-regular.png" alt="card"></img>
          </li>
          <li>
            <img src="/assets/uil_heart-alt.png" alt="like"></img>
          </li>
        </ul>
      </div>
    </div>
  );
};

export { NavBar }; //reader asks to do like this
