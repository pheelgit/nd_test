<script setup lang="ts">
import VNote from './VNote.vue'
import { useNotesStore } from '../stores/notes.ts'
import { useNotes } from '../hooks/useNotes.ts'

const notesStore = useNotesStore()

const { deleteNote } = useNotes()
</script>

<template>
  <div class="wrap">
    <VNote
      v-for="note in notesStore.state"
      :data="note"
      :delete="deleteNote"
      :key="note.id"
      class="note-item"
    />
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  align-items: start;
}

.wrap .note-item {
  flex-basis: 500px;
}
</style>
