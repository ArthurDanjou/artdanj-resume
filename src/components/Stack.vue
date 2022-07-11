<script setup lang="ts">
import { useI18n } from 'vue-i18n'

defineProps({
  title: {
    default: 'Title',
    required: true,
  },
  content: {
    default: 'Content',
    required: true,
  },
})

const { t } = useI18n()
</script>

<template>
  <div class="mb-2">
    <strong class="mr-2">{{ t(title) }}</strong><span class="dark:text-gray-200">{{ content }}</span>
  </div>
</template>
