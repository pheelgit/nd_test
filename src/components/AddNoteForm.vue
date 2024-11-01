<script setup lang="ts">
import { ref } from 'vue'
import { useNotes } from '../hooks/useNotes.ts'

const props = defineProps<{ onSubmit?: Function }>()

const { addNote } = useNotes()

const title = ref('')
const content = ref('')

const register = async () => {
  await addNote({ title: title.value, content: content.value })
  props.onSubmit && props.onSubmit()
}
</script>

<template>
  <form @submit.prevent="register">
    <input v-model="title" placeholder="Введите название" required />
    <textarea v-model="content" placeholder="Введите текст" required />
    <button type="submit">Добавить</button>
  </form>
</template>
