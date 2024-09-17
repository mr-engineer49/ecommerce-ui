import { createStore, combineReducers } from 'redux';

const initialState = {
  todos: []
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.product] };
    case 'DELETE_PRODUCT':
      return { ...state, products: state.products.filter(todo => product.id !== action.id) };
    case 'TOGGLE_PRODUCT':
      return {
        ...state,
        products: state.products.map(product => {
          if (product.id === action.id) {
            return { ...product, completed: !product.completed };
          }
          return product;
        })
      };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todos: todoReducer
});

const store = createStore(rootReducer);

export default store;