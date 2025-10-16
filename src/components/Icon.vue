<template>
  <i 
    :class="[
      'icon',
      iconClass,
      sizeClass,
      colorClass,
      { 'animate-spin': spin }
    ]"
    :style="customStyle"
  ></i>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl', '2xl'].includes(value)
  },
  color: {
    type: String,
    default: 'current'
  },
  spin: {
    type: Boolean,
    default: false
  },
  customStyle: {
    type: Object,
    default: () => ({})
  }
})

const iconClass = computed(() => {
  // Font Awesome icons
  if (props.name.startsWith('fa-')) {
    return `fas ${props.name}`
  }
  
  // Lucide icons (if using Lucide)
  if (props.name.startsWith('lucide-')) {
    return `lucide ${props.name.replace('lucide-', '')}`
  }
  
  // Default to Font Awesome
  return `fas fa-${props.name}`
})

const sizeClass = computed(() => {
  const sizes = {
    xs: 'text-xs',
    sm: 'text-sm', 
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl'
  }
  return sizes[props.size] || sizes.md
})

const colorClass = computed(() => {
  if (props.color === 'current') return 'text-current'
  
  const colorMap = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-500',
    accent: 'text-accent-500',
    success: 'text-secondary-500',
    warning: 'text-warning-500',
    danger: 'text-danger-500',
    info: 'text-info-500',
    gray: 'text-gray-500',
    white: 'text-white',
    black: 'text-black'
  }
  
  return colorMap[props.color] || 'text-current'
})
</script>

<style scoped>
.icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

/* Custom icon animations */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.5; }
}

.icon.pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
</style>
