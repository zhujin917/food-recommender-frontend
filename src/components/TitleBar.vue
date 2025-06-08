<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps<{
  backTo?: string;
  title: string;
}>();

const emit = defineEmits<{
  (e: 'back'): void;
}>();

function back() {
  if (props.backTo) router.push(props.backTo);
  else emit('back');
}
</script>

<template>
  <header>
    <div class="back" @click="back">&#xEA60;</div>
    <div class="title">{{ props.title }}</div>
  </header>
</template>

<style scoped>
header {
  position: relative;
  height: 70px;
  border: solid rgb(0 0 0 / 0.1);
  border-width: 0 0 2px 0;
  background-color: #fff;
  color: rgb(0 0 0 / 0.5);

  > .back {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 16px;
    font-family: 'remixicon';
    font-size: 28px;
  }

  > .title {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    font-weight: bolder;
  }
}
</style>
