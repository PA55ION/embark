import React from "react";
import { FooterWrapper, Image } from "./FooterStyles";
import logo from "../../assets/images/logo.svg";
import { NavLink as Link } from "react-router-dom";

export const Footer = () => {
  return (
    <FooterWrapper>
      <Link to="/">
        <Image src={logo} alt="embark-logo" />
      </Link>
      <p>&#169; Copyright 2021. All Rights Reserve </p>
    </FooterWrapper>
  );
};
