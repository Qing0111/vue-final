<template>
  <router-view v-slot="{ Component, route }">
    <transition name="route" mode="out-in">
      <div :key="route.name">
        <component :is="Component"></component>
      </div>
    </transition>
  </router-view>
</template>

<style lang="scss" scope>
@import "./assets/all.scss";

#app {
  perspective: 1000px;
  .route-enter-from {
    opacity: 0;
    transform: translateX(100px);
    // transform-origin: left;
    // transform: rotateY(90deg);
  }
  .route-enter-active {
    transform-style: preserve-3d;
    transition: all 0.2s;
  }
  .route-leave-to {
    opacity: 0;
    transform: translateX(-100px);
    // transform-origin: right;
    // transform: rotateY(-90deg);
  }
  .route-leave-active {
    transform-style: preserve-3d;
    transition: all 0.2s;
  }
}
</style>
