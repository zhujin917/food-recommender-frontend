<script setup lang="ts">
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/zh-cn';

dayjs.extend(relativeTime);
dayjs.locale('zh-cn');

const props = defineProps<{
  title: string;
  content: string;
  time: number;
  rank: number;
}>();
</script>

<template>
  <div class="card">
    <div class="title">{{ props.title }}</div>
    <div class="content">{{ props.content }}</div>
    <div class="bottom">
      <div class="time">{{ dayjs(props.time).fromNow() }}</div>
      <div class="rank">
        <span v-for="i in 5" :key="i">
          <template v-if="i <= props.rank">&#xF186;</template>
          <template v-else>&#xF18B;</template>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 0 20px 15px 20px;
  padding: 18px 20px;
  background-color: #fff;
  border-radius: 12px;
  border: 2px solid rgb(0 0 0 / 0.15);

  > .title {
    font-size: 18px;
    font-weight: bolder;
  }

  > .content {
    font-size: 16px;
    margin: 10px 0;
  }

  > .bottom {
    display: flex;
    flex-direction: row;

    > .time {
      flex: 1;
      font-size: 14px;
      color: rgb(0 0 0 / 0.6);
    }

    > .rank {
      font-family: 'remixicon';
      font-size: 17px;
      color: #ffb900;
    }
  }
}
</style>
