<template>
  <div class="flex h-screen bg-slate-50">
    <!-- Sidebar -->
    <Sidebar />
    
    <!-- Main Content -->
    <div class="flex-1 lg:ml-64 overflow-auto">
      <div class="p-4 md:p-6 lg:p-8 pt-16 lg:pt-8">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import Sidebar from '../components/Sidebar.vue'
</script>

