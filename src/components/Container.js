import React from 'react'
import Item from './Item'
import { styled } from 'styled-components'

function Container() {
    return (
        <ItemsContainer>
            {/* Conatiner */}
            <Item name="apple watch" link="https://m.media-amazon.com/images/I/71lU6IcsUcL._AC_UF1000,1000_QL80_.jpg" disc="something something" price="100 dh" />
            <Item name="apple watch" link="https://uno.ma/pub/media/catalog/product/cache/af8d7fd2c4634f9c922fba76a4a30c04/l/d/ld0005894963_1.jpeg" disc="something something" price="100 dh" />
            <Item name="apple watch" link="https://uno.ma/pub/media/catalog/product/cache/af8d7fd2c4634f9c922fba76a4a30c04/l/d/ld0005894963_1.jpeg" disc="something something" price="100 dh" />
            <Item name="apple watch" link="https://uno.ma/pub/media/catalog/product/cache/af8d7fd2c4634f9c922fba76a4a30c04/l/d/ld0005894963_1.jpeg" disc="something something" price="100 dh" />
            <Item name="apple watch" link="https://uno.ma/pub/media/catalog/product/cache/af8d7fd2c4634f9c922fba76a4a30c04/l/d/ld0005894963_1.jpeg" disc="something something" price="100 dh" />
            <Item name="apple watch" link="https://uno.ma/pub/media/catalog/product/cache/af8d7fd2c4634f9c922fba76a4a30c04/l/d/ld0005894963_1.jpeg" disc="something something" price="100 dh" />
            <Item name="apple watch" link="https://uno.ma/pub/media/catalog/product/cache/af8d7fd2c4634f9c922fba76a4a30c04/l/d/ld0005894963_1.jpeg" disc="something something" price="100 dh" />

        </ItemsContainer>
    )
}

export default Container
const ItemsContainer = styled.div`
display: flex;
column-gap: 30px;
    row-gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
`