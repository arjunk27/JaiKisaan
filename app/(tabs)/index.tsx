import React, { useState } from "react";
import { ScrollView, View, Text, FlatList, Pressable, RefreshControl } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { SearchBar } from "@/components/ui/SearchBar";
import { CategoryChip } from "@/components/ui/CategoryChip";
import { ItemCard } from "@/components/ui/Card";
import { RatingStars } from "@/components/ui/RatingStars";
import { Badge } from "@/components/ui/Badge";
import { useColors } from "@/hooks/use-colors";

// Mock data
const categories = [
  { id: "1", name: "All", icon: "🍽️" },
  { id: "2", name: "Burgers", icon: "🍔" },
  { id: "3", name: "Pizza", icon: "🍕" },
  { id: "4", name: "Sushi", icon: "🍣" },
  { id: "5", name: "Salads", icon: "🥗" },
  { id: "6", name: "Desserts", icon: "🍰" },
];

const featuredItems = [
  {
    id: "1",
    title: "Gourmet Burger",
    subtitle: "Premium Burgers Co.",
    price: "$12.99",
    rating: 4.8,
    reviews: 324,
    badge: "Popular",
  },
  {
    id: "2",
    title: "Margherita Pizza",
    subtitle: "Italian Kitchen",
    price: "$14.99",
    rating: 4.9,
    reviews: 512,
    badge: "New",
  },
  {
    id: "3",
    title: "Dragon Roll Sushi",
    subtitle: "Tokyo Express",
    price: "$18.99",
    rating: 4.7,
    reviews: 289,
    badge: null,
  },
  {
    id: "4",
    title: "Caesar Salad",
    subtitle: "Fresh & Healthy",
    price: "$9.99",
    rating: 4.6,
    reviews: 156,
    badge: "Healthy",
  },
];

export default function HomeScreen() {
  const colors = useColors();
  const [selectedCategory, setSelectedCategory] = useState("1");
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1000);
  }, []);

  return (
    <ScreenContainer className="p-0">
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {/* Hero Banner */}
        <View className="bg-gradient-to-r from-primary to-secondary h-48 px-6 py-8 justify-center">
          <Text className="text-4xl font-bold text-white mb-2">GourmetGo</Text>
          <Text className="text-lg text-white/80">
            Premium food & grocery delivery
          </Text>
        </View>

        {/* Search Bar */}
        <View className="px-6 -mt-6 mb-6 z-10">
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search restaurants, items..."
          />
        </View>

        {/* Categories */}
        <View className="px-6 mb-8">
          <Text className="text-lg font-bold text-foreground mb-4">Categories</Text>
          <FlatList
            data={categories}
            keyExtractor={(item) => item.id}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            contentContainerStyle={{ gap: 8 }}
            renderItem={({ item }) => (
              <CategoryChip
                label={item.name}
                isActive={selectedCategory === item.id}
                onPress={() => setSelectedCategory(item.id)}
              />
            )}
          />
        </View>

        {/* Popular Now Section */}
        <View className="px-6 mb-8">
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-foreground">Popular Now</Text>
            <Pressable>
              <Text className="text-primary font-semibold">See all</Text>
            </Pressable>
          </View>

          <View className="gap-4">
            {featuredItems.map((item) => (
              <View key={item.id} className="relative">
                <ItemCard
                  title={item.title}
                  subtitle={item.subtitle}
                  price={item.price}
                  rating={item.rating}
                  onPress={() => {}}
                />
                {item.badge && (
                  <View className="absolute top-4 right-4">
                    <Badge
                      label={item.badge}
                      variant={
                        item.badge === "Popular"
                          ? "primary"
                          : item.badge === "New"
                            ? "success"
                            : "default"
                      }
                      size="sm"
                    />
                  </View>
                )}
              </View>
            ))}
          </View>
        </View>

        {/* Recently Viewed Section */}
        <View className="px-6 pb-8">
          <Text className="text-lg font-bold text-foreground mb-4">
            Recently Viewed
          </Text>
          <View className="gap-4">
            {featuredItems.slice(0, 2).map((item) => (
              <ItemCard
                key={item.id}
                title={item.title}
                subtitle={item.subtitle}
                price={item.price}
                rating={item.rating}
                onPress={() => {}}
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
