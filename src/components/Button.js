import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  transition: all .1s ease-in-out;
  cursor: pointer;

  &:hover{
    background: red;
    transition: all .1s ease-in-out;
  }
`;

const Container = styled.div`
  text-align: center;
`

function Knap() {
  return (
  <Container>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </Container>
  )
}

export default Knap
