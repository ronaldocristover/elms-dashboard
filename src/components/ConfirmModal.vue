<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 overflow-y-auto"
        @click.self="handleCancel"
      >
        <!-- Backdrop -->
        <div class="fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-70 backdrop-blur-sm"></div>
        
        <!-- Modal -->
        <div class="flex min-h-full items-center justify-center p-4">
          <Transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="opacity-0 scale-95"
            enter-to-class="opacity-100 scale-100"
            leave-active-class="transition ease-in duration-150"
            leave-from-class="opacity-100 scale-100"
            leave-to-class="opacity-0 scale-95"
          >
            <div
              v-if="modelValue"
              class="relative bg-white dark:bg-gray-800 rounded-xl shadow-soft-xl w-full max-w-md p-6"
            >
              <!-- Icon -->
              <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full mb-4"
                :class="iconBackgroundClass"
              >
                <svg class="h-6 w-6" :class="iconColorClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPath" />
                </svg>
              </div>

              <!-- Title -->
              <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100 text-center mb-2">
                {{ title }}
              </h3>

              <!-- Message -->
              <p class="text-sm text-gray-600 dark:text-gray-400 text-center mb-6">
                {{ message }}
              </p>

              <!-- Actions -->
              <div class="flex gap-3">
                <BaseButton
                  variant="outline"
                  class="flex-1"
                  @click="handleCancel"
                >
                  {{ cancelText }}
                </BaseButton>
                <BaseButton
                  :variant="confirmVariant"
                  class="flex-1"
                  @click="handleConfirm"
                >
                  {{ confirmText }}
                </BaseButton>
              </div>
            </div>
          </Transition>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed } from 'vue'
import BaseButton from './BaseButton.vue'

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: 'Konfirmasi'
  },
  message: {
    type: String,
    default: 'Apakah Anda yakin ingin melanjutkan?'
  },
  confirmText: {
    type: String,
    default: 'Ya, Lanjutkan'
  },
  cancelText: {
    type: String,
    default: 'Batal'
  },
  type: {
    type: String,
    default: 'danger',
    validator: (value) => ['danger', 'warning', 'info', 'success'].includes(value)
  }
})

const emit = defineEmits(['update:modelValue', 'confirm', 'cancel'])

const confirmVariant = computed(() => {
  const variants = {
    danger: 'danger',
    warning: 'warning',
    info: 'primary',
    success: 'success'
  }
  return variants[props.type]
})

const iconPath = computed(() => {
  const paths = {
    danger: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    warning: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    info: 'M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    success: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  }
  return paths[props.type]
})

const iconBackgroundClass = computed(() => {
  const classes = {
    danger: 'bg-red-100 dark:bg-red-900/30',
    warning: 'bg-accent-100 dark:bg-accent-900/30',
    info: 'bg-primary-100 dark:bg-primary-900/30',
    success: 'bg-secondary-100 dark:bg-secondary-900/30'
  }
  return classes[props.type]
})

const iconColorClass = computed(() => {
  const classes = {
    danger: 'text-red-600 dark:text-red-400',
    warning: 'text-accent-600 dark:text-accent-400',
    info: 'text-primary-600 dark:text-primary-400',
    success: 'text-secondary-600 dark:text-secondary-400'
  }
  return classes[props.type]
})

const handleConfirm = () => {
  emit('confirm')
  emit('update:modelValue', false)
}

const handleCancel = () => {
  emit('cancel')
  emit('update:modelValue', false)
}
</script>

