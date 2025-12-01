import React, { useContext } from "react";
import { Modal } from "./UI/Modal";
import CartContext from "../store/CartContext";
import { formattingCurrency } from "../utils/formatting";
import { Button } from "./UI/Button";
import UserProgressContext from "../store/UserProgressContex";
import { CartItem } from "./CartItem";

export const Cart = () => {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const hideCloseCart = () => {
    userProgressCtx.hideCart();
  };
  return (
    <Modal className="cart" open={userProgressCtx.progress === "cart"}>
      <h2>Your Cart</h2>
      <ul className="cart-item">
        {cartCtx.items.map((item) => (
          <CartItem
            key={item.id}
            {...item}
            onIncrease={() => cartCtx.addItem(item)}
            OnDecrease={() => cartCtx.removeItem(item)}
          />
        ))}
      </ul>
      <p className="cart-total">{formattingCurrency.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={hideCloseCart}>
          Close
        </Button>
        <Button>go to checkout</Button>
      </p>
    </Modal>
  );
};
