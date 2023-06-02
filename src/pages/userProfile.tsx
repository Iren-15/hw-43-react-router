import { useContext } from "react";
import { UserContext } from "../providers/my-provider";
import { useLocation, useParams } from "react-router-dom";
import { NavLink, Route, Switch, useRouteMatch } from "react-router-dom";

export const UserProfile = () => {
  const location = useLocation();
  const params = useParams<any>();
  const { arrayUsers } = useContext(UserContext);
  const routeMatch = useRouteMatch();

  const user = arrayUsers.find((user:any) => {
    return user.id == params.userId;
  });

  console.log("userProfile arrayUsers:", arrayUsers);
  console.log("location", location);
  console.log("params userId:", params.userId);
     
  return (
    <div>
      <p>Profile:</p>
      <p>{user?.id}</p>
      <p>{user?.login}</p>
      <img src={user?.avatar_url} width="100px"></img>
      <Switch>
        <Route path={`${routeMatch.path}`}>
          <p>hello</p>
        </Route>
      </Switch>
    </div>
  );
};
