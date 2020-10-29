<template>
  <!-- eslint-disable -->
  <div class="flex px-5 relative lg:px-2 flex-row justify-between">
    <div class="instruction-panel__wraper">
    <div class="instruction-panel border border-gray-300">
      <div>
        <h1 class="px-5 py-2 bg-gray-300 text-sm font-bold">Exercise</h1>
      </div>
      <div class="p-5 text-gray-700">
        <h1 class="text-xl font-bold mb-5">Hello world in python</h1>
        <p class="mb-3 inst">
          In the Python script on the right, you can type Python code to solve the exercises. If you hit Run Code or Submit Answer, your python script (script.py) is executed and the output is shown in the IPython Shell. Submit Answer checks whether your submission is correct and gives you feedback.
        </p>
        <p class="mb-3 inst">
          You can hit Run Code and Submit Answer as often as you want. If you're stuck, you can click Get Hint, and ultimately Get Solution.
        </p>
        <p class="inst">
          You can also use the IPython Shell interactively by simply typing commands and hitting Enter. When you work in the shell directly, your code will not be checked for correctness so it is a great way to experiment.
        </p>
      </div>
    </div>
    </div>
    <div class="code-editor__wrapper px-2">
      <div class="code-editor__card border border-gray-300 bg-white">
        <div class="code-editor__top">
          <div class="flex flex-wrap">
            <p>
              <select @change="handleLanguageChange" :value="mode">
                <option selected>Javascript</option>
                <option>Go</option>
                <option>C#</option>
                <option>C++</option>
                <option>Python</option>
                <option>Java</option>
              </select>
            </p>
            <p>
              <select @change="handleThemeChange" :value="theme">
                <option>3024-day</option>
                <option>3024-night</option>
                <option>abcdef</option>
                <option>ambiance</option>
                <option>ayu-dark</option>
                <option>ayu-mirage</option>
                <option>base16-dark</option>
                <option>base16-light</option>
                <option>bespin</option>
                <option>blackboard</option>
                <option>cobalt</option>
                <option>colorforth</option>
                <option>darcula</option>
                <option selected>dracula</option>
                <option>duotone-dark</option>
                <option>duotone-light</option>
                <option>eclipse</option>
                <option>elegant</option>
                <option>erlang-dark</option>
                <option>gruvbox-dark</option>
                <option>hopscotch</option>
                <option>icecoder</option>
                <option>idea</option>
                <option>isotope</option>
                <option>lesser-dark</option>
                <option>liquibyte</option>
                <option>lucario</option>
                <option>material</option>
                <option>material-darker</option>
                <option>material-palenight</option>
                <option>material-ocean</option>
                <option>mbo</option>
                <option>mdn-like</option>
                <option>midnight</option>
                <option>monokai</option>
                <option>moxer</option>
                <option>neat</option>
                <option>neo</option>
                <option>night</option>
                <option>nord</option>
                <option>oceanic-next</option>
                <option>panda-syntax</option>
                <option>paraiso-dark</option>
                <option>paraiso-light</option>
                <option>pastel-on-dark</option>
                <option>railscasts</option>
                <option>rubyblue</option>
                <option>seti</option>
                <option>shadowfox</option>
                <option>solarized dark</option>
                <option>solarized light</option>
                <option>the-matrix</option>
                <option>tomorrow-night-bright</option>
                <option>tomorrow-night-eighties</option>
                <option>ttcn</option>
                <option>twilight</option>
                <option>vibrant-ink</option>
                <option>xq-dark</option>
                <option>xq-light</option>
                <option>yeti</option>
                <option>yonce</option>
                <option>zenburn</option>
              </select>
            </p>
          </div>
        </div>
        <textarea id="editor" name="code"></textarea>
        <div class="code-editor__bottom">
          <!-- <div class='checkboxes'>
                    <label><input type='radio' name='stype' v-model='stype' value='sample'/> Sample testcase </label>
                    <label><input type='radio' name='stype' v-model='stype' value='test'/> Test testcase </label>
          </div>-->
          <div class="to-right">
            <button @click.prevent="sendRequest" class="flex justify-center items-center button">
              <p class="pr-2">Run code</p>
              <spinner
                :loading="isRunning"/>
            </button>
          </div>
        </div>
        <div class="flex flex-col flex-no-wrap code-editor__output">
          <h1 class="heading">Output</h1>
          <div class="output-stream" v-html="output">></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios';
