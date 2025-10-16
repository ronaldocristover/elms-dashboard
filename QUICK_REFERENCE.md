# ⚡ Quick Reference - LMS Dashboard

## 🚀 Panduan Cepat untuk Developer

---

## 📝 Form Components - Copy & Paste Ready!

### Text Input
```vue
<FormInput v-model="form.name" label="Nama" type="text" required />
```

### Email Input
```vue
<FormInput v-model="form.email" label="Email" type="email" required />
```

### Textarea
```vue
<FormInput v-model="form.desc" label="Deskripsi" type="textarea" :rows="4" />
```

### Select Dropdown
```vue
<FormInput v-model="form.category" label="Kategori" type="select" required>
  <option value="">Pilih</option>
  <option value="1">Option 1</option>
</FormInput>
```

### Date Picker
```vue
<DatePicker v-model="form.date" label="Tanggal" required />
```

### Date Range
```vue
<DateRangePicker v-model="form.range" label="Periode" required />
<!-- Access: form.range.start, form.range.end -->
```

### Switch/Toggle
```vue
<SwitchToggle v-model="form.active" label="Aktif" description="Set aktif/nonaktif" />
```

### File Upload
```vue
<FileUploader v-model="form.file" label="Upload File" accept=".pdf,.doc" />
```

### Image Upload
```vue
<ImageUploader v-model="form.image" label="Upload Gambar" />
```

### WYSIWYG Editor
```vue
<WysiwygEditor v-model="form.content" label="Konten" />
```

---

## 🎨 Buttons

```vue
<!-- Primary -->
<BaseButton variant="primary">Simpan</BaseButton>

<!-- Outline -->
<BaseButton variant="outline">Batal</BaseButton>

<!-- Danger -->
<BaseButton variant="danger">Hapus</BaseButton>

<!-- Warning -->
<BaseButton variant="warning">Edit</BaseButton>

<!-- Accent (CTA) -->
<BaseButton variant="accent">Subscribe Now!</BaseButton>

<!-- Sizes -->
<BaseButton size="sm">Small</BaseButton>
<BaseButton size="md">Medium</BaseButton>
<BaseButton size="lg">Large</BaseButton>
```

---

## 📊 Table dengan Pagination

```vue
<template>
  <BaseTable
    :columns="columns"
    :data="allData"
    :enable-pagination="true"
    :current-page="currentPage"
    :items-per-page="10"
    @update:current-page="currentPage = $event"
  >
    <template #actions="{ row }">
      <BaseButton size="sm" @click="edit(row)">Edit</BaseButton>
      <BaseButton size="sm" variant="danger" @click="del(row)">Hapus</BaseButton>
    </template>
  </BaseTable>
</template>

<script setup>
const currentPage = ref(1)
const columns = [
  { key: 'name', label: 'Nama' },
  { key: 'email', label: 'Email' }
]
</script>
```

---

## ✅ Modal Konfirmasi

```vue
<template>
  <!-- Trigger -->
  <BaseButton variant="danger" @click="showModal = true">
    Hapus
  </BaseButton>

  <!-- Modal -->
  <ConfirmModal
    v-model="showModal"
    title="Hapus Data"
    message="Yakin ingin menghapus?"
    confirm-text="Ya, Hapus"
    cancel-text="Batal"
    type="danger"
    @confirm="handleDelete"
  />
</template>

<script setup>
const showModal = ref(false)

const handleDelete = () => {
  // Delete logic
}
</script>
```

---

## 🔍 Search & Filter

```vue
<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
    <SearchInput
      v-model="search"
      placeholder="Cari..."
      class="md:col-span-2"
    />
    
    <FilterDropdown
      v-model="filter"
      label="Status"
      :options="[
        { value: 'active', label: 'Aktif' },
        { value: 'inactive', label: 'Nonaktif' }
      ]"
    />
  </div>
</template>
```

---

## 🌙 Dark Mode

