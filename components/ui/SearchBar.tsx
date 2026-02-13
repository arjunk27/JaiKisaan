import React, { useState } from "react";
import { View, TextInput, Pressable } from "react-native";
import { IconSymbol } from "./icon-symbol";
import { useColors } from "@/hooks/use-colors";
import { cn } from "@/lib/utils";

interface SearchBarProps {
  placeholder?: string;
  onChangeText?: (text: string) => void;
  onSubmit?: (text: string) => void;
  onVoicePress?: () => void;
  value?: string;
  className?: string;
}

export function SearchBar({
  placeholder = "Search restaurants, items...",
  onChangeText,
  onSubmit,
  onVoicePress,
  value = "",
  className,
}: SearchBarProps) {
  const colors = useColors();
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      className={cn(
        "flex-row items-center gap-2 px-4 py-3 rounded-full bg-surface border",
        isFocused ? "border-primary" : "border-border",
        className
      )}
    >
      <IconSymbol name="magnifyingglass" size={20} color={colors.muted} />
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={colors.muted}
        value={value}
        onChangeText={onChangeText}
        onSubmitEditing={() => onSubmit?.(value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        returnKeyType="search"
        className="flex-1 text-base text-foreground"
        style={{ color: colors.foreground }}
      />
      {onVoicePress && (
        <Pressable
          onPress={onVoicePress}
          style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
        >
          <IconSymbol name="line.3.horizontal" size={20} color={colors.primary} />
        </Pressable>
      )}
    </View>
  );
}
