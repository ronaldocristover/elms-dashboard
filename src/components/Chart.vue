<template>
  <div class="bg-white dark:bg-gray-800 rounded-lg shadow-soft p-6">
    <div class="flex items-center justify-between mb-6">
      <h3 class="text-lg font-semibold text-gray-800 dark:text-gray-100">{{ title }}</h3>
      <div class="flex items-center space-x-2">
        <select 
          v-model="selectedPeriod" 
          @change="$emit('period-change', selectedPeriod)"
          class="text-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-1 bg-white dark:bg-gray-700 text-gray-800 dark:text-gray-100"
        >
          <option value="7d">Last 7 days</option>
          <option value="30d">Last 30 days</option>
          <option value="90d">Last 90 days</option>
        </select>
      </div>
    </div>
    
    <!-- Chart Container -->
    <div class="relative h-64">
      <canvas ref="chartCanvas" class="w-full h-full"></canvas>
    </div>
    
    <!-- Chart Legend -->
    <div v-if="showLegend" class="flex items-center justify-center space-x-6 mt-4">
      <div v-for="(item, index) in legendData" :key="index" class="flex items-center space-x-2">
        <div 
          class="w-3 h-3 rounded-full" 
          :style="{ backgroundColor: item.color }"
        ></div>
        <span class="text-sm text-gray-600 dark:text-gray-400">{{ item.label }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watch, nextTick } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  data: {
    type: Array,
    required: true
  },
  type: {
    type: String,
    default: 'line', // line, bar, area
    validator: (value) => ['line', 'bar', 'area'].includes(value)
  },
  showLegend: {
    type: Boolean,
    default: false
  },
  legendData: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['period-change'])

const chartCanvas = ref(null)
const selectedPeriod = ref('7d')
let chart = null

// Simple chart implementation using Canvas
const drawChart = () => {
  if (!chartCanvas.value) return
  
  const canvas = chartCanvas.value
  const ctx = canvas.getContext('2d')
  const rect = canvas.getBoundingClientRect()
  
  // Set canvas size
  canvas.width = rect.width * window.devicePixelRatio
  canvas.height = rect.height * window.devicePixelRatio
  ctx.scale(window.devicePixelRatio, window.devicePixelRatio)
  
  // Clear canvas
  ctx.clearRect(0, 0, rect.width, rect.height)
  
  if (!props.data || props.data.length === 0) return
  
  const padding = 40
  const chartWidth = rect.width - (padding * 2)
  const chartHeight = rect.height - (padding * 2)
  
  // Find min and max values
  const values = props.data.map(d => d.value)
  const minValue = Math.min(...values)
  const maxValue = Math.max(...values)
  const valueRange = maxValue - minValue || 1
  
  // Draw grid lines
  ctx.strokeStyle = '#e5e7eb'
  ctx.lineWidth = 1
  for (let i = 0; i <= 5; i++) {
    const y = padding + (chartHeight / 5) * i
    ctx.beginPath()
    ctx.moveTo(padding, y)
    ctx.lineTo(padding + chartWidth, y)
    ctx.stroke()
  }
  
  // Draw chart based on type
  if (props.type === 'line' || props.type === 'area') {
    drawLineChart(ctx, padding, chartWidth, chartHeight, minValue, valueRange)
  } else if (props.type === 'bar') {
    drawBarChart(ctx, padding, chartWidth, chartHeight, minValue, valueRange)
  }
  
  // Draw labels
  drawLabels(ctx, padding, chartWidth, chartHeight)
}

const drawLineChart = (ctx, padding, chartWidth, chartHeight, minValue, valueRange) => {
  const points = props.data.map((d, index) => ({
    x: padding + (chartWidth / (props.data.length - 1)) * index,
    y: padding + chartHeight - ((d.value - minValue) / valueRange) * chartHeight
  }))
  
  // Draw area under line
  if (props.type === 'area') {
    ctx.fillStyle = 'rgba(59, 130, 246, 0.1)'
    ctx.beginPath()
    ctx.moveTo(points[0].x, padding + chartHeight)
    points.forEach(point => ctx.lineTo(point.x, point.y))
    ctx.lineTo(points[points.length - 1].x, padding + chartHeight)
    ctx.closePath()
    ctx.fill()
  }
  
  // Draw line
  ctx.strokeStyle = '#3b82f6'
  ctx.lineWidth = 2
  ctx.beginPath()
  points.forEach((point, index) => {
    if (index === 0) {
      ctx.moveTo(point.x, point.y)
    } else {
      ctx.lineTo(point.x, point.y)
    }
  })
  ctx.stroke()
  
  // Draw points
  ctx.fillStyle = '#3b82f6'
  points.forEach(point => {
    ctx.beginPath()
    ctx.arc(point.x, point.y, 4, 0, 2 * Math.PI)
    ctx.fill()
  })
}

const drawBarChart = (ctx, padding, chartWidth, chartHeight, minValue, valueRange) => {
  const barWidth = chartWidth / props.data.length * 0.8
  const barSpacing = chartWidth / props.data.length * 0.2
  
  props.data.forEach((d, index) => {
    const barHeight = ((d.value - minValue) / valueRange) * chartHeight
    const x = padding + (chartWidth / props.data.length) * index + barSpacing / 2
    const y = padding + chartHeight - barHeight
    
    ctx.fillStyle = '#3b82f6'
    ctx.fillRect(x, y, barWidth, barHeight)
  })
}

const drawLabels = (ctx, padding, chartWidth, chartHeight) => {
  ctx.fillStyle = '#6b7280'
  ctx.font = '12px Inter, sans-serif'
  ctx.textAlign = 'center'
  
  // X-axis labels
  props.data.forEach((d, index) => {
    const x = padding + (chartWidth / (props.data.length - 1)) * index
    ctx.fillText(d.label, x, padding + chartHeight + 20)
  })
  
  // Y-axis labels
  ctx.textAlign = 'right'
  for (let i = 0; i <= 5; i++) {
    const value = Math.round((maxValue - minValue) * (5 - i) / 5 + minValue)
    const y = padding + (chartHeight / 5) * i + 4
    ctx.fillText(value.toString(), padding - 10, y)
  }
}

onMounted(() => {
  nextTick(() => {
    drawChart()
  })
})

watch(() => props.data, () => {
  nextTick(() => {
    drawChart()
  })
}, { deep: true })

// Handle window resize
window.addEventListener('resize', () => {
  nextTick(() => {
    drawChart()
  })
})
</script>
