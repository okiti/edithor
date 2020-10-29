<template>
  <div>
    <p
    v-if="message"
    class="text-sm font-semibold py-3 text-center text-green-600">{{message}}</p>
  </div>
</template>
<script>
export default {
  name: 'SuccessMessage',
  props: ['message'],
};
</script>
