import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LanguageIcon from "@material-ui/icons/Language";
function Header() {
  const [burgerState, setBurgerState] = useState(false);

  return (
    <Container>
      <a href="/#">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        <a href="/#">Model S</a>
        <a href="/#">Model 3</a>
        <a href="/#">Model X</a>
        <a href="/#">Model Y</a>
        <a href="/#">Solar Roof</a>
        <a href="/#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a href="/#">Shop</a>
        <a href="/#">Account</a>
        <CustomMenu onClick={() => setBurgerState(true)} />
      </RightMenu>
      <BurgerNav show={burgerState}>
        <CloseWraper onClick={() => setBurgerState(false)}>
          <CloseBtn />
        </CloseWraper>

        <li>
          <a href="/#">Existing Inventory</a>
        </li>
        <li>
          <a href="/#">Used Inventory</a>
        </li>
        <li>
          <a href="/#">Trade-In</a>
        </li>
        <li>
          <a href="/#">Test Drive</a>
        </li>
        <li>
          <a href="/#">Cybertruck</a>
        </li>
        <li>
          <a href="/#">Roadster</a>
        </li>
        <li>
          <a href="/#">Semi</a>
        </li>
        <li>
          <a href="/#">Charging</a>
        </li>
        <li>
          <a href="/#">Powerwall</a>
        </li>
        <li>
          <a href="/#">Commercial Energy</a>
        </li>
        <li>
          <a href="/#">Utilities</a>
        </li>
        <li>
          <a href="/#">Find Us</a>
        </li>
        <li>
          <a href="/#">Support</a>
        </li>
        <li>
          <a href="/#">Investor Relations</a>
        </li>
        <li>
          <span>
            <Globe />
          </span>
          <a href="/#">United States</a>
          <span>English</span>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-itens: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;

  img {
    padding: 20px;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: nowrap;
  }

  a:hover {
    background: rgba(29, 26, 27, 0.1);
    padding: 10px;
    border-radius: 10px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 20px;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
  a:hover {
    background: rgba(29, 26, 27, 0.1);
    padding: 10px;
    border-radius: 10px;
  }
`;
const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
`;

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: white;
  width: 260px;
  z-index: 16;
  list-style: none;
  padding: 20px;
  text-align: start;
  font-size: 14px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 10px;

    a {
      margin-left:5px;
      font-weight: 600;
      color: rgba(29, 26, 27, 0.6);
    }
  }
  li:hover {
    background: rgba(29, 26, 27, 0.1);
    border-radius: 10px;
  }
`;
const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom:30px;
`;

const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
`;
const Globe = styled(LanguageIcon)``;
