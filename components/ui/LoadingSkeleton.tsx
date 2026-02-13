import React, { useEffect } from "react";
import { View, Animated } from "react-native";
import { cn } from "@/lib/utils";

interface LoadingSkeletonProps {
  width?: string | number;
  height?: string | number;
  className?: string;
  borderRadius?: number;
}

export function LoadingSkeleton({
  width = "100%",
  height = 20,
  className,
  borderRadius = 8,
}: LoadingSkeletonProps) {
  const opacity = new Animated.Value(0.6);

  useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.6,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    );

    animation.start();

    return () => animation.stop();
  }, [opacity]);

  return (
    <Animated.View
      style={[
        {
          width: typeof width === "string" ? width : width,
          height: typeof height === "number" ? height : height,
          borderRadius,
          opacity,
        },
      ] as any}
      className={cn("bg-muted", className)}
    />
  );
}

interface SkeletonCardProps {
  lines?: number;
  showImage?: boolean;
  className?: string;
}

export function SkeletonCard({ lines = 3, showImage = true }: SkeletonCardProps) {
  return (
    <View className="gap-3 p-4 bg-surface rounded-2xl border border-border">
      {showImage && <LoadingSkeleton height={160} borderRadius={12} />}
      <LoadingSkeleton height={20} width="70%" />
      {Array.from({ length: lines - 1 }).map((_, i) => (
        <LoadingSkeleton
          key={i}
          height={16}
          width={i === lines - 2 ? "50%" : "100%"}
        />
      ))}
    </View>
  );
}
