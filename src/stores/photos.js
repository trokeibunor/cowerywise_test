import {ref, computed} from 'vue'
import { defineStore } from 'pinia'
import api from '@/api';

export const usePhotosStore = defineStore('photos', () =>{
    const photos = ref([]);
    const loading = ref(false);
    const searchActive = ref(false);
    const searchTerm = ref('');
    const error = ref(null)
    const getPhotos = computed(() => photos.value)
    async function fetchPhotos(query, page, per_page=8) {
        loading.value = true
        try {
            const {data} = await api.get('/search/photos', {
                params: {
                    query,
                    page,
                    per_page
                }
            })
            photos.value = data.results;
            console.log(data.results)
            return data;
        } catch (error) {
            
        } finally {
            loading.value = false
        }
    }

    return {photos, getPhotos,loading, fetchPhotos}
})