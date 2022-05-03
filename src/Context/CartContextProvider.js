import React, { useReducer, createContext } from "react";

const initialState = {
  orders: [],
  totalCount: 0,
  totalPayment: 0,
  checkOut: false,
};

const CartContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_FOOD":
      if (!state.orders.find((food) => food.id === action.payload.id)) {
        state.orders.push({
          ...action.payload,
          quantity: 1,
        });
      }
      return {
        ...state,
        orders: [...state.orders],
      };
    case "REMOVE_FOOD":
      const newOrders = state.orders.filter(
        (food) => food.id !== action.payload.id
      );
      return {
        ...state,
        orders: [newOrders],
      };
    case "INCREASE":
      const indexI = state.orders.findIndex(
        (food) => food.id === action.payload.id
      );
      state.orders[indexI].quantity++;
      return {
        ...state,
        orders: [...state.orders],
      };
    case "DECREASE":
      const indexD = state.orders.findIndex(
        (food) => food.id === action.payload.id
      );
      state.orders[indexD].quantity--;
      return {
        ...state,
        orders: [...state.orders],
      };

    case "CHECKOUT":
      return {
        checkOut: true,
        orders: [],
        totalCount: 0,
        totalPayment: 0,
      };
    case "CLEAR":
      return {
        checkOut: false,
        orders: [],
        totalCount: 0,
        totalPayment: 0,
      };
    default:
      break;
  }
};
const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
