import React from "react";
import { View, Text, Pressable } from "react-native";
import { cn } from "@/lib/utils";

interface RatingStarsProps {
  rating: number;
  maxRating?: number;
  size?: "sm" | "md" | "lg";
  interactive?: boolean;
  onRatingChange?: (rating: number) => void;
  showText?: boolean;
  reviewCount?: number;
}

const sizeMap = {
  sm: "text-xs",
  md: "text-base",
  lg: "text-2xl",
};

export function RatingStars({
  rating,
  maxRating = 5,
  size = "md",
  interactive = false,
  onRatingChange,
  showText = true,
  reviewCount,
}: RatingStarsProps) {
  const stars = Array.from({ length: maxRating }, (_, i) => i + 1);

  return (
    <View className="flex-row items-center gap-1">
      <View className="flex-row gap-0.5">
        {stars.map((star) => (
          <Pressable
            key={star}
            onPress={() => interactive && onRatingChange?.(star)}
            disabled={!interactive}
          >
            <Text
              className={cn(
                "text-rating",
                sizeMap[size],
                star <= rating ? "opacity-100" : "opacity-30"
              )}
            >
              ★
            </Text>
          </Pressable>
        ))}
      </View>
      {showText && (
        <View className="flex-row items-center gap-1 ml-2">
          <Text className="text-sm font-semibold text-foreground">
            {rating.toFixed(1)}
          </Text>
          {reviewCount && (
            <Text className="text-xs text-muted">({reviewCount})</Text>
          )}
        </View>
      )}
    </View>
  );
}
