export type NoteIdType = number

export type NoteType = {
  id: NoteIdType
  title: string
  content: string
}

export type NewNoteType = Pick<NoteType, 'title' | 'content'>
