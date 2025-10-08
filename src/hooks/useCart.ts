import { useState, useEffect } from "react";
import { toast } from "@/hooks/use-toast";

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  discount: number;
  description: string;
  image: string;
  inStock: boolean;
  rating: number;
}

export interface CartItem extends Product {
  quantity: number;
}

const CART_STORAGE_KEY = "agromart_cart";

export const useCart = () => {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error("Error loading cart:", error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = (product: Product, quantity: number = 1) => {
    setItems((currentItems) => {
      const existingItem = currentItems.find((item) => item.id === product.id);

      if (existingItem) {
        toast({
          title: "Cart Updated",
          description: `${product.name} quantity updated`,
        });
        return currentItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart`,
      });
      return [...currentItems, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setItems((currentItems) => {
      const item = currentItems.find((i) => i.id === productId);
      if (item) {
        toast({
          title: "Item Removed",
          description: `${item.name} has been removed from your cart`,
        });
      }
      return currentItems.filter((item) => item.id !== productId);
    });
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }

    setItems((currentItems) =>
      currentItems.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setItems([]);
    toast({
      title: "Cart Cleared",
      description: "All items have been removed from your cart",
    });
  };

  const getCartTotal = () => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getDeliveryCharge = (subtotal: number) => {
    if (subtotal === 0) return 0;
    if (subtotal < 500) return 50;
    if (subtotal <= 1000) return 30;
    return 0;
  };

  const cartTotal = getCartTotal();
  const deliveryCharge = getDeliveryCharge(cartTotal);
  const finalTotal = cartTotal + deliveryCharge;

  return {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    cartTotal,
    deliveryCharge,
    finalTotal,
  };
};
