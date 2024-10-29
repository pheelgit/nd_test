<script setup>
import { ref, defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isVisible: {
    type: Boolean,
    default: false
  }
})

const emits = defineEmits(['close'])

const closePopUp = () => {
  emits('close')
}
</script>

<template>
  <div v-if="isVisible" class="popup-overlay">
    <div class="popup-content">
      <h2>{{ title }}</h2>
      <slot></slot>
      <button @click="closePopUp">Close</button>
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

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: center;
}
</style>
