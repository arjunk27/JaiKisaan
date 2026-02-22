import { useEffect, useState } from "react";
import * as Location from "expo-location";
import { Platform } from "react-native";

export interface LocationData {
  latitude: number;
  longitude: number;
  accuracy: number | null;
  altitude: number | null;
  heading: number | null;
  speed: number | null;
}

export interface UseLocationReturn {
  location: LocationData | null;
  loading: boolean;
  error: string | null;
  permissionStatus: Location.PermissionStatus | null;
  requestPermission: () => Promise<boolean>;
  getCurrentLocation: () => Promise<void>;
}

/**
 * Hook to manage user location with automatic permission request on mount
 */
export function useLocation(autoRequest = true): UseLocationReturn {
  const [location, setLocation] = useState<LocationData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<Location.PermissionStatus | null>(null);

  const checkPermission = async () => {
    try {
      const { status } = await Location.getForegroundPermissionsAsync();
      setPermissionStatus(status);
      return status === "granted";
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to check location permission";
      setError(errorMessage);
      return false;
    }
  };

  const requestPermission = async (): Promise<boolean> => {
    try {
      setLoading(true);
      setError(null);

      // Check current permission status
      const { status: currentStatus } = await Location.getForegroundPermissionsAsync();
      
      if (currentStatus === "granted") {
        setPermissionStatus("granted");
        setLoading(false);
        return true;
      }

      // Request permission
      const { status } = await Location.requestForegroundPermissionsAsync();
      setPermissionStatus(status);

      if (status !== "granted") {
        setError("Location permission denied. Please enable location access in settings.");
        setLoading(false);
        return false;
      }

      setLoading(false);
      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to request location permission";
      setError(errorMessage);
      setLoading(false);
      return false;
    }
  };

  const getCurrentLocation = async () => {
    try {
      setLoading(true);
      setError(null);

      const hasPermission = await checkPermission();
      if (!hasPermission) {
        const granted = await requestPermission();
        if (!granted) {
          setLoading(false);
          return;
        }
      }

      // Get current location
      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.Balanced,
      });

      setLocation({
        latitude: currentLocation.coords.latitude,
        longitude: currentLocation.coords.longitude,
        accuracy: currentLocation.coords.accuracy,
        altitude: currentLocation.coords.altitude,
        heading: currentLocation.coords.heading,
        speed: currentLocation.coords.speed,
      });

      setLoading(false);
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Failed to get current location";
      setError(errorMessage);
      setLoading(false);
    }
  };

  // Auto-request permission and get location on mount if autoRequest is true
  useEffect(() => {
    if (!autoRequest) {
      setLoading(false);
      return;
    }

    // On web, location API is different
    if (Platform.OS === "web") {
      if (typeof navigator !== "undefined" && navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
              accuracy: position.coords.accuracy,
              altitude: position.coords.altitude,
              heading: position.coords.heading,
              speed: position.coords.speed,
            });
            setPermissionStatus("granted");
            setLoading(false);
          },
          (err) => {
            setError(err.message);
            setPermissionStatus("denied");
            setLoading(false);
          }
        );
      } else {
        setError("Geolocation is not supported on this browser");
        setLoading(false);
      }
      return;
    }

    // For native platforms, use expo-location
    const initializeLocation = async () => {
      const granted = await requestPermission();
      if (granted) {
        await getCurrentLocation();
      } else {
        setLoading(false);
      }
    };

    initializeLocation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoRequest]);

  return {
    location,
    loading,
    error,
    permissionStatus,
    requestPermission,
    getCurrentLocation,
  };
}
