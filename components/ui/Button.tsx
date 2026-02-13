import React from "react";
import { Pressable, Text, View, ViewStyle } from "react-native";
import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "tertiary" | "destructive";
export type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps {
  onPress?: () => void;
  variant?: ButtonVariant;
  size?: ButtonSize;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
  style?: ViewStyle;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary: "bg-primary",
  secondary: "border border-secondary",
  tertiary: "bg-transparent",
  destructive: "bg-error",
};

const variantTextStyles: Record<ButtonVariant, string> = {
  primary: "text-white",
  secondary: "text-secondary",
  tertiary: "text-primary",
  destructive: "text-white",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 rounded-lg",
  md: "px-6 py-3 rounded-xl",
  lg: "px-6 py-4 rounded-xl",
};

const sizeTextStyles: Record<ButtonSize, string> = {
  sm: "text-sm font-medium",
  md: "text-base font-semibold",
  lg: "text-lg font-semibold",
};

export function Button({
  onPress,
  variant = "primary",
  size = "md",
  disabled = false,
  children,
  className,
  style,
  fullWidth = false,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          opacity: pressed && !disabled ? 0.8 : 1,
          transform: [{ scale: pressed && !disabled ? 0.97 : 1 }],
        },
        style,
      ]}
    >
      <View
        className={cn(
          "items-center justify-center",
          variantStyles[variant],
          sizeStyles[size],
          disabled && "opacity-50",
          fullWidth && "w-full",
          className
        )}
      >
        {typeof children === "string" ? (
          <Text className={cn(variantTextStyles[variant], sizeTextStyles[size])}>
            {children}
          </Text>
        ) : (
          children
        )}
      </View>
    </Pressable>
  );
}
