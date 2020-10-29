<template>
  <div class="flex flex-col flex-no-wrap">
    <label for="timepicker" class="my-1 text-xs uppercase tracking-widest text-gray-800">
      {{ label }}
    </label>
    <multiselect
      v-model="currentValue"
      deselect-label="Can't remove this value"
      track-by="value"
      label="value"
      :select-label="''"
      placeholder="Select one"
      :options="options"
      :searchable="searchable"
      :allow-empty="allow_empty"
      @input="setInputValue()"
    >
      <template slot="singleLabel" slot-scope="{ option }">{{ option.value }}</template>
    </multiselect>
  </div>
</template>

<script>
import Multiselect from 'vue-multiselect';

export default {
  components: {
    Multiselect,
  },
  props: ['label', 'value', 'options', 'allow_empty', 'searchable'],
  watch: {
    value(newValue, oldValue) {
      if (newValue !== oldValue) this.currentValue = this.search(this.value, this.options);
    },
  },
  data() {
    return {
      currentValue: null,
    };
  },
  methods: {
    setInputValue() {
      this.$emit('input', this.currentValue.text);
    },
    search(optionValue, options) {
      return options.filter((option) => option.value === optionValue);
    },
  },
  beforeMount() {
    if (this.value !== null) this.currentValue = this.search(this.value, this.options);
  },
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style>
.multiselect__option--highlight,
.multiselect__option--highlight::after {
  background-color: #274690;
}
</style>
