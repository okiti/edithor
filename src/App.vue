<template>
  <div id="app" class="text-dark">
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App',
  metaInfo() {
    return {
      title: 'Health',
      meta: [
        { name: 'description', content: 'Create and manage events the smart way' },
        { property: 'og:title', content: 'Agendr' },
        { property: 'og:url', content: 'https://agendr-35ac8.web.app' },
        { property: 'og:site_name', content: 'Agendr' },
        { property: 'og:type', content: 'website' },
        { property: 'og:image', content: 'https://agendr-35ac8.web.app/logo.png' },
        { name: 'robots', content: 'index,follow' },
      ],
    };
  },
};
</script>
