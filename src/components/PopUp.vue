<script setup lang="ts">
import { defineProps } from 'vue'
import VButton from './VButton.vue'
import { IconNamesEnum } from '../assets/IconNames.enum.ts'

defineProps({
  title: {
    type: String,
    required: true
  }
})

const isVisible = defineModel<boolean>('isVisible')

const closePopUp = () => {
  isVisible.value = false
}
</script>

<template>
  <div v-if="isVisible" class="popup-overlay">
    <div class="popup-wrap">
      <div class="popup-title">
        <h2>{{ title }}</h2>
        <VButton @click="closePopUp" :icon="IconNamesEnum.close" class="close-btn" round />
      </div>
      <slot class="popup-content"></slot>
    </div>
  </div>
</template>

<style scoped>
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-wrap {
  padding: 20px;
  border-radius: 40px;
  background-color: var(--color-dark-middle);
  width: 780px;
  height: 740px;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
}

.popup-title {
  display: flex;
  justify-content: space-between;
}
.close-btn {
  align-self: flex-start;
}
.popup-content {
  flex-grow: 1;
  background-color: #ff7461;
}
</style>
