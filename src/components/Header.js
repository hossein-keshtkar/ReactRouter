import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header>
          <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
            <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
            <nav className="my-2 my-md-0 mr-md-3">
              <NavLink
                className="p-2"
                to="/"
                style={{ color: "black", textDecoration: "none" }}
                activeStyle={{ textDecoration: "underline" }}
                activeClassName="selected"
                exact
              >
                Home
              </NavLink>
              <NavLink
                className="p-2 text-dark"
                to="/posts"
                style={{ color: "black", textDecoration: "none" }}
                activeStyle={{ textDecoration: "underline" }}
                activeClassName="selected"
                exact
              >
                Posts
              </NavLink>
              <NavLink
                className="p-2 text-dark"
                activeClassName="selected"
                style={{ color: "black", textDecoration: "none" }}
                activeStyle={{ textDecoration: "underline" }}
                to={{
                  pathname: "/profile",
                  hash: "#francis",
                  search: "?true=enabled",
                }}
                exact
              >
                Profile
              </NavLink>
            </nav>
          </div>
        </header>
    )
}
 
export default Header;