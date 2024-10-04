<script setup>
const props = defineProps({
    splashItem: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div v-if="splashItem" class="holder" :style="{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url(${splashItem?.urls?.regular})` }">
        <div class="text-box">
            <p>{{ splashItem?.user?.name }}</p>
            <p>{{ splashItem?.user?.location || 'No location' }}</p>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.holder{
    cursor: pointer;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    gap: 0;
    background-size: cover;
    background-position: center center;
    justify-content: flex-end;
    color: #fff;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
    background-blend-mode: multiply;
    .text-box{
        width: 90%;
        margin: 0 auto 1rem;
    }
    &:hover .text-box {
        padding: 0.25rem;
        transform: translateY(-1px);
    }
}
</style>