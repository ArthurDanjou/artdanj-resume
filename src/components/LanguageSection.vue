<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <SectionTitle title="languages.title" />
  <SectionPart>
    <p v-html="t('languages.content')" />
  </SectionPart>
</template>
