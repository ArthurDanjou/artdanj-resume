<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <SectionTitle title="projects.title" />
  <SectionPart>
    <div class="grid gris-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-4">
      <Project
        title="Ares"
        description="projects.ares"
        url="https://arthurdanjou.fr"
      />
      <Project
        title="Athena"
        description="projects.athena"
        url="https://api.arthurdanjou.fr"
      />
      <Project
        title="LinkyJs"
        description="projects.linkyjs"
        url="https://github.com/linkyjs"
      />
      <Project
        title="Slidev"
        description="projects.slidev"
        url="https://sli.dev"
      />
    </div>
    <div class="flex justify-center sm:justify-start">
      <a
        href="https://arthurdanjou.fr/projects"
        target="_blank"
        class="leading-5 font-bold border-b-2 hover:(border-gray-700 dark:border-white) border-gray-300 dark:border-gray-700 dark:border-gray-800 duration-300 cursor-pointer"
      >
        {{ t('projects.more') }}
      </a>
    </div>
  </SectionPart>
</template>
