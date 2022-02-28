<script setup>
import { useHead } from '@vueuse/head'

useHead({
  title: 'Arthur Danjou - My Résumé',
  meta: [
    { name: 'description', content: 'See my technology resume' },
  ],
})
</script>

<template>
  <div class="px-4 lg:px-32 dark:text-white lg:flex py-8 lg:py-16">
    <Menu />
    <section class="lg:w-1/4 flex flex-col">
      <BackToSite />
      <Header />
      <SocialList />
    </section>
    <section class="lg:w-3/4 mt-4 lg:mt-0">
      <AboutSection />
      <WorkSection />
      <EducationSection />
      <StackSection />
      <ProjectSection />
      <InterestSection />
      <LanguageSection />
      <Footer />
    </section>
  </div>
</template>
