<template>
    <q-layout view="hHh lpR fFf">
  
      <TheHeader />
  
      <q-page-container>
        <router-view />
      </q-page-container>
      
      <q-footer class="q-pa-md">
        <p class="text-center">Made with Vue 3 + Quasar UI Framework</p>
      </q-footer>

    </q-layout>
  </template>

  <script>
import TheHeader from '@/components/TheHeader.vue'


export default {
    components: {
        TheHeader
    }
}
</script>

<style>
/* .q-page-container {
  padding: 0 10rem;
} */

.q-footer {
  position: relative !important;
  background-color: #010509;
  color: white;
}

</style>