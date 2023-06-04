import { useContext } from "react";
import { UserContext } from "../providers/my-provider";
import { useParams } from "react-router-dom";

export const UserProfile = () => {
  const params = useParams<any>();
  const { arrayUsers } = useContext(UserContext);

  const userSelected = arrayUsers.find((user: any) => {
    return user.id == params.userId;
  });

  return (
    <div>
      <h2>User`s info:</h2>
      <p>Login: {userSelected?.login}</p>
      <img src={userSelected?.avatar_url} width="100px" alt="photo"></img>
      <p>Url: {userSelected?.url}</p>
      <p>Id: {userSelected?.id}</p>
    </div>
  );
};
