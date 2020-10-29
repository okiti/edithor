<template>
  <div class="flex flex-col flex-no-wrap">
    <label :for="id" class="my-1 text-xs uppercase tracking-widest text-gray-800">
      {{ label }}
    </label>
    <textarea
      class="appearance-none block w-full
      text-gray-700 border bg-white
      border-gray-300 rounded py-3 px-4 mb-2
      leading-tight focus:outline-none
      focus:bg-white"
      :id="id"
      :rows="rows"
      :placeholder="placeholder"
      :required="required"
      :value="value"
      v-on:input="$emit('input', $event.target.value)"
    ></textarea>
  </div>
</template>

<script>
export default {
  props: ['placeholder', 'id', 'label', 'value', 'required', 'max', 'rows'],
};
</script>
