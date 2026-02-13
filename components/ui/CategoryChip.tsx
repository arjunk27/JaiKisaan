import React from "react";
import { Pressable, Text, View } from "react-native";
import { cn } from "@/lib/utils";

interface CategoryChipProps {
  label: string;
  isActive?: boolean;
  onPress?: () => void;
  icon?: React.ReactNode;
  className?: string;
}

export function CategoryChip({
  label,
  isActive = false,
  onPress,
  icon,
  className,
}: CategoryChipProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        {
          opacity: pressed ? 0.7 : 1,
        },
      ]}
    >
      <View
        className={cn(
          "flex-row items-center gap-2 px-4 py-2 rounded-full border",
          isActive
            ? "bg-primary border-primary"
            : "bg-surface border-border",
          className
        )}
      >
        {icon && <View className="w-5 h-5">{icon}</View>}
        <Text
          className={cn(
            "text-sm font-semibold",
            isActive ? "text-white" : "text-foreground"
          )}
        >
          {label}
        </Text>
      </View>
    </Pressable>
  );
}
