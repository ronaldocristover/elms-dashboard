# eLMS Frontend

Aplikasi Learning Management System (LMS) Dashboard yang lengkap dibangun dengan Vue 3, Vite, Tailwind CSS, dan Pinia.

## 🎯 Fitur Utama

### Authentication
- 🔐 **Halaman Login** - Form login yang elegant dengan gradient background
- 🚪 **Logout** - Fungsi logout yang aman
- 🔒 **Route Guard** - Proteksi halaman dengan authentication guard

### Dashboard
- 📊 **Dashboard Utama** - Overview statistik dan data terkini
- 📈 **Statistik Real-time** - Total kursus, member, pendapatan, dan kursus aktif
- 🎯 **Quick Access** - Akses cepat ke kursus dan member terbaru
- 💰 **Revenue Tracking** - Tracking pendapatan dari kursus

### Manajemen Kursus
- 📚 **Daftar Kursus** - Tabel dengan filter dan search
- ➕ **Tambah Kursus** - Form untuk menambah kursus baru
- ✏️ **Edit Kursus** - Update informasi kursus
- 👁️ **Detail Kursus** - Lihat informasi lengkap kursus
- 🔍 **Filter & Search** - Filter berdasarkan kategori dan status
- 🗑️ **Hapus Kursus** - Hapus kursus yang tidak diperlukan

### Manajemen Member
- 👥 **Daftar Member** - Tabel dengan filter dan search
- ➕ **Tambah Member** - Form untuk menambah member baru
- ✏️ **Edit Member** - Update informasi member
- 👁️ **Detail Member** - Lihat profil lengkap member
- 🔍 **Filter & Search** - Filter berdasarkan role dan status
- 🗑️ **Hapus Member** - Hapus member yang tidak aktif

### Manajemen Users (Admin, Instructor, Student)
- 👤 **User Management** - Kelola users dengan 3 role berbeda
- 🎭 **Role-Based Access** - Admin, Instructor, dan Student role
- 📝 **User Profiles** - Profil lengkap dengan avatar
- ✏️ **Profile Management** - Halaman profil untuk user login
- 🔑 **Password Management** - UI untuk reset/recovery password

### Module Tambahan (Store Ready)
- 📝 **Content Management** - Materials (PDF, video, documents)
- 📊 **Assessment & Testing** - Quiz, exam, grading system
- 📈 **Progress Tracking** - Course completion, certificates
- 📢 **Communication** - Announcements, forums (planned)
- 💳 **Payment/Billing** - Invoices, subscriptions, payment tracking

### Komponen Reusable
- 🔘 **BaseButton** - Button dengan berbagai variant (primary, secondary, success, danger, warning, outline)
- 📋 **BaseTable** - Tabel dengan slot untuk custom cell dan actions
- 🔎 **SearchInput** - Input pencarian dengan icon
- 🎚️ **FilterDropdown** - Dropdown filter yang reusable
- 🍞 **Breadcrumb** - Navigasi breadcrumb untuk setiap halaman
- 📱 **Sidebar** - Menu navigasi samping yang responsive

## 🛠️ Teknologi yang Digunakan

- **Vue 3** - Framework JavaScript progresif dengan Composition API
- **Vite** - Build tool yang cepat dan modern
- **Tailwind CSS v3** - Framework CSS utility-first
- **Pinia** - State management untuk Vue 3
- **Vue Router** - Official router untuk Vue.js dengan navigation guards

## 📁 Struktur Project

```
elms-frontend/
├── src/
│   ├── assets/              # Asset statis (images, fonts, dll)
│   ├── components/          # Komponen reusable
│   │   ├── BaseButton.vue
│   │   ├── BaseTable.vue
│   │   ├── SearchInput.vue
│   │   ├── FilterDropdown.vue
│   │   ├── Breadcrumb.vue
│   │   └── Sidebar.vue (Responsive dengan mobile menu)
│   ├── layouts/             # Layout templates
│   │   └── MainLayout.vue (Responsive layout)
│   ├── router/              # Konfigurasi Vue Router
│   │   └── index.js
│   ├── stores/              # Pinia stores
│   │   ├── auth.js          # Authentication
│   │   ├── courses.js       # Courses management
│   │   ├── members.js       # Members management
│   │   ├── users.js         # Users management (Admin/Instructor/Student)
│   │   ├── materials.js     # Learning materials
│   │   ├── assessments.js   # Quiz & tests
│   │   ├── progress.js      # Progress tracking & certificates
│   │   ├── announcements.js # Announcements
│   │   └── payments.js      # Payments & subscriptions
│   ├── views/               # Halaman-halaman utama
│   │   ├── Login.vue
│   │   ├── Dashboard.vue (dengan revenue tracking)
│   │   ├── Profile.vue      # User profile management
│   │   ├── courses/
│   │   │   ├── Index.vue    # Daftar kursus
│   │   │   ├── Create.vue   # Form tambah kursus
│   │   │   ├── Edit.vue     # Form edit kursus
│   │   │   └── Detail.vue   # Detail kursus
│   │   ├── members/
│   │   │   ├── Index.vue    # Daftar member
│   │   │   ├── Create.vue   # Form tambah member
│   │   │   ├── Edit.vue     # Form edit member
│   │   │   └── Detail.vue   # Detail member
│   │   └── users/
│   │       ├── Index.vue    # Daftar users
│   │       ├── Create.vue   # Form tambah user
│   │       ├── Edit.vue     # Form edit user
│   │       └── Detail.vue   # Detail user
│   ├── App.vue              # Root component
│   ├── main.js              # Entry point aplikasi
│   └── style.css            # Global styles dengan Tailwind
├── public/                  # File publik yang tidak diproses
├── index.html               # HTML template
├── package.json             # Dependencies dan scripts
├── tailwind.config.js       # Konfigurasi Tailwind CSS
├── postcss.config.js        # Konfigurasi PostCSS
└── vite.config.js           # Konfigurasi Vite
```

