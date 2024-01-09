const initialState = {
  cartItems: {},
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [action.payload]: (state.cartItems[action.payload] || 0) + 1,
        },
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: {
          ...state.cartItems,
          [action.payload]: Math.max(
            0,
            (state.cartItems[action.payload] || 0) - 1
          ),
        },
      };

    case "CLEAR_CART":
      return {
        ...state,
        cartItems: {},
      };
    default:
      return state;
  }
};

export default rootReducer;
