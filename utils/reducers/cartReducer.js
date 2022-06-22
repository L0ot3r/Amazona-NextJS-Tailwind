import { CART_ADD_ITEMS } from '../../constants/actionTypes';

// item.name.toLowerCase().replace(/ /g, '-')

const cartReducer = (state, action) => {
	switch (action.type) {
		case CART_ADD_ITEMS: {
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

			return { ...state, cart: { ...state.cart, cartItems } };
		}

		default:
			return state;
	}
};

export default cartReducer;
