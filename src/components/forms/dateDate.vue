<template>
  <div>
    <label class="my-1 text-xs uppercase tracking-widest text-gray-600">{{ label }}</label>
    <input
      class="appearance-none block w-full
      text-gray-700 border bg-white
      border-gray-300 rounded py-3 px-4 mb-2
      leading-tight focus:outline-none
      focus:bg-white"
      type="date"
      :placeholder="placeholder"
      v-bind:value="value"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<script>
export default {
  props: ['placeholder', 'label', 'value'],
};
</script>
