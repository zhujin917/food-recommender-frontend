<script setup lang="ts">
const props = defineProps<{
  color: string;
}>();
</script>

<template>
  <svg viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" :style="{ color: props.color }">
    <rect x="0">
      <animate
        attributeName="fill-opacity"
        repeatCount="indefinite"
        dur="1.8s"
        values="1;0.3;0.3;1"
      />
    </rect>
    <rect x="14">
      <animate
        attributeName="fill-opacity"
        repeatCount="indefinite"
        dur="1.8s"
        values="0.3;1;0.3;0.3"
      />
    </rect>
    <rect x="28">
      <animate
        attributeName="fill-opacity"
        repeatCount="indefinite"
        dur="1.8s"
        values="0.3;0.3;1;0.3"
      />
    </rect>
  </svg>
</template>

<style scoped>
rect {
  y: 14px;
  width: 8px;
  height: 8px;
  rx: 4px;
  fill: currentColor;
}
</style>
