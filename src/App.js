import { Fragment } from "react";
import { useSelector } from "react-redux";

import Counter from "./components/counter/counter";
import Header from "./components/header/header";
import Auth from "./components/auth/auth";
import UserProfile from "./components/userProfile/userProfile";
const App = () => {
  const isAuth = useSelector((state) => state.auth.auth);
  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
};

export default App;
