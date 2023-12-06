import { useState } from "react";
import { Link } from "react-router-dom";
import style from "./Header.module.scss";
const Header = () => {
  const [toggleBtn, setToggleBtn] = useState("Login");
  return (
    <div className={`${style.header} p-10`}>
      <div className={`${style.logo_container} text-5xl my-4`}>
        Rick & Morty <span className="text-5xl">Wiki</span>
      </div>
      <div className={style.nav_items }>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/episode">Episodes</Link>
          </li>
          <li>
            <Link to="/location">Location</Link>
          </li>
 
          <button
            className={style.login}
            onClick={() => {
              toggleBtn === "Login"
                ? setToggleBtn("Logout")
                : setToggleBtn("Login");
            }}
          >
            {toggleBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
