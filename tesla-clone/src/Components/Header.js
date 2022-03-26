import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import LanguageIcon from "@material-ui/icons/Language";
import { selectCars } from "../features/car/CarSlice";
import { useSelector } from "react-redux";
function Header() {
  const [burgerState, setBurgerState] = useState(false);
  const cars = useSelector(selectCars);
  return (
    <Container>
      <Logo>
        <svg viewBox="0 0 278.7 36.3" fill="none">
          <g id="TESLA">
            <path
              fill="#000"
              d="M238.1 14.4v21.9h7V21.7h25.6v14.6h7V14.4h-39.6M244.3 7.3h27c3.8-.7 6.5-4.1 7.3-7.3H237c.8 3.2 3.6 6.5 7.3 7.3M216.8 36.3c3.5-1.5 5.4-4.1 6.2-7.1h-31.5V.1h-7.1v36.2h32.4M131.9 7.2h25c3.8-1.1 6.9-4 7.7-7.1H125v21.4h32.4V29H132c-4 1.1-7.4 3.8-9.1 7.3h41.5V14.4H132l-.1-7.2M70.3 7.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 21.6h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.5 7.4 7.3M70.3 36.3h27c3.8-.7 6.6-4.1 7.3-7.3H62.9c.8 3.2 3.6 6.6 7.4 7.3"
            />
            <g>
              <path
                fill="#000"
                d="M0 .1c.8 3.2 3.6 6.4 7.3 7.2h11.4l.6.2v28.7h7.1V7.5l.6-.2h11.4c3.8-1 6.5-4 7.3-7.2V0L0 .1"
              />
            </g>
          </g>
        </svg>
        <Gitme>
          <span> UI Clone </span>
          <a
            href="https://github.com/BinaryLeo/REACT_TESLA_CLONE"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              width="20"
              height="20"
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 496 512"
            >
              <path
                fill="#34353A"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
              />
            </svg>
          </a>
        </Gitme>
      </Logo>

      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="/#">
              {car}
            </a>
          ))}
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
          <Globe />
          <span>
            {" "}
            <a href="/#">United States</a>
            <br />
            English
          </span>
        </li>
      </BurgerNav>
    </Container>
  );
}

export default Header;
const Logo = styled.div`
  width: 250px;
  cursor: pointer;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Gitme = styled.div`
  margin-left: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Container = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  span {
    width: 100px;
    font-size: 14px;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    font-size: 14px;
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
      font-weight: 600;
      color: rgba(29, 26, 27, 0.6);
    
    }
    span {
    color: rgba(29, 26, 27, 0.6);
    font-size: 14px;
    display:inline-block;
    margin-left:10px;
    text-align: start;
    vertical-align: middle;
    line-height: 150%;
  }
 
  li:hover {
    background: rgba(29, 26, 27, 0.1);
    border-radius: 10px;
  }

  
  }`;
const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 30px;
`;

const CloseBtn = styled(CloseIcon)`
  cursor: pointer;
`;
const Globe = styled(LanguageIcon)``;
