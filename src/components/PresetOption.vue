<script setup lang="ts">
const props = defineProps<{
  emoji: string;
  name: string;
  selected: boolean;
}>();

const emit = defineEmits<{
  (e: 'select'): void;
}>();

function select() {
  emit('select');
}
</script>

<template>
  <div class="option">
    <div class="container" :class="{ selected }" @click="select">
      <div class="emoji">{{ props.emoji }}</div>
      <div class="name">{{ props.name }}</div>
    </div>
  </div>
</template>

<style scoped>
.option {
  display: inline-block;
  width: calc(100% / 3);

  .container {
    margin: 8px;
    padding: 10px 20px;
    background-color: #fff;
    border-radius: 12px;
    border: solid rgb(0 0 0 / 0.175);
    border-width: 2px 2px 4px 2px;
    background-color: #fff;
    text-align: center;
    &.selected {
      background-color: #deeff7;
      border-color: #1db1f7;
    }

    > .emoji {
      font-size: 50px;
    }

    > .name {
      font-size: 14px;
      margin: 6px 0;
    }
  }
}
</style>
