<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import TitleBar from '@/components/TitleBar.vue';
import ResultCard from '@/components/ResultCard.vue';
import LoadingPattern from '@/components/LoadingPattern.vue';
import RankRecipe from '@/components/RankRecipe.vue';
import API from '@/api';

const route = useRoute();
const router = useRouter();

const dishesResultList = ref<any[]>([]);

onMounted(() => {
  new API('25', '/api/getsuggest').post(route.query, 'json').then((data) => {
    dishesResultList.value = data.data.suggestions;
  });
});

const showingRecipeInfo = ref<any>(null);

function back() {
  if (showingRecipeInfo.value) showingRecipeInfo.value = null;
  else router.push('/home');
}

const showingRecipeResult = ref<any>(null);
function goRecipe(suggestion: string, reason: string) {
  showingRecipeResult.value = null;
  showingRecipeInfo.value = { dishName: suggestion, reason };
  new API('25', '/api/getrecipe').post(showingRecipeInfo.value, 'json').then((data) => {
    showingRecipeResult.value = data.data.htmlContent;
  });
}
</script>

<template>
  <TitleBar :title="showingRecipeInfo ? '烹饪菜谱' : '推荐菜肴'" @back="back" />
  <main v-if="!showingRecipeInfo">
    <ResultCard
      v-for="result of dishesResultList"
      :key="result.suggestion"
      :suggestion="result.suggestion"
      :reason="result.reason"
      :relevance="result.relevance"
      @go-recipe="goRecipe"
    />
    <div class="loading" v-if="dishesResultList.length == 0">
      <LoadingPattern color="#aaa" style="width: 80px" />
    </div>
  </main>
  <main v-else style="padding: 10px 30px 30px 30px">
    <div class="loading" v-if="!showingRecipeResult">
      <LoadingPattern color="#aaa" style="width: 80px" />
    </div>
    <template v-else>
      <div class="content" v-html="showingRecipeResult"></div>
      <RankRecipe />
    </template>
  </main>
</template>

<style scoped>
main {
  position: relative;
  flex: 1;
  overflow: auto;

  > .loading {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
