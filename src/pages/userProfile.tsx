import { useContext } from "react";
import { UserContext } from "../providers/my-provider";
import { useParams } from "react-router-dom";

export const UserProfile = () => {
  const params = useParams<any>();
  const { arrayUsers } = useContext(UserContext);

  const user = arrayUsers.find((user: any) => {
    return user.id == params.userId;
  });

  return (
    <div>
      <h2>User`s info:</h2>
      <p>Login: {user?.login}</p>
      <img src={user?.avatar_url} width="100px" alt="photo"></img>
      <p>Url: {user?.url}</p>
      <p>Id: {user?.id}</p>
    </div>
  );
};
