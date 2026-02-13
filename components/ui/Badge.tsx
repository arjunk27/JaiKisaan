import React from "react";
import { View, Text } from "react-native";
import { cn } from "@/lib/utils";

export type BadgeVariant = "default" | "primary" | "success" | "warning" | "error" | "premium";

interface BadgeProps {
  label: string;
  variant?: BadgeVariant;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface border border-border",
  primary: "bg-primary",
  success: "bg-success",
  warning: "bg-warning",
  error: "bg-error",
  premium: "bg-premium",
};

const variantTextStyles: Record<BadgeVariant, string> = {
  default: "text-foreground",
  primary: "text-white",
  success: "text-white",
  warning: "text-white",
  error: "text-white",
  premium: "text-white",
};

const sizeStyles: Record<string, string> = {
  sm: "px-2 py-1 rounded-md",
  md: "px-3 py-1.5 rounded-lg",
  lg: "px-4 py-2 rounded-lg",
};

const textSizeStyles: Record<string, string> = {
  sm: "text-xs font-semibold",
  md: "text-sm font-semibold",
  lg: "text-base font-semibold",
};

export function Badge({
  label,
  variant = "default",
  size = "md",
  className,
}: BadgeProps) {
  return (
    <View
      className={cn(
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
    >
      <Text className={cn(variantTextStyles[variant], textSizeStyles[size])}>
        {label}
      </Text>
    </View>
  );
}
