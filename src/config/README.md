# 🎨 Theme Configuration

Panduan lengkap untuk mengkustomisasi tema aplikasi LMS Dashboard.

---

## 📁 File Utama

**`theme.js`** - File konfigurasi tema terpusat

Semua warna, typography, spacing, shadows, dan konfigurasi visual lainnya ada di file ini.

---

## 🎯 Cara Mengubah Warna Tema

### 1. Ubah Warna Utama

Edit file `src/config/theme.js`:

```javascript
export const themeConfig = {
  colors: {
    // Ubah warna primary (blue)
    primary: {
      500: '#3B82F6',  // 👈 Ubah ini untuk warna primary
      // Atau ubah semua shade untuk kontrol penuh
    },

    // Ubah warna secondary (green)
    secondary: {
      500: '#10B981',  // 👈 Ubah ini untuk warna secondary
    },

    // Ubah warna accent (orange)
    accent: {
      500: '#F59E0B',  // 👈 Ubah ini untuk warna accent/CTA
    },
  }
}
```

### 2. Cara Cepat: Gunakan Theme Preset

Ada 8 theme preset yang siap pakai:

```javascript
import { themePresets } from './theme.js'

// Theme tersedia:
themePresets.default       // Blue, Green, Orange (current)
themePresets.professional  // Navy, Teal, Gold
themePresets.modern        // Purple, Pink, Blue
themePresets.minimal       // Slate, Gray, Black
themePresets.vibrant       // Orange, Purple, Pink
themePresets.nature        // Green, Brown, Amber
themePresets.ocean         // Blue, Cyan, Teal
themePresets.sunset        // Orange, Red, Pink
```

Untuk mengubah theme:
1. Pilih preset yang diinginkan
2. Copy nilai warna ke `themeConfig.colors`
3. Simpan file
4. Aplikasi akan otomatis reload dengan warna baru

---

## 🎨 Contoh: Mengubah ke Theme Professional

**Sebelum:**
```javascript
primary: {
  500: '#3B82F6',  // Blue
}
```

**Sesudah:**
```javascript
primary: {
  500: '#1e3a8a',  // Navy (dari preset professional)
}
```

**Atau gunakan helper function:**
```javascript
import { applyThemePreset } from './config/theme.js'

const newTheme = applyThemePreset('professional')
```

---

## 🌈 Membuat Theme Custom Sendiri

### Step 1: Tentukan Warna Utama

Pilih 3 warna utama:
- **Primary**: Warna brand utama (untuk tombol, link, active states)
- **Secondary**: Warna pelengkap (untuk success, positive)
- **Accent**: Warna highlight (untuk CTA, important elements)

### Step 2: Generate Color Shades

Gunakan tool online untuk generate shades:
- https://uicolors.app/create
- https://www.tailwindshades.com/

Input warna utama Anda (500), tool akan generate shade 50-900.

### Step 3: Update theme.js

```javascript
export const themeConfig = {
  colors: {
    primary: {
      50: '#...',   // Lightest
      100: '#...',
      // ... hingga
      900: '#...',  // Darkest
    },
  }
}
```

### Step 4: Simpan & Reload

Vite akan auto-reload aplikasi dengan tema baru!

---

## 🔧 Konfigurasi Lainnya

### Typography

```javascript
typography: {
  fontFamily: {
    sans: ['Inter', 'system-ui', ...],  // 👈 Ubah font di sini
  },
  
  fontSize: {
    base: ['1rem', { lineHeight: '1.75rem' }],  // 👈 Ubah ukuran
  }
}
```

### Border Radius

```javascript
borderRadius: {
  'lg': '0.75rem',  // 👈 Ubah untuk rounded yang berbeda
}
```

### Shadows

```javascript
shadows: {
  'soft': '0 1px 3px ...',  // 👈 Ubah shadow di sini
}
```

### Spacing

```javascript
spacing: {
  '18': '4.5rem',  // 👈 Tambahkan spacing custom
}
```

---

## 🌙 Dark Mode Configuration

```javascript
darkMode: {
  enabled: true,        // 👈 Enable/disable dark mode
  strategy: 'class',    // 👈 'class' or 'media'
}
```

- **'class'**: Manual toggle (recommended)
- **'media'**: Follow system preference

---

## 🎯 Quick Theme Changes

### Contoh 1: Ganti Primary ke Purple

