<template>
  <router-link class="my-4" :to="{ name: 'ChatView' }">
    <div class="  flex flex-row  shadow px-2 ronded-lg">
      <div class="flex items-center ">
        <img
          class="w-10 mx-2  h-10 shadow rounded-full ring-4 ring-gray-300"
          src="@/assets/img/user.jpg"
          alt=""
        />
      </div>
      <div class="flex-1  ml-8 box-content py-1">
        <h5>Dnayaneshwar Jawane</h5>
        <h6>creating website</h6>
        <div class="space-x-3 text-xs">
          <fa :icon="['fas', 'star']"></fa>
          <fa :icon="['fas', 'star']"></fa>
          <fa :icon="['fas', 'star']"></fa>
          <fa :icon="['fas', 'star']"></fa>
          <fa :icon="['fas', 'star']"></fa>
        </div>
      </div>
      <div class="self-center ">
        <slot name="right"> </slot>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {};
</script>

<style></style>
