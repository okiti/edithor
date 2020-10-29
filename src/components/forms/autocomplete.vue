<template>
  <div class="autocomplete">
    <label :for="id" class="my-1 text-xs uppercase tracking-widest text-gray-800">
      {{ label }}
    </label>
    <input
      class="appearance-none block w-full text-gray-700
              border bg-white border-gray-300 rounded
              py-3 px-4 mb-2 leading-tight
              focus:outline-none focus:bg-white"
      type="text"
      :placeholder="placeholder"
      @input="onChange"
      v-model="search"
      @keydown.down="onArrowDown"
      @keydown.up="onArrowUp"
      @keydown.enter.prevent="onEnter"
      @keydown.esc="onEsc"
    />
    <ul id="autocomplete-results" v-show="isOpen" class="autocomplete-results">
      <li class="loading" v-if="isLoading">Loading results...</li>
      <li
        v-else
        v-for="(result, index) in results"
        :key="index"
        @click="setResult(result)"
        class="autocomplete-result"
        :class="{ 'is-active': index === arrowCounter }"
      >
        {{ result }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'autocomplete',
  props: {
    placeholder: {
      type: String,
      required: true,
      default: '',
    },
    label: {
      type: String,
      required: true,
      default: '',
    },
    id: {
      type: String,
      required: false,
      default: '',
    },
    items: {
      type: Array,
      required: false,
      default: () => [],
    },
    isAsync: {
      type: Boolean,
      required: false,
      default: false,
    },
    currentValue: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      isOpen: false,
      results: [],
      search: '',
      isLoading: false,
      arrowCounter: -1,
      debounce: null,
    };
  },
  methods: {
    onChange() {
      clearTimeout(this.debounce);

      this.debounce = setTimeout(() => {
        this.$emit('search', this.search);
      }, 1000);

      this.emitValue(this.search);

      // Is the data given by an outside ajax request?
      if (this.isAsync) {
        this.isOpen = true;
        this.isLoading = true;
      } else {
        this.filterResults();
        this.isOpen = true;
      }
    },
    filterResults() {
      this.results = this.items.filter(
        (item) => item.toLowerCase().indexOf(this.search.toLowerCase()) > -1,
      );
    },
    setResult(result) {
      this.emitValue(result);

      this.search = result;
      this.isOpen = false;
    },
    onArrowDown() {
      if (this.arrowCounter < this.results.length) {
        this.arrowCounter += 1;
      }
    },
    onArrowUp() {
      if (this.arrowCounter > 0) {
        this.arrowCounter -= 1;
      }
    },
    onEnter() {
      this.emitValue(this.results[this.arrowCounter]);

      this.search = this.results[this.arrowCounter];
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    onEsc() {
      this.isOpen = false;
      this.arrowCounter = -1;
    },
    handleClickOutside(evt) {
      if (!this.$el.contains(evt.target)) {
        this.isOpen = false;
        this.arrowCounter = -1;
      }
    },
    emitValue(result) {
      this.$emit('input', result);
    },
  },
  watch: {
    currentValue(val) {
      this.search = val;
    },
    items(val) {
      if (!val.length) {
        this.isLoading = false;
        this.isOpen = false;
      }

      this.results = val;
      this.isLoading = false;
    },
  },
  mounted() {
    document.addEventListener('click', this.handleClickOutside);
  },
  destroyed() {
    document.removeEventListener('click', this.handleClickOutside);
  },
};
</script>

<style>
.autocomplete {
  position: relative;
}

.autocomplete-results {
  position: absolute;
  padding: 0;
  margin: 0;
  background-color: #f5f7fa;
  border: 1px solid #eeeeee;
  max-height: 200px;
  /* height: auto; */
  overflow: auto;
  width: 100%;
}

.autocomplete-result {
  list-style: none;
  text-align: left;
  padding: 0.75rem 1rem;
  cursor: pointer;
}

.autocomplete-result.is-active,
.autocomplete-result:hover {
  background-color: #274690;
  color: white;
}

.loading {
  padding: 0.75rem 1rem;
}
</style>
