import { createSlice, configureStore } from "@reduxjs/toolkit";
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
    addProduct(state, action: PayloadAction<Product>) {
      const item = [...state.products].find(
        (product) => product.id === action.payload.id
      );
      console.log("item", item);
      if (item) {
        if (item.amount) item.amount++;
      } else {
        // state.products.push(action.payload);
        state.products = [...state.products, action.payload];
      }
      console.log("state.products[0].amount", state.products);
    },
  },
});

const store = configureStore({
  reducer: { itemsCounterReducer: itemsCounterSlice.reducer },
});

export type RootState = ReturnType<typeof store.getState>;

export const itemsCounterActions = itemsCounterSlice.actions;

export default store;
