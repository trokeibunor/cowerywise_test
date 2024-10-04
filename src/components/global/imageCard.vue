<script setup>
const props = defineProps({
    splashItem: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div v-if="splashItem" class="holder" :style="{backgroundImage: `url(${splashItem?.urls?.regular})` }">
        <p>{{ splashItem?.user?.name }}</p>
        <p>{{ splashItem?.user?.location || 'No location' }}</p>
    </div>
</template>
<style lang="scss" scoped>
.holder{
    width: 100%;
    padding: 8px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-size: cover;
}
</style>