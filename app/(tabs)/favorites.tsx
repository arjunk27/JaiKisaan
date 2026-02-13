import React, { useState } from "react";
import { ScrollView, View, Text, FlatList, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { ItemCard } from "@/components/ui/Card";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

const favoriteItems = [
  {
    id: "1",
    title: "Gourmet Burger",
    subtitle: "Premium Burgers Co.",
    price: "$12.99",
    rating: 4.8,
    reviews: 324,
  },
  {
    id: "2",
    title: "Margherita Pizza",
    subtitle: "Italian Kitchen",
    price: "$14.99",
    rating: 4.9,
    reviews: 512,
  },
  {
    id: "3",
    title: "Dragon Roll Sushi",
    subtitle: "Tokyo Express",
    price: "$18.99",
    rating: 4.7,
    reviews: 289,
  },
  {
    id: "4",
    title: "Caesar Salad",
    subtitle: "Fresh & Healthy",
    price: "$9.99",
    rating: 4.6,
    reviews: 156,
  },
];

const favoriteRestaurants = [
  {
    id: "r1",
    name: "Premium Burgers Co.",
    cuisine: "American",
    rating: 4.8,
    deliveryTime: "20-30 min",
  },
  {
    id: "r2",
    name: "Italian Kitchen",
    cuisine: "Italian",
    rating: 4.9,
    deliveryTime: "25-35 min",
  },
  {
    id: "r3",
    name: "Tokyo Express",
    cuisine: "Japanese",
    rating: 4.7,
    deliveryTime: "30-40 min",
  },
];

export default function FavoritesScreen() {
  const colors = useColors();
  const [activeTab, setActiveTab] = useState<"items" | "restaurants">("items");

  return (
    <ScreenContainer className="p-0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
        <View className="px-6 py-4 border-b border-border">
          <Text className="text-2xl font-bold text-foreground">Favorites</Text>
        </View>

        {/* Tab Selector */}
        <View className="flex-row border-b border-border">
          <Pressable
            onPress={() => setActiveTab("items")}
            className="flex-1"
            style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
          >
            <View
              className={`py-4 px-6 border-b-2 ${
                activeTab === "items"
                  ? "border-primary"
                  : "border-transparent"
              }`}
            >
              <Text
                className={`text-base font-semibold ${
                  activeTab === "items"
                    ? "text-primary"
                    : "text-muted"
                }`}
              >
                Items ({favoriteItems.length})
              </Text>
            </View>
          </Pressable>

          <Pressable
            onPress={() => setActiveTab("restaurants")}
            className="flex-1"
            style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
          >
            <View
              className={`py-4 px-6 border-b-2 ${
                activeTab === "restaurants"
                  ? "border-primary"
                  : "border-transparent"
              }`}
            >
              <Text
                className={`text-base font-semibold ${
                  activeTab === "restaurants"
                    ? "text-primary"
                    : "text-muted"
                }`}
              >
                Restaurants ({favoriteRestaurants.length})
              </Text>
            </View>
          </Pressable>
        </View>

        {/* Content */}
        <View className="px-6 py-6 gap-4">
          {activeTab === "items" ? (
            // Favorite Items Grid
            <>
              {favoriteItems.map((item) => (
                <View key={item.id} className="relative">
                  <ItemCard
                    title={item.title}
                    subtitle={item.subtitle}
                    price={item.price}
                    rating={item.rating}
                    onPress={() => {}}
                  />
                  <Pressable
                    onPress={() => {}}
                    style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
                    className="absolute top-4 right-4"
                  >
                    <View className="w-8 h-8 items-center justify-center bg-white rounded-full shadow-sm">
                      <IconSymbol
                        name="heart.fill"
                        size={18}
                        color={colors.error}
                      />
                    </View>
                  </Pressable>
                </View>
              ))}
            </>
          ) : (
            // Favorite Restaurants
            <>
              {favoriteRestaurants.map((restaurant) => (
                <Pressable
                  key={restaurant.id}
                  onPress={() => {}}
                  style={({ pressed }) => [{ opacity: pressed ? 0.7 : 1 }]}
                >
                  <View className="p-4 bg-surface rounded-2xl border border-border">
                    <View className="flex-row justify-between items-start mb-2">
                      <View className="flex-1">
                        <Text className="text-base font-semibold text-foreground">
                          {restaurant.name}
                        </Text>
                        <Text className="text-sm text-muted mt-1">
                          {restaurant.cuisine}
                        </Text>
                      </View>
                      <Pressable
                        onPress={() => {}}
                        style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
                      >
                        <IconSymbol
                          name="heart.fill"
                          size={20}
                          color={colors.error}
                        />
                      </Pressable>
                    </View>

                    <View className="flex-row justify-between items-center mt-3 pt-3 border-t border-border">
                      <View className="flex-row items-center gap-1">
                        <IconSymbol
                          name="star.fill"
                          size={16}
                          color={colors.rating}
                        />
                        <Text className="text-sm font-semibold text-foreground">
                          {restaurant.rating}
                        </Text>
                      </View>
                      <View className="flex-row items-center gap-1">
                        <IconSymbol
                          name="clock.fill"
                          size={16}
                          color={colors.muted}
                        />
                        <Text className="text-sm text-muted">
                          {restaurant.deliveryTime}
                        </Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              ))}
            </>
          )}
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
