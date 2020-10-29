<template>
  <div>
    <p
    v-if="message"
    class="text-sm font-semibold py-3 text-center text-red-600">{{message}}</p>
  </div>
</template>
<script>
export default {
  name: 'ErrorMessage',
  props: ['message'],
};
</script>
