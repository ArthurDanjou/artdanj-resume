<template>
  <SectionTitle title="educations.title" />
  <SectionPart class="space-y-4">
    <Education
      title="educations.license"
      location="Faculté des Sciences de l'Université Paris-Saclay, Orsay (France)"
      begin-date="08/2021"
      end-date="Today"
    />
    <Education
      title="educations.selftaught.title"
      location="Remote"
      begin-date="08/2021"
      end-date="Today"
    >
      {{ t('educations.selftaught.content') }}
    </Education>
    <Education
      title="educations.baccalaureate"
      location="Lycée La Salle Passy-Buzenval, Rueil-Malmaison (France)"
      begin-date="09/2020"
      end-date="09/2021"
    >
      {{ t('educations.b') }}
    </Education>
    <Education
      title="educations.dnb"
      location="Collège La Salle Passy-Buzenval, Rueil-Malmaison (France)"
      begin-date="09/2017"
      end-date="09/2018"
    >
      {{ t('educations.tb') }}
    </Education>
  </SectionPart>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
