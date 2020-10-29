<template>
  <header class="w-full px-10">
    <nav class="flex items-center justify-between flex-wrap py-6">
      <div class="flex items-center mr-6">
        <router-link :to="{ name: 'Home' }">
          <h1 class="text-sm tracking-widest font-bold">Silicon</h1>
        </router-link>
      </div>

      <div class="block lg:hidden">
        <button
          id="nav-toggle"
          @click="toggleNavContent"
          class="flex items-center px-3 py-2 text-primary
          border-none outline-none focus:outline-none"
        >
          <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      <div
        id="nav-content"
        class="transition-all ease-in duration-700 w-full hidden flex-grow
                lg:flex lg:items-center lg:w-auto"
      >
        <div class="flex flex-col ml-auto font-semibold
          lg:mt-0 lg:flex-row">
          <!-- <a
            href="#responsive-header"
            class="my-2 flex lg:my-0 text-dark hover:text-primary mx-2"
          >
            Say hi!
          </a> -->
        </div>
      </div>
    </nav>
  </header>
</template>
<style lang="css">
.logo {
  width: 100px;
  object-fit: contain;
}
</style>
<script>
export default {
  name: 'HomeHeader',
  data() {
    return {
      hidden: true,
    };
  },
  methods: {
    toggleNavContent() {
      document.getElementById('nav-content').classList.toggle('hidden');
    },
  },
};
</script>
