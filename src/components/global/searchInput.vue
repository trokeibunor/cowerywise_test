<script setup>
import searchIcon from "../icons/searchIcon.vue";
</script>
<template>
    <div class="search">
        <button>
            <searchIcon width="100%" height="100%"/>
        </button>
        <input type="text" placeholder="Please Enter Search">
    </div>
</template>
<style lang="scss" scoped>
    .search {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    button {
        width: 2rem;
        height: 2rem;
        position: absolute;
        top: 50%;
        left: 1%;
        transform: translateY(-50%);
        background-color: transparent;
        border: none;
        cursor: pointer;
    }

    input {
        width: 100%;
        border: none;
        border-radius: 8px;
        background-color: #fff;
        box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
        padding: 1rem 1rem 1rem 2.5rem;
    }
}
</style>