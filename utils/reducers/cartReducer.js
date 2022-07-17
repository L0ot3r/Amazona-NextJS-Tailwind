import { CART_ADD_ITEM, CART_REMOVE_ITEM } from '../../constants/actionTypes';
import Cookies from 'js-cookie';

const cartReducer = (state, action) => {
	switch (action.type) {
		case CART_ADD_ITEM: {
			const newItem = action.payload;
			const existItem = state.cart.cartItems.find(
				(item) =>
					item.name.toLowerCase().replace(/ /g, '-') ===
					newItem.name.toLowerCase().replace(/ /g, '-')
			);
			const cartItems = existItem
				? state.cart.cartItems.map((item) =>
						item.name === existItem.name ? newItem : item
				)
				: [...state.cart.cartItems, newItem];
				Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }))
			return { ...state, cart: { ...state.cart, cartItems } };
		}
		case CART_REMOVE_ITEM: {
			const cartItems = state.cart.cartItems.filter(
				(item) =>
					item.name.toLowerCase().replace(/ /g, '-') !==
					action.payload.name.toLowerCase().replace(/ /g, '-')
			);
			Cookies.set('cart', JSON.stringify({ ...state.cart, cartItems }))
			return { ...state, cart: { ...state.cart, cartItems } };
		}

		default:
			return state;
	}
};

export default cartReducer;
