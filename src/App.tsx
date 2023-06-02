import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { UserProfile } from "./pages/userProfile";

import "./App.css";
import { UserProvider } from "./providers/my-provider";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" exact={true}>
              <Home />
            </Route>
            <Route path="/:userId" exact={true}>
              <UserProfile />
            </Route>
            <Route path="*" exact={true}>
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
