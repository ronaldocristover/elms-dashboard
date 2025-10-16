# 🎨 Panduan Kustomisasi Tema

## ⚡ Quick Start

### Cara Tercepat Mengubah Warna Aplikasi:

1. **Buka file**: `src/config/theme.js`
2. **Edit warna** di section `colors`
3. **Simpan** - Aplikasi akan auto-reload!

---

## 🎯 File Konfigurasi Tema

### **File Utama:** `src/config/theme.js`

Ini adalah **SATU-SATUNYA file** yang perlu Anda edit untuk mengubah seluruh tema aplikasi.

```
src/config/theme.js
  ↓
tailwind.config.js (auto-import)
  ↓
Semua komponen Vue (menggunakan Tailwind)
```

---

## 🌈 Mengubah Warna

### Method 1: Edit Langsung (Recommended)

Buka `src/config/theme.js` dan edit:

```javascript
export const themeConfig = {
  colors: {
    primary: {
      500: '#3B82F6',  // 👈 UBAH INI untuk warna primary baru
      // Contoh: '#8B5CF6' untuk purple
      // Contoh: '#10B981' untuk green
      // Contoh: '#F59E0B' untuk orange
    },

    secondary: {
      500: '#10B981',  // 👈 UBAH INI untuk warna secondary
    },

    accent: {
      500: '#F59E0B',  // 👈 UBAH INI untuk warna accent/CTA
    },
  }
}
```

### Method 2: Gunakan Preset

Ada 8 theme preset siap pakai di `themePresets`:

```javascript
// Di theme.js, lihat section themePresets
export const themePresets = {
  default: { primary: '#3B82F6', secondary: '#10B981', accent: '#F59E0B' },
  professional: { primary: '#1e3a8a', secondary: '#0891b2', accent: '#d97706' },
  modern: { primary: '#7c3aed', secondary: '#ec4899', accent: '#3b82f6' },
  minimal: { primary: '#475569', secondary: '#64748b', accent: '#1e293b' },
  vibrant: { primary: '#f97316', secondary: '#a855f7', accent: '#ec4899' },
  nature: { primary: '#22c55e', secondary: '#92400e', accent: '#f59e0b' },
  ocean: { primary: '#0ea5e9', secondary: '#06b6d4', accent: '#14b8a6' },
  sunset: { primary: '#f97316', secondary: '#ef4444', accent: '#ec4899' },
}
```

**Cara apply preset:**

Copy warna dari preset ke section colors di themeConfig.

---

## 🎨 Contoh Kustomisasi

### Contoh 1: Tema Corporate (Navy & Gold)

```javascript
// src/config/theme.js

primary: {
  500: '#1e3a8a',  // Navy Blue
  600: '#1e40af',
  700: '#1d4ed8',
},
secondary: {
  500: '#059669',  // Emerald
  600: '#047857',
  700: '#065f46',
},
accent: {
  500: '#d97706',  // Gold
  600: '#b45309',
  700: '#92400e',
}
```

### Contoh 2: Tema Minimalis (Monochrome)

```javascript
primary: {
  500: '#374151',  // Gray
  600: '#1f2937',
  700: '#111827',
},
secondary: {
  500: '#6b7280',  // Medium gray
  600: '#4b5563',
  700: '#374151',
},
accent: {
  500: '#000000',  // Black
  600: '#0f172a',
  700: '#020617',
}
```

### Contoh 3: Tema Colorful (Purple & Pink)

```javascript
primary: {
  500: '#8B5CF6',  // Purple
  600: '#7C3AED',
  700: '#6D28D9',
},
secondary: {
  500: '#EC4899',  // Pink
  600: '#DB2777',
  700: '#BE185D',
},
accent: {
  500: '#F59E0B',  // Amber
  600: '#D97706',
  700: '#B45309',
}
```

---

## 🎯 Dimana Warna Digunakan?

### Primary Color (Blue - #3B82F6)
- ✅ Tombol utama (Login, Simpan, dll)
- ✅ Link dan navigasi aktif
- ✅ Icons pada stats
- ✅ Focus rings
- ✅ Active menu di sidebar

### Secondary Color (Green - #10B981)
- ✅ Status "Aktif"
- ✅ Success messages
- ✅ Positive indicators
- ✅ Completion badges

### Accent Color (Orange - #F59E0B)
- ✅ Call-to-Action buttons (penting)
- ✅ Revenue/money icons
- ✅ Important highlights
- ✅ Warning states

### Gray (Neutral)
- ✅ Text (gray-800)
- ✅ Background (gray-50)
- ✅ Borders (gray-200)
- ✅ Disabled states

---

## 🛠️ Konfigurasi Lainnya

### Font Family

