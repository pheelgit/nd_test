<script setup lang="ts">
import { onMounted, ref } from 'vue'
import VNote from '../components/VNote.vue'
import { useNotesStore } from '../stores/notes.ts'
import { useNotes } from '../hooks/useNotes.ts'
import PopUp from '../components/PopUp.vue'
import VButton from '../components/VButton.vue'
import { IconNamesEnum } from '../assets/IconNames.enum.ts'
import AddNoteForm from '../components/AddNoteForm.vue'

const notesStore = useNotesStore()

const { loadNotes, deleteNote } = useNotes()
const isAddingNote = ref<boolean>(false)

onMounted(loadNotes)
</script>

<template>
  <div>
    <VNote v-for="note in notesStore.state" :data="note" :delete="deleteNote" :key="note.id" />
    <PopUp title="Добавление заметки" :is-visible="isAddingNote">
      <AddNoteForm :on-submit="() => (isAddingNote = false)" />
    </PopUp>
    <VButton
      @click="isAddingNote = true"
      button-style="normal"
      text=""
      text-style="round"
      icon-style="round"
      :icon="IconNamesEnum.add"
    />
  </div>
</template>

<style scoped></style>
