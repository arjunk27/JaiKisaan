import React, { useState } from "react";
import { ScrollView, View, Text, FlatList, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Button } from "@/components/ui/Button";
import { QuantitySelector } from "@/components/ui/QuantitySelector";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

interface CartItem {
  id: string;
  title: string;
  subtitle: string;
  price: number;
  quantity: number;
}

const mockCartItems: CartItem[] = [
  {
    id: "1",
    title: "Gourmet Burger",
    subtitle: "Premium Burgers Co.",
    price: 12.99,
    quantity: 2,
  },
  {
    id: "2",
    title: "Margherita Pizza",
    subtitle: "Italian Kitchen",
    price: 14.99,
    quantity: 1,
  },
  {
    id: "3",
    title: "Caesar Salad",
    subtitle: "Fresh & Healthy",
    price: 9.99,
    quantity: 1,
  },
];

export default function CartScreen() {
  const colors = useColors();
  const [cartItems, setCartItems] = useState<CartItem[]>(mockCartItems);

  const updateQuantity = (id: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const deliveryFee = 2.99;
  const total = subtotal + tax + deliveryFee;

  return (
    <ScreenContainer className="p-0">
      {cartItems.length === 0 ? (
        <View className="flex-1 items-center justify-center px-6">
          <View className="w-20 h-20 rounded-full bg-surface items-center justify-center mb-4">
            <IconSymbol name="cart.fill" size={40} color={colors.muted} />
          </View>
          <Text className="text-2xl font-bold text-foreground mb-2">Cart is Empty</Text>
          <Text className="text-base text-muted text-center mb-6">
            Add some delicious items to get started
          </Text>
          <Button variant="primary" onPress={() => {}}>
            Start Shopping
          </Button>
        </View>
      ) : (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
          {/* Header */}
          <View className="px-6 py-4 border-b border-border">
            <Text className="text-2xl font-bold text-foreground">Cart</Text>
            <Text className="text-sm text-muted mt-1">
              {cartItems.length} item{cartItems.length !== 1 ? "s" : ""}
            </Text>
          </View>

          {/* Cart Items */}
          <View className="px-6 py-4 gap-4">
            {cartItems.map((item) => (
              <View
                key={item.id}
                className="flex-row gap-4 p-4 bg-surface rounded-2xl border border-border"
              >
                {/* Item Info */}
                <View className="flex-1">
                  <Text className="text-base font-semibold text-foreground">
                    {item.title}
                  </Text>
                  <Text className="text-sm text-muted mt-1">{item.subtitle}</Text>
                  <Text className="text-lg font-bold text-primary mt-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </Text>
                </View>

                {/* Quantity & Delete */}
                <View className="gap-2">
                  <QuantitySelector
                    quantity={item.quantity}
                    onQuantityChange={(qty) => updateQuantity(item.id, qty)}
                    size="sm"
                  />
                  <Pressable
                    onPress={() => removeItem(item.id)}
                    style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
                  >
                    <View className="w-8 h-8 items-center justify-center">
                      <IconSymbol name="trash.fill" size={20} color={colors.error} />
                    </View>
                  </Pressable>
                </View>
              </View>
            ))}
          </View>

          {/* Order Summary */}
          <View className="px-6 py-6 gap-4 border-t border-border">
            <Text className="text-lg font-bold text-foreground">Order Summary</Text>

            <View className="gap-3">
              <View className="flex-row justify-between">
                <Text className="text-base text-muted">Subtotal</Text>
                <Text className="text-base font-semibold text-foreground">
                  ${subtotal.toFixed(2)}
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-base text-muted">Tax (10%)</Text>
                <Text className="text-base font-semibold text-foreground">
                  ${tax.toFixed(2)}
                </Text>
              </View>
              <View className="flex-row justify-between">
                <Text className="text-base text-muted">Delivery Fee</Text>
                <Text className="text-base font-semibold text-foreground">
                  ${deliveryFee.toFixed(2)}
                </Text>
              </View>

              <View className="h-px bg-border my-2" />

              <View className="flex-row justify-between">
                <Text className="text-lg font-bold text-foreground">Total</Text>
                <Text className="text-lg font-bold text-primary">
                  ${total.toFixed(2)}
                </Text>
              </View>
            </View>

            {/* Promo Code */}
            <View className="flex-row gap-2 mt-2">
              <View className="flex-1 border border-border rounded-lg px-4 py-3 bg-surface">
                <Text className="text-sm text-muted">Enter promo code</Text>
              </View>
              <Button variant="secondary" className="px-4">
                Apply
              </Button>
            </View>
          </View>

          {/* Checkout Button */}
          <View className="px-6 pb-6">
            <Button
              variant="primary"
              size="lg"
              fullWidth
              onPress={() => {}}
            >
              Proceed to Checkout
            </Button>
          </View>
        </ScrollView>
      )}
    </ScreenContainer>
  );
}
