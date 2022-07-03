import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import TrangChuPage from "./pages/TrangChuPage/TrangChuPage";
import { userRoutes } from "./routes/userRoutes";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          {userRoutes.map((route, index) => {
            if (route.isUseLayout) {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  render={() => {
                    return route.component;
                    // return <SomeComponent/>
                  }}
                />
              );
            } else {
              return (
                <Route
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                  // component: {SomeComponent}
                />
              );
            }
          })}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
