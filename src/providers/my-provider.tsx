import { ReactNode, createContext, useState } from "react";

interface IUserContext {
  arrayUsers: any;
  setArrayUsers: (arrayUsers: any) => void;
}

export const UserContext = createContext<IUserContext>({
  arrayUsers: [],
  setArrayUsers: () => {},
});

interface IUserProvider {
  children: ReactNode;
}

export const UserProvider = ({ children }: IUserProvider) => {
  const [arrayUsers, setArrayUsers] = useState([]);

  return (
    <UserContext.Provider value={{ arrayUsers, setArrayUsers }}>
      {children}
    </UserContext.Provider>
  );
};
