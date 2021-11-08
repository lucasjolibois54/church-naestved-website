import React from 'react'
import styled from 'styled-components'

//Det her eksempel bruger styled-components

/* husk at Funktionens navn ikke må være ens 
med consts fra styled-components */

/*
!!Eksempel!!
Vi har funktionen ( Const Button = styled.button )
Vi har også RFCE function som hedder Knap, og hvis vi kaldte 
den 'Button' ville vi have declared en funktion x2
og det vil den ikke have, så DONT DO IT :P
*/

function Knap() {
  return (
  <Container>
    <Button>Normal Button</Button>
    <Button primary>Primary Button</Button>
  </Container>
  )
}

export default Knap

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
