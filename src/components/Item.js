import React from 'react'
import { styled } from 'styled-components'

function Item(props) {
    return (
        <Container>
            <Title>{props.name}</Title>
            <ImageConatiner>
                <Image src={props.link} alt="some random product" />
            </ImageConatiner>

            <SubTitle>{props.disc}</SubTitle>
            <SubTitle>{props.price}</SubTitle>
        </Container>
    )
}

export default Item
const Container = styled.div`
height: 30%;
width: 30%;
min-height: 100px;
min-width: 100px;
color: red;
background-color: gray;
display: flex;
flex-direction: column;
    align-items: center;
`
const ImageConatiner = styled.div`
max-height: 100%;
max-width: 100%;
`
const Title = styled.h3`
/* font-family: poppins; */
`
const Image = styled.img`
max-height: 100%;
max-width: 100%;

`
const SubTitle = styled.p``
