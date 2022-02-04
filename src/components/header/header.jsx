import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth.slice";
import { useSelector } from "react-redux";
import classes from "./header.module.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuth = useSelector((state) => state.auth.auth);
  const logoutHandler = (e) => {
    e.preventDefault();
    dispatch(authActions.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuth && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
