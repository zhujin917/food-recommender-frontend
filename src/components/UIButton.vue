<script setup lang="ts">
defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  sub: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div class="ui-button" :class="{ disabled, sub }">
    <slot></slot>
  </div>
</template>

<style scoped>
.ui-button {
  color: #fff;
  background-color: #1db1f7;
  border: solid rgb(0 0 0 / 0.15);
  border-width: 2px 2px 4px 2px;
  border-radius: 12px;
  text-align: center;
  font-size: 18px;
  font-weight: bolder;
  padding: 10px 0;
  &.disabled {
    filter: grayscale(1);
    opacity: 0.8;
    pointer-events: none;
  }
  &.sub {
    background-color: #fff;
    color: #1db1f7;
  }
}
</style>
