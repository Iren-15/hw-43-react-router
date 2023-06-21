import { ReactNode, createContext, useState } from "react";

interface IUserContext {
  arrayUsers: string[];
  setArrayUsers: (arrayUsers: string[]) => void;
}

export const UserContext = createContext<IUserContext>({
  arrayUsers: [],
  setArrayUsers: () => {},
});

interface IUserProvider {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  let [arrayUsers, setArrayUsers] = useState([]);

  return (
    <UserContext.Provider value={{ arrayUsers, setArrayUsers }}>
      {children}
    </UserContext.Provider>
  );
};
