import React, { useContext } from "react";
import { Modal } from "./UI/Modal";
import { currencyFormatter } from "../utils/formatting";
import CartContext from "../store/CartContext";
import { Input } from "./UI/Input";
import { Button } from "./UI/Button";
import UserProgressContext from "../store/UserProgressContex";
import useHttp from "../hooks/useHTTP";

const requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

function Checkout() {
  const cartCtx = useContext(CartContext);
  const userProgressCtx = useContext(UserProgressContext);

  const cartTotal = cartCtx.items.reduce(
    (totalPrice, item) => totalPrice + item.quantity * item.price,
    0
  );

  const {
    isLoading: isSending,
    error,
    data,
    sendRequest,
  } = useHttp("https//localhost:3000/orders", requestConfig);

  function handleClose() {
    userProgressCtx.hideCheckoutCart();
  }

  function handleSubmit(event) {
    event.preventDefault();

    function handleFinish() {
      userProgressCtx.hideCheckoutCart();
      cartCtx.clearCart();
      clearData();
    }

    const fd = new FormData(event.target);
    const customerData = Object.fromEntries(fd.entries()); // { email: test@example.com }

    sendRequest(
      JSON.stringify({
        order: {
          items: cartCtx,
          customer: customerData,
        },
      })
    );
  }

  let actions = (
    <>
      <Button type="button" textOnly onClick={handleClose}>
        Close
      </Button>
      <Button>Submit Order</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending Order Data</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleClose}
      >
        <h2>Success</h2>
        <p>Your Order was Submit Successfully</p>
        <p>
          We will get back to you with more details via email within the next
          few minutes
        </p>
      </Modal>
    );
  }
  return (
    <Modal open={userProgressCtx.progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />
        <div className="control-row">
          <Input label="Postal Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>
        {error && <Error title="Something went wrong " message={error} />}
        <p className="modal-actions">{actions}</p>
      </form>
    </Modal>
  );
}

export default Checkout;
