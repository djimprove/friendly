<template>
  <form @submit="save">
    <div class="flex flex-col justify-between space-y-2 px-6">
      <!-- TODO implement upload -->
      <div class="flex items-center justify-center    relative mb-8  ">
        <div
          class="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 h-24 rounded-3xl w-full"
        ></div>
        <img
          class="absolute bottom-0 -mb-8  h-24  shadow-2xl rounded-full ring-4 ring-gray-300"
          :src="user.pic"
          alt=""
        />
      </div>
      <ul class="flex-1 h-full  w-full   flex-grow   ">
        <li class="mt-2 flex flex-col ">
          <label class="my-1 text-xs" for="birthday">
            Name
          </label>
          <input
            type="text"
            class=" shadow p-2 rounded"
            placeholder="please enter name"
            v-model="user.fullName"
            required
          />
        </li>
        <li class="mt-2 flex flex-col">
          <label class="my-1 text-xs">
            About
          </label>
          <textarea
            class=" shadow p-2 rounded"
            required
            v-model="user.about"
          ></textarea>
        </li>
        <li class="mt-2 flex flex-col max-w-xs">
          <label class="my-1 text-xs" for="birthday">
            Birth Date
          </label>
          <input type="date" v-model="birthday" class=" shadow p-2 rounded" />
        </li>

        <li class="mt-2 flex flex-col max-w-xs">
          <label class="my-1 text-xs" for="gender">
            Gender
          </label>
          <select class=" shadow p-2 rounded" v-model="user.gender"
            ><option value="none">none</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option></select
          >
        </li>

        <li class="mt-8 flex items-center justify-between">
          <button
            @click="$emit('close')"
            class=" bg-purple-600  px-4 py-2 w-full   focus:outline-none focus:bg-purple-500 text-white text-2xl  shadow-lg rounded-2xl self-center"
          >
            Cancel
          </button>
          <button
            type="submit"
            class=" bg-purple-600  px-4 py-2 w-full ml-8   focus:outline-none focus:bg-purple-500 text-white text-2xl  shadow-lg rounded-2xl self-center"
          >
            Save
          </button>
        </li>
      </ul>
    </div>
  </form>
</template>

<script>
import { useStore } from "vuex";
import { computed, inject, reactive, ref } from "vue";
export default {
  setup(props, { emit }) {
    let store = useStore();
    let storeUser = store.state.user;
    let user = reactive({ ...store.state.user });

    const moment = inject("moment");

    let birthday = computed({
      get: () => moment(new Date(user.birthday)).format("YYYY-MM-DD"),
      set: (value) => {
        user.birthday = value;
      },
    });
    let isSave = ref(false);
    let save = (e) => {
      e.preventDefault();
      for (const [key, value] of Object.entries(user)) {
        if (storeUser[key] !== value) {
          //    isOpen make false
          isSave = true;
          break;
        }
      }
      if (isSave) {
        store.dispatch("ADD_USER", user);
      }
      emit("close");
    };

    return { user, birthday, save };
  },
};
</script>

<style></style>
