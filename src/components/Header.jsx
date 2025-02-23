import { useContext } from "react";
import logo from "../assets/logo.jpg";
import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import UserProgressContext from "../store/UserProgressContext";

export function Header() {
  const { items } = useContext(CartContext);
  const ctx = useContext(UserProgressContext);

  const cartNumberOfItems = items.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  function handleShowCart() {
    ctx.showCart();
  }

  return (
    <header id="main-header">
      <div id="title">
        <img src={logo} alt="logo" />
        <h1>ReactFood</h1>
      </div>
      <nav>
        <Button textOnly onClick={handleShowCart}>
          Cart ({cartNumberOfItems})
        </Button>
      </nav>
    </header>
  );
}
