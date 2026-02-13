# GourmetGo - Premium Food & Grocery Delivery Template

A stunning, production-ready mobile application template for food delivery and grocery discovery services. Built with **Expo SDK 54**, **React Native**, **TypeScript**, and **NativeWind (Tailwind CSS)**.

## 🎯 Features

### Core Screens
- **Home Screen** - Personalized feed with hero banner, categories, and trending items
- **Search & Discovery** - Advanced search with real-time filtering and results
- **Shopping Cart** - Full cart management with order summary and checkout
- **Favorites** - Save and organize favorite items and restaurants
- **User Profile** - Account management, addresses, payments, and preferences

### Component Library
- **Button** - Primary, secondary, tertiary, and destructive variants
- **Card** - Flexible card component with item card variant
- **SearchBar** - Sticky search with voice input support
- **CategoryChip** - Filterable category selector
- **RatingStars** - Interactive star rating display
- **QuantitySelector** - Increment/decrement quantity control
- **Badge** - Multiple badge variants for labels and tags
- **LoadingSkeleton** - Animated loading states

### Design System
- **Premium Color Palette** - Vibrant orange (#FF6B35) primary with deep blue secondary
- **Responsive Layout** - Optimized for portrait orientation and one-handed usage
- **Dark Mode Support** - Automatic theme switching with CSS variables
- **Haptic Feedback** - Native haptic responses for interactions
- **Smooth Animations** - Subtle transitions and press feedback

### Tech Stack
- **Expo 54** - Latest React Native framework
- **React 19** - Modern React with latest features
- **TypeScript 5.9** - Full type safety
- **NativeWind 4** - Tailwind CSS for React Native
- **React Native Reanimated 4** - Smooth animations
- **TanStack Query** - Server state management
- **Expo Router 6** - File-based routing

---

## 🚀 Quick Start

### 1. Customize Branding

Update `app.config.ts`:
```typescript
const env = {
  appName: "Your App Name",
  appSlug: "your-app-slug",
  logoUrl: "https://your-logo-url.png",
  scheme: schemeFromBundleId,
};
```

### 2. Update Theme Colors

Edit `theme.config.js` to match your brand:
```javascript
const themeColors = {
  primary: { light: '#YOUR_COLOR', dark: '#YOUR_COLOR' },
  secondary: { light: '#YOUR_COLOR', dark: '#YOUR_COLOR' },
  // ... other colors
};
```

### 3. Customize Home Screen

Edit `app/(tabs)/index.tsx` to add your content, categories, and featured items.

### 4. Add Your Data

Replace mock data in each screen with real data from your backend API.

---

## 📁 Project Structure

```
app/
  _layout.tsx              ← Root layout with providers
  (tabs)/
    _layout.tsx            ← Tab navigation configuration
    index.tsx              ← Home screen
    search.tsx             ← Search & discovery
    cart.tsx               ← Shopping cart
    favorites.tsx          ← Favorites & saved items
    profile.tsx            ← User profile & settings

components/
  ui/
    Button.tsx             ← Button component
    Card.tsx               ← Card & ItemCard components
    SearchBar.tsx          ← Search input with filtering
    CategoryChip.tsx       ← Category selector
    RatingStars.tsx        ← Star rating display
    QuantitySelector.tsx   ← Quantity control
    Badge.tsx              ← Badge labels
    LoadingSkeleton.tsx    ← Loading states
    icon-symbol.tsx        ← Icon mappings

lib/
  utils.ts                 ← Utility functions (cn)
  theme-provider.tsx       ← Theme context & switching
  trpc.ts                  ← API client setup

hooks/
  use-colors.ts            ← Access theme colors
  use-color-scheme.ts      ← Dark/light mode detection

constants/
  theme.ts                 ← Runtime color palette

assets/images/
  icon.png                 ← App icon
  splash-icon.png          ← Splash screen
  favicon.png              ← Web favicon
  android-icon-*.png       ← Android adaptive icons
```

---

## 🎨 Customization Guide

### Adding New Screens

1. Create a new file in `app/(tabs)/your-screen.tsx`
2. Use `ScreenContainer` for proper safe area handling
3. Add to tab navigation in `app/(tabs)/_layout.tsx`

```typescript
<Tabs.Screen
  name="your-screen"
  options={{
    title: "Your Screen",
    tabBarIcon: ({ color }) => <IconSymbol size={28} name="your-icon" color={color} />,
  }}
/>
```

### Creating Custom Components

Place reusable components in `components/ui/` and export from there.

```typescript
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
```

### Using Theme Colors

Access theme colors in any component:

```typescript
import { useColors } from "@/hooks/use-colors";

export function MyComponent() {
  const colors = useColors();
  
  return (
    <View style={{ backgroundColor: colors.primary }}>
      <Text style={{ color: colors.foreground }}>Hello</Text>
    </View>
  );
}
```

### Adding Icons

1. Add mapping in `components/ui/icon-symbol.tsx`:
```typescript
const MAPPING = {
  "your.icon": "material-icon-name",
  // ...
} as unknown as IconMapping;
```

2. Use in components:
```typescript
<IconSymbol name="your.icon" size={24} color={colors.primary} />
```

---

## 🔧 Configuration

### Environment Variables

Create `.env` file for API endpoints and configuration:
```
EXPO_PUBLIC_API_URL=https://api.example.com
EXPO_PUBLIC_APP_NAME=GourmetGo
```

### Tailwind Configuration

Edit `tailwind.config.js` to add custom utilities or extend the theme.

### Font Customization

Add custom fonts in `app/_layout.tsx` using `expo-font`.

---

## 📱 Platform Support

- **iOS** - Optimized for iPhone with safe area handling
- **Android** - Adaptive icons and Material Design principles
- **Web** - Responsive design with keyboard navigation

---

## 🎯 Design Principles

### Apple Human Interface Guidelines (HIG)
- Native iOS feel with standard interactions
- Proper spacing and typography
- Consistent color usage and contrast
- Accessible touch targets (44x44pt minimum)

### Performance
- FlatList for large lists (never ScrollView with .map())
- Image caching with Expo Image
- Code splitting with Expo Router
- Optimized bundle size

### Accessibility
- WCAG AA color contrast compliance
- Proper VoiceOver labels
- Dynamic type scaling support
- Haptic feedback for confirmation

---

## 🚀 Deployment

### Building for Production

```bash
# Build for iOS
eas build --platform ios

# Build for Android
eas build --platform android

# Build for web
expo export --platform web
```

### Publishing

1. Create checkpoint in Manus UI
2. Click "Publish" button
3. Follow deployment instructions

---

## 📚 Component API Reference

### Button

```typescript
<Button
  variant="primary" | "secondary" | "tertiary" | "destructive"
  size="sm" | "md" | "lg"
  disabled={false}
  fullWidth={false}
  onPress={() => {}}
>
  Click Me
</Button>
```

### Card

```typescript
<Card variant="default" | "elevated" | "outlined" onPress={() => {}}>
  {children}
</Card>

<ItemCard
  title="Item Name"
  subtitle="Subtitle"
  price="$12.99"
  rating={4.8}
  badge="Popular"
  onPress={() => {}}
/>
```

### SearchBar

```typescript
<SearchBar
  placeholder="Search..."
  value={searchQuery}
  onChangeText={setSearchQuery}
  onSubmit={(text) => {}}
  onVoicePress={() => {}}
/>
```

### RatingStars

```typescript
<RatingStars
  rating={4.8}
  maxRating={5}
  size="md"
  interactive={false}
  onRatingChange={(rating) => {}}
  reviewCount={324}
/>
```

### QuantitySelector

```typescript
<QuantitySelector
  quantity={1}
  onQuantityChange={(qty) => {}}
  minQuantity={1}
  maxQuantity={99}
  size="md"
/>
```

---

## 🐛 Troubleshooting

### App not loading
- Clear Metro cache: `expo start --clear`
- Restart dev server: Check server status in Manus UI

### Styles not applying
- Ensure NativeWind is properly configured
- Check `tailwind.config.js` for content paths
- Verify color tokens in `theme.config.js`

### Icons not showing
- Add icon mapping in `icon-symbol.tsx`
- Verify icon name is correct
- Check Material Icons documentation

### Performance issues
- Use FlatList instead of ScrollView with .map()
- Enable image caching
- Check bundle size with `expo export`

---

## 📖 Resources

- [Expo Documentation](https://docs.expo.dev)
- [React Native Docs](https://reactnative.dev)
- [NativeWind Documentation](https://www.nativewind.dev)
- [Apple HIG](https://developer.apple.com/design/human-interface-guidelines)
- [Material Design](https://m3.material.io)

---

## 📄 License

This template is provided as-is for use in building food delivery and grocery applications.

---

## 🎉 Ready to Build?

This template provides everything you need to launch a premium food delivery app. Customize the colors, screens, and data to match your brand, then deploy to production.

**Happy building! 🚀**
