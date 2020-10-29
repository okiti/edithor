<template>
  <button
    class="flex items-center h-auto content-center bg-primary w-full text-center justify-center
    text-white text-sm py-3 my-3 px-5 rounded font-semibold"
    type="submit"
    :disabled="loading"
  >
    <p v-if="!loading">{{ value }}</p>
    <spinner :loading="loading" :color="'#ffffff'" />
  </button>
</template>
<style lang="scss" scoped>
button:disabled,
button[disabled] {
  background-color: #cccccc;
  color: #666666;
}
</style>
<script>
import spinner from '@/components/spinner.vue';

export default {
  props: ['value', 'loading'],
  components: {
    spinner,
  },
  data() {
    return {};
  },
};
</script>
