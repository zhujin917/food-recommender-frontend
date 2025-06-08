<script setup lang="ts">
import { ref } from 'vue';

import HistoryCard from '@/components/HistoryCard.vue';

const historyList = ref([
  {
    title: '黎巴嫩烤羊肉配鹰嘴豆泥',
    content:
      '中东菜中的经典选择，烤羊肉鲜嫩多汁，搭配鹰嘴豆泥的绵密口感，鲜香口味突出，适合约会的浪漫氛围。',
    time: new Date().getTime(),
    rank: 4,
  },
]);
</script>

<template>
  <header>历史</header>
  <main>
    <HistoryCard
      v-for="history of historyList"
      :key="history.time"
      :title="history.title"
      :content="history.content"
      :time="history.time"
      :rank="history.rank"
    />
  </main>
</template>

<style scoped>
header {
  padding: 30px 0 20px 0;
  width: 100%;
  font-size: 20px;
  font-weight: bolder;
  text-align: center;
}

main {
  flex: 1;
  overflow: auto;
}
</style>
