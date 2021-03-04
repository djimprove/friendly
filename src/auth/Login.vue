<template>
  <div class="bg-purple-600 bg-img " style="">
    <div class="container mx-auto ">
      <div class="h-screen p-6 md:p-auto flex items-center ">
        <div
          class="flex flex-col md:flex-row  items-center justify-start  shadow-lg rounded-3xl overflow-hidden bg-white "
        >
          <div class=" h-full flex md:w-1/2 py-2 px-2">
            <img
              class=" w-full rounded rounded-l-3xl shadow object-fill "
              src="@/assets/img/FriendsLead.jpg"
              alt=""
            />
          </div>
          <div
            class="ml-4 md:w-1/2 px-2 py-20 flex flex-col items-center  space-y-16 relative"
          >
            <div class="lg:absolute top-0  text-purple-600  w-full">
              <h1 class=" text-center text-5xl lg:text-8xl self-center">
                FRIENDLY
              </h1>
            </div>

            <form @submit.prevent="registerUserOrLogin">
              <button
                type="submit"
                class=" px-4 py-2 items-center  flex  bg-purple-600 text-white shadow-lg rounded-lg outline-none focus:outline-none "
              >
                <span v-if="!isSubmitting">Login With Google</span>
                <span v-else>Processing</span>
                <div
                  v-if="isSubmitting"
                  class="border-dashed animate-spin border-4 p-2 border-white rounded-full  ml-2  "
                ></div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { auth, collections, provider } from "../firebase";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";

export default {
  setup() {
    const { userCollection } = collections;
    let store = useStore();
    let isSubmitting = ref(false);
    let router = useRouter();
    async function registerUserOrLogin() {
      isSubmitting.value = true;
      await auth
        .signInWithPopup(provider)
        .then((result) => {
          const { email, name, picture } = result.additionalUserInfo.profile;
          console.log(result);
          const user = {
            email: email,
            fullName: name,
            pic: picture,
            about: "Hii Friends",
            birthday: Date.now(),
            userId: result.additionalUserInfo.profile.id,
            gender: "none",
          };

          if (result.additionalUserInfo.isNewUser) {
            userCollection
              .doc(user.userId)
              .set(user)
              .then(() => {
                store.dispatch("ADD_USER", user);
                isSubmitting.value = false;
                router.push({ name: "RecentChat" });
              })
              .catch((e) => console.log(e));
          } else {
            userCollection
              .doc(user.userId)
              .get()
              .then((doc) => {
                const dbUser = doc.data();
                user.email = dbUser.email;
                user.userId = dbUser.userId;
                user.pic = dbUser.pic;
                user.about = dbUser.about;
                user.fullName = dbUser.fullName;
                user.birthday = dbUser.fullName;
                user.gender = dbUser.gender;
              });
            store.dispatch("ADD_USER", user);
            isSubmitting.value = false;
            router.push({ name: "RecentChat" });
          }
          // add user in collection
        })
        .catch((error) => {
          alert("Error in login please try again" + error);
          isSubmitting.value = false;
        });
    }

    return {
      isSubmitting,
      registerUserOrLogin,
    };
  },
};
</script>

<style scoped></style>
