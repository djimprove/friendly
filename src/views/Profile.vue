<template>
  <div class="container mx-auto  ">
    <div
      v-show="!isEditMode"
      class="flex flex-col justify-between space-y-2 px-6  "
    >
      <div class="flex items-center  justify-center  relative mb-8  ">
        <div
          class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-24 rounded-3xl w-full"
        ></div>
        <img
          class="absolute bottom-0 -mb-8  h-24  shadow-2xl rounded-full ring-4 ring-gray-300"
          :src="user.pic"
          alt=""
        />
      </div>
      <ul class="flex-1 h-full     flex-grow   ">
        <li class="mt-2 text-center">
          <h1 id="name" class="uppercase  text-3xl  bold">
            {{ user.fullName }}
          </h1>
          <h3 class="text-center text-xl">{{ user.about }}</h3>
        </li>

        <li class="mt-2">
          <label class="my-1 text-xs" for="birthday">
            Birth Date
          </label>
          <div class=" shadow p-2 rounded">{{ birthday }}</div>
        </li>
        <li class="mt-2">
          <label class="my-1 text-xs" for="gender">
            EMAIL
          </label>
          <div class=" shadow p-2 rounded">{{ user.email }}</div>
        </li>

        <li class="mt-2">
          <label class="my-1 text-xs" for="gender">
            Gender
          </label>
          <div class=" shadow p-2 rounded">{{ user.gender }}</div>
        </li>

        <li class="mt-8">
          <button
            @click="isEditMode = !isEditMode"
            class=" bg-purple-600  px-4 py-2 w-full   focus:outline-none focus:bg-purple-500 text-white text-2xl  shadow-lg rounded-2xl self-center"
          >
            Edit
          </button>
        </li>
      </ul>
    </div>
    <!-- is edit form -->
    <EditProfile @close="isEditMode = false" v-if="isEditMode" />
  </div>
</template>

<script>
import AppListItem from "@/components/AppListItem";
import { useStore } from "vuex";
import { computed, inject, ref } from "vue";
import EditProfile from "@/components/EditProfile.vue";
export default {
  setup() {
    let store = useStore();
    let user = store.state.user;
    const moment = inject("moment");

    let birthday = computed(() =>
      moment(new Date(user.birthday)).format("DD MMM YYYY")
    );

    // for edit profile
    const isEditMode = ref(false);

    return { user, birthday, isEditMode };
  },
  components: {
    AppListItem,
    EditProfile,
  },
};
</script>

<style></style>
