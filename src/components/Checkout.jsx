import { useContext } from "react";
import { Modal } from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import { Input } from "./UI/Input";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";

export function Checkout() {
  const { progress, hideCheckout } = useContext(UserProgressContext);

  function handleClose() {
    hideCheckout();
  }

  function handleSubmit(event) {
    event.preventDefault();
    const fd = new FormData(event.target);
    const data = Object.fromEntries(fd.entries());

    console.log(data);
  }

  return (
    <Modal open={progress === "checkout"} onClose={handleClose}>
      <form onSubmit={handleSubmit}>
        <h2>Checkout</h2>
        <p>Total Amount: {currencyFormatter.format()} </p>

        <Input label="Full Name" type="text" id="full-name" />
        <Input label="E-Mail Address" type="email" id="email" />
        <Input label="Street" type="text" id="street" />

        <div className="control-row">
          <Input label="Post Code" type="text" id="postal-code" />
          <Input label="City" type="text" id="city" />
        </div>

        <p className="modal-actions">
          <Button type="button" textOnly onClick={handleClose}>
            Close
          </Button>
          <Button onClick={handleSubmit}>Submit Order</Button>
        </p>
      </form>
    </Modal>
  );
}
