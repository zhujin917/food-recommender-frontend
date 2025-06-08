<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import UIButton from './UIButton.vue';

const router = useRouter();

const rank = ref(0);

function addToHistory() {
  router.push('/history');
}
</script>

<template>
  <div class="rank">
    <div class="title">这个菜肴怎么样？</div>
    <div class="stars">
      <span class="star" v-for="i in 5" :key="i" @click="rank = i">
        <template v-if="i <= rank">&#xF186;</template>
        <template v-else>&#xF18B;</template>
      </span>
    </div>
    <UIButton :sub="true" @click="addToHistory">添加到历史</UIButton>
  </div>
</template>

<style scoped>
.rank {
  border: 2px solid rgb(0 0 0 / 0.1);
  background-color: #fff;
  padding: 20px;
  text-align: center;
  border-radius: 12px;

  > .title {
    font-size: 20px;
    font-weight: bolder;
  }

  > .stars {
    margin: 15px 0 25px 0;

    > .star {
      font-family: 'remixicon';
      font-size: 28px;
      color: #ffb900;
    }
  }
}
</style>
