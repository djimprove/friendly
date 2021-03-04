<template>
  <div class="h-screen box-content text-white">
    <header class=" sticky top-0 w-full shadow">
      <div class="container mx-auto bg-purple-600 px-4 py-2">
        <nav class="flex flex-row items-center  justify-between ">
          <fa
            class="hover:text-black"
            @click="$router.go(-1)"
            :icon="['fas', 'chevron-left']"
          ></fa>
          <span>
            <img
              class="w-6 h-6 mr-4 inline rounded-full shadow ring-4 ring-offset-gray-500"
              src="@/assets/img/user.jpg"
              alt=""
            />
            <span class="inline">Dnayaneshwar Jawane</span>
          </span>
          <fa :icon="['fas', 'ellipsis-v']"></fa>
        </nav>
      </div>
    </header>
    <div class="container mx-auto  overflow-auto" style="height: 80vh;">
      <div class="px-4 w-3/4 py-2 ">
        <img
          class="w-8 h-8 mr-4 mt-2 ml-1  inline rounded-full shadow ring-4 ring-offset-gray-500 float-left "
          src="@/assets/img/user.jpg"
          alt=""
        />
        <div class="bg-purple-600 px-4 py-2 rounded-lg flex flex-col">
          <div class="">
            <p class=" text-sm text-justify ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              temporibus odit atque nobis nam rerum, minus architecto numquam a
              ratione facere ex voluptas, alias quos quaerat dolore accusantium
              tempora incidunt! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illum ex minima, error enim veniam, et sit, nam
              ea maxime illo culpa ipsum consequatur quaerat quibusdam
              voluptate. Explicabo, voluptatibus. Distinctio, ad?
            </p>
          </div>

          <span class="ml-2  text-xs float-right self-end  ">Jan 2</span>
        </div>
      </div>
      <div class="px-4 w-3/4 float-right  py-2 flex flex-row ">
        <div class="bg-purple-600 px-4 py-2 rounded-lg flex flex-col">
          <div class="">
            <p class=" text-sm text-justify ">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima
              temporibus odit atque nobis nam rerum, minus architecto numquam a
              ratione facere ex voluptas, alias quos quaerat dolore accusantium
              tempora incidunt! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Illum ex minima, error enim veniam, et sit, nam
              ea maxime illo culpa ipsum consequatur quaerat quibusdam
              voluptate. Explicabo, voluptatibus. Distinctio, ad?
            </p>
          </div>

          <em class="  text-xs    ">Jan 2</em>
        </div>
        <img
          class="w-8 h-8 ml-4 self-end  rounded-full shadow ring-4 ring-offset-gray-500 float-right  "
          src="@/assets/img/user.jpg"
          alt=""
        />
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-screen  p-2 ">
      <div
        class="flex flex-row items-end    text-purple-600  rounded-l-full rounded-r-full w-full   "
      >
        <fa size="lg" class="m-2" :icon="['fas', 'smile']"></fa>

        <textarea
          id="chatBox"
          class="flex-grow p-2   border-0 resize-none shadow outline-none bg-gray-200 focus:bg-white text-black  rounded-lg  focus-within:text-black"
          placeholder="type message... "
          name="message"
          ref="chatBox"
          v-model="message"
          @keyup="resizeChatBox"
        ></textarea>

        <button
          class="send   focus:border-0 py-2 ml-1  rounded-r-full px-4  focus:outline-none"
          type="submit"
        >
          <fa size="lg" :icon="['fas', 'caret-right']"></fa>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    let message = ref(null);
    return {
      message,
    };
  },
  mounted() {
    this.resizeChatBox;
  },
  computed: {
    resizeChatBox() {
      let chatBox = this.$refs.chatBox;
      if (this.message != "" && this.message != null) {
        chatBox.style.height = chatBox.scrollHeight + "px";
      } else {
        chatBox.style.height = 40 + "px";
      }
    },
  },
};
</script>

<style scoped>
.send {
  @apply bg-purple-800;
  @apply text-white;
}
.send:active {
  @apply bg-purple-300;
  @apply text-white;
}
.textarea {
  display: block;
  width: 100%;
  overflow: hidden;
  resize: both;
  min-height: 40px;
  line-height: 20px;
}
</style>
