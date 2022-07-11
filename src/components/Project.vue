<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps({
  title: {
    type: String,
  },
  url: {
    type: String,
  },
  description: {
    type: String,
  },
})

const { t } = useI18n()
</script>

<template>
  <a
    class="w-full h-full"
    :href="url"
    target="_blank"
  >
    <div class="w-full h-full p-2 border-2 rounded-lg border-white dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 duration-500 cursor-pointer">
      <h1 class="font-bold">
        {{ title }}
      </h1>
      <h2 class="text-gray-700 text-justify dark:text-gray-200">
        {{ t(description) }}
      </h2>
    </div>
  </a>
</template>
