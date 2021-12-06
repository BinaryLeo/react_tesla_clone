import React from 'react'
import styled from 'styled-components'
import Section from "./Section"
function Home() {
    return (
      <Container>
      <Section
      title="Model S"
      Description="Order Online for Touchless Delivery"
      BackgroundImg="model-s.jpg"
      leftBtnText="Custom Order"
      RightBtnText="Existing Inventory"
      />
      <Section
      title="Model Y"
      Description="Order Online for Touchless Delivery"
      BackgroundImg="model-y.jpg"
      leftBtnText="Custom Order"
      RightBtnText="Existing Inventory"
      />
      <Section
      title="Model 3"
      Description="Order Online for Touchless Delivery"
      BackgroundImg="model-3.jpg"
      leftBtnText="Custom Order"
      RightBtnText="Existing Inventory"
      />
      <Section
      title="Model X"
      Description="Order Online for Touchless Delivery"
      BackgroundImg="model-x.jpg"
      leftBtnText="Custom Order"
      RightBtnText="Existing Inventory"
      />
      <Section
      title="Lower Cost Solar Panels in America"
      Description="Money-Back Guarantee"
      BackgroundImg="solar-panel.jpg"
      leftBtnText="Custom Order"
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
      </Container>
    )
    
}

export default Home

const Container = styled.div`
heigh:100vh;
`