<script setup lang="ts">
import { ref } from 'vue'
import { useNotes } from '../hooks/useNotes.ts'
import VInput from './VInput.vue'
import VButton from './VButton.vue'

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
    <VInput
      v-model="title"
      placeholder="Введите значение"
      errorMessage="Сообщение об ошибке"
    ></VInput>
    <VInput
      :is-text-area="true"
      v-model="content"
      placeholder="Введите значение"
      errorMessage="Сообщение об ошибке"
    ></VInput>
    <VButton type="submit" />
    <button type="submit">Добавить</button>
  </form>
</template>
