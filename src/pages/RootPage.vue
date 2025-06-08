<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import API from '@/api';

const router = useRouter();

onMounted(() => {
  new API('25', '/api/ifinit').get().then((data) => {
    router.push(data.initialized ? '/home' : '/init');
  });
});
</script>

<template>
  <div class="title">
    <!-- 食荐者 -->
  </div>
</template>

<style scoped>
.title {
  text-align: center;
  font-size: 28px;
  font-weight: bolder;
}
</style>
