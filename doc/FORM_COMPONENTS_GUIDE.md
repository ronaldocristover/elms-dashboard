# 📝 Form Components Guide

Panduan lengkap penggunaan semua komponen form di LMS Dashboard.

---

## 🎯 Form Components yang Tersedia

### 1. **FormInput** - Text, Email, Number, URL, Password, Textarea
### 2. **DatePicker** - Single date picker
### 3. **DateRangePicker** - Date range (start & end)
### 4. **SwitchToggle** - On/off toggle switch
### 5. **FileUploader** - Upload file (single/multiple)
### 6. **ImageUploader** - Upload image (single/multiple) dengan preview
### 7. **WysiwygEditor** - Rich text editor (Quill.js)
### 8. **FilterDropdown** - Dropdown dengan label
### 9. **SearchInput** - Search bar dengan icon
### 10. **Pagination** - Table pagination

---

## 📖 Demo Page

**Lihat semua komponen:** `/form-demo`

Atau klik menu **"Form Components"** di sidebar.

---

## 📚 Dokumentasi Per Komponen

### 1. FormInput

**File:** `src/components/FormInput.vue`

#### Features:
- Support types: text, email, number, tel, url, password, textarea, select
- Dark mode support
- Required indicator (*)
- Placeholder
- Auto-styling konsisten

#### Usage:

```vue
<template>
  <FormInput
    v-model="form.name"
    label="Nama Lengkap"
    type="text"
    placeholder="Masukkan nama"
    required
  />

  <FormInput
    v-model="form.email"
    label="Email"
    type="email"
    placeholder="email@example.com"
  />

  <FormInput
    v-model="form.description"
    label="Deskripsi"
    type="textarea"
    :rows="4"
    placeholder="Tulis deskripsi..."
  />

  <FormInput
    v-model="form.category"
    label="Kategori"
    type="select"
    required
  >
    <option value="">Pilih kategori</option>
    <option value="cat1">Kategori 1</option>
    <option value="cat2">Kategori 2</option>
  </FormInput>
</template>

<script setup>
import FormInput from '@/components/FormInput.vue'
import { ref } from 'vue'

const form = ref({
  name: '',
  email: '',
  description: '',
  category: ''
})
</script>
```

---

### 2. DatePicker

**File:** `src/components/form/DatePicker.vue`

#### Features:
- HTML5 date input
- Dark mode
- Required support

#### Usage:

```vue
<template>
  <DatePicker
    v-model="form.birthDate"
    label="Tanggal Lahir"
    required
  />
</template>

<script setup>
import DatePicker from '@/components/form/DatePicker.vue'

const form = ref({
  birthDate: ''
})
</script>
```

---

### 3. DateRangePicker

**File:** `src/components/form/DateRangePicker.vue`

#### Features:
- Start & end date
- Dark mode
- Grid layout

#### Usage:

```vue
<template>
  <DateRangePicker
    v-model="form.dateRange"
    label="Periode Kursus"
    required
  />
</template>

<script setup>
import DateRangePicker from '@/components/form/DateRangePicker.vue'

const form = ref({
  dateRange: { start: '', end: '' }
})

// Access dates:
console.log(form.value.dateRange.start)  // "2024-01-01"
console.log(form.value.dateRange.end)    // "2024-12-31"
</script>
```

---

### 4. SwitchToggle

**File:** `src/components/form/SwitchToggle.vue`

#### Features:
- On/off toggle
- Label & description
- Animated transition
- Dark mode

#### Usage:

```vue
<template>
  <SwitchToggle
    v-model="form.notifications"
    label="Enable Notifications"
    description="Terima notifikasi email untuk update"
  />

  <SwitchToggle
    v-model="form.publicProfile"
    label="Public Profile"
  />
</template>

<script setup>
import SwitchToggle from '@/components/form/SwitchToggle.vue'

const form = ref({
  notifications: false,
  publicProfile: true
})

// Value: true/false (boolean)
</script>
```

---

### 5. FileUploader

**File:** `src/components/form/FileUploader.vue`

#### Features:
- Drag & drop support
- Single or multiple files
- File size display
- Remove files
- Accept specific types
- Dark mode

#### Usage:

```vue
<template>
  <!-- Single File -->
  <FileUploader
    v-model="form.document"
    label="Upload Dokumen"
    accept=".pdf,.doc,.docx"
    acceptText="PDF, DOC, DOCX hingga 10MB"
  />

  <!-- Multiple Files -->
  <FileUploader
    v-model="form.attachments"
    label="Upload Attachments"
    :multiple="true"
    accept=".pdf,.doc,.docx,.xls,.xlsx"
    acceptText="PDF, DOC, XLS hingga 10MB per file"
  />
</template>

<script setup>
import FileUploader from '@/components/form/FileUploader.vue'

const form = ref({
  document: null,        // File object
  attachments: []        // Array of File objects
})

// To send to backend:
const formData = new FormData()
formData.append('document', form.value.document)

// Multiple files:
form.value.attachments.forEach((file, index) => {
  formData.append(`attachment_${index}`, file)
})
</script>
```

