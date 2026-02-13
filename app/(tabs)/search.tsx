import React, { useState } from "react";
import { ScrollView, View, Text, FlatList, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { SearchBar } from "@/components/ui/SearchBar";
import { CategoryChip } from "@/components/ui/CategoryChip";
import { ItemCard } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

const searchResults = [
  {
    id: "1",
    title: "Spicy Chicken Burger",
    subtitle: "Premium Burgers Co.",
    price: "$13.99",
    rating: 4.7,
    reviews: 245,
  },
  {
    id: "2",
    title: "Crispy Fries",
    subtitle: "Premium Burgers Co.",
    price: "$4.99",
    rating: 4.9,
    reviews: 512,
  },
  {
    id: "3",
    title: "Burger Combo",
    subtitle: "Fast Food Palace",
    price: "$19.99",
    rating: 4.5,
    reviews: 189,
  },
  {
    id: "4",
    title: "Double Burger",
    subtitle: "Grill Master",
    price: "$15.99",
    rating: 4.8,
    reviews: 367,
  },
];

const filterOptions = [
  { id: "rating", label: "Rating", icon: "star.fill" },
  { id: "price", label: "Price", icon: "dollarsign.circle" },
  { id: "time", label: "Delivery Time", icon: "clock.fill" },
  { id: "distance", label: "Distance", icon: "mappin.circle.fill" },
];

export default function SearchScreen() {
  const colors = useColors();
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const toggleFilter = (filterId: string) => {
    setSelectedFilters((prev) =>
      prev.includes(filterId)
        ? prev.filter((id) => id !== filterId)
        : [...prev, filterId]
    );
  };

  return (
    <ScreenContainer className="p-0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Search Bar */}
        <View className="px-6 py-4 bg-background sticky top-0 z-20">
          <SearchBar
            value={searchQuery}
            onChangeText={setSearchQuery}
            placeholder="Search restaurants, items..."
          />
        </View>

        {/* Filter Toggle */}
        <View className="px-6 py-4 flex-row items-center justify-between border-b border-border">
          <Text className="text-sm font-semibold text-foreground">
            {searchResults.length} Results
          </Text>
          <Pressable
            onPress={() => setShowFilters(!showFilters)}
            style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
          >
            <View className="flex-row items-center gap-2">
              <IconSymbol name="line.3.horizontal" size={20} color={colors.primary} />
              <Text className="text-sm font-semibold text-primary">Filters</Text>
            </View>
          </Pressable>
        </View>

        {/* Filter Panel */}
        {showFilters && (
          <View className="px-6 py-4 border-b border-border bg-surface">
            <View className="gap-3">
              {filterOptions.map((filter) => (
                <Pressable
                  key={filter.id}
                  onPress={() => toggleFilter(filter.id)}
                  style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
                >
                  <View className="flex-row items-center gap-3 py-2">
                    <View
                      className={`w-5 h-5 rounded border-2 items-center justify-center ${
                        selectedFilters.includes(filter.id)
                          ? "bg-primary border-primary"
                          : "border-border"
                      }`}
                    >
                      {selectedFilters.includes(filter.id) && (
                        <IconSymbol name="checkmark" size={14} color="white" />
                      )}
                    </View>
                    <Text className="text-base text-foreground font-medium">
                      {filter.label}
                    </Text>
                  </View>
                </Pressable>
              ))}
            </View>

            {/* Clear Filters Button */}
            {selectedFilters.length > 0 && (
              <Pressable
                onPress={() => setSelectedFilters([])}
                style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
              >
                <Text className="text-sm font-semibold text-primary mt-3">
                  Clear All
                </Text>
              </Pressable>
            )}
          </View>
        )}

        {/* Search Results */}
        <View className="px-6 py-6 gap-4">
          {searchResults.map((item) => (
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
      </ScrollView>
    </ScreenContainer>
  );
}
