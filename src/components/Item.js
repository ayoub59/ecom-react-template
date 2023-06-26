import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
// import { IconButton } from '@mui/material';
import { IconButton } from '@mui/material';
// import { Edit, Delete, AddShoppingCart } from '@mui/icons-material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { EditLocationAltSharp } from '@mui/icons-material';


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

const Item = ({ name, image, disc, price, id }) => {
  const handleDelete = () => {
    // Implement delete functionality here
    // how about console loging the product's id, but how???????
    console.log(id)
  };

  const handleEdit = () => {
    // Implement edit functionality here
  };

  const handleAddToCart = () => {
    // Implement add to cart functionality here
  };

  return (
    <ItemWrapper>
      <ItemImage src={image} alt={name} />
      <ItemDetails>
        <ItemName>{name}</ItemName>
        <ItemDescription>{disc}</ItemDescription>
        <ItemPrice>Price: {price}</ItemPrice>
        <ItemPrice>id: {id}</ItemPrice>
        <ItemButtons>
          <ItemButton variant="danger" onClick={handleDelete}>
            <DeleteIcon /> Delete
          </ItemButton>
          <ItemButton variant="primary" onClick={handleEdit}>
            <EditIcon /> Edit
          </ItemButton>
          <ItemButton variant="success" onClick={handleAddToCart}>
            <AddShoppingCartIcon /> Add to Cart
          </ItemButton>
        </ItemButtons>
      </ItemDetails>
    </ItemWrapper>
  );
};

Item.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Item;