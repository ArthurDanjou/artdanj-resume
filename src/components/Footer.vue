<template>
  <div class="mt-8 text-center">
    <a class="leading-5 font-bold border-b-2 hover:(border-gray-700 dark:border-white) border-gray-300 dark:border-gray-700 dark:border-gray-800 duration-300 cursor-pointer">
      {{ t('footer.pdf') }}
    </a>
    <p class="text-xs text-gray-700 dark:text-gray-300 mt-4">
      {{ t('footer.updated', {date: updated}) }}
    </p>
    <p class="text-xs text-gray-700 dark:text-gray-300 mt-1">
      {{ t('footer.copyright', {year}) }}
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()
const year = computed(() => {
  return new Date().getFullYear()
})

const updated = computed(() => {
  return locale.value === 'fr'
    ? '28 Février 2022 à 16h22'
    : 'February 28th 2022 at 16:22'
})
</script>
