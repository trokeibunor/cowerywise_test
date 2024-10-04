<template>
    <div class="card">
      <div class="placeholder-image"></div>
      <div class="placeholder-text"></div>
      <div class="placeholder-text"></div>
    </div>
</template>
<style lang="scss" scoped>
$bg-color: #f2f2f2;
$card-color: #ffffff;
$card-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
$loading-color: #e0e0e0;
$loading-highlight: #f0f0f0;
@keyframes pulse {
  0% {
    background-color: $loading-color;
  }
  50% {
    background-color: $loading-highlight;
  }
  100% {
    background-color: $loading-color;
  }
}


.card {
    background-color: #f0f0f0;
    border-radius: 8px;
    // box-shadow: $card-shadow;
    padding: 20px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .placeholder-image {
      width: 100%;
      height: 80%;
    //   background-color: $bg-color;
      margin-bottom: 10px;
    }

    .placeholder-text {
      height: 10px;
      background-color: $bg-color;
      margin-bottom: 8px;
      animation: pulse 1.5s infinite ease-in-out;
      &:last-child {
        width: 60%;
      }
    }
  }
</style>