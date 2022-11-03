import { Link } from "react-router-dom";
import {
  Nav,
  Logo,
  ListGrid,
  List,
  AuthGrid,
  Login,
  SignUp,
} from "./Header.styles";
import { Outlet } from "react-router-dom";

function Header() {
  return (
    <>
      <Nav>
        <Logo>Biccas</Logo>
        <ListGrid>
          <Link to="#">
            <List>Home</List>
          </Link>

          <Link to="#">
            <List>Product</List>
          </Link>
          <Link to="#">
            <List>FAQ</List>
          </Link>
          <Link to="#">
            <List>Blog</List>
          </Link>
          <Link to="#">
            <List>About</List>
          </Link>
        </ListGrid>
        <AuthGrid>
          <Login>Login</Login>
          <SignUp>Sign Up</SignUp>
        </AuthGrid>
      </Nav>
      <Outlet />
    </>
  );
}

export default Header;
