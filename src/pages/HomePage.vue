<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import UIButton from '@/components/UIButton.vue';
import presets from '@/assets/presets.json';

const router = useRouter();

const presetEmojis = ref<string[]>([]);
for (const arr of Object.values(presets)) {
  for (const item of arr) {
    presetEmojis.value.push(item[0]);
  }
}

function start() {
  router.push('/questions');
}
</script>

<template>
  <main>
    <div class="title">今天不知道吃什么？</div>
    <div class="para">点击下方「开始」获取建议！</div>
    <div class="presetEmojis">
      <div class="group" v-for="i in 2" :key="i">
        <div class="emoji" v-for="emoji of presetEmojis" :key="emoji">{{ emoji }}</div>
      </div>
    </div>
    <UIButton @click="start">开始</UIButton>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  padding: 30px;
  display: flex;
  flex-direction: column;
  overflow: hidden;

  > .title {
    font-size: 28px;
    font-weight: bolder;
    margin: 50px 0 10px 0;
  }

  > .para {
    font-size: 17px;
  }

  > .presetEmojis {
    position: relative;
    flex: 1;
    opacity: 0.6;

    > .group {
      position: absolute;
      white-space: nowrap;
      &:first-child {
        top: calc(50% - 160px);
        animation: 120s linear infinite alternate ltr;
      }
      &:last-child {
        top: calc(50% + 10px);
        animation: 120s linear infinite alternate rtl;
      }

      > .emoji {
        display: inline-block;
        font-size: 100px;
      }
    }
  }
}

@keyframes ltr {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-90%);
  }
}

@keyframes rtl {
  from {
    transform: translateX(-90%);
  }
  to {
    transform: translateX(0);
  }
}
</style>
