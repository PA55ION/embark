import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";
// import { HiOutlineMenu } from "react-icons/hi";

export const Nav = styled.nav`
  position: fixed;
  background: white;
  top: ${({ visible }) => (visible ? "0" : "-60px")};
  height: 60px;
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: space-between;
  z-index: 10;
  transition: top 0.3s;
`;

export const NavLink = styled(Link)`
 &&&&&{
  color: #02073e;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  &.active {
    color: #277DA1;
  }
  &:hover {
    color: #2185d0;
  }
`;

/* export const Bars = styled(HiOutlineMenu)`
  display: none;
  color: #fff;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`; */

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  /* margin-right: -24px;  */
  padding: 0 1rem;
  text-decoration: none;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 24px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(Link)`
  border-radius: 4px;
  background: #cae9ff;
  color: #2185d0;
  padding: 10px 22px;
  outline: none;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #2185d0;
    color: white;
  }
`;
