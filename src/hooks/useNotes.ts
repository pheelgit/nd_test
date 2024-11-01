import HTTPService from '../services/HTTPService.ts'
import { useNotesStore } from '../stores/notes.ts'
import { NewNoteType, NoteIdType } from '../types/noteType.ts'

export const useNotes = () => {
  const notesStore = useNotesStore()

  const loadNotes = async () => {
    const { data } = await HTTPService.getNotes()
    data.forEach((el) => notesStore.addNotes(el))
  }

  const addNote = async (newNote: NewNoteType) => {
    const { data } = await HTTPService.addNote(newNote)
    notesStore.addNotes(data)
  }

  const deleteNote = async (noteId: NoteIdType) => {
    await HTTPService.deleteNote(noteId)
    notesStore.deleteNote(noteId)
  }

  return { loadNotes, addNote, deleteNote }
}
