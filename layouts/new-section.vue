<template>
  <default class="new-section">
    <div class="flex items-center">
      <figure class="w-1/2" />
      <div class="w-1/2 text-right pr-12">
        <slot />
      </div>
    </div>
  </default>
</template>

<script setup lang="ts">
import Default from "./default.vue";
</script>

<style>
.slidev-layout.new-section {
  @apply bg-unicorn text-white;
}

.slidev-layout.new-section *,
.slidev-layout.new-section h1,
.slidev-layout.new-section h2,
.slidev-layout.new-section h3,
.slidev-layout.new-section h4,
.slidev-layout.new-section h5,
.slidev-layout.new-section h6,
.slidev-layout.new-section p,
.slidev-layout.new-section strong,
.slidev-layout.new-section a {
  @apply text-white;
}

/* drop the theme's gradient text, which matches this background */
.slidev-layout.new-section :is(h1, h2, h3, h4, h5, h6) {
  @apply bg-none;
}
</style>