```javascript
// theme.js
primary: {
  500: '#8B5CF6',  // Purple
  600: '#7C3AED',
  700: '#6D28D9',
}
```

### Contoh 2: Ganti ke Monochrome (Black & White)

```javascript
primary: {
  500: '#000000',  // Black
}
secondary: {
  500: '#64748b',  // Slate
}
accent: {
  500: '#fbbf24',  // Yellow for highlights
}
```

### Contoh 3: Corporate Blue & Gold

```javascript
primary: {
  500: '#1e40af',  // Deep Blue
}
secondary: {
  500: '#059669',  // Teal
}
accent: {
  500: '#d97706',  // Gold
}
```

---

## 🧪 Testing Theme Changes

### 1. Edit `theme.js`
```javascript
// Ubah warna
primary: { 500: '#8B5CF6' }
```

### 2. Simpan File

Vite akan auto-reload

### 3. Check di Browser

- Refresh halaman
- Cek semua komponen (buttons, cards, sidebar)
- Test dark mode
- Pastikan contrast cukup

---

## 📋 Checklist Setelah Ubah Theme

Setelah mengubah warna, pastikan:

- ✅ Kontras text readable (minimal 4.5:1)
- ✅ Buttons terlihat jelas
- ✅ Active states mudah dibedakan
- ✅ Dark mode masih bagus
- ✅ Badges & status colors konsisten
- ✅ Hover states terlihat
- ✅ Focus rings visible

---

## 🎨 Tools Untuk Membantu

### Color Generators
- [UI Colors](https://uicolors.app/create) - Generate Tailwind shades
- [Tailwind Shades](https://www.tailwindshades.com/) - Color palette generator
- [Coolors](https://coolors.co/) - Color scheme generator

### Contrast Checkers
- [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [Contrast Ratio](https://contrast-ratio.com/)

### Inspiration
- [Tailwind UI Colors](https://tailwindcss.com/docs/customizing-colors)
- [Dribbble](https://dribbble.com/colors/) - Color inspiration
- [Color Hunt](https://colorhunt.co/) - Color palettes

---

## 🚀 Advanced: Multiple Theme Support

Untuk support multiple themes yang bisa dipilih user:

### 1. Buat Theme Variants

```javascript
// theme.js
export const themes = {
  blue: { primary: '#3B82F6', ... },
  purple: { primary: '#8B5CF6', ... },
  green: { primary: '#10B981', ... },
}
```

### 2. Store Theme Preference

```javascript
// stores/theme.js
export const useThemeStore = defineStore('theme', () => {
  const currentTheme = ref('blue')
  
  const setTheme = (themeName) => {
    currentTheme.value = themeName
    localStorage.setItem('theme', themeName)
  }
  
  return { currentTheme, setTheme }
})
```

### 3. Apply Theme Dynamically

Bisa menggunakan CSS variables untuk dynamic theming.

---

## 📝 Best Practices

### ✅ Do:
- Gunakan semantic color names (primary, secondary, accent)
- Maintain konsistensi warna
- Test di dark mode setelah ubah warna
- Gunakan color shades (50-900) bukan single color
- Dokumentasikan perubahan warna

### ❌ Don't:
- Hardcode warna di komponen
- Gunakan terlalu banyak warna berbeda
- Lupa test contrast ratio
- Ubah warna tanpa update semua shades
- Skip testing di dark mode

---

## 🎯 File yang Terpengaruh

Ketika Anda mengubah `theme.js`, file-file ini akan otomatis menggunakan warna baru:

1. `tailwind.config.js` - Import dari theme.js
2. All Vue components - Menggunakan Tailwind classes
3. `src/style.css` - Global styles
4. `src/composables/useTheme.js` - Theme utilities

**Anda hanya perlu edit 1 file: `src/config/theme.js` ✨**

---

## 📞 Support

Jika mengalami masalah dengan theme customization:

1. Check console untuk errors
2. Pastikan syntax JavaScript valid
3. Restart dev server: `npm run dev`
4. Clear browser cache

---

## 🎉 Quick Start Example

Ingin tema purple & pink?

```javascript
// src/config/theme.js

export const themeConfig = {
  colors: {
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
      500: '#3B82F6',  // Blue
      600: '#2563EB',
      700: '#1D4ED8',
    },
  }
}
```

Simpan, dan voila! Aplikasi Anda sekarang purple & pink. 🎨

---

**Happy Theming! 🎨✨**