import CodeMirror from "codemirror";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/3024-day.css";
import "codemirror/theme/3024-night.css";
import "codemirror/theme/abcdef.css";
import "codemirror/theme/ambiance.css";
import "codemirror/theme/ayu-dark.css";
import "codemirror/theme/ayu-mirage.css";
import "codemirror/theme/base16-dark.css";
import "codemirror/theme/bespin.css";
import "codemirror/theme/base16-light.css";
import "codemirror/theme/blackboard.css";
import "codemirror/theme/cobalt.css";
import "codemirror/theme/colorforth.css";
import "codemirror/theme/dracula.css";
import "codemirror/theme/duotone-dark.css";
import "codemirror/theme/duotone-light.css";
import "codemirror/theme/eclipse.css";
import "codemirror/theme/elegant.css";
import "codemirror/theme/erlang-dark.css";
import "codemirror/theme/gruvbox-dark.css";
import "codemirror/theme/hopscotch.css";
import "codemirror/theme/icecoder.css";
import "codemirror/theme/isotope.css";
import "codemirror/theme/lesser-dark.css";
import "codemirror/theme/liquibyte.css";
import "codemirror/theme/lucario.css";
import "codemirror/theme/material.css";
import "codemirror/theme/material-darker.css";
import "codemirror/theme/material-palenight.css";
import "codemirror/theme/material-ocean.css";
import "codemirror/theme/mbo.css";
import "codemirror/theme/mdn-like.css";
import "codemirror/theme/midnight.css";
import "codemirror/theme/monokai.css";
import "codemirror/theme/moxer.css";
import "codemirror/theme/neat.css";
import "codemirror/theme/neo.css";
import "codemirror/theme/night.css";
import "codemirror/theme/nord.css";
import "codemirror/theme/oceanic-next.css";
import "codemirror/theme/panda-syntax.css";
import "codemirror/theme/paraiso-dark.css";
import "codemirror/theme/paraiso-light.css";
import "codemirror/theme/pastel-on-dark.css";
import "codemirror/theme/railscasts.css";
import "codemirror/theme/rubyblue.css";
import "codemirror/theme/seti.css";
import "codemirror/theme/shadowfox.css";
import "codemirror/theme/solarized.css";
import "codemirror/theme/the-matrix.css";
import "codemirror/theme/tomorrow-night-bright.css";
import "codemirror/theme/tomorrow-night-eighties.css";
import "codemirror/theme/ttcn.css";
import "codemirror/theme/twilight.css";
import "codemirror/theme/vibrant-ink.css";
import "codemirror/theme/xq-dark.css";
import "codemirror/theme/xq-light.css";
import "codemirror/theme/yeti.css";
import "codemirror/theme/idea.css";
import "codemirror/theme/darcula.css";
import "codemirror/theme/yonce.css";
import "codemirror/theme/zenburn.css";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/go/go";
import "codemirror/mode/clike/clike";
import "codemirror/mode/python/python";
import "codemirror/addon/fold/foldgutter.css";
import "codemirror/addon/selection/active-line";
import "codemirror/addon/edit/matchbrackets";
import "codemirror/addon/fold/foldcode";
import "codemirror/addon/fold/foldgutter";
import "codemirror/addon/fold/brace-fold";
import "codemirror/addon/fold/xml-fold";
import "codemirror/addon/fold/indent-fold";
import "codemirror/addon/fold/markdown-fold";
import "codemirror/addon/fold/comment-fold";
import "codemirror/mode/xml/xml";
import "codemirror/mode/css/css";
import "codemirror/mode/htmlmixed/htmlmixed";
import "codemirror/mode/markdown/markdown";
import spinner from '../spinner.vue';

