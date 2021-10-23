import Home from "./Home";
import Post from "./Post";
import Profile from "./Profile";
import PostItem from "./PostItem";
import Header from "./Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const Router = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/posts/:id" exact component={PostItem} />
            <Route path="/posts" exact component={Post} />
            <Route path="/profile" exact component={Profile} />
            <Route path="/" exact component={Home} />
            <Route
              render={() => (
                <>
                  <h1>404</h1>
                  <h4>Page not found</h4>
                </>
              )}
            />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Router;
