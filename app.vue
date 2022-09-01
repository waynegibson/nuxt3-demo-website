<script lang="ts" setup>
useHead({
  titleTemplate: (title: string) => {
    return title ? `${title} | Amce` : 'Amce Demo Site'
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
  charset: 'utf-8',
  htmlAttrs: {
    class: 'h-full font-sans font-normal antialiased text-gray-500',
  },
  meta: [
    { hid: 'description', name: 'description', content: 'Demo nuxt 3 website for ci/cd' },
    { hid: 'keywords', property: 'keywords', content: '' },
    { hid: 'author', property: 'author', content: 'Amce, Inc' },
    { hid: 'robots', name: 'robots', content: 'noindex' },
    { hid: 'googlebot', name: 'googlebot', content: 'noindex' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preload', href: 'fonts/Inter-roman.var.woff2?v=3.18', as: 'font', type: 'font/woff2', crossorigin: 'anonymous' },
  ],
  bodyAttrs: {
    class: 'bg-white dark:bg-slate-900',
  },
})
</script>

<template>
  <Html>
    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