export default {
  name: "code-editor",
  components: {
    spinner,
  },
  props: [
    "problemId",
    "userId",
    "ctype",
    "problemType",
    "contestId",
    "nextProblem",
  ],
  data() {
    return {
      theme: "eclipse",
      mode: "Python",
      isRunning: false,
      hasFeedback: false,
      hasError: false,
      feedback: "",
      showCard: false,
      codefile: null,
      submitted: false,
      isSubmitting: false,
      stype: "sample",
      message: "",
      result: [],
      countStatus: { passed: 0, failed: 0 },
      output: '',
    };
  },
  mounted() {
    this.editor = CodeMirror.fromTextArea(document.getElementById("editor"), {
      mode: this.mode.toLowerCase(),
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      lineWrapping: true,
    });

    if (this.userId && localStorage.getItem(this.userId)) {
      const storage = JSON.parse(localStorage.getItem(this.userId));
      this.mode = storage.mode;
      this.theme = storage.theme;
    }
    /* eslint-disable */
    this.editor.setOption("theme", this.theme);
    this.editor.save();
    this.editor.setValue("#Silicon\nprint('from silicon to the world')");
  },
  computed: {
    problemLink() {
      /* eslint-disable */
      return `/contests/${this.ctype}/${this.contestId}/dashboard/${this.nextProblem._id}/solve`;
    },
  },
  methods: {
    handleThemeChange(e) {
      this.theme = e.target.value;
      this.editor.setOption("theme", this.theme);
      this.editor.save();

      if (this.userId)
        localStorage.setItem(
          this.userId,
          JSON.stringify({ mode: this.mode, theme: this.theme })
        );
    },
    handleLanguageChange(e) {
      let mode = e.target.value;
      this.mode = mode;
      if (this.specialMode.hasOwnProperty(mode)) {
        mode = this.specialMode[mode];
      }
      this.editor.setOption("mode", mode.toLowerCase());
      this.editor.getDoc().setValue("");
      this.editor.save();

      if (this.userId)
        localStorage.setItem(
          this.userId,
          JSON.stringify({ mode: this.mode, theme: this.theme })
        );
    },
    sendRequest() {
      const vm = this;
      vm.isRunning = true;
      const token = 'bd0d124018a24b349094964e57b1f688';
      const RUN_URL = 'https://aa0a88ae.compilers.sphere-engine.com/api/v4';
      const formData = new FormData();
      const data = {
        compilerId: 99,
        source: this.editor.getValue(),
      }
      for (var i in data ) {
        formData.append(i, data[i]);
      }
      axios.post(`https://aa0a88ae.compilers.sphere-engine.com/api/v4/submissions?access_token=${token}`, formData)
        .then((response) => {
          const id  = response.data.id
          setTimeout(async function() {
            await axios.get(`https://aa0a88ae.compilers.sphere-engine.com/api/v4/submissions?ids=${id}&access_token=${token}`)
            .then(response => {
              const uri = response.data.items[0].uri;
              axios.get(uri)
              .then(res => {
                console.log(res)
                const outputStream = res.data.result.streams.output.uri;
                axios.get(outputStream)
                  .then((res) => {
                    vm.output = res.data;
                  }).catch((err) => {
                    console.log(err);
                  }).finally(() => {
                    vm.isRunning = false;
                  })
              })
              .catch(err => {
                console.log(err);
              })
            })
            .catch(err => {
              console.log(err);
            })
          }, 9000);
        })
        .catch(err => {
          console.log(err);
        });
    },
  },
  watch: {
  },
};
</script>

<style lang='scss'>
.code-editor__wrapper {
  width: calc(100% - 500px);
  height: calc(100vh - 100px);
  .spinner-container {
    padding: 20px;
  }
  .code-editor__output {
    min-height: 200px;
    padding: 30px 0 30px 20px;
    .heading {
      padding: 7px 15px;
      font-size: 1.0rem;
      &.success {
        @apply text-secondary;
        font-weight: 700;
      }
    }
    .output-stream {
      margin-right: 30px;
      @apply bg-gray-200;
      @apply p-4;
    }
  }
}
.CodeMirror {
  @apply border-t;
  @apply border-b;
  @apply border-gray-300;
  font-size: 1.14rem;
  height: 350px !important;
}
.code-editor__card {
  .code-editor__top,
  .code-editor__bottom {
    background: #fff;
    padding: 10px 10px 10px 30px;
    position: relative;
    p {
      padding: 0 10px 0 0 !important;
      font-weight: 700;
      select {
        padding: 10px;
        border-radius: 5px;
        margin-left: 10px;
        font-size: 0.9rem;
      }
    }

    .btn {
      margin: 5px;
      font-weight: 700;
      text-transform: uppercase;
    }
    .to-right {
      top: 30px;
      @include md {
        position: relative;
        top: 0;
      }
    }
  }
  .code-editor__bottom {
    .editor-form-group {
      padding: 10px;
      label {
        display: block;
        font-weight: 600;
        padding: 5px 0;
      }
      .editor-form-control {
        outline: none;
      }
      @include md {
        position: relative;
      }
    }
    .checkboxes {
      padding: 10px;
      label {
        padding: 15px;
        display: inline-block;
      }
    }
    .to-right {
      top: 15px;
      @include md {
        position: relative;
        top: 0;
      }
    }
  }
  .code-editor {
    min-height: 400px;
    border-radius: 0 0 5px 5px;
    background-color: #1c2434;
  }
}
.instruction-panel {
  width: 500px;
  max-height: calc(100vh - 100px);
  overflow-y: auto;
  @apply bg-white;
  @apply fixed;
}
.inst {
  font-size: 15px;
}
.instruction-panel__wrapper{
  @apply relative;
}
.button {
  @apply px-5;
  @apply py-2;
  @apply font-semibold;
  @apply border;
  @apply border-gray-500;
  @apply text-gray-700;
  @apply rounded;
  @apply mt-5;
}
</style>
