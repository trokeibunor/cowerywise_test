<script setup>
import { onMounted, computed } from 'vue';
import searchInput from "../components/global/searchInput.vue";
import LoadingScreen from '@/components/global/LoadingScreen.vue';
import imageCard from '@/components/global/imageCard.vue';
import { usePhotosStore } from "@/stores/photos";
import { useSiteStore } from '@/stores/site';

const photosService = usePhotosStore();
const siteService = useSiteStore();

onMounted(async()=> {
  await loadData()
})
//Custom functions
const loadData = async(query,page=1) => {
  await photosService.fetchPhotos(query,page)
}
const clearSearch = async() => {
  photosService.searchActive = false
  await loadData()
}
// Show loader screen before call
</script>
<template>
  <main>
    <template v-if="photosService.searchActive">
      <h2 v-if="photosService.loading">Searching for "{{ photosService.searchTerm }}"</h2>
      <h2 v-else>Search Result for "{{ photosService.searchTerm }}" <a href="" class="clear" @click="clearSearch">clear search</a></h2>
    </template>
    <searchInput v-else/>
    <template v-if="photosService.loading">
        <LoadingScreen/>
      </template>
    <div v-else class="masonry">
        <imageCard 
          v-for="(item, index) in photosService.getPhotos" 
          :key="index" 
          :splash-item="item"  
          class="masonary-item"
          @click="siteService.activateModal(item?.urls?.regular,item?.user?.name, item?.user?.location)"
        />
    </div>
  </main>
</template>
<style lang="scss" scoped>
main{
  display:flex;
  flex-direction: column;
  gap: 1.5rem;
  .clear {
    font-size: 14px;
  }
}
</style>
