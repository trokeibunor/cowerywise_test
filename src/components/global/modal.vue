<script setup>
import cancelIcon from '../icons/cancelIcon.vue';
import { useSiteStore } from '@/stores/site';
const siteService = useSiteStore();
</script>
<template>
    <div class="modal_item">
        <button @click="siteService.deactivateModal">
            <cancelIcon/>
        </button>
        <img :src="siteService.modalImage" alt="">
        <div class="text-holder">
            <h4>{{ siteService.modalName }}</h4>
            <p>{{ siteService.modalLocation || 'No Location Available' }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.modal_item {
    position:relative;
    display: flex;
    flex-direction: column;
    background: #fff;
    width: 80%;
    border-radius: 8px;
    button {
        cursor: pointer;
        position: absolute;
        right: -5%;
        top: -5%;
        width: 2rem;
        height: 2rem;
        padding: 8px;
        border-radius: 50%;
        outline: none;
        border: none;
    }
    img{
        // used contain and background image
        width: 100%;
        height: 75vh;
        object-fit: contain;
        background-color: #f0f2f5;
        border-radius: 8px 8px 0px 0px;
    }
    .text-holder {
        width: 90%;
        margin: 1.5rem auto;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
}
</style>