import { create } from "zustand";

type StoreState = {
  currentTodo: string;
};

const initialState: StoreState = {
  currentTodo: "",
};

interface Store extends StoreState {
  setCurrentTodo: (payload: string) => void;
}

export const todoStore = create<Store>((set) => ({
  ...initialState,
  setCurrentTodo: (payload: string) => {
    set({ currentTodo: payload });
  },
}));
