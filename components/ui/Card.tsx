import React from "react";
import { View, ViewStyle, Pressable, Text } from "react-native";
import { cn } from "@/lib/utils";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  style?: ViewStyle;
  onPress?: () => void;
  variant?: "default" | "elevated" | "outlined";
}

const variantStyles: Record<string, string> = {
  default: "bg-surface border border-border",
  elevated: "bg-surface shadow-md",
  outlined: "border-2 border-border bg-transparent",
};

export function Card({
  children,
  className,
  style,
  onPress,
  variant = "default",
}: CardProps) {
  const cardContent = (
    <View
      className={cn(
        "rounded-2xl p-4",
        variantStyles[variant],
        className
      )}
      style={style}
    >
      {children}
    </View>
  );

  if (onPress) {
    return (
      <Pressable
        onPress={onPress}
        style={({ pressed }) => [
          {
            opacity: pressed ? 0.7 : 1,
          },
        ]}
      >
        {cardContent}
      </Pressable>
    );
  }

  return cardContent;
}

interface ItemCardProps {
  image?: string;
  title: string;
  subtitle?: string;
  price?: string;
  rating?: number;
  onPress?: () => void;
  badge?: string;
}

export function ItemCard({
  image,
  title,
  subtitle,
  price,
  rating,
  onPress,
  badge,
}: ItemCardProps) {
  return (
    <Card onPress={onPress} className="overflow-hidden">
      <View className="gap-2">
        {image && (
          <View className="w-full h-40 bg-muted rounded-xl overflow-hidden">
            {/* Placeholder for image */}
            <View className="flex-1 bg-gradient-to-br from-primary/10 to-secondary/10" />
          </View>
        )}
        {badge && (
          <View className="absolute top-3 right-3 bg-primary px-2 py-1 rounded-full">
            <Text className="text-white text-xs font-semibold">{badge}</Text>
          </View>
        )}
        <View>
          <Text className="text-base font-semibold text-foreground">{title}</Text>
          {subtitle && (
            <Text className="text-sm text-muted mt-1">{subtitle}</Text>
          )}
        </View>
        {(price || rating) && (
          <View className="flex-row justify-between items-center mt-2">
            {price && (
              <Text className="text-lg font-bold text-primary">{price}</Text>
            )}
            {rating && (
              <View className="flex-row items-center gap-1">
                <Text className="text-sm font-semibold text-foreground">{rating}</Text>
                <Text className="text-sm text-rating">★</Text>
              </View>
            )}
          </View>
        )}
      </View>
    </Card>
  );
}
