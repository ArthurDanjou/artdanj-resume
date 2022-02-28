<template>
  <div>
    <div>
      <h1 v-if="url" class="text-lg">
        <a
          :href="url"
          target="_blank"
          class="font-bold border-b-2 hover:(border-gray-700 dark:border-white) border-gray-300 dark:border-gray-600 dark:border-gray-800 duration-300 cursor-pointer"
        >
          {{ company }}
        </a> - <span class="text-gray-700 dark:text-gray-300">{{ t(title) }}</span>
      </h1>
      <h1 v-else class="text-lg">
        <strong>{{ company }}</strong> - <span class="text-gray-700 dark:text-gray-300">{{ t(title) }}</span>
      </h1>
      <h3 v-if="getBeginDate === getEndDate" class="text-sm text-gray-500 dark:text-gray-400 my-1">
        {{ t('date.in') }} {{ getEndDate }} <span class="mx-2">|</span> {{ location }}
      </h3>
      <h3 v-else class="text-sm text-gray-500 dark:text-gray-400 my-1">
        {{ t('date.from') }} {{ getBeginDate }} {{ t('date.to') }} {{ getEndDate }} <span class="mx-2">|</span> {{ location }}
      </h3>
    </div>
    <p class="text-justify text-md leading-5 dark:text-gray-300">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps({
  title: {
    type: String,
  },
  company: {
    type: String,
  },
  location: {
    type: String,
  },
  beginDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
})

const getEndDate = computed(() => {
  return props.endDate === 'Today'
    ? t('date.today')
    : `${t(`months.${props.endDate.split('/')[0]}`)} ${props.endDate.split('/')[1]}`
})

const getBeginDate = computed(() => {
  return `${t(`months.${props.beginDate.split('/')[0]}`)} ${props.beginDate.split('/')[1]}`
})
</script>
