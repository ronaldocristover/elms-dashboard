# 🎨 LMS Dashboard - Design System

## Overview
Design system yang minimalis, profesional, dan modern dengan fokus pada white space, soft shadows, dan konsistensi warna.

---

## 🎨 Color Palette

### Primary Colors
```css
Primary Blue: #3B82F6
- Used for: Main actions, links, active states
- Variants: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

Secondary Green: #10B981  
- Used for: Success states, positive indicators
- Variants: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

Accent Orange: #F59E0B
- Used for: CTA buttons, important highlights
- Variants: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900
```

### Neutral Colors
```css
Background: #F9FAFB (gray-50)
Light Background: #F3F4F6 (gray-100)
White: #FFFFFF

Text Primary: #1F2937 (gray-800)
Text Secondary: #6B7280 (gray-500)
Border: #E5E7EB (gray-200)
```

### Dark Mode Colors
```css
Background: #111827 (gray-900)
Surface: #1F2937 (gray-800)
Text: #F9FAFB (gray-50)
Border: #374151 (gray-700)
```

---

## 📐 Typography

### Font Family
```css
Font: 'Inter', system-ui, -apple-system, sans-serif
Features: 'cv02', 'cv03', 'cv04', 'cv11'
Smoothing: antialiased
```

### Font Sizes
```css
xs:   0.75rem  (12px) - line-height: 1rem
sm:   0.875rem (14px) - line-height: 1.5rem
base: 1rem     (16px) - line-height: 1.75rem
lg:   1.125rem (18px) - line-height: 1.75rem
xl:   1.25rem  (20px) - line-height: 1.75rem
2xl:  1.5rem   (24px) - line-height: 2rem
3xl:  1.875rem (30px) - line-height: 2.25rem
4xl:  2.25rem  (36px) - line-height: 2.5rem
```

### Font Weights
```css
Regular:  400
Medium:   500
Semibold: 600
Bold:     700
```

### Headings
```css
h1: font-semibold, letter-spacing: -0.01em
h2: font-semibold, letter-spacing: -0.01em
h3: font-semibold, letter-spacing: -0.01em
```

---

## 🔲 Spacing

### Padding Scale
```css
p-4:  1rem    (16px)
p-5:  1.25rem (20px)
p-6:  1.5rem  (24px)
p-8:  2rem    (32px)
```

### Margin Scale
```css
mb-4: 1rem    (16px)
mb-6: 1.5rem  (24px)
mb-8: 2rem    (32px)
```

### Gap Scale
```css
gap-4: 1rem    (16px)
gap-6: 1.5rem  (24px)
gap-8: 2rem    (32px)
```

---

## ⚫ Border Radius

```css
DEFAULT: 0.5rem  (8px)  - Subtle, friendly
lg:      0.75rem (12px) - Standard cards
xl:      1rem    (16px) - Prominent elements
2xl:     1.5rem  (24px) - Hero sections
```

### Usage:
- Buttons: `rounded-lg` (12px)
- Cards: `rounded-lg` (12px)
- Images: `rounded-lg` (12px)
- Stats boxes: `rounded-lg` (12px)
- Modals: `rounded-xl` (16px)

---

## 🌫️ Shadows (Soft, Not Borders)

### Shadow System
```css
shadow-soft:    Subtle (0 1px 3px rgba(0,0,0,0.08))
shadow-soft-md: Medium  (0 4px 6px rgba(0,0,0,0.08))
shadow-soft-lg: Large   (0 10px 15px rgba(0,0,0,0.08))
shadow-soft-xl: Extra   (0 20px 25px rgba(0,0,0,0.08))
```

### Usage:
- Cards: `shadow-soft`
- Hover cards: `shadow-soft-md`
- Modals: `shadow-soft-xl`
- Dropdowns: `shadow-soft-lg`

**Principle:** Soft shadows create depth without harsh borders

---

## 🎯 Component Styles

### Buttons

#### Primary Button
```vue
<BaseButton variant="primary">
  Action
</BaseButton>
```
- Color: `bg-primary-500`
- Hover: `bg-primary-600`
- Shadow: `shadow-soft`
- Border Radius: `rounded-lg`

#### Outline Button
```vue
<BaseButton variant="outline">
  Action
</BaseButton>
```
- Background: `bg-white` / `dark:bg-gray-800`
- Border: `border border-gray-300`
- No harsh borders, soft appearance

