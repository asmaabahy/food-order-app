import { useContext } from "react";
import { Modal } from "./UI/Modal";
import CartContext from "../store/CartContext";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import UserProgressContext from "../store/UserProgressContext";
import { CartItem } from "./CartItem";

export function Cart() {
  const { items, addItem, removeItem } = useContext(CartContext);
  const { progress, showCheckout, hideCart } = useContext(UserProgressContext);

  const cartTotal = items.reduce((total, currentItem) => {
    return total + currentItem.quantity * currentItem.price;
  }, 0);

  function handleCloseCart() {
    hideCart();
  }

  function addItemQuantity(item) {
    addItem(item);
  }

  function removeItemQuantity(id) {
    removeItem(id);
  }

  return (
    <Modal
      className="cart"
      open={progress === "cart"}
      onClose={progress === "cart" ? handleCloseCart : null}
    >
      <h2>Your cart</h2>
      <ul>
        {items.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            quantity={item.quantity}
            price={item.price}
            onIncrease={() => addItemQuantity(item)}
            onDecrease={() => removeItemQuantity(item.id)}
          ></CartItem>
        ))}
      </ul>
      <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
      <p className="modal-actions">
        <Button textOnly onClick={handleCloseCart}>
          Close
        </Button>
        {items.length > 0 && (
          <Button onClick={showCheckout}>Go to checkout</Button>
        )}
      </p>
    </Modal>
  );
}
