'use client'
import React, { useEffect, useState } from 'react';
import { useStore } from '@/utils/store';
import { Button } from '@/components/ui/button'; // Assuming you have a Button component
import { products } from '@/utils/products';
import Image from 'next/image';

export const SliderCart = () => {
  const { cart, addToCart, decrementFromCart, removeFromCart, isCartVisible, toggleCartVisibility, lastAddedItem } = useStore();
  const [isAnimating, setIsAnimating] = useState(false);
  const [translateY,setTranslateY] = useState(false)
  const getProductDetails = (productId:any) => {
    return products.find(product => product.id === productId.id);
  };

  const handleCheckout = () => {
    // Add your checkout logic here
    alert("Proceeding to checkout!");
  };
 const handleClick=()=>{
    setTranslateY(true)
    toggleCartVisibility()
 }
  useEffect(() => {
    if (lastAddedItem) {
      setIsAnimating(true);
      const timeout = setTimeout(() => {
        setIsAnimating(false);
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [lastAddedItem]);
 useEffect(()=>{
   setTimeout(()=>{
     setTranslateY(false)
   },2000)
 },[translateY])
  return (
    <div>
      <Button 
        onClick={handleClick} 
        className={`fixed  right-4 z-50 ${ !isCartVisible?' bottom-10 ':' top-5'} ${isAnimating ? 'animate-shake' : '' }`}
      >
        {isCartVisible ? 'Hide Cart' : 'Show Cart'}
      </Button>
      <div
        className={`fixed top-0 right-0 h-full w-[70%] max-sm:w-[100%] bg-white shadow-lg p-4 overflow-y-auto transition-transform transform ${
          isCartVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <h2 className="text-xl font-bold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-500">Your cart is empty</p>
        ) : (
          <>
            {cart.map((cartItem:any, index:any) => {
              const product = getProductDetails(cartItem.id);
              if (!product) {
                return (
                  <div key={index}>
                    <p>Product not found</p>
                  </div>
                );
              }
              return (
                <div key={index} className="flex items-center mb-4">
                  <Image
                    height={60}
                    width={60}
                    src={product.src}
                    alt={product.alt}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div className="ml-4 flex-1">
                    <h3 className="text-lg font-medium">{product.name}</h3>
                    <p className="text-muted-foreground">${product.price} x {cartItem.quantity}</p>
                    <div className="flex items-center mt-2">
                      <Button size="sm" onClick={() => addToCart(cartItem.id)}>
                        +
                      </Button>
                      <Button size="sm" onClick={() => decrementFromCart(cartItem.id)} className="mx-2">
                        -
                      </Button>
                      <Button size="sm" onClick={() => removeFromCart(cartItem.id)}>
                        Remove
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
            <div className="fixed bottom-4 left-0 w-full px-4">
              <Button onClick={handleCheckout} className="w-full">
                Checkout
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
