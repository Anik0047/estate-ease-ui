import { useContext, useState } from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function Navbar() {

  const {currentUser} = useContext(AuthContext)

  const [open, setOpen] = useState(false);

  
  return (
    <nav>
      <div className="left">
        <Link to=""  className="logo">
          <img src="/logo.png" alt="" />
          <span>LamaEstate</span>
        </Link>
        <Link to="" >Home</Link>
        <Link to="/list" >Apartments</Link>
        <Link to="" >About</Link>
        <Link to="" >Contact</Link>
        <Link to="" >Agents</Link>
      </div>
      <div className="right">
        {currentUser ? (
          <div className="user">
            <img
              src={currentUser.avatar || "/noavatar.jpg" }
              alt=""
            />
            <span>{currentUser.username}</span>
            <Link to="/profile" className="profile">
              <span>Profile</span>
              <div className="notification">3</div>
            </Link>
          </div>
        ) : (
          <>
            <Link className="sign-in"  to="/login" >Sign in</Link>
            <Link  to="/register"  className="register">
              Sign up
            </Link>
          </>
        )}
        <div className="menuIcon">
          <img
            src="/menu.png"
            alt=""
            onClick={() => setOpen((prev) => !prev)}
          />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <Link to="/">Home</Link>
          <Link to="/list" >Apartments</Link>
          <Link to="/">About</Link>
          <Link to="/">Contact</Link>
          <Link to="/">Agents</Link>
          <Link to="/login">Sign in</Link>
          <Link to="/register">Sign up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
