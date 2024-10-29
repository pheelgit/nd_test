<script setup lang="ts">
import { ref } from 'vue'
import VIcon from './VIcon.vue'
import { IconNamesEnum } from '../assets/IconNames.enum.ts' // Assuming you have an icon component

interface ButtonProps {
  icon?: IconNamesEnum
  text?: string
  buttonStyle: 'normal' | 'round'
}

const props = defineProps<ButtonProps>()

const emit = defineEmits(['click'])

const isHover = ref<boolean>(false)
const isPressed = ref<boolean>(false)
const isDisabled = ref<boolean>(false)

function handleClick(event: MouseEvent) {
  if (!isDisabled.value) {
    emit('click', event)
  }
}
</script>

<template>
  <button
    :class="[
      'btn',
      buttonStyle,
      { 'btn-hover': isHover },
      { 'btn-pressed': isPressed },
      { 'btn-disabled': isDisabled }
    ]"
    @click="handleClick"
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    @mousedown="isPressed = true"
    @mouseup="isPressed = false"
    :disabled="isDisabled"
  >
    <span class="btn-text" :class="textStyle">{{ icon }}</span>
    <v-icon :name="icon" />
  </button>
</template>

<style scoped>
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition:
    background-color 0.2s,
    color 0.2s;
}

.btn-content {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn-icon {
  margin-right: 0.5rem;
}

.btn-text {
  line-height: 1;
}

.btn-normal {
  background-color: #4caf50;
  color: white;
}

.btn-round {
  border-radius: 9999px;
}

.btn-hover {
  background-color: #45a049;
}

.btn-pressed {
  background-color: #3e8e41;
}

.btn-disabled {
  opacity: 0.6;
  cursor: not-allowed;
}
</style>
