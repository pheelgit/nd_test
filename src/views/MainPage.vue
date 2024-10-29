<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const auth = computed(() => String(route.params.auth))
</script>

<template>
  <div class="main-page">
    {{ auth }}
    <div class="my-titles">
      <h1>Мои заметки</h1>
      <p>Не забывай о важном, храни его в облаке.</p>
    </div>
    <div class="main-image-wrap">
      <img src="../assets/main-img.png" alt="main image" class="main-image" />
    </div>
  </div>
</template>

<style scoped>
.main-page {
  display: flex;
  justify-content: space-evenly;
  gap: 2em;
  align-items: stretch;
  justify-items: stretch;
}
.my-titles {
  flex-basis: 500%;
  align-self: center;
  justify-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-image-wrap {
  flex-basis: 500%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-image {
  width: 100%;
  height: 100%;
}
</style>
