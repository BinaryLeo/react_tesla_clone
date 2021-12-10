import React from "react";
import styled from "styled-components";
import Section from "./Section";
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        Description="Order Online for"
        Complement="Touchless Delivery"
        BackgroundImg="model-s.jpg"
        leftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model Y"
        Description="Order Online for"
        Complement="Touchless Delivery"
        BackgroundImg="model-y.jpg"
        leftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model 3"
        Description="Order Online for"
        Complement="Touchless Delivery"
        BackgroundImg="model-3.jpg"
        leftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Model X"
        Description="Order Online for"
        Complement="Touchless Delivery"
        BackgroundImg="model-x.jpg"
        leftBtnText="Custom Order"
        RightBtnText="Existing Inventory"
      />
      <Section
        title="Solar Panels"
        Description="Lowest Cost Solar Panels in America"
        BackgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        RightBtnText="Learn More"
      />
      <Section
        title="Solar Roof"
        Description="Produce Clean Energy From Your Roof"
        BackgroundImg="solar-roof.jpg"
        leftBtnText="Order now"
        RightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        Description=""
        BackgroundImg="accessories.jpg"
        leftBtnText="Shop now"
      />
      <Footer>
        <li>
          <a href="/#">Tesla © 2021</a>
        </li>
        <li>
          <a href="/#">Privacy & Legal</a>
        </li>
        <li>
          <a href="/#">Contact</a>
        </li>
        <li>
          <a href="/#">Careers</a>
        </li>
        <li>
          <a href="/#">News</a>
        </li>
        <li>
          <a href="/#">Engage</a>
        </li>
        <li>
          <a href="/#">Locations</a>
        </li>
      </Footer>
      <p>
        Designed by <a href="https://github.com/binaryleo">: Binary Leo</a>, for
        study purposes
      </p>
    </Container>
  );
}

export default Home;

const Container = styled.div`
  heigh: 100vh;
  p {
    width: 100vw;
    height: 20px;
    color: rgba(29, 26, 27, 0.6);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    padding: 0 5px 10px;
  }
`;
const Footer = styled.div`
  width: 100vw;
  heigh: 150px;
  padding: 20px;
  color: rgba(29, 26, 27, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: nowrap;
  list-style: none;
  a {
    font-size: 12px;
    padding: 0 10px;
    flex-wrap: nowrap;
  }
`;
