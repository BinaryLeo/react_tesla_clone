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
      </Container>
    )
    
}

export default Home

const Container = styled.div`
heigh:100vh;
`