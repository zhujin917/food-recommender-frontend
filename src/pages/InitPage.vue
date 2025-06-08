<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { pull } from 'lodash';

import API from '@/api';
import presets from '@/assets/presets.json';
import PresetOption from '@/components/PresetOption.vue';
import UIButton from '@/components/UIButton.vue';

const router = useRouter();

const presetsEntries = ref(Object.entries(presets));

function getMaxSelectedNum(arrLength: number) {
  return Math.min(arrLength, 8);
}

const selectedPresets = ref(new Map());
for (const typeName of Object.keys(presets)) {
  selectedPresets.value.set(typeName, []);
}
const canSubmit = ref(false);
function selectPreset(typeName: string, presetName: string, maxSelectedNum: number) {
  const arr = selectedPresets.value.get(typeName);
  if (arr.includes(presetName)) selectedPresets.value.set(typeName, pull(arr, presetName));
  else if (arr.length < maxSelectedNum) arr.push(presetName);

  canSubmit.value = (() => {
    let i = 0;
    for (const arr of selectedPresets.value.values()) {
      if (arr.length < Math.ceil(getMaxSelectedNum(presetsEntries.value[i][1].length) / 3)) {
        return false;
      }
      i += 1;
    }
    return true;
  })();
}

async function submit() {
  let overallPresetsList: any[] = [];
  selectedPresets.value.forEach((arr: string[], typeName) => {
    overallPresetsList = overallPresetsList.concat(
      arr.map((val) => ({
        type: 'food',
        value: {
          name: val,
          category: typeName,
        },
      })),
    );
  });
  await new API('25', '/api/init').post(
    {
      preferences: JSON.stringify(overallPresetsList),
      dislikes: '[]',
    },
    'json',
  );
  router.push('/home');
}
</script>

<template>
  <div class="title">你一般喜欢吃什么？</div>
  <div class="presets">
    <div class="group" v-for="entries of presetsEntries" :key="entries[0]">
      <div class="typeName">
        {{ entries[0] }}
        <span class="small">
          ({{ selectedPresets.get(entries[0]).length }}/{{ getMaxSelectedNum(entries[1].length) }})
        </span>
      </div>
      <div class="list">
        <PresetOption
          v-for="preset of entries[1]"
          :key="preset[1]"
          :emoji="preset[0]"
          :name="preset[1]"
          :selected="selectedPresets.get(entries[0]).includes(preset[1])"
          @select="selectPreset(entries[0], preset[1], getMaxSelectedNum(entries[1].length))"
        />
      </div>
    </div>
    <UIButton style="margin: 30px" @click="submit" :disabled="!canSubmit">完成</UIButton>
  </div>
</template>

<style scoped>
.title {
  font-size: 28px;
  font-weight: bolder;
  margin: 30px;
}

.presets {
  flex: 1;
  overflow: auto;

  > .group {
    padding: 0 20px;

    > .typeName {
      font-size: 22px;
      font-weight: bolder;
      margin: 0 0 8px 10px;

      > .small {
        font-size: 17px;
      }
    }

    > .list {
      margin-bottom: 30px;
    }
  }
}
</style>
