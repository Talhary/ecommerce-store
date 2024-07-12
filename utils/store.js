import create from 'zustand';

export const useStore = create((set) => ({
  cart: [],
  isCartVisible: false,
  lastAddedItem: null, // New state to track the last added item

  addToCart: (productId) => set((state) => {
    const existingProduct = state.cart.find(item => item.id === productId);

    let newCart;
    if (existingProduct) {
      newCart = state.cart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newCart = [...state.cart, { id: productId, quantity: 1 }];
    }

    return {
      cart: newCart,
      lastAddedItem: productId, // Update the last added item
    };
  }),

  decrementFromCart: (productId) => set((state) => {
    const existingProduct = state.cart.find(item => item.id === productId);

    if (existingProduct.quantity > 1) {
      return {
        cart: state.cart.map(item =>
          item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
        )
      };
    } else {
      return {
        cart: state.cart.filter((item) => item.id !== productId)
      };
    }
  }),

  removeFromCart: (productId) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== productId)
  })),

  toggleCartVisibility: () => set((state) => ({ isCartVisible: !state.isCartVisible }))
}));