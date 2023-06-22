import React from 'react'
import Container from './Container'
import { styled } from 'styled-components'


function Home() {
    return (
        <HomeContainer>
            Home
            <Container />
        </HomeContainer>
    )
}

export default Home
const HomeContainer = styled.div`
display:flex ;
flex-direction: column;
`