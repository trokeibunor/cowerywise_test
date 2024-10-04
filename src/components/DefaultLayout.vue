<script setup>
import { useSiteStore } from '@/stores/site';
import modal from './global/modal.vue';
const siteService = useSiteStore();
</script>
<template>
    <main class="layout">
        <div class="modal-holder" v-if="siteService.isModalActive">
            <modal/>
        </div>
        <div class="container">
            <slot/>
        </div>
    </main>
</template>