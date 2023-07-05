<template>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/menu">Menu</router-link>
    <router-link to="/about">About</router-link>
    <router-link to="/catering">Catering</router-link>
    <router-link to="/contact">Contact</router-link>
  </nav>
  <router-view/>
</template>

<style>
* {
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
}
*::before,
*::after{
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
  -webkit-text-size-adjust: 100%;
}
body {
  margin: 0;
}

</style>