---

### 6. ImageUploader

**File:** `src/components/form/ImageUploader.vue`

#### Features:
- Drag & drop images
- Image preview
- Single or multiple images
- Max size validation
- Remove images
- Dark mode

#### Usage:

```vue
<template>
  <!-- Single Image -->
  <ImageUploader
    v-model="form.avatar"
    label="Upload Avatar"
  />

  <!-- Multiple Images -->
  <ImageUploader
    v-model="form.gallery"
    label="Upload Gallery"
    :multiple="true"
    :maxSize="5 * 1024 * 1024"
    maxSizeText="5MB"
  />
</template>

<script setup>
import ImageUploader from '@/components/form/ImageUploader.vue'

const form = ref({
  avatar: null,          // File object
  gallery: []            // Array of File objects
})

// Images are automatically validated for:
// - File type (image/*)
// - Max size (default 5MB)
</script>
```

---

### 7. WysiwygEditor

**File:** `src/components/form/WysiwygEditor.vue`

#### Features:
- Rich text editing (Quill.js)
- Full toolbar (bold, italic, lists, etc)
- Image & link support
- Dark mode support
- HTML output

#### Usage:

```vue
<template>
  <WysiwygEditor
    v-model="form.content"
    label="Konten Kursus"
    placeholder="Tulis konten lengkap..."
    required
  />
</template>

<script setup>
import WysiwygEditor from '@/components/form/WysiwygEditor.vue'

const form = ref({
  content: ''  // HTML string
})

// Output example:
// "<p>Hello <strong>world</strong></p>"
</script>
```

---

### 8. Pagination

**File:** `src/components/Pagination.vue`

#### Features:
- Previous/Next buttons
- Page numbers
- Info text (showing X-Y of Z)
- Max pages display
- Dark mode

#### Usage:

```vue
<template>
  <Pagination
    :current-page="currentPage"
    :total-items="totalItems"
    :items-per-page="10"
    @update:current-page="currentPage = $event"
  />
</template>

<script setup>
import Pagination from '@/components/Pagination.vue'

const currentPage = ref(1)
const totalItems = ref(100)
const itemsPerPage = 10

// Compute paginated data:
const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return allData.value.slice(start, end)
})
</script>
```

---

### 9. BaseTable dengan Pagination

**File:** `src/components/BaseTable.vue` (Updated)

#### Features:
- Built-in pagination
- Enable/disable pagination
- Custom items per page

#### Usage:

```vue
<template>
  <BaseTable
    :columns="columns"
    :data="data"
    :loading="loading"
    :enable-pagination="true"
    :current-page="currentPage"
    :items-per-page="10"
    @update:current-page="currentPage = $event"
  >
    <!-- Slots for custom cells -->
  </BaseTable>
</template>

<script setup>
import BaseTable from '@/components/BaseTable.vue'

const currentPage = ref(1)
const data = ref([...]) // All data
const columns = [
  { key: 'name', label: 'Nama' },
  { key: 'email', label: 'Email' }
]

// Pagination handled automatically by BaseTable!
</script>
```

---

## 🎨 Complete Form Example

