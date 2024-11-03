<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useNotes } from '../hooks/useNotes.ts'
import PopUp from '../components/PopUp.vue'
import VButton from '../components/VButton.vue'
import { IconNamesEnum } from '../assets/IconNames.enum.ts'
import AddNoteForm from '../components/AddNoteForm.vue'
import NotesList from '../components/NotesList.vue'
import { useAuthUser } from '../hooks/useAuthUser.ts'

const { loadNotes } = useNotes()
const { getUserData } = useAuthUser()
const isAddingNote = ref<boolean>(false)

onMounted(loadNotes)
onMounted(getUserData)
</script>

<template>
  <div class="wrap">
    <NotesList class="list-wrap" />
    <VButton
      class="add_note_button"
      @click="isAddingNote = true"
      text="asd"
      :icon="IconNamesEnum.add"
      round
    />

    <PopUp title="Добавление заметки" :is-visible="isAddingNote">
      <AddNoteForm :on-submit="() => (isAddingNote = false)" />
    </PopUp>
  </div>
</template>

<style scoped>
.wrap {
  display: flex;
  gap: 1em;
}

.list-wrap {
  flex-grow: 1;
}
.add_note_button {
  align-self: flex-end;
  flex-basis: 2em;
}
</style>
