<script setup>
import { onMounted, computed } from 'vue';
import searchInput from "../components/global/searchInput.vue";
import LoadingScreen from '@/components/global/LoadingScreen.vue';
import imageCard from '@/components/global/imageCard.vue';
import { usePhotosStore } from "@/stores/photos";
// onmounted make api call to unsplash
const photosService = usePhotosStore();
onMounted(async()=> {
  await loadData('African')
})
//Custom functions
const loadData = async(query,page=1) => {
  await photosService.fetchPhotos(query,page)
}
// Show loader screen before call
</script>
<template>
  <main>
    <searchInput/>
    <template v-if="photosService.loading">
        <LoadingScreen/>
      </template>
    <div v-else class="masonry">
        <imageCard v-for="(item, index) in photosService.getPhotos" :key="index" :splash-item="item"  class="masonary-item"/>
    </div>
  </main>
</template>
<style lang="scss" scoped>
main{
  display:flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>
