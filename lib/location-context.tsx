import React, { createContext, useContext, ReactNode } from "react";
import { useLocation, type LocationData, type UseLocationReturn } from "@/hooks/use-location";

interface LocationContextValue extends UseLocationReturn {
  location: LocationData | null;
}

const LocationContext = createContext<LocationContextValue | undefined>(undefined);

interface LocationProviderProps {
  children: ReactNode;
  autoRequest?: boolean;
}

/**
 * Provider component that makes location data available throughout the app
 * Automatically requests location permission and gets current location on mount
 */
export function LocationProvider({ children, autoRequest = true }: LocationProviderProps) {
  const locationHook = useLocation(autoRequest);

  const value: LocationContextValue = {
    ...locationHook,
    location: locationHook.location,
  };

  return <LocationContext.Provider value={value}>{children}</LocationContext.Provider>;
}

/**
 * Hook to access location context throughout the app
 * @throws Error if used outside LocationProvider
 */
export function useLocationContext(): LocationContextValue {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error("useLocationContext must be used within a LocationProvider");
  }
  return context;
}
