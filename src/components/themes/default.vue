<template>
  <div class="flex flex-col flex-no-wrap home">
    <HomeHeader />
    <slot />
  </div>
</template>

<script>
import HomeHeader from '@/components/headers/HomeHeader.vue';

export default {
  components: {
    HomeHeader,
  },
};
</script>
<style lang="scss" scoped>
</style>
