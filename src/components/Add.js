import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import styled from "styled-components"


function Add() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [disc, setDisc] = useState("");

    const [product, setProduct] = useState([{ name: "", price: 0, image: "", disc: "" }]);

    const handleSubmit = (e) => {
        e.preventDefault()
        setProduct([{
            name: name,
            price: price,
            image: image,
            disc: disc,
        }]);
        // console.log(product);
    }
    useEffect(() => {
        console.log(product);
    }, [product]);

    return (
        <div>
            <TheLabel name="name" for="name">name</TheLabel>
            <input onChange={(e) => { setName(e.target.value) }} type="text" name="name" placeholder='product name' /><br />
            <TheLabel name="price" for="price">price</TheLabel>
            <input onChange={(e) => { setPrice(e.target.value) }} type="price" name="price" placeholder='product price' /><br />
            <TheLabel name="disc" for="disc">disc</TheLabel>
            <input onChange={(e) => { setDisc(e.target.value) }} type="text" name="disc" placeholder='product disc' /><br />
            <TheLabel name="image" for="image">image</TheLabel>
            <input onChange={(e) => { setImage(e.target.value) }} type="text" name="image" placeholder='product image' /><br />
            <button onClick={handleSubmit}>add product</button>
        </div>
    )
}


export default Add
const TheLabel = styled.label`
margin-right: 10px;
`