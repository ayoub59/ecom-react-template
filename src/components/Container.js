import React from 'react'
import Item from './Item'
import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


function Container() {
    const [Product, setProduct] = useState([
        {
            name: "product name 1",
            price: 100,
            disc: "product discription 1",
            image: "https://m.media-amazon.com/images/I/71lU6IcsUcL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            name: "product name 2",
            price: 100,
            disc: "product discription 1",
            image: "https://m.media-amazon.com/images/I/71lU6IcsUcL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            name: "product name 3",
            price: 100,
            disc: "product discription 1",
            image: "https://m.media-amazon.com/images/I/71lU6IcsUcL._AC_UF1000,1000_QL80_.jpg",
        },
        {
            name: "product name 4",
            price: 100,
            disc: "product discription 1",
            image: "https://m.media-amazon.com/images/I/71lU6IcsUcL._AC_UF1000,1000_QL80_.jpg",
        }
    ]
    );
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [disc, setDisc] = useState("");

    // edite code
    const [productIndex, setproductIndex] = useState(null);
    const [editName, setEditName] = useState("");
    const [editPrice, setEditPrice] = useState("");
    const [editImage, setEditImage] = useState("");
    const [editDisc, setEditDisc] = useState("");
    const [isOpen, setIsOpen] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault()
        setProduct([...Product, { name: name, price: price, image: image, disc: disc }]);
    }
    useEffect(() => {
    }, [Product]);

    // for the curd 
    const handleDelete = (id) => {
        // how about console loging the product's id, but how?
        console.log(id);
        const newProduct = Product.filter((p, index) => index !== id);
        setProduct(newProduct);
    };

    // edite code 
    const handleEdit = (id) => {
        setIsOpen(!isOpen);
        setproductIndex(id);
        const { name, price, image, disc } = Product[id];
        setEditName(name);
        setEditPrice(price);
        setEditImage(image);
        setEditDisc(disc);
    };
    const handleEditSubmit = (e) => {
        e.preventDefault();
        console.log(editName, editDisc, editPrice, editImage)
        if (productIndex !== null) {
            const updatedProduct = [...Product];
            updatedProduct[productIndex] = {
                name: editName,
                price: editPrice,
                image: editImage,
                disc: editDisc,
            };
            setProduct(updatedProduct);
        }
    };


    const handleAddToCart = () => {
        // Implement add to cart functionality here
    };

    return (
        <ItemsContainer>
            {/* Conatiner */}
            {/* map trogh the whole state */}
            {Product.map((p, id) => (
                <ItemWrapper key={id}>
                    <ItemImage src={p.image} alt={p.name} />
                    <ItemDetails>
                        <ItemName>{p.name}</ItemName>
                        <ItemDescription>{p.disc}</ItemDescription>
                        <ItemPrice>Price: {p.price}</ItemPrice>
                        <ItemPrice>id: {id}</ItemPrice>
                        <ItemButtons>
                            <ItemButton variant="danger" onClick={() => { handleDelete(id) }}>
                                <DeleteIcon /> Delete
                            </ItemButton>
                            <ItemButton variant="primary" onClick={() => { handleEdit(id) }}>
                                <EditIcon /> Edit
                                {/* the edit forum */}
                            </ItemButton>

                            <ItemButton variant="success" onClick={handleAddToCart}>
                                <AddShoppingCartIcon /> Add to Cart
                            </ItemButton>
                        </ItemButtons>
                    </ItemDetails>
                    {isOpen ? <div>
                        <TheLabel name="name" for="name">name</TheLabel>
                        <input onChange={(e) => { setEditName(e.target.value) }} type="text" name="name" placeholder='product name' /><br />
                        <TheLabel name="price" for="price">price</TheLabel>
                        <input onChange={(e) => { setEditPrice(e.target.value) }} type="price" name="price" placeholder='product price' /><br />
                        <TheLabel name="disc" for="disc">disc</TheLabel>
                        <input onChange={(e) => { setEditDisc(e.target.value) }} type="text" name="disc" placeholder='product disc' /><br />
                        <TheLabel name="image" for="image">image</TheLabel>
                        <input onChange={(e) => { setEditImage(e.target.value) }} type="text" name="image" placeholder='product image' /><br />
                        <button onClick={handleEditSubmit}>add product</button>
                    </div> : <div>alo</div>}

                </ItemWrapper>
            ))}
            {/* forum of edite */}


            {/* forum of addition */}
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

        </ItemsContainer>
    )
}

const ItemsContainer = styled.div`
display: flex;
column-gap: 30px;
    row-gap: 30px;
    flex-wrap: wrap;
    justify-content: center;
`
const TheLabel = styled.label`
margin-right: 10px;
`

const ItemWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const ItemImage = styled.img`
  width: 100px;
  height: 100px;
  margin-right: 10px;
`;

const ItemDetails = styled.div`
  flex: 1;
`;

const ItemName = styled.h3`
  margin: 0;
`;

const ItemDescription = styled.p`
  margin: 5px 0;
`;

const ItemPrice = styled.p`
  margin: 5px 0;
`;

const ItemButtons = styled.div`
  display: flex;
  align-items: center;
`;

const ItemButton = styled.button`
  margin-right: 5px;
  background-color: none;
  border: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;
export default Container;


