import { createStore } from "vuex";
import { auth, provider } from "../firebase";

export default createStore({
  strict: process.env.NODE_ENV !== "production",
  state: {
    user: {
      userId: "",
      fullName: "",
      email: "",
      pic: "",
      about: "",
      birthday: "",
      gender: "",
      isSingnIn: false,
    },
    messages: [
      { messageId: "", msg: "", senderId: "", receiverId: "", onCreate: "" },
    ],
    frendList: [{ friendId: "" }],
  },
  getters: {
    getUser: (state) => state.user,
  },
  mutations: {
    addUser(
      state,
      { userId, fullName, email, pic, about, birthday, gender, isSingnIn }
    ) {
      state.user.userId = userId;
      state.user.fullName = fullName;
      state.user.email = email;
      state.user.pic = pic;
      state.user.about = about;
      state.user.birthday = birthday;
      state.user.gender = gender;
      state.user.isSingnIn = true;
    },
  },
  actions: {
    ADD_USER({ commit }, user) {
      if (user) {
        commit("addUser", user);
      }
    },
  },
});
