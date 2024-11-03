<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import { IconNamesEnum } from '../assets/IconNames.enum.js'

const props = defineProps<{ name: IconNamesEnum }>()

const iconContent = ref(null)

const loadIcon = async (iconName: IconNamesEnum) => {
  try {
    const module = await import(`../assets/icons/${iconName}.svg?raw`)
    iconContent.value = module.default
  } catch (e) {
    console.error(`Icon "${iconName}" not found.`)
  }
}

watchEffect(() => {
  loadIcon(props.name)
})
</script>

<template>
  <svg v-if="iconContent" v-html="iconContent" />
</template>

<style scoped>
svg {
  fill: currentColor;
}
</style>
