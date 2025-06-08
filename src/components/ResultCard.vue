<script setup lang="ts">
const props = defineProps<{
  suggestion: string;
  reason: string;
  relevance: number;
}>();

const emit = defineEmits<{
  (e: 'goRecipe', suggestion: string, reason: string): void;
}>();
</script>

<template>
  <div class="card">
    <div class="suggestion">{{ props.suggestion }}</div>
    <div class="relevance">相关性：{{ props.relevance }}/10</div>
    <div class="reason">{{ props.reason }}</div>
    <div class="recipe" @click="emit('goRecipe', props.suggestion, props.reason)">查看食谱</div>
  </div>
</template>

<style scoped>
.card {
  position: relative;
  margin: 15px 20px;
  padding: 18px 20px;
  background-color: #fff;
  border-radius: 12px;
  border: 2px solid rgb(0 0 0 / 0.15);

  > .suggestion {
    font-size: 18px;
    font-weight: bolder;
  }

  > .relevance {
    color: rgb(0 0 0 / 0.6);
    font-size: 14px;
  }

  > .reason {
    font-size: 16px;
    margin: 10px 0 18px 0;
  }

  > .recipe {
    text-align: center;
    border: solid rgb(0 0 0 / 0.1);
    border-width: 2px 0 0 0;
    padding-top: 18px;
    font-size: 17px;
    font-weight: bolder;
    color: #1e9fff;
  }
}
</style>
