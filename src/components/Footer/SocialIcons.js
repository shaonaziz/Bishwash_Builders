import React from "react";
import {  FaFacebook,FaInstagram,FaYoutube } from "react-icons/fa";
import { StyledSocialIcons } from "./SocialIcons.styled";
const SocialIcons = () => {
  return (
    <StyledSocialIcons>
      <li>
        <a href="www.youtube.com"><FaYoutube/></a>
      </li>
      <li>
        <a href="www.facebook.com"><FaFacebook/></a>
      </li>
     
      <li>
        <a href="www.instagram.com"><FaInstagram/></a>
      </li>
    </StyledSocialIcons>
  );
};

export default SocialIcons;
