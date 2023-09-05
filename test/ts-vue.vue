<template>
  <div style="margin: 20px">
    <!-- bad -->
    <!-- <textarea>{{ value }}</textarea> -->

    <!-- good -->
    <textarea v-model="value"></textarea>
    <img
      class="image-viewer__thumbnails"
      :src="imageUrl"
      @click="clickHandler"
    />
    <div v-show="visible" class="image-viewer__wrapper">
      <!-- bad -->
      <!-- <i class="image-viewer__closebtn" @click="closeHandler" /> -->

      <!-- good -->
      <i class="image-viewer__closebtn" @click="closeHandler"></i>
      <div class="image-viewer__img">
        <img :src="imageUrl" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const visible = ref(false);
const imageUrl = ref("");
// "a" is no-unused-vars
const a = ref(false);
const value = ref("hello");
const closeHandler = () => {
  visible.value = false;
};
const clickHandler = () => {
  visible.value = true;
};
</script>
