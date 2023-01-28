import { createSlice, configureStore, current } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { Product } from "@/interfaces/Product";

interface InitialStateType {
  showCart: boolean;
  itemsCounter: number;
  products: Product[];
}

const initialState: InitialStateType = {
  showCart: false,
  itemsCounter: 0,
  products: [],
};

const itemsCounterSlice = createSlice({
  name: "itemsCounter",
  initialState,
  reducers: {
    increment(state) {
      state.itemsCounter++;
    },
    decrement(state) {
      state.itemsCounter--;
    },
    cartToggle(state) {
      state.showCart = !state.showCart;
    },
    incrementProduct(state, action: PayloadAction<Product>) {
      const products = [...state.products];

      const product = products.find(
        (product) => product.id === action.payload.id
      );

      if (product) {
        const updatedProduct = {
          ...product,
          amount: product.amount ? product.amount + 1 : 0,
        };

        state.products = state.products.map((product) => {
          if (product.id === action.payload.id) return updatedProduct;
          return product;
        });
      } else {
        state.products = [...state.products, action.payload];
      }
    },
    decrementProduct(state, action: PayloadAction<Product>) {
      const products = [...state.products];

      const product = products.find(
        (product) => product.id === action.payload.id
      );

      if (product && product.amount) {
        if (product.amount > 1) {
          const updatedProduct = {
            ...product,
            amount: product.amount ? product.amount - 1 : 0,
          };

          state.products = state.products.map((product) => {
            if (product.id === action.payload.id) return updatedProduct;
            return product;
          });
        } else if (product.amount <= 1) {
          state.products = state.products.filter(
            (product) => product.id !== action.payload.id
          );
        }
      }
    },
  },
});

const store = configureStore({
  reducer: { itemsCounterReducer: itemsCounterSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export const itemsCounterActions = itemsCounterSlice.actions;

export default store;
