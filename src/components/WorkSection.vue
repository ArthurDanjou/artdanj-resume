<template>
  <SectionTitle title="works.title" />
  <SectionPart class="space-y-4">
    <WorkExperience
      title="works.autoentrepreneur.title"
      company="ArtDanjProduction"
      begin-date="09/2015"
      end-date="Today"
      location="Rueil-Malmaison, France"
      url="https://arthurdanjou.fr"
    >
      {{ t('works.autoentrepreneur.content') }}
    </WorkExperience>
    <WorkExperience
      title="works.erisium.title"
      company="Erisium"
      begin-date="02/2019"
      end-date="11/2020"
      location="Remote"
      url="https://erisium.com"
    >
      {{ t('works.erisium.content') }}
    </WorkExperience>
    <WorkExperience
      title="works.idemia.title"
      company="Idemia"
      begin-date="06/2019"
      end-date="06/2019"
      location="Courbevoie, France"
      url="https://idemia.com"
    >
      {{ t('works.idemia.content') }}
    </WorkExperience>
    <WorkExperience
      title="works.lsam.title"
      company="La Salle à Manger"
      begin-date="04/2018"
      end-date="04/2018"
      location="Boulogne-Billancourt, France"
    >
      {{ t('works.lsam.content') }}
    </WorkExperience>
  </SectionPart>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>
