<template>
  <div class="fixed top-2 right-1 sm:(top-4 right-4) grid grid-rows-2 gap-y-2 text-center">
    <div
      class="p-1 hover:bg-gray-300 dark:hover:bg-gray-800 duration-300 cursor-pointer rounded-full"
      @click.prevent="toggleDark"
    >
      <SunIcon v-if="isDark" />
      <MoonIcon v-else />
    </div>
    <div
      class="p-1 hover:bg-gray-300 dark:hover:bg-gray-800 duration-300 cursor-pointer rounded-full transform"
      :class="{'rotate-180': scrollPosition > 100}"
      @click.prevent="teleport"
    >
      <DownArrowIcon />
    </div>
    <div @click.prevent="switchLanguage">
      <div v-if="locale === 'fr'" class="text-right text-xl px-1 hover:bg-gray-300 dark:hover:bg-gray-800 duration-300 cursor-pointer rounded-full">
        🇬🇧
      </div>
      <div v-else class="text-right text-xl px-1 hover:bg-gray-300 dark:hover:bg-gray-800 duration-300 cursor-pointer rounded-full">
        🇫🇷
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '~/composables'

const { locale } = useI18n()

const switchLanguage = () => {
  locale.value = locale.value === 'fr' ? 'en' : 'fr'
}

const scrollPosition = ref(0)

const teleport = () => {
  window.scroll({
    behavior: 'smooth',
    top: scrollPosition.value > 100 ? 0 : document.body.scrollHeight,
  })
}

const updateScroll = () => {
  scrollPosition.value = window.scrollY
}

onMounted(() => {
  window.addEventListener('scroll', updateScroll)
})
onUnmounted(() => {
  window.removeEventListener('scroll', updateScroll)
})
</script>
