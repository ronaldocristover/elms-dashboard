<template>
  <MainLayout>
    <Breadcrumb :items="breadcrumbs" />
    
    <div class="mb-6">
      <h1 class="text-3xl font-bold text-gray-800 dark:text-gray-100">Form Components Demo</h1>
      <p class="text-gray-600 dark:text-gray-400 mt-1">
        Showcase semua komponen form yang tersedia dengan dark mode support
      </p>
    </div>

    <!-- Demo Form -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-8 mb-8">
      <form @submit.prevent="handleSubmit" class="space-y-8">
        
        <!-- Section: Text Inputs -->
        <div>
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
            Text Inputs
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              v-model="form.textInput"
              label="Text Input"
              type="text"
              placeholder="Masukkan text"
              required
            />
            
            <FormInput
              v-model="form.emailInput"
              label="Email Input"
              type="email"
              placeholder="email@example.com"
            />
            
            <FormInput
              v-model="form.numberInput"
              label="Number Input"
              type="number"
              placeholder="123"
            />
            
            <FormInput
              v-model="form.telInput"
              label="Phone Input"
              type="tel"
              placeholder="081234567890"
            />

            <FormInput
              v-model="form.urlInput"
              label="URL Input"
              type="url"
              placeholder="https://example.com"
            />

            <FormInput
              v-model="form.passwordInput"
              label="Password Input"
              type="password"
              placeholder="••••••••"
            />
          </div>
        </div>

        <!-- Section: Textarea & WYSIWYG -->
        <div>
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
            Text Area & Rich Editor
          </h2>
          <div class="space-y-6">
            <FormInput
              v-model="form.textareaInput"
              label="Textarea"
              type="textarea"
              placeholder="Tulis deskripsi panjang di sini..."
              :rows="4"
            />

            <WysiwygEditor
              v-model="form.wysiwygContent"
              label="WYSIWYG Editor"
              placeholder="Tulis konten dengan formatting..."
            />
          </div>
        </div>

        <!-- Section: Selects & Dropdowns -->
        <div>
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
            Select & Dropdowns
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormInput
              v-model="form.selectInput"
              label="Select Dropdown"
              type="select"
              required
            >
              <option value="">Pilih opsi</option>
              <option value="option1">Opsi 1</option>
              <option value="option2">Opsi 2</option>
              <option value="option3">Opsi 3</option>
            </FormInput>

            <FilterDropdown
              v-model="form.filterSelect"
              label="Filter Dropdown"
              placeholder="Pilih kategori"
              :options="categoryOptions"
            />
          </div>
        </div>

        <!-- Section: Date Inputs -->
        <div>
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
            Date Inputs
          </h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <DatePicker
              v-model="form.singleDate"
              label="Single Date"
              required
            />

            <DateRangePicker
              v-model="form.dateRange"
              label="Date Range"
              required
            />
          </div>
        </div>

        <!-- Section: Switches & Toggles -->
        <div>
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
            Switches & Toggles
          </h2>
          <div class="space-y-4 bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            <SwitchToggle
              v-model="form.switch1"
              label="Enable Notifications"
              description="Terima notifikasi email untuk update terbaru"
            />
            
            <SwitchToggle
              v-model="form.switch2"
              label="Public Profile"
              description="Profil Anda dapat dilihat oleh pengguna lain"
            />
            
            <SwitchToggle
              v-model="form.switch3"
              label="Auto Save"
              description="Simpan perubahan secara otomatis"
            />
          </div>
        </div>

        <!-- Section: File Uploads -->
        <div>
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
            File Uploads
          </h2>
          <div class="space-y-6">
            <FileUploader
              v-model="form.singleFile"
              label="Single File Upload"
              accept=".pdf,.doc,.docx"
              acceptText="PDF, DOC, DOCX hingga 10MB"
            />

            <FileUploader
              v-model="form.multipleFiles"
              label="Multiple Files Upload"
              :multiple="true"
              accept=".pdf,.doc,.docx,.xls,.xlsx"
              acceptText="PDF, DOC, XLS hingga 10MB per file"
            />

            <ImageUploader
              v-model="form.singleImage"
              label="Single Image Upload"
            />

            <ImageUploader
              v-model="form.multipleImages"
              label="Multiple Images Upload"
              :multiple="true"
              maxSizeText="5MB"
            />
          </div>
        </div>

        <!-- Section: Checkboxes & Radios -->
        <div>
          <h2 class="text-xl font-semibold text-gray-800 dark:text-gray-100 mb-4 pb-2 border-b border-gray-200 dark:border-gray-700">
            Checkboxes & Radios
          </h2>
          <div class="space-y-6">
            <!-- Checkboxes -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Pilih Minat (Multiple)
              </label>
              <div class="space-y-2">
                <label class="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    v-model="form.checkboxes"
                    value="programming"
                    class="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded focus:ring-primary-500 focus:ring-2"
                  />
                  <span class="ml-3 text-sm text-gray-800 dark:text-gray-100">Programming</span>
                </label>
                <label class="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    v-model="form.checkboxes"
                    value="design"
                    class="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded focus:ring-primary-500 focus:ring-2"
                  />
                  <span class="ml-3 text-sm text-gray-800 dark:text-gray-100">Design</span>
                </label>
                <label class="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    v-model="form.checkboxes"
                    value="marketing"
                    class="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 rounded focus:ring-primary-500 focus:ring-2"
                  />
                  <span class="ml-3 text-sm text-gray-800 dark:text-gray-100">Marketing</span>
                </label>
              </div>
            </div>

            <!-- Radio Buttons -->
            <div>
              <label class="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
                Pilih Level (Single)
              </label>
              <div class="space-y-2">
                <label class="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    v-model="form.radioInput"
                    value="beginner"
                    class="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:ring-2"
                  />
                  <span class="ml-3 text-sm text-gray-800 dark:text-gray-100">Beginner</span>
                </label>
                <label class="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    v-model="form.radioInput"
                    value="intermediate"
                    class="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:ring-2"
                  />
                  <span class="ml-3 text-sm text-gray-800 dark:text-gray-100">Intermediate</span>
                </label>
                <label class="flex items-center p-3 bg-gray-50 dark:bg-gray-900 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer transition-colors">
                  <input
                    type="radio"
                    v-model="form.radioInput"
                    value="advanced"
                    class="w-4 h-4 text-primary-600 bg-gray-100 dark:bg-gray-800 border-gray-300 dark:border-gray-600 focus:ring-primary-500 focus:ring-2"
                  />
                  <span class="ml-3 text-sm text-gray-800 dark:text-gray-100">Advanced</span>
                </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Section: Form Actions -->
        <div class="pt-6 border-t border-gray-200 dark:border-gray-700">
          <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div class="flex items-center space-x-2">
              <svg class="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p class="text-sm text-gray-600 dark:text-gray-400">
                Semua field dengan dark mode support
              </p>
            </div>
            <div class="flex gap-3 w-full sm:w-auto">
              <BaseButton
                type="button"
                variant="outline"
                @click="resetForm"
                class="flex-1 sm:flex-none"
              >
                Reset Form
              </BaseButton>
              <BaseButton
                type="submit"
                variant="primary"
                class="flex-1 sm:flex-none"
              >
                Simpan Data
              </BaseButton>
            </div>
          </div>
        </div>
      </form>
    </div>

    <!-- Data Preview -->
    <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-4">Form Data Preview</h3>
      <pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-auto text-sm text-gray-800 dark:text-gray-100">{{ JSON.stringify(form, null, 2) }}</pre>
    </div>

    <!-- Success Modal -->
    <ConfirmModal
      v-model="showSuccessModal"
      title="Data Berhasil Disimpan!"
      message="Semua data form telah berhasil disimpan ke sistem."
      confirm-text="OK"
      type="success"
      @confirm="showSuccessModal = false"
    />
  </MainLayout>
