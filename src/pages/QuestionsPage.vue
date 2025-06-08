<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';

import TitleBar from '@/components/TitleBar.vue';
import UIButton from '@/components/UIButton.vue';
import questions from '@/assets/questions.json';

const router = useRouter();

const selectedOptions = ref(new Map());
function select(id: string, option: string) {
  selectedOptions.value.set(id, option);
  canSubmit.value = selectedOptions.value.size >= questions.length - 1;
}

const canSubmit = ref(false);
function submit() {
  router.push({
    path: '/result',
    query: Object.fromEntries(selectedOptions.value),
  });
}
</script>

<template>
  <TitleBar back-to="/home" title="今天打算怎么吃？" />
  <main>
    <div class="q" v-for="q of questions" :key="q.question">
      <div class="question">{{ q.question }}</div>
      <template v-if="q.options.length > 0">
        <div
          class="option"
          :class="{ selected: selectedOptions.get(q.id) == option }"
          v-for="option of q.options"
          :key="option"
          @click="select(q.id, option)"
        >
          {{ option }}
        </div>
      </template>
      <textarea
        v-else
        @change="(e) => selectedOptions.set('today_special_request', (e.target as any).value)"
      ></textarea>
    </div>
    <UIButton :disabled="!canSubmit" @click="submit">获取推荐</UIButton>
  </main>
</template>

<style scoped>
main {
  flex: 1;
  padding: 30px;
  overflow: auto;

  > .q {
    margin-bottom: 30px;

    > .question {
      font-size: 18px;
      font-weight: bolder;
      margin: 5px;
    }

    > .option {
      width: calc((100% / 3) - 15px);
      display: inline-block;
      background-color: #fff;
      margin: 5px;
      border: solid rgb(0 0 0 / 0.1);
      border-width: 2px 2px 4px 2px;
      border-radius: 10px;
      text-align: center;
      font-size: 17px;
      padding: 6px 0;
      &.selected {
        background-color: #deeff7;
        border-color: #1db1f7;
      }
    }

    > textarea {
      border: 2px solid rgb(0 0 0 / 0.1);
      font-family: inherit;
      border-radius: 10px;
      resize: none;
      outline: none;
      padding: 10px 15px;
      width: calc(100% - 34px);
      height: 80px;
    }
  }
}
</style>
