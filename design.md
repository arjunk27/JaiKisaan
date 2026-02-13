# GourmetGo - Premium Food & Grocery Delivery Template

## Design Philosophy

**GourmetGo** is a premium food and grocery delivery application designed for iOS-first experiences. The design follows **Apple Human Interface Guidelines (HIG)** with emphasis on clarity, delight, and seamless one-handed navigation. Every interaction is crafted to feel native, responsive, and intuitive.

---

## Screen List

### Core Screens

1. **Home Screen** - Personalized feed with trending items, categories, and quick access
2. **Search & Discovery** - Advanced search with filters, categories, and trending items
3. **Item Detail** - Rich product view with images, ratings, reviews, and customization
4. **Cart** - Shopping cart with item management and order summary
5. **Checkout** - Address selection, payment method, and order confirmation
6. **Order Tracking** - Real-time order status and delivery tracking
7. **Orders History** - Past orders with reorder functionality
8. **Profile** - User account, preferences, and settings
9. **Favorites** - Saved items and restaurants
10. **Notifications** - Order updates and promotional content

---

## Primary Content & Functionality

### 1. Home Screen
**Purpose:** Personalized entry point with quick access to popular items and categories

**Content:**
- Hero banner (rotating promotions or featured restaurants)
- Category carousel (quick-scroll horizontal list)
- "Popular Now" section (grid of trending items)
- "Recently Viewed" section (personalized recommendations)
- Bottom tab bar (Home, Search, Cart, Favorites, Profile)

**Functionality:**
- Tap category → filtered view
- Tap item → detail screen
- Swipe banner → view promotion details
- Pull-to-refresh → reload content

**Layout:** Portrait orientation, optimized for thumb reach (top 40% for secondary actions)

---

### 2. Search & Discovery
**Purpose:** Powerful search and filtering for finding items

**Content:**
- Search bar with voice input (top-sticky)
- Active filters display
- Filter panel (cuisine, price, rating, delivery time)
- Grid of search results with item cards
- "Recent Searches" section

**Functionality:**
- Type to search → real-time results
- Tap filter → apply/remove filters
- Tap item → detail screen
- Clear all filters → reset view

**Layout:** Full-screen scrollable with sticky search bar

---

### 3. Item Detail
**Purpose:** Comprehensive product information and customization

**Content:**
- High-quality product image carousel (swipe to view)
- Item name, price, and rating
- Description and nutritional info
- Customization options (size, add-ons, special instructions)
- Customer reviews section
- "Add to Cart" button (sticky at bottom)

**Functionality:**
- Swipe images → view gallery
- Tap customization → toggle options
- Adjust quantity → update price
- Tap "Add to Cart" → add to cart with haptic feedback
- Tap review → expand full review

**Layout:** Scrollable content with sticky header and footer button

---

### 4. Cart
**Purpose:** Review and manage shopping cart

**Content:**
- List of cart items with images, prices, and quantities
- Item customization summary
- Subtotal, taxes, delivery fee, and total
- "Proceed to Checkout" button
- "Continue Shopping" button

**Functionality:**
- Swipe item → delete from cart
- Tap quantity buttons → adjust quantity
- Tap item → edit customizations
- Tap "Proceed to Checkout" → checkout flow

**Layout:** Scrollable list with sticky footer

---

### 5. Checkout
**Purpose:** Complete the order

**Content:**
- Delivery address selector (with map preview)
- Payment method selector
- Promo code input
- Order summary
- "Place Order" button

**Functionality:**
- Tap address → open address picker
- Tap payment → select payment method
- Enter promo code → apply discount
- Tap "Place Order" → confirm and proceed to tracking

**Layout:** Scrollable form with sticky button

---

### 6. Order Tracking
**Purpose:** Real-time order status and delivery tracking

**Content:**
- Order status timeline (preparing, on the way, delivered)
- Delivery person info and live location map
- Estimated delivery time
- Contact delivery person button
- Order details summary

**Functionality:**
- View live map → see delivery location
- Tap contact → call or message driver
- Tap order details → expand summary
- Tap "Rate Order" → review screen

**Layout:** Map at top, scrollable details below

---

### 7. Orders History
**Purpose:** View past orders and reorder

**Content:**
- List of past orders with date, total, and status
- Quick "Reorder" button for each order
- Order details expandable section

**Functionality:**
- Tap order → view details
- Tap "Reorder" → add items to cart
- Swipe order → view options (reorder, help, review)

**Layout:** Scrollable list with expandable items

---

### 8. Profile
**Purpose:** User account management

**Content:**
- User avatar and name
- Account settings (email, phone, password)
- Delivery addresses
- Payment methods
- Preferences (dietary restrictions, allergies)
- Help and support
- Logout button

**Functionality:**
- Tap setting → edit
- Tap address → manage addresses
- Tap payment → manage payment methods
- Tap help → open support

**Layout:** Scrollable list of settings sections

---

### 9. Favorites
**Purpose:** Quick access to saved items and restaurants

**Content:**
- Saved items grid
- Saved restaurants list
- Filter by type (items vs. restaurants)

**Functionality:**
- Tap item → detail screen
- Tap restaurant → view all items
- Swipe item → remove from favorites

**Layout:** Scrollable grid/list with filter tabs

