<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>


<template>
  <header>
    <nav>
      <RouterLink to="/"></RouterLink>
    </nav>
  </header>

  <RouterView />
</template>


<style>
/* Reset basic styles here */
body {
  margin: 0;
  background-color: #141414;
  color: white;
  font-family: Arial, sans-serif;
}
</style>