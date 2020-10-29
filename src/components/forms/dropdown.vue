<template>
  <div class="relative">
    <label :for="id" class="my-1 text-xs uppercase tracking-widest text-gray-600">{{
      label
    }}</label>
    <select
      class="appearance-none block w-full
      text-gray-700 border bg-white
      border-gray-300 rounded py-3 px-4 mb-2
      leading-tight focus:outline-none
      focus:bg-white"
      id="grid-state"
      :value="value"
      @input="$emit('input', $event.target.value)"
    >
      <option value="Cat fish">
        <span class="flex py-3 m-5"> fish</span>
      </option>
    </select>
    <div
      class="pointer-events-none absolute
      inset-y-0 right-0 flex items-center px-2 text-gray-700"
    >
      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
      </svg>
    </div>
  </div>
</template>
<script>
export default {
  props: ['placeholder', 'label', 'value'],
};
</script>
<style lang="scss" scoped></style>
