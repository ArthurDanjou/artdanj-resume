<template>
  <div>
    <div>
      <h1 class="text-lg leading-5">
        <strong>{{ t(title) }}</strong>, {{ location }}
      </h1>
      <h3 class="my-1 text-sm text-gray-500 dark:text-gray-400">
        {{ t('date.from') }} {{ getBeginDate }} {{ t('date.to') }} {{ getEndDate }}
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
    default: 'Title',
  },
  location: {
    type: String,
    default: 'Location',
  },
  beginDate: {
    type: String,
    required: true,
  },
  endDate: {
    type: String,
    required: true,
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
