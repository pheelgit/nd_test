<script setup lang="ts">
import { NoteIdType, NoteType } from '../types/noteType.ts'

const props = defineProps<{ data: NoteType; delete: (id: NoteIdType) => Promise<void> }>()

const handleRemove = async () => {
  await props.delete(props.data.id)
}
</script>

<template>
  <div>
    <h1>{{ data.title }}</h1>
    <p>{{ data.content }}</p>
    <p>{{ data.id }}</p>
    <button @click="handleRemove">Удалить</button>
  </div>
</template>

<style scoped></style>
