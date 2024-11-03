<script lang="ts" setup>
import { defineProps, defineEmits } from 'vue'

interface Props {
  isTextArea?: boolean
  modelValue: string
  placeholder?: string
  errorMessage?: string
  label?: string
}

defineProps<Props>()
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

const updateValue = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="input-wrapper">
    <label v-if="label" class="input-label text-small">{{ label }}</label>
    <textarea
      v-bind="$attrs"
      v-if="isTextArea"
      :value="modelValue"
      @input="updateValue"
      class="custom-input"
      :placeholder="placeholder"
    />
    <input
      v-bind="$attrs"
      v-else
      :value="modelValue"
      @input="updateValue"
      class="custom-input"
      :placeholder="placeholder"
    />
    <span class="error-message text-small" v-if="errorMessage">{{ errorMessage }}</span>
  </div>
</template>

<style scoped>
.input-wrapper {
  margin-bottom: 40px; /* Увеличим отступ снизу, чтобы разместить ошибку */
  position: relative;
}

.input-label {
  display: block;
  margin-bottom: 8px;
  font-size: 16px;
  color: #ffffff;
}

.custom-input {
  width: 100%;
  padding: 15px 40px 15px 15px;
  border: 2px solid transparent;
  border-radius: 50px;
  outline: none;
  font-size: 16px;
  color: var(--color-dark);
  background-color: var(--color-white);
  box-sizing: border-box;
  transition: border-color 0.3s;
}

.custom-input:focus {
  border-color: var(--color-green-light);
}

.custom-input::placeholder {
  color: var(--color-gray);
}

.input-wrapper:hover .custom-input {
  border-color: var(--color-green-light);
}

.input-wrapper .error-message {
  color: var(--color-error);
  position: absolute;
  top: calc(100% + 5px);
  left: 15px;
}

.input-wrapper.active .custom-input {
  border-color: #b5de33;
}
</style>
