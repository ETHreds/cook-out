<script setup>
  import MenuBar from '@/components/MenuBar.vue'
  
  import { RouterView } from 'vue-router';

</script>

<template>
  <div class="app">
    <header>
      <MenuBar/>
    </header>
    <main>
      <RouterView></RouterView>
    </main>
    <footer>
    </footer>

  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
