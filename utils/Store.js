import { createContext, useReducer } from 'react';

import cartReducer from './reducers/cartReducer';

export const Store = createContext();

const initialState = {
	cart: { cartItems: [] },
};

export const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(cartReducer, initialState);
	const value = { state, dispatch };
	return <Store.Provider value={value}>{children}</Store.Provider>;
};