---

### 10. Notifications
**Purpose:** Order updates and promotions

**Content:**
- List of notifications (order updates, promotions, reminders)
- Notification timestamp and action buttons

**Functionality:**
- Tap notification → navigate to relevant screen
- Swipe notification → dismiss
- Tap settings → manage notification preferences

**Layout:** Scrollable list

---

## Key User Flows

### Flow 1: Discover & Order
1. User opens app → Home screen
2. Tap category or search → Search results
3. Tap item → Item detail
4. Customize and tap "Add to Cart" → Item added with haptic feedback
5. Tap cart icon → Cart screen
6. Tap "Proceed to Checkout" → Checkout
7. Select address and payment → Confirm order
8. Order confirmation → Order tracking screen

### Flow 2: Reorder
1. User opens app → Profile
2. Tap "Orders" → Orders history
3. Tap order → Order details
4. Tap "Reorder" → Items added to cart
5. Tap cart → Checkout (with saved address/payment)
6. Confirm order → Order tracking

### Flow 3: Search & Filter
1. User opens app → Tap search icon
2. Type query or select recent search → Results
3. Tap filter icon → Filter panel
4. Select filters (cuisine, price, rating) → Apply
5. View filtered results → Tap item for details

---

## Color Palette

### Primary Colors
- **Primary Accent:** `#FF6B35` (Vibrant Orange) - CTAs, highlights, active states
- **Secondary Accent:** `#004E89` (Deep Blue) - Secondary actions, links
- **Success:** `#22C55E` (Fresh Green) - Order confirmed, positive actions
- **Warning:** `#F59E0B` (Warm Amber) - Cautions, alerts
- **Error:** `#EF4444` (Bright Red) - Errors, destructive actions

### Neutral Colors
- **Background:** `#FFFFFF` (Light mode) / `#0F172A` (Dark mode)
- **Surface:** `#F8FAFC` (Light mode) / `#1E293B` (Dark mode)
- **Foreground:** `#0F172A` (Light mode) / `#F1F5F9` (Dark mode)
- **Muted:** `#64748B` (Light mode) / `#94A3B8` (Dark mode)
- **Border:** `#E2E8F0` (Light mode) / `#334155` (Dark mode)

### Semantic Colors
- **Rating:** `#FBBF24` (Warm Gold) - Star ratings
- **Premium:** `#A78BFA` (Soft Purple) - Premium badges

---

## Typography

- **Display:** SF Pro Display (iOS native)
- **Body:** SF Pro Text (iOS native)
- **Sizes:**
  - Hero: 32px, bold
  - Title: 24px, semibold
  - Subtitle: 18px, semibold
  - Body: 16px, regular
  - Caption: 14px, regular
  - Small: 12px, regular

---

## Spacing & Layout

- **Safe Area Padding:** 16px (horizontal), 12px (vertical)
- **Card Spacing:** 12px
- **Icon Size:** 24px (standard), 32px (large)
- **Button Height:** 48px (touch target)
- **Radius:** 12px (standard), 8px (small), 16px (large)

---

## Interactive Elements

### Buttons
- **Primary:** Orange background, white text, 48px height, 12px radius
- **Secondary:** Border only, blue text, 48px height, 12px radius
- **Tertiary:** Text only, blue text, no background
- **Destructive:** Red background, white text

### Cards
- **Item Card:** Image, title, price, rating, 12px radius, subtle shadow
- **Restaurant Card:** Banner image, name, rating, delivery time, 12px radius
- **Info Card:** Light background, border, 12px radius

### Input Fields
- **Text Input:** 48px height, 12px radius, border on focus
- **Search Bar:** 40px height, rounded pill shape, icon on left

---

## Animations & Transitions

- **Page Transitions:** Slide from right (iOS standard)
- **Button Press:** Scale 0.97, opacity 0.9, 80ms duration
- **List Item Appearance:** Fade in, 200ms duration
- **Loading State:** Pulse animation on skeleton screens
- **Haptic Feedback:** Light impact on button tap, medium on toggle, success on order confirmation

---

## Accessibility

- **Color Contrast:** WCAG AA compliant (4.5:1 for text)
- **Touch Targets:** Minimum 44x44pt
- **Text Sizing:** Supports dynamic type scaling
- **Haptic Feedback:** Provides tactile confirmation for actions
- **VoiceOver:** All interactive elements properly labeled

---

## Dark Mode

- All colors adapt automatically via CSS variables
- No `dark:` prefix needed; theme context handles switching
- Sufficient contrast maintained in both modes
- Images may have subtle overlays in dark mode for readability

---

## Performance Considerations

- **Image Optimization:** Use Expo Image with caching
- **List Rendering:** FlatList for large lists, never ScrollView with .map()
- **State Management:** React Context for theme, Zustand for app state
- **Bundle Size:** Tree-shake unused components, lazy-load screens

---

## Platform-Specific Notes

### iOS
- Respects safe area (notch, home indicator)
- Uses SF Symbols for icons
- Supports haptic feedback
- Gesture-driven navigation

### Android
- Respects system insets
- Adaptive icon support
- Material Design principles where applicable
- Back gesture support

### Web
- Responsive design (tablet-friendly)
- Keyboard navigation support
- Mouse/trackpad interactions