## 🚀 Cara Menjalankan

### Install Dependencies

```bash
cd elms-frontend
npm install
```

### Development Server

```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:5173` (atau port lain jika 5173 sedang digunakan)

### Build untuk Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🔐 Cara Login

Untuk demo, Anda dapat menggunakan **username dan password apa saja** untuk login. Sistem akan menyimpan session di localStorage.

Contoh:
- Username: `admin`
- Password: `admin123`

## 📋 Fitur Tambahan

### Filter dan Search
Setiap halaman index (daftar) dilengkapi dengan:
- **Search bar** - Cari berdasarkan nama, email, atau kata kunci lainnya
- **Filter dropdown** - Filter berdasarkan kategori, status, atau role
- **Real-time filtering** - Hasil filter dan search ditampilkan secara langsung

### Breadcrumb Navigation
Setiap halaman memiliki breadcrumb untuk memudahkan navigasi:
```
Dashboard > Manajemen Kursus > Detail Kursus
```

### Komponen Based
Semua komponen dibuat reusable untuk menghindari duplikasi kode:
- Button dengan berbagai variant dan size
- Table dengan slot untuk customisasi
- Form input components yang konsisten
- Filter dan search yang dapat digunakan di berbagai halaman

## 🎨 Design System

### Colors
- **Primary (Blue)**: Aksi utama, navigasi aktif
- **Success (Green)**: Status aktif, aksi berhasil
- **Warning (Yellow)**: Edit, peringatan
- **Danger (Red)**: Hapus, status nonaktif
- **Secondary (Gray)**: Aksi sekunder
- **Purple**: Role instruktur, sertifikat

### Button Variants
```vue
<BaseButton variant="primary">Primary</BaseButton>
<BaseButton variant="secondary">Secondary</BaseButton>
<BaseButton variant="success">Success</BaseButton>
<BaseButton variant="danger">Danger</BaseButton>
<BaseButton variant="warning">Warning</BaseButton>
<BaseButton variant="outline">Outline</BaseButton>
```

### Button Sizes
```vue
<BaseButton size="sm">Small</BaseButton>
<BaseButton size="md">Medium</BaseButton>
<BaseButton size="lg">Large</BaseButton>
```

## 🔄 State Management

Menggunakan Pinia untuk state management dengan 3 store:

### Auth Store
- `user` - Data user yang login
- `isAuthenticated` - Status autentikasi
- `login()` - Fungsi login
- `logout()` - Fungsi logout
- `checkAuth()` - Cek status autentikasi

### Courses Store
- `courses` - Array data kursus
- `getCourseById()` - Ambil kursus berdasarkan ID
- `addCourse()` - Tambah kursus baru
- `updateCourse()` - Update kursus
- `deleteCourse()` - Hapus kursus

### Members Store
- `members` - Array data member
- `getMemberById()` - Ambil member berdasarkan ID
- `addMember()` - Tambah member baru
- `updateMember()` - Update member
- `deleteMember()` - Hapus member

## 🛣️ Routing

Aplikasi menggunakan Vue Router dengan authentication guard:

### Public Routes
- `/` - Redirect ke login
- `/login` - Halaman login

### Protected Routes (Requires Authentication)
- `/dashboard` - Dashboard utama
- `/courses` - Daftar kursus
- `/courses/create` - Form tambah kursus
- `/courses/:id` - Detail kursus
- `/courses/:id/edit` - Form edit kursus
- `/members` - Daftar member
- `/members/create` - Form tambah member
- `/members/:id` - Detail member
- `/members/:id/edit` - Form edit member

## 📱 Responsive Design

Aplikasi **fully responsive** untuk berbagai ukuran layar:
- **Mobile** (< 768px) - Mobile menu dengan hamburger button
- **Tablet** (768px - 1024px) - Optimized layout
- **Desktop** (> 1024px) - Full sidebar navigation

### Responsive Features:
- ✅ Mobile-first approach
- ✅ Hamburger menu untuk mobile
- ✅ Touch-friendly buttons dan links
- ✅ Responsive tables (card view di mobile)
- ✅ Adaptive spacing dan typography
- ✅ Collapsible sidebar
- ✅ Optimized for all screen sizes

## 🔧 Pengembangan Lebih Lanjut

Beberapa ide untuk pengembangan selanjutnya:
- [ ] Integrasi dengan backend REST API
- [ ] Implementasi real authentication dengan JWT
- [ ] Upload gambar/file untuk thumbnail dan avatar
- [ ] Pagination untuk tabel
- [ ] Export data ke Excel/PDF
- [ ] Implementasi quiz dan assignment system
- [ ] Progress tracking untuk siswa
- [ ] Real-time notifications
- [ ] User profile management dengan photo upload
- [ ] Advanced analytics dan reporting
- [ ] Email notifications
- [ ] Multi-language support
- [ ] Dark mode

## 📄 License

MIT

## 👨‍💻 Developer

Dibuat dengan ❤️ menggunakan Vue 3 dan Tailwind CSS