```vue
<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">
        Tambah Data
      </h1>
    </div>

    <div class="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-soft">
      <form @submit.prevent="handleSubmit" class="space-y-6">
        
        <!-- Basic Info -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormInput
            v-model="form.title"
            label="Judul"
            type="text"
            required
          />

          <FormInput
            v-model="form.email"
            label="Email"
            type="email"
            required
          />
        </div>

        <!-- Rich Content -->
        <WysiwygEditor
          v-model="form.content"
          label="Konten"
          required
        />

        <!-- Dates -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <DatePicker
            v-model="form.startDate"
            label="Tanggal Mulai"
            required
          />

          <DateRangePicker
            v-model="form.period"
            label="Periode"
          />
        </div>

        <!-- File Upload -->
        <ImageUploader
          v-model="form.thumbnail"
          label="Thumbnail"
        />

        <FileUploader
          v-model="form.documents"
          label="Dokumen Pendukung"
          :multiple="true"
        />

        <!-- Settings -->
        <div class="space-y-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
          <SwitchToggle
            v-model="form.isActive"
            label="Aktifkan"
            description="Set sebagai aktif"
          />
        </div>

        <!-- Actions -->
        <div class="flex justify-end gap-3 pt-4">
          <BaseButton variant="outline" @click="$router.push('/back')">
            Batal
          </BaseButton>
          <BaseButton type="submit">
            Simpan
          </BaseButton>
        </div>
      </form>
    </div>
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import FormInput from '@/components/FormInput.vue'
import DatePicker from '@/components/form/DatePicker.vue'
import DateRangePicker from '@/components/form/DateRangePicker.vue'
import SwitchToggle from '@/components/form/SwitchToggle.vue'
import FileUploader from '@/components/form/FileUploader.vue'
import ImageUploader from '@/components/form/ImageUploader.vue'
import WysiwygEditor from '@/components/form/WysiwygEditor.vue'
import BaseButton from '@/components/BaseButton.vue'

const form = ref({
  title: '',
  email: '',
  content: '',
  startDate: '',
  period: { start: '', end: '' },
  thumbnail: null,
  documents: [],
  isActive: true
})

const handleSubmit = () => {
  // Create FormData for file uploads
  const formData = new FormData()
  
  // Add text fields
  formData.append('title', form.value.title)
  formData.append('email', form.value.email)
  formData.append('content', form.value.content)
  
  // Add dates
  formData.append('startDate', form.value.startDate)
  formData.append('periodStart', form.value.period.start)
  formData.append('periodEnd', form.value.period.end)
  
  // Add files
  if (form.value.thumbnail) {
    formData.append('thumbnail', form.value.thumbnail)
  }
  
  form.value.documents.forEach((file, index) => {
    formData.append(`document_${index}`, file)
  })
  
  // Add boolean
  formData.append('isActive', form.value.isActive)
  
  // Send to API
  // await api.post('/endpoint', formData)
  
  console.log('Form submitted:', form.value)
}
</script>
```

---

## 🎨 Styling Guidelines

Semua komponen sudah include:
- ✅ Dark mode support
- ✅ Focus states (ring-2 ring-primary-500)
- ✅ Hover states
- ✅ Consistent border-radius (rounded-lg)
- ✅ Consistent spacing
- ✅ Soft shadows
- ✅ Transition animations

**Tidak perlu tambahkan class lagi!**

---

## 📋 Import Statements

```javascript
// Basic Form Components
import FormInput from '@/components/FormInput.vue'
import FilterDropdown from '@/components/FilterDropdown.vue'
import SearchInput from '@/components/SearchInput.vue'

// Advanced Form Components
import DatePicker from '@/components/form/DatePicker.vue'
import DateRangePicker from '@/components/form/DateRangePicker.vue'
import SwitchToggle from '@/components/form/SwitchToggle.vue'
import FileUploader from '@/components/form/FileUploader.vue'
import ImageUploader from '@/components/form/ImageUploader.vue'
import WysiwygEditor from '@/components/form/WysiwygEditor.vue'

// Table & Pagination
import BaseTable from '@/components/BaseTable.vue'
import Pagination from '@/components/Pagination.vue'

// Utilities
import BaseButton from '@/components/BaseButton.vue'
import ConfirmModal from '@/components/ConfirmModal.vue'
```

---

## 🔄 Pagination Usage

### Method 1: With BaseTable (Recommended)

```vue
<template>
  <BaseTable
    :columns="columns"
    :data="allData"
    :enable-pagination="true"
    :current-page="currentPage"
    :items-per-page="10"
    @update:current-page="currentPage = $event"
  />
</template>

<script setup>
const currentPage = ref(1)
const allData = ref([...]) // All your data
</script>
```

### Method 2: Manual Pagination

```vue
<template>
  <!-- Your table/cards here with paginatedData -->

  <Pagination
    :current-page="currentPage"
    :total-items="allData.length"
    :items-per-page="10"
    @update:current-page="currentPage = $event"
  />
</template>

<script setup>
const currentPage = ref(1)
const allData = ref([...])

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * 10
  const end = start + 10
  return allData.value.slice(start, end)
})
</script>
```

---

## 📤 Form Submission dengan Files

```javascript
const handleSubmit = async () => {
  const formData = new FormData()
  
  // Text fields
  formData.append('title', form.value.title)
  formData.append('description', form.value.description)
  
  // Rich text (HTML)
  formData.append('content', form.value.wysiwygContent)
  
  // Dates
  formData.append('date', form.value.singleDate)
  formData.append('start_date', form.value.dateRange.start)
  formData.append('end_date', form.value.dateRange.end)
  
  // Boolean (switches)
  formData.append('is_active', form.value.isActive)
  formData.append('notifications_enabled', form.value.notifications)
  
  // Single file
  if (form.value.document) {
    formData.append('document', form.value.document)
  }
  
  // Multiple files
  if (form.value.attachments && form.value.attachments.length > 0) {
    form.value.attachments.forEach((file, index) => {
      formData.append(`attachments[${index}]`, file)
    })
  }
  
  // Single image
  if (form.value.thumbnail) {
    formData.append('thumbnail', form.value.thumbnail)
  }
  
  // Multiple images
  if (form.value.gallery && form.value.gallery.length > 0) {
    form.value.gallery.forEach((file, index) => {
      formData.append(`gallery[${index}]`, file)
    })
  }
  
  // Array (checkboxes)
  formData.append('interests', JSON.stringify(form.value.checkboxes))
  
  // Send to API
  try {
    // const response = await axios.post('/api/endpoint', formData, {
    //   headers: { 'Content-Type': 'multipart/form-data' }
    // })
    
    console.log('Form submitted successfully')
  } catch (error) {
    console.error('Error submitting form:', error)
  }
}
```

