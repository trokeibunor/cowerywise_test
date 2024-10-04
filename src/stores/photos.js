import {ref, computed} from 'vue'
import { defineStore } from 'pinia'
import api from '@/api';

export const usePhotosStore = defineStore('photos', () =>{
    const photos = ref([]);
    const loading = ref(false);
    const searchActive = ref(false);
    const searchTerm = ref('');
    const error = ref(null);
    const errorMsg = ref('');
    const getPhotos = computed(() => photos.value)
    async function fetchPhotos(query, page, per_page=8) {
        loading.value = true
        console.log(query);
        if(query) {
            searchTerm.value = query;
            searchActive.value = true
        }
        try {
            const {data} = await api.get('/search/photos', {
                params: {
                    query: query || 'African',
                    page,
                    per_page
                }
            })
            // check if search isn't first search
            photos.value = data.results;
            return data;
        } catch (err) {
            error.value = true
            console.log(err);
            errorMsg.value = err
        } finally {
            loading.value = false
        }
    }

    return {photos, getPhotos,loading, searchActive, searchTerm, error, errorMsg, fetchPhotos}
})