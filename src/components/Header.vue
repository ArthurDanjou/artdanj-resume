<template>
  <div class="my-4 text-center sm:text-left">
    <h1 class="font-black text-2xl">
      Arthur DANJOU
    </h1>
    <h2 class="text-lg text-gray-600 dark:text-gray-400">
      {{ t('header.job') }}
    </h2>
    <h3 class="text-sm text-gray-500 dark:text-gray-300 mt-2">
      Paris, France
    </h3>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
