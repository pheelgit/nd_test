import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { NoteIdType, NoteType } from '../types/noteType.ts'

export const useNotesStore = defineStore('notes', () => {
  const state = ref<NoteType[]>([])

  function deleteNote(id: NoteIdType) {
    const index = state.value.findIndex((el) => el.id === id)

    if (index > -1) {
      state.value.splice(index, 1)
    }
  }

  function addNotes(note: NoteType) {
    state.value.push(note)
  }

  return {
    state,
    deleteNote,
    addNotes
  }
})
