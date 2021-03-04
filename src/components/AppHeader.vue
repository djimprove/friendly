<template>
  <div class="bg-purple-600 shadow    text-white py-1">
    <header class="container mx-auto">
      <span class="flex justify-between items-center px-4 py-2 ">
        <div>
          <fa :icon="['fas', 'bars']"></fa> <span class="ml-2">FRIENDLY</span>
        </div>
        <span class="" :title="user.fullName">
          <img
            v-if="user"
            class="w-8 h-8 bg-yellow-600 rounded-full shadow text-sm ring-purple-300 ring-4 "
            :src="user.pic"
            alt=""
          />
          <img
            v-else
            class="w-8 h-8 bg-yellow-600 rounded-full shadow text-sm ring-purple-300 ring-4 "
            src="@/assets/img/user.jpg"
            alt=""
          />
        </span>
      </span>
    </header>
  </div>
  <div
    id="basenav"
    ref="nav"
    :class="isFixed ? ' fixed left-0 top-0  rounded-b-lg   w-screen ' : ''"
    class="  bg-purple-600 py-4"
  >
    <nav class="container mx-auto  text-white  ">
      <ul class="flex justify-between px-4">
        <li>
          <router-link :to="{ name: 'RecentChat' }">
            <fa :icon="['fas', 'user-clock']"></fa>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'OnlinePeaple' }">
            <fa :icon="['fas', 'globe-asia']"></fa>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Friends' }">
            <fa :icon="['fas', 'user-friends']"></fa>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Profile' }">
            <fa :icon="['fas', 'cog']"></fa>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import { useStore } from "vuex";
export default {
  setup() {
    let store = useStore();
    let isFixed = ref(false);
    function scrollheader() {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
          isFixed.value = true;
        } else {
          isFixed.value = false;
        }
      });
    }

    onMounted(() => {
      scrollheader();
    });
    return {
      isFixed,
      user: computed(() => store.state.user),
    };
  },
};
</script>

<style>
.router-link-active {
  @apply text-black;
}
nav a:hover {
  @apply text-black;
}
</style>
