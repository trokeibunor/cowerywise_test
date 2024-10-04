import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useSiteStore = defineStore('site', () => {
  const isModalActive = ref(false);
  const modalImage = ref('')
  const modalName = ref('');
  const modalLocation = ref('');
  function activateModal(url, name, location) {
    modalImage.value = url;
    modalName.value = name;
    modalLocation.value= location;
    isModalActive.value = true
  }
  function deactivateModal() {
    modalImage.value = '';
    modalName.value = '';
    modalLocation.value = '';
    isModalActive.value = false
  }

  return { isModalActive,modalImage, modalLocation,modalName, activateModal, deactivateModal }
})
