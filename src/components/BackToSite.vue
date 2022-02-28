<template>
  <a href="https://arthurdanjou.fr" target="_blank" class="flex items-center mb-4 text-gray-700 dark:text-gray-300 text-sm">
    <div class="group cursor-pointer flex items-center">
      <LeftArrowIcon class="mr-2 group-hover:-translate-x-2 duration-300 transform" /> {{ t('back') }}
    </div>
  </a>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
