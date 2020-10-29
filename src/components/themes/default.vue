<template>
  <div class="flex flex-no-wrap home">
    <sidebar />
    <slot />
  </div>
</template>

<script>
import sidebar from '@/components/menu/sidebar.vue';

export default {
  components: {
    sidebar,
  },
};
</script>
<style lang="scss" scoped>
</style>
