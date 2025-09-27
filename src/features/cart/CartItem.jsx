/* eslint-disable react/prop-types */

import { useDispatch } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import { deleteItem } from './cartSlice';
import UpdateItemQuantity from './UpdateItemQuantity';

function CartItem({ item }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
  }
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:items-center sm:justify-between">
      <p className="mb-1 sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between sm:space-x-6">
        <p className="text-sm font-bold">{formatCurrency(totalPrice)}</p>
        <UpdateItemQuantity pizzaId={pizzaId} />

        <DeleteItem onClick={handleDeleteItem}>Delete</DeleteItem>
      </div>
    </li>
  );
}

export default CartItem;
