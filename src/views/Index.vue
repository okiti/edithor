<template>
  <layout>
    <div
      class="flex w-full lg:px-10 md:px-10 px-5 flex-col min-h-screen lg:flex-row"
    >
    <div class="flex flex-col flex-no-wrap w-8/12 bg-white">
      <div class="flex px-10 py-6">
        <router-link
          class="bg-blue-600 rounded text-white font-bold px-6 py-2"
          to="/new"
          >New article</router-link
        >
      </div>
      <ul class="post-list px-10 py-6 w-full">
        <li class="flex justify-between">
          <a href="">The technical writters guide to open source</a>
          <div>
            <a href=""><i class="uil uil-trash-alt"></i></a>
            <a href=""><i class="uil uil-archive-alt"></i></a>
            <a href="">Oct 31</a>
          </div>
        </li>
        <li class="flex justify-between">
          <a href="">The Difference between react state and props</a>
          <div>
            <a href=""><i class="uil uil-trash-alt"></i></a>
            <a href=""><i class="uil uil-archive-alt"></i></a>
            <a href="">Oct 31</a>
          </div>
        </li>
        <li class="flex justify-between">
          <a href="">A funny fact about Edithor</a>
          <div class="flex">
            <div class="icon-holder">
              <a class="delete-icon"  href=""><i class="uil uil-trash-alt"></i></a>
              <a href=""><i class="uil uil-archive-alt"></i></a>
            </div>
            <a href="">Oct 31</a>
          </div>
        </li>
      </ul></div>
    </div>
  </layout>
</template>
<style lang="scss" scoped>
.post-list {
  li {
    a {
      @apply inline-block;
      @apply text-ash;
      font-size: 17px;
      padding: 7px 10px;
    }
    a:hover {
      opacity: 0.8;
    }
    border-bottom: 1px solid #eeeeee;
  }
  i {
    color: #969696;
  }
  .icon-holder {
    display: none;
  }
  .delete-icon:hover {
    i {
      @apply text-red-500;
    }
  }
  li:hover {
    cursor: pointer;
  }
  li:hover .icon-holder {
    display: flex;
  }
}
</style>
<script>
import layout from '../components/themes/default.vue';

export default {
  components: {
    layout,
  },
  mounted() {},
};
</script>
