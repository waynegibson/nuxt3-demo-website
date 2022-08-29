<script lang="ts" setup>
useHead({
  titleTemplate: (title: string) => {
    return title ? `${title} | Spacemuis` : 'Spacemuis'
  },
  viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
  charset: 'utf-8',
  htmlAttrs: {
    class: 'h-full font-sans font-normal antialiased text-gray-500',
  },
  meta: [
    { hid: 'description', name: 'description', content: '' },
    { hid: 'keywords', property: 'keywords', content: '' },
    { hid: 'author', property: 'author', content: 'Spacecomx, LLC' },
  ],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
    { rel: 'preload', href: '/fonts/Inter-roman.var.woff2?v=3.18', as: 'font', type: 'font/woff2', crossorigin: '' },
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
