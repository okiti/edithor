<template>
  <div class="flex flex-col flex-no-wrap">
    <label for="timepicker" class="my-1 text-xs uppercase tracking-widest text-gray-800">
      {{ label }}
    </label>
    <div class="relative">
      <select
        class="
          appearance-none block w-full
          text-gray-700 border bg-white
          border-gray-300 rounded py-3 px-4 mb-2
          leading-tight focus:outline-none
          focus:bg-white
        "
        @input="$emit('input', $event.target.value)"
      >
        <option disabled value="">Choose</option>
        <option :selected="(option === selected ? true: false)"
        :key="index" :value="option" v-for="(option, index) in options">
          {{ option }}
        </option>
      </select>
      <div
        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"
      >
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['label', 'value', 'options', 'selected'],
};
</script>
