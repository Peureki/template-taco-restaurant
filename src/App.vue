<template>
  <Nav
    :logo="logo" logo-alt="Logo" logo-title="Logo"

    :instagram="instagram"
    :email="email"
  />
  <router-view/>
</template>

<script setup>
import Nav from './components/Nav.vue';

let logo = `
    <svg width="50" height="42" viewBox="0 0 50 42" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M25.0559 0.000580853V0C25.0372 0 25.0186 6.73455e-05 25 0.000135811C24.9814 6.73455e-05 24.9628 0 24.9441 0V0.000580853C20.6871 0.0432348 16.9564 2.52223 14.8233 6.17393C13.3888 5.24007 11.6674 4.66937 9.80261 4.66937C4.39944 4.66937 -0.0474163 9.49437 0.000381762 15.357C0.000381762 21.3234 4.39944 26.0965 9.89824 26.0965H25.0559H40.1018C45.6006 26.0965 49.9996 21.3234 49.9996 15.357C50.0474 9.49437 45.6006 4.66937 40.1974 4.66937C38.3326 4.66937 36.6112 5.24007 35.1767 6.17393C33.0436 2.52223 29.3129 0.0432348 25.0559 0.000580853Z" />
      <path d="M9.58923 33.6605H40.4106V28.4596H9.58923V33.6605Z" />
      <path d="M9.58923 41.2245H40.4106V36.0236H9.58923V41.2245Z" />
    </svg>`,

    instagram =  `
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.75 2.526H20.25C24.25 2.526 27.5 5.80986 27.5 9.85152V20.4609C27.5 22.4037 26.7362 24.267 25.3765 25.6408C24.0169 27.0146 22.1728 27.7864 20.25 27.7864H9.75C5.75 27.7864 2.5 24.5026 2.5 20.4609V9.85152C2.5 7.90867 3.26384 6.0454 4.62348 4.6716C5.98311 3.29779 7.82718 2.526 9.75 2.526ZM9.5 5.05204C8.30653 5.05204 7.16193 5.53109 6.31802 6.38379C5.47411 7.2365 5 8.39301 5 9.59892V20.7135C5 23.2269 7.0125 25.2604 9.5 25.2604H20.5C21.6935 25.2604 22.8381 24.7813 23.682 23.9286C24.5259 23.0759 25 21.9194 25 20.7135V9.59892C25 7.08551 22.9875 5.05204 20.5 5.05204H9.5ZM21.5625 6.94657C21.9769 6.94657 22.3743 7.11291 22.6674 7.40899C22.9604 7.70506 23.125 8.10663 23.125 8.52535C23.125 8.94407 22.9604 9.34563 22.6674 9.64171C22.3743 9.93779 21.9769 10.1041 21.5625 10.1041C21.1481 10.1041 20.7507 9.93779 20.4576 9.64171C20.1646 9.34563 20 8.94407 20 8.52535C20 8.10663 20.1646 7.70506 20.4576 7.40899C20.7507 7.11291 21.1481 6.94657 21.5625 6.94657ZM15 8.8411C16.6576 8.8411 18.2473 9.50644 19.4194 10.6908C20.5915 11.8751 21.25 13.4813 21.25 15.1562C21.25 16.8311 20.5915 18.4373 19.4194 19.6217C18.2473 20.806 16.6576 21.4713 15 21.4713C13.3424 21.4713 11.7527 20.806 10.5806 19.6217C9.40848 18.4373 8.75 16.8311 8.75 15.1562C8.75 13.4813 9.40848 11.8751 10.5806 10.6908C11.7527 9.50644 13.3424 8.8411 15 8.8411ZM15 11.3671C14.0054 11.3671 13.0516 11.7663 12.3483 12.4769C11.6451 13.1875 11.25 14.1513 11.25 15.1562C11.25 16.1611 11.6451 17.1249 12.3483 17.8355C13.0516 18.5461 14.0054 18.9453 15 18.9453C15.9946 18.9453 16.9484 18.5461 17.6517 17.8355C18.3549 17.1249 18.75 16.1611 18.75 15.1562C18.75 14.1513 18.3549 13.1875 17.6517 12.4769C16.9484 11.7663 15.9946 11.3671 15 11.3671Z" />
    </svg>`,
    
    email = `
    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M27.5 7.57817C27.5 6.18884 26.375 5.05212 25 5.05212H5C3.625 5.05212 2.5 6.18884 2.5 7.57817V22.7344C2.5 24.1237 3.625 25.2605 5 25.2605H25C26.375 25.2605 27.5 24.1237 27.5 22.7344V7.57817ZM25 7.57817L15 13.8933L5 7.57817H25ZM25 22.7344H5V10.1042L15 16.4193L25 10.1042V22.7344Z" />
    </svg>`; 

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=BioRhyme&family=Rampart+One&display=swap');

* {
  box-sizing: border-box;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-kerning: auto;
  margin: 0;
  padding: 0;
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
html, body{
  overflow-x: hidden;
}
a{
  text-decoration: none;
  font-size: var(--font-size-button-text);
}



h1, h2, h4, h5{
  font-family: var(--font-family-h);
  font-weight: 100;
  margin: 0;
}

h1{
  font-size: var(--font-size-h1);
  padding-block: var(--padding-block-h1);
}
h2{
  font-size: var(--font-size-h2);
}
h3{
  font-size: var(--font-size-h3);
  font-family: var(--font-family-p);
}
h4{
  font-size: var(--font-size-h4);
}
p{
  font-family: var(--font-family-p);

}
.char{
    position: absolute;
    transform-origin: 0px 250px;
}
:root{
  --font-family-h: 'Rampart One', cursive;
  --font-family-p: 'BioRhyme', serif;

  --font-size-h1: clamp(10rem, 10vw, 30rem);
  --font-size-h2: clamp(8rem, 9vw, 20rem);
  --font-size-h3: clamp(6rem, 5vw, 10rem);
  --font-size-h4: clamp(30px, 7vw, 50px);
  --font-size-p: clamp(14px, 2vw, 16px);
  --font-size-button-text: clamp(16px, 3vw, 20px);

  --text-color-white: #ffffff; 
  --text-color-black: #000000; 

  --bkg-color-general: #FFE3AE;
  --bkg-color-green-full-opacity: rgb(97, 141, 4);
  --bkg-color-red-full-opacity: rgb(193, 58, 40);

  --padding-sides: 50px;
  --padding-block-h1: 50px;
}

</style>
