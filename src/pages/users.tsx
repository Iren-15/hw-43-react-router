import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";
import { UserProfile } from "./userProfile";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from "../providers/my-provider";
import styles from "./styles.module.scss";

export const Users = () => {
  const routeMatch = useRouteMatch();

  const { arrayUsers, setArrayUsers } = useContext(UserContext);

  useEffect(() => {
    const getUsers = async () => {
      const rez = await fetch(`https://api.github.com/users`);
      const rezReceived = await rez.json();
      setArrayUsers(rezReceived);
    };
    getUsers();
  }, []);

  return (
    <div className={styles["container"]}>
      <ul className={styles["list-users"]}>
        {arrayUsers.map((user: any) => {
          return (
            <li className={styles["list-item"]} key={user.id}>
              <p className={styles["par"]}>{user.login}</p>
              <NavLink
                activeClassName={styles["active-link"]}
                to={{pathname: `/${user.id}`}}
              >
                See more
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className={styles["info-block"]}>
        <Switch>
          <Route path={`${routeMatch.path}:userId`}>
            <UserProfile />
          </Route>
        </Switch>
      </div>
    </div>
  );
};
