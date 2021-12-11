import React, { useState, useRef } from "react";
import styled from "styled-components";
import { useMatchBreakpoints } from "../../hooks";
import WrapperM from "./WrapperM";
import WrapperD from "./WrapperD";
import { NavProps } from "./types";

const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

const Menu: React.FC<NavProps> = ({
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  links,
  children,
  footerLinks,
}) => {
  const { isXl } = useMatchBreakpoints();
  const isMobile = isXl === false;
  const [isPushed, setIsPushed] = useState(!isMobile);
  const [showMenu, setShowMenu] = useState(true);
  const refPrevOffset = useRef(window.pageYOffset);


  // Find the home link if provided
  const homeLink = links.find((link) => link.label === "Home");

  return (
    <Wrapper>
  { isMobile? (<WrapperM account={account} login={login} logout={logout} isDark={isDark} toggleTheme={toggleTheme} langs={langs} setLang={setLang} currentLang={currentLang} links={links} children={children} footerLinks={footerLinks} />) 
  : (<WrapperD account={account} login={login} logout={logout} isDark={isDark} toggleTheme={toggleTheme} langs={langs} setLang={setLang} currentLang={currentLang} links={links} children={children} footerLinks={footerLinks} />) }
    </Wrapper>
  );
};

export default Menu;
