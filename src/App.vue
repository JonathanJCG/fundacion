<template>
  <v-app>
      <router-view>
      </router-view>
  </v-app>
</template>


<script>

export default {
  name: 'App',
}
</script>

<style>
@font-face {
    font-family: 'base';
    src: url('fonts/Comfortaa/static/Comfortaa-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}
body {
    font-family: 'base', sans-serif;
}
</style>
