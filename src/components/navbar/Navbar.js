import React, { useState, useEffect } from "react";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavbarStyles";
import Sidebar from "./burger/SideBar";
import BurgerMenu from "./burger/BurgerMenu";
import { useOnclickOutside } from "./burger/useOnclickOutside";
import logo from '../../assets/images/logo.svg'



const NavBar = () => {
  const [open, setOpen] = useState(false);
  const node = React.useRef();
  useOnclickOutside(node, () => setOpen(false));
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;

    setVisible(
      (prevScrollPos > currentScrollPos &&
        prevScrollPos - currentScrollPos > 0) ||
        currentScrollPos < 50
    );

    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <>
      <Nav visible={visible}>
        <NavLink to="/">
          <h1>
            <img src={logo} alt="embark-logo" />
          </h1>
        </NavLink>
        <div ref={node}>
          <BurgerMenu open={open} setOpen={setOpen} />
          <Sidebar open={open} setOpen={setOpen} />
        </div>
        <NavMenu>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/services" activeStyle>
            Services
          </NavLink>
          <NavLink to="/contact-us" activeStyle>
            Contact Us
          </NavLink>
          {/* <NavLink to="/sign-up" activeStyle>
            Sign Up
          </NavLink> */}
        </NavMenu>
        {/* <NavBtn>
          <NavBtnLink to="/contact">Contact us</NavBtnLink>
        </NavBtn> */}
      </Nav>
    </>
  );
};

export default NavBar;