</template>

<script setup>
import { ref } from 'vue'
import MainLayout from '../layouts/MainLayout.vue'
import Breadcrumb from '../components/Breadcrumb.vue'
import FormInput from '../components/FormInput.vue'
import FilterDropdown from '../components/FilterDropdown.vue'
import DatePicker from '../components/form/DatePicker.vue'
import DateRangePicker from '../components/form/DateRangePicker.vue'
import SwitchToggle from '../components/form/SwitchToggle.vue'
import FileUploader from '../components/form/FileUploader.vue'
import ImageUploader from '../components/form/ImageUploader.vue'
import WysiwygEditor from '../components/form/WysiwygEditor.vue'
import BaseButton from '../components/BaseButton.vue'
import ConfirmModal from '../components/ConfirmModal.vue'

const breadcrumbs = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Form Components Demo' }
]

const showSuccessModal = ref(false)

const form = ref({
  // Text inputs
  textInput: '',
  emailInput: '',
  numberInput: '',
  telInput: '',
  urlInput: '',
  passwordInput: '',
  
  // Textarea & WYSIWYG
  textareaInput: '',
  wysiwygContent: '',
  
  // Selects
  selectInput: '',
  filterSelect: '',
  
  // Dates
  singleDate: '',
  dateRange: { start: '', end: '' },
  
  // Switches
  switch1: false,
  switch2: true,
  switch3: false,
  
  // Files
  singleFile: null,
  multipleFiles: [],
  singleImage: null,
  multipleImages: [],
  
  // Checkboxes & Radios
  checkboxes: [],
  radioInput: ''
})

const categoryOptions = [
  { value: 'category1', label: 'Kategori 1' },
  { value: 'category2', label: 'Kategori 2' },
  { value: 'category3', label: 'Kategori 3' }
]

const handleSubmit = () => {
  console.log('Form submitted:', form.value)
  showSuccessModal.value = true
}

const resetForm = () => {
  form.value = {
    textInput: '',
    emailInput: '',
    numberInput: '',
    telInput: '',
    urlInput: '',
    passwordInput: '',
    textareaInput: '',
    wysiwygContent: '',
    selectInput: '',
    filterSelect: '',
    singleDate: '',
    dateRange: { start: '', end: '' },
    switch1: false,
    switch2: false,
    switch3: false,
    singleFile: null,
    multipleFiles: [],
    singleImage: null,
    multipleImages: [],
    checkboxes: [],
    radioInput: ''
  }
}
</script>

