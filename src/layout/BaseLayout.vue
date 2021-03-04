<template>
  <div class="h-screen">
    <AppHeader />
    <router-view class="py-4" />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
export default {
  components: { AppHeader },
  setup() {},
};
</script>

<style></style>
