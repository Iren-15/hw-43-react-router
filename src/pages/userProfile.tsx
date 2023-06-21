import { useContext, useEffect, useState } from "react";
import { UserContext } from "../providers/my-provider";
import { useParams } from "react-router-dom";

export const UserProfile = () => {
  const params = useParams<any>();
  const { arrayUsers } = useContext(UserContext);

  const userSelected = arrayUsers.find((user: any) => {
    return user.id == params.userId;
  });

  const userSelectedLogin = userSelected?.login;
  //console.log("ulogin:", userSelectedLogin);
  //console.log("params.userId", params.userId);

  const [userSelectedApi, setUserSelectedApi] = useState();
  useEffect(() => {
    const getUsers = async () => {
      const rez = await fetch(
        `https://api.github.com/users/${userSelectedLogin}`
      );
      const rezReceived = await rez.json();
      setUserSelectedApi(rezReceived);
      //console.log("rezReceived:", rezReceived);
    };
    getUsers();
  }, [userSelectedLogin]);

  return (
    <div>
      <h2>User`s info:</h2>
      <p>Login: {userSelectedApi?.login}</p>
      <img src={userSelectedApi?.avatar_url} width="100px" alt="photo"></img>
      <p>Url: {userSelectedApi?.url}</p>
      {/* <p>Login: {userSelected?.login}</p>
      <img src={userSelected?.avatar_url} width="100px" alt="photo"></img>
      <p>Url: {userSelected?.url}</p>
      <p>Id: {userSelected?.id}</p> */}
    </div>
  );
};
