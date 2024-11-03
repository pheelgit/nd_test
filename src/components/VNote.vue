<script setup lang="ts">
import { NoteIdType, NoteType } from '../types/noteType.ts'
import VButton from './VButton.vue'
import { IconNamesEnum } from '../assets/IconNames.enum.ts'

const props = defineProps<{ data: NoteType; delete: (id: NoteIdType) => Promise<void> }>()

const handleRemove = async () => {
  await props.delete(props.data.id)
}
</script>

<template>
  <div class="note-item">
    <h4>{{ data.title }}</h4>
    <p class="text-normal">{{ data.content }}</p>
    <VButton
      :icon="IconNamesEnum.close"
      text="Удалить"
      @click="handleRemove"
      class="button-remove"
    />
    <div class="note-angle" />
  </div>
</template>

<style scoped>
.note-item {
  position: relative;
  background-color: var(--color-green-light);
  display: flex;
  flex-direction: column;
  align-items: start;
  padding: 0 1em;
  border-radius: 12px;
}

.button-remove {
  align-self: flex-end;
}
.note-angle {
  width: 40px;
  height: 40px;
  background: linear-gradient(45deg, var(--color-green) 50%, var(--color-dark) 50%);
  position: absolute;
  right: 0;
  top: 0;
  border-bottom-left-radius: 12px;
}
</style>
