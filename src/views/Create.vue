<template>
  <layout>
    <div
      class="flex lg:px-10 md:px-10 px-5 py-20 w-full flex-col min-h-screen lg:flex-row"
    >
      <div class="flex w-full">
        <div class="flex w-9/12 flex-col">
          <div class="flex mb-5 w-full">
            <input
              class="text-3xl font-semibold w-full border-none outline-none bg-transparent"
              type="text"
              placeholder="Title of article"
            />
          </div>
          <div class="edithor-holder block">
            <textarea name="" id="edithor" cols="30" rows="10"></textarea>
          </div>
        </div>
        <div class="px-5 w-4/12">
          <div class="mb-8">
            <a
              class="bg-blue-600 rounded text-white font-bold px-6 py-3"
              href=""
              >Publish article</a
            >
          </div>
          <div class="bg-white mb-4 rounded border border-gray-200 p-6">
            <h1 class="font-bold text-base">Tags</h1>
            <p class="text-sm py-2">
              Tags helps us optimise your posts for search engines and bots.
            </p>
            <div class="flex w-full">
              <input
                type="text"
                class="w-full outline-none px-4 py-2 border rounded my-4"
                placeholder="Start typing"
              />
            </div>
          </div>
          <div class="bg-white mb-4 rounded border border-gray-200 p-6">
            <h1 class="font-bold text-base">Upload cover Image</h1>
            <p class="text-sm py-2">
              Recommended dimension: 1200px X 630px. If not present, cover image
              will be used as OG Image.
            </p>
            <div class="flex w-full">
              <label
                class="flex flex-no-wrap items-center mt-3"
                for="coverImage"
              >
                <input id="coverImage" type="file" class="hidden" />
                <i class="uil uil-cloud text-2xl"></i>
                <p>Upload an Image</p>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </layout>
</template>
<style lang="scss" scoped>
.edithor-holder {
  display: inline-block;
}
.CodeMirror,
.CodeMirror-scroll {
  min-height: 900px !important;
}
</style>
<script>
import SimpleMDE from 'simplemde';
import 'simplemde/dist/simplemde.min.css';
import layout from '../components/themes/default.vue';

export default {
  components: {
    layout,
  },
  mounted() {
    // eslint-disable-next-line no-new
    new SimpleMDE({ element: document.getElementById('edithor') });
  },
};
</script>
