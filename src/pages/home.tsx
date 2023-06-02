import { NavLink, Route, Switch, useRouteMatch, useLocation } from "react-router-dom";
import { UserProfile } from "./userProfile";
import { useEffect} from "react";
import { useContext } from "react";
import { UserContext } from "../providers/my-provider";
import styles from "./styles.module.scss";

export const Home = () => {
  const routeMatch = useRouteMatch();
  const location = useLocation();
  const { arrayUsers, setArrayUsers } = useContext(UserContext);

  console.log("location", location);
  console.log("routeMatch", routeMatch);

  useEffect(() => {
    const getUsers = async () => {
      const rez = await fetch(`https://api.github.com/users`);
      const rezReceived = await rez.json();
      setArrayUsers(rezReceived);
      console.log("users", rezReceived);
    };
    getUsers();
  },[]);

  return (
    <div className={styles["container"]}>
      <ul>
        {arrayUsers.map((user:any) => {
          return (
            <li className={styles["listItem"]} key={user.id}>
              <p className={styles["par"]}>{user.login}</p>
              <NavLink
                activeStyle={{ color: "red" }}
                activeClassName=""
                to={{
                  pathname: `/${user.id}`,
                }}
              >
                See more
              </NavLink>
            </li>
          );
        })}
      </ul>
      {/* Этот не работает!? */}
      <Switch>
        <Route path={`${routeMatch.path}/:userId`}>
          <UserProfile />
        </Route>
      </Switch>
    </div>
  );
};
