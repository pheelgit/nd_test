<script lang="ts" setup>
import { ref } from 'vue'
import VIcon from './VIcon.vue'
import { IconNamesEnum } from '../assets/IconNames.enum.ts' // Assuming you have an icon component

// Интерфейсы для пропсов
interface ButtonProps {
  icon?: IconNamesEnum
  text: string
  buttonStyle: 'normal' | 'round'
  textStyle: 'icon+text' | 'round'
  iconStyle: 'normal' | 'round'
  disabled?: boolean
}

// Определяем пропсы
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
    :class="[
      'button',
      `button--${buttonStyle}`,
      `button--${textStyle}`,
      `button--${iconStyle}`,
      {
        'button--hover': isHovered,
        'button--pressed': isPressed,
        'button--disabled': disabled
      }
    ]"
    :disabled="disabled"
    @mouseover="handleMouseOver"
    @mouseleave="handleMouseLeave"
    @mousedown="handleMouseDown"
    @mouseup="handleMouseUp"
  >
    <template v-if="icon && textStyle === 'icon+text'">
      <VIcon :name="icon" class="button__icon" />
      <span>{{ text }}</span>
    </template>
    <template v-else-if="icon">
      <VIcon :name="icon" class="button__icon" />
    </template>
    <template v-else>
      <span>{{ text }}</span>
    </template>
  </button>
</template>

<style scoped>
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  border: none;
  cursor: pointer;
  transition:
    background-color 0.3s,
    box-shadow 0.3s;
}

.button--normal {
  border-radius: 5px;
}

.button--round {
  border-radius: 50%;
}

.button--icon + text .button__icon {
  margin-right: 8px;
}

.button--hover {
  background-color: #9fcf60; /* Обновите цвет для состояния hover */
}

.button--pressed {
  background-color: #6bb33b; /* Обновите цвет для состояния pressed */
}

.button--disabled {
  background-color: #b0b0b0; /* Обновите цвет для состояния disabled */
  cursor: not-allowed;
}
</style>
