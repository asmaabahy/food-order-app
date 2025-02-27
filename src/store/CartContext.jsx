import { useContext, useReducer } from "react";
import { createContext } from "react";

const CartContext = createContext({
  items: [],
  addItem: (item) => {},
  removeItem: (id) => {},
  clearCart: () => {},
});

function CartReducer(state, action) {
  if (action.type === "ADD_ITEM") {
    const itemIndexInCart = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const newItemsList = [...state.items];

    if (itemIndexInCart > -1) {
      const existingItem = state.items[itemIndexInCart];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      newItemsList[itemIndexInCart] = updatedItem;
    } else {
      newItemsList.push({ ...action.item, quantity: 1 });
    }
    return { ...state, items: newItemsList };
  }

  if (action.type === "REMOVE_ITEM") {
    const itemIndexInCart = state.items.findIndex(
      (item) => item.id === action.id
    );
    const newItemsList = [...state.items];

    if (state.items[itemIndexInCart].quantity === 1) {
      newItemsList.splice(itemIndexInCart, 1);
    } else {
      const existingItem = state.items[itemIndexInCart];
      const updatedItem = {
        ...existingItem,
        quantity: existingItem.quantity - 1,
      };
      newItemsList[itemIndexInCart] = updatedItem;
    }
    return { ...state, items: newItemsList };
  }

  if (action.type === "CLEAR_CART") {
    return { ...state, items: [] };
  }

  return state;
}

export function CartContextProvider({ children }) {
  const [cart, dispatchCartAction] = useReducer(CartReducer, { items: [] });

  function addItem(item) {
    dispatchCartAction({ type: "ADD_ITEM", item });
  }

  function removeItem(id) {
    dispatchCartAction({ type: "REMOVE_ITEM", id });
  }

  function clearCart() {
    dispatchCartAction({ type: "CLEAR_CART"});
  }

  const cartCtx = {
    items: cart.items,
    addItem,
    removeItem,
    clearCart
  };

  return (
    <CartContext.Provider value={cartCtx}>{children}</CartContext.Provider>
  );
}

export default CartContext;
