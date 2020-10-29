<template>
  <div class="flex lg:px-40 md:px-10 px-5 py-20
    flex-col min-h-screen lg:flex-row items-center bg-primary text-light">
    <div>
      <img class="hero-img" src="../assets/img/reading.svg" alt="">
    </div>
    <div class="lg:w-5/12">
      <div class="flex lg:text-xl text-4xl font-extrabold mb-5 flex-col flex-no-wrap">
        <h1 class="">
          Search for illness or symptoms
        </h1>
      </div>
      <div>
          <input placeholder="e.g Headache" class="" type="text">
      </div>
      <div class="flex mt-8">
        <a class="font-bold text-dark py-2 px-5 rounded-full bg-white" href="">
          Get started
        </a>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.hero-img {
  @include sm {
    display: none;
  }
}
  input[type='text'] {
    width: 400px;
    @apply py-3; @apply px-8;
    @apply rounded-lg;
    @include sm {
      width: 97%;
    }
  }
</style>
<script>

export default {
  components: {
  },
};
</script>
