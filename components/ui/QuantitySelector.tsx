import React from "react";
import { View, Pressable, Text } from "react-native";
import { IconSymbol } from "./icon-symbol";
import { useColors } from "@/hooks/use-colors";
import { cn } from "@/lib/utils";

interface QuantitySelectorProps {
  quantity: number;
  onQuantityChange: (quantity: number) => void;
  minQuantity?: number;
  maxQuantity?: number;
  size?: "sm" | "md" | "lg";
}

const sizeStyles = {
  sm: "px-2 py-1",
  md: "px-3 py-2",
  lg: "px-4 py-3",
};

const iconSizes = {
  sm: 16,
  md: 20,
  lg: 24,
};

export function QuantitySelector({
  quantity,
  onQuantityChange,
  minQuantity = 1,
  maxQuantity = 99,
  size = "md",
}: QuantitySelectorProps) {
  const colors = useColors();

  const handleDecrement = () => {
    if (quantity > minQuantity) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleIncrement = () => {
    if (quantity < maxQuantity) {
      onQuantityChange(quantity + 1);
    }
  };

  return (
    <View className={cn("flex-row items-center gap-2 bg-surface rounded-lg border border-border", sizeStyles[size])}>
      <Pressable
        onPress={handleDecrement}
        disabled={quantity <= minQuantity}
        style={({ pressed }) => [
          {
            opacity: pressed && quantity > minQuantity ? 0.6 : quantity <= minQuantity ? 0.3 : 1,
          },
        ]}
      >
        <IconSymbol
          name="minus"
          size={iconSizes[size]}
          color={quantity > minQuantity ? colors.primary : colors.muted}
        />
      </Pressable>

      <Text className="text-base font-semibold text-foreground min-w-8 text-center">
        {quantity}
      </Text>

      <Pressable
        onPress={handleIncrement}
        disabled={quantity >= maxQuantity}
        style={({ pressed }) => [
          {
            opacity: pressed && quantity < maxQuantity ? 0.6 : quantity >= maxQuantity ? 0.3 : 1,
          },
        ]}
      >
        <IconSymbol
          name="plus"
          size={iconSizes[size]}
          color={quantity < maxQuantity ? colors.primary : colors.muted}
        />
      </Pressable>
    </View>
  );
}
