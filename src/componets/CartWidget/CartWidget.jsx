import React from 'react';
import { FaShoppingCart } from "react-icons/fa";
const CartWidget = () => {
  return (
    <div>
      <FaShoppingCart size={'30px'} color={'black'}/>
      <span>{5}</span>
    </div>
  );
};

export default CartWidget;