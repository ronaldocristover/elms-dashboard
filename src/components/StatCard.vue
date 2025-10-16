<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-4 sm:p-6 hover:shadow-soft-md transition-all duration-200">
    <div class="flex items-center justify-between">
      <div class="flex-1 min-w-0">
        <p class="text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-400 mb-1 truncate">{{ title }}</p>
        <p class="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-2">{{ formattedValue }}</p>
        
        <!-- Change indicator -->
        <div v-if="showChange" class="flex items-center space-x-1 flex-wrap">
          <i 
            :class="[
              'w-3 h-3 sm:w-4 sm:h-4',
              changeType === 'increase' ? 'fas fa-arrow-up text-green-500' : 
              changeType === 'decrease' ? 'fas fa-arrow-down text-red-500' : 
              'fas fa-minus text-gray-500'
            ]"
          ></i>
          <span 
            :class="[
              'text-xs sm:text-sm font-medium',
              changeType === 'increase' ? 'text-green-600 dark:text-green-400' : 
              changeType === 'decrease' ? 'text-red-600 dark:text-red-400' : 
              'text-gray-600 dark:text-gray-400'
            ]"
          >
            {{ Math.abs(changePercentage) }}%
          </span>
          <span class="text-xs text-gray-500 dark:text-gray-400 hidden sm:inline">{{ changeLabel }}</span>
        </div>
      </div>
      
      <!-- Icon -->
      <div :class="[
        'w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center flex-shrink-0',
        iconBgClass
      ]">
        <i :class="[iconClass, iconColorClass]"></i>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  value: {
    type: [Number, String],
    required: true
  },
  changePercentage: {
    type: Number,
    default: 0
  },
  changeLabel: {
    type: String,
    default: 'vs yesterday'
  },
  showChange: {
    type: Boolean,
    default: true
  },
  icon: {
    type: String,
    required: true
  },
  iconColor: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'secondary', 'accent', 'success', 'warning', 'danger'].includes(value)
  },
  format: {
    type: String,
    default: 'number',
    validator: (value) => ['number', 'currency', 'percentage'].includes(value)
  }
})

const formattedValue = computed(() => {
  if (props.format === 'currency') {
    return `Rp ${Number(props.value).toLocaleString('id-ID')}`
  } else if (props.format === 'percentage') {
    return `${props.value}%`
  } else {
    return Number(props.value).toLocaleString('id-ID')
  }
})

const changeType = computed(() => {
  if (props.changePercentage > 0) return 'increase'
  if (props.changePercentage < 0) return 'decrease'
  return 'neutral'
})

const iconClass = computed(() => `fas fa-${props.icon} w-5 h-5 sm:w-6 sm:h-6`)

const iconBgClass = computed(() => {
  const colorMap = {
    primary: 'bg-primary-100 dark:bg-primary-900/30',
    secondary: 'bg-secondary-100 dark:bg-secondary-900/30',
    accent: 'bg-accent-100 dark:bg-accent-900/30',
    success: 'bg-green-100 dark:bg-green-900/30',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30',
    danger: 'bg-red-100 dark:bg-red-900/30'
  }
  return colorMap[props.iconColor] || colorMap.primary
})

const iconColorClass = computed(() => {
  const colorMap = {
    primary: 'text-primary-600 dark:text-primary-400',
    secondary: 'text-secondary-600 dark:text-secondary-400',
    accent: 'text-accent-600 dark:text-accent-400',
    success: 'text-green-600 dark:text-green-400',
    warning: 'text-yellow-600 dark:text-yellow-400',
    danger: 'text-red-600 dark:text-red-400'
  }
  return colorMap[props.iconColor] || colorMap.primary
})
</script>
