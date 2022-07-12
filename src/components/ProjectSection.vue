<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <SectionTitle title="projects.title" />
  <SectionPart>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 mb-4 h-full auto-rows-fr">
      <Project
        title="artdanj-website"
        description="projects.website"
        url="https://arthurdanjou.fr"
      />
      <Project
        title="artdanj-api"
        description="projects.api"
        url="https://api.arthurdanjou.fr"
      />
      <Project
        title="artdanj-shortner"
        description="projects.shortener"
        url="https://github.com/linkyjs"
      />
      <Project
        title="Slidev"
        description="projects.slidev"
        url="https://sli.dev"
      />
      <Project
        title="artdanj-fallback"
        description="projects.fallback"
        url="https://fallback.arthurdanjou.fr"
      />
      <Project
        title="make-my-sever"
        description="projects.make-server"
        url="https://github.com/arthurdanjou/make-my-server"
      />
    </div>
    <div class="flex justify-center sm:justify-start">
      <a
        href="https://go.arthurdanjou.fr/projects"
        target="_blank"
        class="leading-5 font-bold border-b-2 hover:(border-gray-700 dark:border-white) border-gray-300 dark:border-gray-600 dark:border-gray-800 duration-300 cursor-pointer"
      >
        {{ t('projects.more') }}
      </a>
    </div>
  </SectionPart>
</template>