```javascript
typography: {
  fontFamily: {
    sans: ['Inter', 'system-ui', ...],  // 👈 Ubah font di sini
    // Contoh ganti ke Poppins:
    // sans: ['Poppins', 'system-ui', ...],
  }
}
```

**Jangan lupa update import di `index.html`:**

```html
<!-- Ganti Inter dengan font pilihan -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

### Font Sizes

```javascript
fontSize: {
  base: ['1rem', { lineHeight: '1.75rem' }],  // 👈 Default text size
  xl: ['1.25rem', { lineHeight: '1.75rem' }],  // 👈 Large text
}
```

### Border Radius (Rounded Corners)

```javascript
borderRadius: {
  'lg': '0.75rem',   // 12px - Standard untuk cards & buttons
  'xl': '1rem',      // 16px - Untuk modals
  '2xl': '1.5rem',   // 24px - Untuk hero sections
}
```

Lebih rounded (friendly):
```javascript
borderRadius: {
  'lg': '1rem',      // 16px
  'xl': '1.5rem',    // 24px
}
```

Lebih sharp (modern):
```javascript
borderRadius: {
  'lg': '0.5rem',    // 8px
  'xl': '0.75rem',   // 12px
}
```

### Shadows (Soft vs Hard)

Untuk shadows lebih tegas:
```javascript
shadows: {
  'soft': '0 2px 4px 0 rgba(0, 0, 0, 0.12)',  // Lebih gelap
}
```

Untuk shadows lebih lembut:
```javascript
shadows: {
  'soft': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',  // Lebih terang
}
```

---

## 🌙 Dark Mode

### Toggle Dark Mode

Dark mode toggle sudah ada di **Sidebar** (bawah).

### Customize Dark Mode Colors

```javascript
// Warna dark mode otomatis menggunakan gray-900, gray-800, dll
// Untuk customize, edit di gray colors:

gray: {
  900: '#111827',  // 👈 Dark mode background
  800: '#1F2937',  // 👈 Dark mode cards
  700: '#374151',  // 👈 Dark mode borders
}
```

---

## 📱 Responsive Configuration

Breakpoints sudah di-config, tapi bisa diubah:

```javascript
breakpoints: {
  sm: '640px',   // 👈 Small devices
  md: '768px',   // 👈 Tablets
  lg: '1024px',  // 👈 Laptops
  xl: '1280px',  // 👈 Desktops
}
```

---

## 🔄 Update Flow

```
Edit theme.js
  ↓
Vite detects change
  ↓
Auto rebuild Tailwind
  ↓
Browser auto refresh (HMR)
  ↓
See changes immediately!
```

**No need to restart dev server!** 🚀

---

## 🎨 Recommended Color Combinations

### Professional Business
```
Primary: Navy #1e3a8a
Secondary: Teal #0891b2  
Accent: Gold #d97706
```

### Creative Agency
```
Primary: Purple #8b5cf6
Secondary: Pink #ec4899
Accent: Orange #f97316
```

### Educational Platform
```
Primary: Blue #3b82f6
Secondary: Green #10b981
Accent: Amber #f59e0b
```

### Tech Startup
```
Primary: Indigo #6366f1
Secondary: Cyan #06b6d4
Accent: Rose #f43f5e
```

### Healthcare
```
Primary: Blue #3b82f6
Secondary: Teal #14b8a6
Accent: Red #ef4444
```

---

## ⚙️ Advanced Configuration

### CSS Variables (Future Enhancement)

Untuk dynamic theme switching tanpa reload:

```css
/* style.css */
:root {
  --color-primary: #3B82F6;
  --color-secondary: #10B981;
  --color-accent: #F59E0B;
}

.dark {
  --color-primary: #60a5fa;  /* Lighter for dark mode */
}
```

### Runtime Theme Switching

Gunakan `useTheme` composable:

```vue
<script setup>
import { useTheme } from '@/composables/useTheme'

const { applyPreset, toggleDarkMode } = useTheme()

// Apply preset
applyPreset('professional')

// Toggle dark mode
toggleDarkMode()
</script>
```

---

## 📚 Referensi File

- **Theme Config**: `src/config/theme.js`
- **Tailwind Config**: `tailwind.config.js`
- **Theme Composable**: `src/composables/useTheme.js`
- **Theme Switcher Component**: `src/components/ThemeSwitcher.vue`
- **Global Styles**: `src/style.css`

---

## 🎉 Kesimpulan

**Untuk mengubah SELURUH warna aplikasi:**
1. Edit `src/config/theme.js`
2. Ubah nilai di `colors.primary.500`, `colors.secondary.500`, `colors.accent.500`
3. Simpan
4. Done! ✨

**Satu file, satu perubahan, seluruh aplikasi terupdate!**

---

**Happy Customizing! 🎨**

