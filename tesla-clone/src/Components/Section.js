import React from 'react'
import styled from 'styled-components'
function Section() {
    return (
        <Wrap>
        <ProductText>
         <h1>Model S</h1>
         <p>Order Online for Touchless Delivery</p>
        </ProductText>
        <Buttons>
        <ButtonSection>
        <LeftButton>Custom Order</LeftButton>
        <RightButton>Existing Inventory</RightButton>
        </ButtonSection>
        <DownArrow src="/images/down-arrow.svg"/>
        </Buttons>
       
      
        </Wrap>
            
    )
}

export default Section

const Wrap = styled.div`
width:100vw;
height:100vh;
background-size:cover;
background-position:center;
background-repeat:no-repeat;
display:flex;
flex-direction:column;
justify-content:space-between;
align-itens:center;

background-image: url('/images/model-s.jpg');
`
const ProductText = styled.div`
padding-top:15vh;
text-align:center;
`
const ButtonSection = styled.div`
display:flex;
align-itens:center;
justify-content:center;
margin-bottom:50px;

`
const LeftButton = styled.div`

background-color: rgba(23,26,32,0.8);
height:40px;
width:256px;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
border-radius:50px;
opacity:0.85;
color:white;
text-align:center;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;
`

const RightButton = styled.div`
background-color:#E1DDDD;
height:40px;
width:256px;
display:flex;
flex-direction:row;
justify-content:center;
align-items:center;
border-radius:50px;
opacity:0.85;
color:#333539;
font-weight:bold;
text-align:center;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;

`
const Buttons = styled.div``
const DownArrow = styled.img`

height:40px;
overflow-x:hidden;
animation: animateDown infinite 1.5s;
margin-bottom:30px;
`