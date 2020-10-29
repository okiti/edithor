<template>
  <div class="flex flex-col justify-between">
    <nav class="flex flex-col flex-no-wrap">
      <a href="">
        <i class="uil uil-tachometer-fast"></i>
      </a>
      <a href="">
        <i class="uil uil-newspaper"></i>
      </a>
      <a href="">
        <i class="uil uil-paperclip"></i>
      </a>
    </nav>
    <nav class="pb-10">
      <a href="">
        <i class="uil uil-user-circle"></i>
      </a>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
nav {
  margin-top: 20px;
  a {
    @apply text-ash;
    i {
      font-size: 32px;
    }
  }
}
</style>