### Toggle:
```javascript
import { useTheme } from '@/composables/useTheme'

const { isDarkMode, toggleDarkMode } = useTheme()

// Toggle
toggleDarkMode()
```

### In Template:
```vue
<!-- Always include dark: variants -->
<div class="bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100">
```

---

## 🎨 Change Theme Color

### Edit:
```javascript
// src/config/theme.js

primary: {
  500: '#3B82F6'  // 👈 Ubah ini!
}
```

### Save → Done! ✨

---

## 📁 Import Statements

```javascript
// Layout
import MainLayout from '@/layouts/MainLayout.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

// Buttons & Table
import BaseButton from '@/components/BaseButton.vue'
import BaseTable from '@/components/BaseTable.vue'
import Pagination from '@/components/Pagination.vue'

// Search & Filter
import SearchInput from '@/components/SearchInput.vue'
import FilterDropdown from '@/components/FilterDropdown.vue'

// Basic Form
import FormInput from '@/components/FormInput.vue'

// Advanced Form
import DatePicker from '@/components/form/DatePicker.vue'
import DateRangePicker from '@/components/form/DateRangePicker.vue'
import SwitchToggle from '@/components/form/SwitchToggle.vue'
import FileUploader from '@/components/form/FileUploader.vue'
import ImageUploader from '@/components/form/ImageUploader.vue'
import WysiwygEditor from '@/components/form/WysiwygEditor.vue'

// Utilities
import ConfirmModal from '@/components/ConfirmModal.vue'

// Stores
import { useAuthStore } from '@/stores/auth'
import { useCoursesStore } from '@/stores/courses'
import { useTheme } from '@/composables/useTheme'

// Router
import { useRouter, useRoute } from 'vue-router'
```

---

## 🎯 Common Patterns

### Full CRUD Page:
```vue
<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'

const router = useRouter()
const currentPage = ref(1)
const search = ref('')
const data = ref([])

const filteredData = computed(() => {
  return data.value.filter(item =>
    item.name.toLowerCase().includes(search.value.toLowerCase())
  )
})
</script>
```

### Form Submission:
```javascript
const handleSubmit = async () => {
  const formData = new FormData()
  
  // Text fields
  formData.append('title', form.value.title)
  
  // Files
  if (form.value.image) {
    formData.append('image', form.value.image)
  }
  
  // Booleans
  formData.append('is_active', form.value.isActive)
  
  // await api.post('/endpoint', formData)
}
```

---

## 🎨 Color Classes

### Primary (Blue):
```
bg-primary-500 text-primary-600
bg-primary-100 (light)
text-primary-400 (dark mode)
```

### Secondary (Green):
```
bg-secondary-500 text-secondary-600
bg-secondary-100 (light)
```

### Accent (Orange):
```
bg-accent-500 text-accent-600
bg-accent-100 (light)
```

### Status Badges:
```vue
<!-- Aktif -->
<span class="px-2.5 py-1 text-xs font-medium rounded-lg bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-400">
  Aktif
</span>

<!-- Nonaktif -->
<span class="px-2.5 py-1 text-xs font-medium rounded-lg bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400">
  Nonaktif
</span>
```

---

## 📋 Breadcrumb

```vue
<Breadcrumb :items="[
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Kursus', to: '/courses' },
  { label: 'Tambah Kursus' }
]" />
```

---

## 🔧 Utils

### Format Date:
```javascript
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
```

### Format Currency:
```javascript
const formatCurrency = (amount) => {
  return `Rp ${amount.toLocaleString('id-ID')}`
}
```

---

## 📖 Quick Links

| Document | Purpose |
|----------|---------|
| README.md | Main documentation |
| HOW_TO_CHANGE_THEME.md | Change colors |
| FORM_COMPONENTS_GUIDE.md | Form components |
| COMPLETE_FEATURE_LIST.md | All features |

---

**Simpan file ini untuk referensi cepat! 📌**

