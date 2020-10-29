<template>
  <div class="flex flex-col flex-no-wrap">
    <label :for="id" class="my-1 text-xs uppercase tracking-widest text-gray-800">
      {{ label }}
    </label>

    <Datepicker
      :id="id"
      :input-class="
        `appearance-none block w-full
        text-gray-700 border bg-white
        border-gray-300 rounded py-3 px-4 mb-2
        leading-tight focus:outline-none
        focus:bg-white`
      "
      :value="value"
      :placeholder="placeholder"
      :required="required ? required : 'required'"
      @input="updateField($event.target)"
    />
  </div>
</template>

<script>
import Datepicker from 'vue-moment-datepicker';

export default {
  components: {
    Datepicker,
  },
  props: ['placeholder', 'id', 'label', 'value', 'required'],
  methods: {
    updateField(target) {
      this.$emit('input', target.value);
    },
  },
};
</script>
