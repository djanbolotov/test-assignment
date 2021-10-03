import {Nav, Logo, Menu, MenuLink} from "./../utils/Navbar";
import {Link} from "react-router-dom";

const Navbar: React.FC = () => {


  return (
    <Nav>
      <Logo>
        <Link to="/">Djan<span>bolotov</span></Link>
      </Logo>
      <Menu>
        <MenuLink><Link to="/">All Posts</Link></MenuLink>
        <MenuLink><Link to="/posts/new">New Post</Link></MenuLink>
      </Menu>
    </Nav>
  );
};

export default Navbar;