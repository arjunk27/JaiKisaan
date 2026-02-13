import React, { useState } from "react";
import { ScrollView, View, Text, Pressable } from "react-native";
import { ScreenContainer } from "@/components/screen-container";
import { Button } from "@/components/ui/Button";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { useColors } from "@/hooks/use-colors";

interface ProfileSection {
  id: string;
  title: string;
  icon: string;
  subtitle?: string;
  onPress: () => void;
}

export default function ProfileScreen() {
  const colors = useColors();
  const [userInfo] = useState({
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 (555) 123-4567",
    avatar: "JD",
  });

  const profileSections: ProfileSection[] = [
    {
      id: "orders",
      title: "My Orders",
      icon: "cart.fill",
      subtitle: "View order history",
      onPress: () => {},
    },
    {
      id: "addresses",
      title: "Delivery Addresses",
      icon: "mappin.circle.fill",
      subtitle: "Manage addresses",
      onPress: () => {},
    },
    {
      id: "payments",
      title: "Payment Methods",
      icon: "creditcard.fill",
      subtitle: "Manage payment info",
      onPress: () => {},
    },
    {
      id: "preferences",
      title: "Preferences",
      icon: "gear",
      subtitle: "Dietary & allergies",
      onPress: () => {},
    },
    {
      id: "notifications",
      title: "Notifications",
      icon: "bell.fill",
      subtitle: "Manage notifications",
      onPress: () => {},
    },
    {
      id: "help",
      title: "Help & Support",
      icon: "info.circle.fill",
      subtitle: "Contact support",
      onPress: () => {},
    },
  ];

  return (
    <ScreenContainer className="p-0">
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* User Profile Card */}
        <View className="px-6 py-6 bg-gradient-to-r from-primary to-secondary">
          <View className="flex-row items-center gap-4">
            <View
              className="w-16 h-16 rounded-full bg-white items-center justify-center"
              style={{
                backgroundColor: colors.background,
              }}
            >
              <Text className="text-2xl font-bold text-primary">
                {userInfo.avatar}
              </Text>
            </View>
            <View className="flex-1">
              <Text className="text-2xl font-bold text-white">
                {userInfo.name}
              </Text>
              <Text className="text-sm text-white/80 mt-1">
                {userInfo.email}
              </Text>
            </View>
          </View>

          {/* Edit Profile Button */}
          <Button
            variant="secondary"
            size="sm"
            className="mt-4"
            onPress={() => {}}
          >
            Edit Profile
          </Button>
        </View>

        {/* Profile Sections */}
        <View className="px-6 py-6 gap-2">
          {profileSections.map((section) => (
            <Pressable
              key={section.id}
              onPress={section.onPress}
              style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}
            >
              <View className="flex-row items-center justify-between p-4 bg-surface rounded-2xl border border-border">
                <View className="flex-row items-center gap-3 flex-1">
                  <View className="w-10 h-10 rounded-lg bg-primary/10 items-center justify-center">
                    <IconSymbol
                      name={section.icon as any}
                      size={20}
                      color={colors.primary}
                    />
                  </View>
                  <View className="flex-1">
                    <Text className="text-base font-semibold text-foreground">
                      {section.title}
                    </Text>
                    {section.subtitle && (
                      <Text className="text-sm text-muted mt-0.5">
                        {section.subtitle}
                      </Text>
                    )}
                  </View>
                </View>
                <IconSymbol
                  name="chevron.right"
                  size={20}
                  color={colors.muted}
                />
              </View>
            </Pressable>
          ))}
        </View>

        {/* Account Actions */}
        <View className="px-6 py-6 gap-3 border-t border-border">
          <Button
            variant="secondary"
            size="md"
            fullWidth
            onPress={() => {}}
          >
            Account Settings
          </Button>
          <Button
            variant="destructive"
            size="md"
            fullWidth
            onPress={() => {}}
          >
            Logout
          </Button>
        </View>

        {/* Footer */}
        <View className="px-6 py-6 items-center border-t border-border">
          <Text className="text-xs text-muted">GourmetGo v1.0.0</Text>
          <View className="flex-row gap-4 mt-4">
            <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}>
              <Text className="text-xs text-primary font-semibold">
                Terms of Service
              </Text>
            </Pressable>
            <Text className="text-xs text-muted">•</Text>
            <Pressable style={({ pressed }) => [{ opacity: pressed ? 0.6 : 1 }]}>
              <Text className="text-xs text-primary font-semibold">
                Privacy Policy
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </ScreenContainer>
  );
}
