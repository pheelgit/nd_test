<script setup lang="ts">
interface Props {
  text: string
  to: string
}
defineProps<Props>()
</script>

<template>
  <RouterLink class="link text-small-bold" :to="to"> {{ text }}</RouterLink>
</template>

<style scoped>
.link {
  color: var(--color-green-light);
}
.link:hover {
  color: var(--color-white);
}
</style>
