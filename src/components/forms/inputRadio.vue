<template>
  <div class="flex flex-no-wrap items-center my-2">
    <label class="flex text-xs uppercase text-gray-600 pr-3 tracking-widest">
      <input class="mr-3" type="radio" :value="label" :name="name" v-model="radioButtonValue" />
      <span>{{ label }}</span>
    </label>
  </div>
</template>
<style lang="scss" scoped>
input[type='text'] {
  outline: none;
}
</style>
<script>
export default {
  props: ['name', 'label', 'value'],
  computed: {
    radioButtonValue: {
      get() {
        return this.value;
      },
      set() {
        // Communicate the change to parent component so that selectedValue can be updated
        this.$emit('change', this.label);
      },
    },
  },
};
</script>
