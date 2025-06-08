<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterView, RouterLink, useRoute } from 'vue-router';

const route = useRoute();
const showFooter = ref(false);

watch(
  () => route.path,
  (to) => {
    showFooter.value = to == '/home' || to == '/history';
  },
);

const footerItems = ref([
  {
    to: '/home',
    icon: '\uF42A',
    filledIcon: '\uF429',
    text: '吃饭',
  },
  {
    to: '/history',
    icon: '\uEE17',
    filledIcon: '\uEE17',
    text: '历史',
  },
]);
</script>

<template>
  <RouterView />
  <footer :class="{ show: showFooter }">
    <div class="item" v-for="item of footerItems" :key="item.to">
      <RouterLink :to="item.to" :class="{ actived: item.to == route.path }">
        <div class="icon">{{ route.path == item.to ? item.filledIcon : item.icon }}</div>
        <div class="text">{{ item.text }}</div>
      </RouterLink>
    </div>
  </footer>
</template>

<style scoped>
footer {
  position: relative;
  height: 70px;
  padding: 0 15px;
  background-color: #fff;
  border: solid rgb(0 0 0 / 0.1);
  border-width: 2px 0 0 0;
  display: flex;
  flex-direction: row;
  &:not(.show) {
    display: none;
  }

  > .item {
    flex: 1;

    > a {
      display: block;
      width: fit-content;
      height: 100%;
      margin: 0 auto;
      text-align: center;
      text-decoration: none;
      color: #000;
      cursor: default;
      &.actived {
        color: #1e9fff;
      }

      > .icon {
        font-family: 'remixicon';
        font-size: 26px;
        padding-top: 10px;
      }

      > .text {
        font-size: 13px;
        padding-top: 2px;
      }
    }
  }
}
</style>
