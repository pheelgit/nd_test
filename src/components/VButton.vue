<script lang="ts" setup>
import { ref } from 'vue'
import VIcon from './VIcon.vue'
import { IconNamesEnum } from '../assets/IconNames.enum.ts'

// Интерфейсы для пропсов
interface ButtonProps {
  icon?: IconNamesEnum
  text?: string
  round?: boolean
  disabled?: boolean
}

defineExpose({
  $attrs: true
})

const props = defineProps<ButtonProps>()

// Состояния для ховера и нажатия
const isHovered = ref(false)
const isPressed = ref(false)

// Обработчики событий для ховера и нажатия
const handleMouseOver = () => {
  if (!props.disabled) {
    isHovered.value = true
  }
}

const handleMouseLeave = () => {
  if (!props.disabled) {
    isHovered.value = false
    isPressed.value = false
  }
}

const handleMouseDown = () => {
  if (!props.disabled) {
    isPressed.value = true
  }
}

const handleMouseUp = () => {
  if (!props.disabled) {
    isPressed.value = false
  }
}
</script>

<template>
  <button
    v-bind="$attrs"
    class="button"
    :class="{
      'button--round': round,
      'button--hover': isHovered,
      'button--pressed': isPressed,
      'button--disabled': disabled
    }"
    :disabled="disabled"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
  >
    <VIcon v-if="icon" :name="icon" class="button__icon" />
    <span class="text-normal" v-if="!round">{{ text }}</span>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  padding: 10px;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  background-color: var(--color-green-light);

  transition:
    background-color 0.3s,
    box-shadow 0.3s;
}

.button--round {
  border-radius: 50%;
}

.button--hover {
  background-color: var(--color-green-middle);
}

.button--pressed {
  background-color: var(--color-green-dark);
}

.button--disabled {
  background-color: var(--color-gray);
  cursor: not-allowed;
}

.button__icon {
  font-size: 1em;
  width: 1em;
  height: 1em;
}
</style>
