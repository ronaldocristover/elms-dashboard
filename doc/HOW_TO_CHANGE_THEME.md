# 🎨 Cara Mengubah Tema (Super Simple!)

## 🚀 Cara Tercepat (5 Detik!)

### Step 1: Buka File
```bash
src/config/theme.js
```

### Step 2: Edit Warna (Baris 17-19)
```javascript
primary: {
  500: '#3B82F6',  // 👈 UBAH INI! (Contoh: '#8B5CF6' untuk purple)
```

### Step 3: Simpan
```
Ctrl + S (atau Cmd + S di Mac)
```

### Step 4: Lihat Hasilnya!
```
Browser akan auto-refresh.
Semua tombol, link, dan warna primary berubah! ✨
```

---

## 🎨 Pilihan Warna Populer

Copy salah satu dan paste ke `primary.500`:

```javascript
// Blue (Default)
primary: { 500: '#3B82F6' }

// Purple (Modern)
primary: { 500: '#8B5CF6' }

// Pink (Playful)
primary: { 500: '#EC4899' }

// Green (Fresh)
primary: { 500: '#10B981' }

// Orange (Energetic)
primary: { 500: '#F97316' }

// Red (Bold)
primary: { 500: '#EF4444' }

// Teal (Professional)
primary: { 500: '#14B8A6' }

// Indigo (Tech)
primary: { 500: '#6366F1' }

// Navy (Corporate)
primary: { 500: '#1E3A8A' }

// Black (Minimalist)
primary: { 500: '#000000' }
```

---

## 🎯 Lokasi File

```
📁 src/
  📁 config/
    📄 theme.js  ← EDIT FILE INI!
```

**Hanya 1 file yang perlu diubah!**

---

## 🌈 3 Warna Utama

Edit 3 nilai ini untuk mengubah seluruh tema:

```javascript
// src/config/theme.js (baris 17-55)

primary: {
  500: '#3B82F6',  // 👈 1. Warna utama (buttons, links, active)
},

secondary: {
  500: '#10B981',  // 👈 2. Warna sukses (status aktif, positive)
},

accent: {
  500: '#F59E0B',  // 👈 3. Warna highlight (CTA, important)
},
```

---

## 📖 Contoh Lengkap

### Mengubah ke Tema Purple & Pink

**SEBELUM:**
```javascript
primary: {
  500: '#3B82F6',  // Blue
},
secondary: {
  500: '#10B981',  // Green
},
```

**SESUDAH:**
```javascript
primary: {
  500: '#8B5CF6',  // Purple ✨
},
secondary: {
  500: '#EC4899',  // Pink ✨
},
```

**Simpan** → Auto reload → **Done!** 🎉

---

## 🎨 Theme Presets Siap Pakai

Ada 8 preset siap pakai di file `theme-presets.js`:

1. **Default** - Blue, Green, Orange (saat ini)
2. **Professional** - Navy, Teal, Gold
3. **Modern** - Purple, Pink, Blue
4. **Nature** - Green, Brown, Amber
5. **Ocean** - Blue, Cyan, Teal
6. **Minimal** - Slate, Gray, Black
7. **Vibrant** - Orange, Purple, Pink
8. **Sunset** - Orange, Red, Pink

Lihat warna lengkap di: `src/config/theme-presets.js`

---

## 🌙 Dark Mode

Dark mode sudah otomatis tersedia!

**Toggle di:**
- Sidebar (bawah) → Switch "Dark Mode"
- Akan tersimpan di browser

**Auto-detect system preference:**
- Jika user belum pernah set, akan ikuti system

---

## ⚙️ File yang Terpengaruh

Ketika Anda edit `theme.js`, otomatis update:

✅ Semua tombol  
✅ Semua link  
✅ Sidebar menu aktif  
✅ Icons  
✅ Status badges  
✅ Focus rings  
✅ Hover effects  
✅ Dark mode colors  

**Tidak perlu edit file lain!**

---

## 🎯 Best Practices

### ✅ Pilih warna yang kontras
Pastikan warna primary terlihat jelas di background putih

### ✅ Test di dark mode
Setelah ubah warna, coba toggle dark mode

### ✅ Gunakan color picker
Gunakan tool online untuk pilih warna:
- https://uicolors.app/create
- https://coolors.co/

### ❌ Jangan terlalu banyak warna
Cukup 3 warna utama (primary, secondary, accent)

---

## 🚀 Restart (Jika Perlu)

Jika warna tidak berubah:

```bash
# Stop dev server (Ctrl+C)
# Restart
npm run dev
```

Tapi biasanya **tidak perlu restart**, Vite auto-reload! ⚡

---

## 📞 Bantuan

### Warna tidak berubah?
1. Pastikan syntax JavaScript benar
2. Check console untuk errors
3. Restart dev server

### Mau kembali ke default?
Copy warna dari `defaultTheme` di `theme-presets.js`

---

## 🎉 Selamat!

Anda sekarang bisa mengubah SELURUH warna aplikasi hanya dengan:

**1 File → 1 Edit → Simpan → Done!** ✨

File: `src/config/theme.js`  
Edit: Baris 17-55 (colors section)  
Simpan: Ctrl+S  
Result: Seluruh aplikasi berubah warna! 🎨

---

**Mudah kan? Happy theming! 🎨✨**