---

## ✅ Validation Example

```vue
<script setup>
import { ref, computed } from 'vue'

const form = ref({
  email: '',
  password: '',
  confirmPassword: ''
})

const errors = ref({})

const isValidEmail = computed(() => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(form.value.email)
})

const passwordsMatch = computed(() => {
  return form.value.password === form.value.confirmPassword
})

const validateForm = () => {
  errors.value = {}
  
  if (!isValidEmail.value) {
    errors.value.email = 'Email tidak valid'
  }
  
  if (form.value.password.length < 8) {
    errors.value.password = 'Password minimal 8 karakter'
  }
  
  if (!passwordsMatch.value) {
    errors.value.confirmPassword = 'Password tidak sama'
  }
  
  return Object.keys(errors.value).length === 0
}

const handleSubmit = () => {
  if (validateForm()) {
    // Submit form
  }
}
</script>

<template>
  <FormInput v-model="form.email" label="Email" type="email" />
  <p v-if="errors.email" class="text-sm text-red-600 dark:text-red-400 mt-1">
    {{ errors.email }}
  </p>
</template>
```

---

## 🎯 Best Practices

### ✅ Do:
- Gunakan FormInput untuk text/email/number/textarea
- Gunakan WysiwygEditor untuk rich content
- Gunakan ImageUploader untuk images (lebih baik dari FileUploader)
- Gunakan SwitchToggle untuk boolean (lebih UX-friendly dari checkbox)
- Gunakan DateRangePicker untuk periode
- Enable pagination untuk data >10 items
- Validate sebelum submit
- Use FormData untuk file uploads
- Show loading state saat submit

### ❌ Don't:
- Jangan hardcode styles (sudah di-handle di component)
- Jangan lupa v-model binding
- Jangan submit tanpa validasi
- Jangan lupa handle errors
- Jangan pakai alert() (gunakan ConfirmModal)

---

## 📁 File Structure

```
src/
├── components/
│   ├── FormInput.vue           ← Basic inputs
│   ├── SearchInput.vue         ← Search bar
│   ├── FilterDropdown.vue      ← Dropdown filter
│   ├── Pagination.vue          ← Pagination
│   ├── BaseTable.vue           ← Table with pagination
│   └── form/
│       ├── DatePicker.vue      ← Single date
│       ├── DateRangePicker.vue ← Date range
│       ├── SwitchToggle.vue    ← Toggle switch
│       ├── FileUploader.vue    ← File upload
│       ├── ImageUploader.vue   ← Image upload
│       └── WysiwygEditor.vue   ← Rich text editor
```

---

## 🚀 Quick Start

### 1. Lihat Demo
```
Login → Sidebar → "Form Components" menu
atau
Navigasi ke: /form-demo
```

### 2. Copy Component
Pilih component yang dibutuhkan dari demo

### 3. Import & Use
```vue
<script setup>
import FormInput from '@/components/FormInput.vue'
</script>

<template>
  <FormInput v-model="data" label="Label" />
</template>
```

### 4. Done! ✨
Component sudah styled, responsive, dark mode ready!

---

## 📦 Dependencies

```json
{
  "@vueup/vue-quill": "^1.x.x",  // WYSIWYG editor
  "vue-datepicker-next": "^1.x.x" // Date picker (optional, kita pakai HTML5)
}
```

---

## 🎉 Summary

### Total Form Components: 10
1. FormInput (text, email, number, textarea, select)
2. DatePicker
3. DateRangePicker
4. SwitchToggle
5. FileUploader
6. ImageUploader
7. WysiwygEditor
8. FilterDropdown
9. SearchInput
10. Pagination

### Features:
- ✅ Dark mode support
- ✅ Responsive design
- ✅ Drag & drop untuk files/images
- ✅ Image preview
- ✅ File size validation
- ✅ Consistent styling
- ✅ Easy to use
- ✅ Reusable
- ✅ Well documented

---

**Demo Page:** `/form-demo`  
**Created:** October 16, 2024  
**Status:** ✅ Production Ready

**Happy Form Building! 📝✨**

