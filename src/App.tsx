import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import { UserProvider } from "./providers/my-provider";
import { Home } from "./pages/home";

function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/">
              <Home />
            </Route>
            <Route path="*">
              <h1>404</h1>
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </UserProvider>
  );
}

export default App;