#### Accent Button (CTA)
```vue
<BaseButton variant="accent">
  Call to Action
</BaseButton>
```
- Color: `bg-accent-500` (#F59E0B)
- Used for important CTAs

### Cards
```vue
<div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6">
  <!-- Content -->
</div>
```
- Background: White / Dark gray-800
- Shadow: Soft
- Padding: Generous (p-6 to p-8)
- Border radius: 12px

### Stats Boxes
```vue
<div class="bg-white rounded-lg shadow-soft p-6 hover:shadow-soft-md">
  <div class="flex items-center justify-between">
    <div>
      <p class="text-sm text-gray-600">Label</p>
      <p class="text-3xl font-bold text-gray-800">Value</p>
    </div>
    <div class="w-12 h-12 bg-primary-100 rounded-lg">
      <!-- Icon -->
    </div>
  </div>
</div>
```
- Icon background: Light color (e.g., `bg-primary-100`)
- Hover effect: Shadow upgrade
- Clean, minimal design

### Forms
```vue
<input
  class="px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg 
         focus:ring-2 focus:ring-primary-500 focus:border-transparent"
/>
```
- Background: Light gray-50
- Border: Subtle gray-200
- Focus: Ring effect, no harsh border
- Border radius: 12px

---

## 🌙 Dark Mode

### Activation
```html
<!-- Add 'dark' class to html element -->
<html class="dark">
```

### Dark Mode Colors
```css
Background: bg-gray-900
Cards: bg-gray-800
Text: text-gray-100
Borders: border-gray-700
Inputs: bg-gray-900
```

### Usage
```vue
<!-- Always provide dark mode variants -->
<div class="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
  Content
</div>
```

---

## 📏 White Space Principles

### Generous Spacing
```css
Card padding: p-6 to p-8 (24-32px)
Section margins: mb-8 (32px)
Grid gaps: gap-6 (24px)
```

### Don't Crowd Elements
- Use ample padding in cards
- Maintain consistent gaps between elements
- Let content breathe

### Example - Bad vs Good
```css
/* ❌ Bad - Cramped */
<div class="p-2 mb-2">

/* ✅ Good - Spacious */
<div class="p-6 mb-8">
```

---

## 🎨 Gradient Usage (Subtle Only)

### Subtle Gradients
```css
/* Login background - subtle */
bg-gradient-to-br from-gray-50 to-gray-100

/* Button - minimal gradient */
bg-gradient-to-br from-primary-500 to-primary-600

/* Icon backgrounds - light gradient */
bg-gradient-to-br from-primary-500 to-primary-600
```

### Avoid
- ❌ Harsh, rainbow gradients
- ❌ Multiple gradient directions on same page
- ❌ Overly vibrant gradients

### Use
- ✅ Subtle 2-color gradients
- ✅ Same-hue gradients (light to dark of same color)
- ✅ Background textures

---

## 🎯 Design Principles

### 1. White Space is Your Friend
- Don't fill every pixel
- Use padding generously
- Let content breathe

### 2. Consistency
- Use max 3-4 colors throughout
- Stick to defined color palette
- Consistent border radius
- Consistent spacing scale

### 3. Soft Over Hard
- Soft shadows instead of borders
- Rounded corners (8-12px)
- Subtle hover effects
- Smooth transitions

### 4. Clarity
- Clear typography hierarchy
- Good color contrast
- Readable line heights
- Proper text sizes

### 5. Accessibility
- Focus states with rings
- Sufficient color contrast
- Touch-friendly sizes (min 44px)
- Keyboard navigation support

---

## 📱 Responsive Design

### Breakpoints
```css
sm:  640px  - Small tablets
md:  768px  - Tablets
lg:  1024px - Laptops
xl:  1280px - Desktops
```

### Mobile-First Approach
```vue
<!-- Always start with mobile, then scale up -->
<div class="p-4 md:p-6 lg:p-8">
<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
```

---

## ✨ Micro-interactions

### Transitions
```css
/* All elements */
transition-colors duration-200

/* Hover effects */
hover:shadow-soft-md
hover:bg-primary-600
hover:-translate-y-0.5

/* Active states */
active:scale-95
```

### Button Interactions
- Hover: Color darkens + shadow increases
- Active: Slight scale down
- Focus: Ring effect

### Card Interactions
- Hover: Shadow upgrade
- Cursor: Pointer for clickable
- Smooth color transitions

---

## 🎨 Color Usage Guide

### Primary Blue (#3B82F6)
- **Use for:** Main navigation, primary buttons, links, active states
- **Don't use for:** Everything (too much blue is overwhelming)

### Secondary Green (#10B981)
- **Use for:** Success messages, active status, positive indicators
- **Don't use for:** Primary actions (use primary blue)

### Accent Orange (#F59E0B)
- **Use for:** Call-to-action buttons, important highlights, warnings
- **Don't use for:** Regular buttons (reserve for special CTAs)

### Neutral Grays
- **Use for:** Text, backgrounds, borders, subtle elements
- **This is your main color** - most of the UI should be neutral

---

## 📋 Component Checklist

When creating new components, ensure:

- ✅ Proper white space (generous padding)
- ✅ Soft shadows (no harsh borders)
- ✅ Rounded corners (8-12px)
- ✅ Dark mode support
- ✅ Consistent colors from palette
- ✅ Hover/focus states
- ✅ Responsive design
- ✅ Accessibility (focus rings, contrast)

---

## 🎯 Examples

### Good Design ✅
```vue
<div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-8 mb-8">
  <h2 class="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">
    Title
  </h2>
  <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
    Content with proper spacing and readable text.
  </p>
</div>
```

### Bad Design ❌
```vue
<div class="bg-blue-500 border-4 border-black p-1 mb-1">
  <h2 class="text-xs text-yellow-300">
    Title
  </h2>
  <p class="text-pink-500">
    Cramped, inconsistent colors, harsh borders.
  </p>
</div>
```

---

## 🚀 Implementation Files

### Core Files
- `tailwind.config.js` - Color palette, spacing, shadows
- `src/style.css` - Global styles, dark mode, scrollbar
- `index.html` - Inter font import

### Component Files
- `src/components/Sidebar.vue` - Navigation
- `src/components/BaseButton.vue` - Button system
- `src/components/BaseTable.vue` - Table component
- `src/views/Login.vue` - Login page
- `src/views/Dashboard.vue` - Dashboard

### Layout Files
- `src/layouts/MainLayout.vue` - Main app layout

---

## 📚 References

- Font: [Inter on Google Fonts](https://fonts.google.com/specimen/Inter)
- Color inspiration: Tailwind CSS default palette
- Design philosophy: Minimalism, clarity, professionalism

---

**Last Updated:** October 16, 2024  
**Version:** 2.0.0  
**Status:** Production Ready

