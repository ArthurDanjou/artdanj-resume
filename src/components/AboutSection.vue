<template>
  <SectionTitle title="about.title" />
  <SectionPart>
    <p class="text-justify leading-6">
      {{ t('about.first') }}
      <br><br>
      {{ t('about.second') }}
    </p>
  </SectionPart>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
