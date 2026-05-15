<template>
  <div class="flex items-center justify-center">
    <div
      class="relative flex items-center justify-center"
      :style="{ width: size + 'px', height: size + 'px' }"
    >
      <!-- Background Circle -->
      <svg class="absolute top-0 left-0 w-full h-full -rotate-90">
        <circle
          :cx="center"
          :cy="center"
          :r="radius"
          :stroke-width="strokeWidth"
          class="text-gray-200"
          stroke="currentColor"
          fill="transparent"
        />
        
        <!-- Progress Circle -->
        <circle
          :cx="center"
          :cy="center"
          :r="radius"
          :stroke-width="strokeWidth"
          stroke-linecap="round"
          class="text-green-500 transition-all duration-500 ease-out"
          stroke="currentColor"
          fill="transparent"
          :stroke-dasharray="circumference"
          :stroke-dashoffset="dashOffset"
        />
      </svg>

      <!-- Center Content (Icon + % or slot) -->
      <div class="flex flex-col items-center justify-center">
        <slot>
          <i :class="icon" class="text-xl mb-1 text-[#0DB760]"></i>
        </slot>
        <span class="text-sm font-semibold text-gray-700">
          {{ percentage }}%
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  percentage: {
    type: Number,
    required: true,
  },
  icon: {
    type: String,
    default: "fas fa-star",
  },
  size: {
    type: Number,
    default: 100,
  },
  strokeWidth: {
    type: Number,
    default: 8,
  },
});

const center = computed(() => props.size / 2);
const radius = computed(() => (props.size - props.strokeWidth) / 2);
const circumference = computed(() => 2 * Math.PI * radius.value);

const dashOffset = computed(() => {
  return circumference.value - (props.percentage / 100) * circumference.value;
});
</script>