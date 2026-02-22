/**
 * Example usage of the location hook and context
 * 
 * This file demonstrates how to use location features in your app.
 * You can delete this file - it's just for reference.
 */

import { View, Text, ActivityIndicator } from "react-native";
import { useLocationContext } from "@/lib/location-context";
// OR use the hook directly:
// import { useLocation } from "@/hooks/use-location";

export function LocationExample() {
  // Option 1: Use the context (recommended - location is already initialized)
  const { location, loading, error, permissionStatus, getCurrentLocation } = useLocationContext();

  // Option 2: Use the hook directly (if you need location in a component outside the provider)
  // const { location, loading, error } = useLocation(false); // false = don't auto-request

  if (loading) {
    return (
      <View>
        <ActivityIndicator />
        <Text>Getting your location...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View>
        <Text>Error: {error}</Text>
        <Text>Permission Status: {permissionStatus}</Text>
      </View>
    );
  }

  if (!location) {
    return (
      <View>
        <Text>Location not available</Text>
        <Text>Permission Status: {permissionStatus}</Text>
      </View>
    );
  }

  return (
    <View>
      <Text>Latitude: {location.latitude}</Text>
      <Text>Longitude: {location.longitude}</Text>
      <Text>Accuracy: {location.accuracy}m</Text>
      <Text>Permission: {permissionStatus}</Text>
      
      {/* Refresh location manually */}
      <Button title="Refresh Location" onPress={getCurrentLocation} />
    </View>
  );
}
