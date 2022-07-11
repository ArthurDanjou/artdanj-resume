<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <SectionTitle title="interests.title" />
  <SectionPart>
    <p class="text-justify">
      {{ t('interests.content') }}
    </p>
  </SectionPart>
</template>
