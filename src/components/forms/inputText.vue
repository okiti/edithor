<template>
  <div class="flex flex-col flex-no-wrap">
    <label :for="id" class="my-1 text-xs uppercase tracking-widest text-gray-800">
      {{ label }}
    </label>
    <input
      class="appearance-none block w-full
      text-gray-700 border bg-white
      border-gray-400 rounded py-3 px-4 mb-2
      leading-tight focus:outline-none
      focus:bg-white"
      :id="id"
      :type="type ? type: 'text'"
      :placeholder="placeholder"
      :autocomplete="autocomplete ? autocomplete : 'on'"
      :required="required"
      :value="value"
      :maxlength="max ? max : 70"
      v-on:input="$emit('input', $event.target.value)"
    />
  </div>
</template>
<style lang="css" scoped>
input[type='text'] {
  outline: none;
}
</style>
<script>
export default {
  props: ['placeholder', 'id', 'label', 'value', 'autocomplete', 'type', 'required', 'max'],
};
</script>
