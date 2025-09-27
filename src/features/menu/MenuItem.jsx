/* eslint-disable react/prop-types */
import { useDispatch } from 'react-redux';
import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';
import { addItem, deleteItem } from '../cart/cartSlice';
import { useState } from 'react';
import DeleteItem from '../cart/DeleteItem';

function MenuItem({ pizza }) {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState(false);
  const { name, unitPrice, ingredients, soldOut, imageUrl, id } = pizza;

  function handleAddToCart() {
    const newItem = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
    setAddedToCart(!addedToCart);
  }

  function removeFromCart() {
    dispatch(deleteItem(id));
    setAddedToCart(!addedToCart);
  }

  return (
    <li className="flex gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />
      <div className="flex grow flex-col pt-0.5">
        <p className="font-semibold uppercase text-stone-950">{name}</p>
        <p className="capitalize italic">{ingredients.join(', ')}</p>
        <div className="mt-auto flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-semibold uppercase text-stone-500">
              Sold out
            </p>
          )}

          {addedToCart ? (
            <DeleteItem onClick={removeFromCart}>Remove from Cart</DeleteItem>
          ) : (
            <Button type="small" disabled={soldOut} onClick={handleAddToCart}>
              {soldOut ? 'Sold Out' : 'Add to cart'}
            </Button>
          )}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
