<template>
    <div class="hero">
        <div class="nav-block"></div>

        <div class="hero-container">
            <div class="title">
                <h1>{{ title }}</h1>
            </div>

            <div class="taco-container">
                <img class="taco" :src="taco" :alt="tacoAlt" :title="tacoTitle">
                <img class="cilantro" :src="cilantro" :alt="cilantroAlt" :title="cilantroTitle">
                <img class="lime" :src="lime" :alt="limeAlt" :title="limeTitle">
            </div>

            <div class="info-container">
                <div class="message">
                    <p>{{ message }}</p>
                </div>                 
                <div class="hours">
                    <p>{{ address1 }}</p>
                    <p>{{ address2 }}</p>
                </div>
                <div class="hours">
                    <p>{{ hours1 }}</p>
                    <p>{{ hours2 }}</p>
                </div>
                <div class="phone">
                    <p>{{ phone }}</p>
                </div>
            </div>
        </div>
        
        <Transition name="cta">
            <div 
                class="cta-container"
                ref="ctaContainer"
                v-show="ctaActive"
            >
                <router-link to="/menu">
                    <svg
                        class="cta-message" 
                        xmlns="http://www.w3.org/2000/svg" xml:lang="en"
                        xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 500 500"
                    >
                        <title>Circular Text Path</title>
                        <defs>
                            <path id="textcircle"
                                d="M250,400
                                    a150,150 0 0,1 0,-300a150,150 0 0,1 0,300Z"
                                transform="rotate(12,250,250)"/>
                        </defs>
                        <rect width="100%" height="100%" fill="none"/>
                        <text ref="ctaText">
                            <textPath 
                                xlink:href="#textcircle"
                                aria-label="Explore Menu"
                                textLength="500">Explore Menu
                            </textPath>
                        </text>
                    </svg>
                
                    <img 
                        class="cta-tortilla"
                        :src="ctaImg" :alt="ctaImgAlt" :title="ctaImgTitle"
                    >
                </router-link>
                <router-view></router-view>
            </div>
        </Transition>

        <div 
            class="expand-circle" 
            ref="expandCircle"
            :style="{width: `${finalCircleSize}px`, height: `${finalCircleSize}px`}"
        >
        </div>

        <div 
            class="empty-space"
            ref="emptySpace"
        >
        </div>
    </div>

   
</template>

<script setup>
import { ref, onMounted } from 'vue';

let props = defineProps({
    title: String,
    subTitle: String,

    ctaImg: String,
    ctaImgAlt: String,
    ctaImgTitle: String,
    ctaMessage: String,

    taco: String,
    tacoAlt: String,
    tacoTitle: String,

    lime: String,
    limeAlt: String,
    limeTitle: String,

    cilantro: String,
    cilantroAlt: String,
    cilantroTitle: String,

    message: String,
    address1: String,
    address2: String,
    hours1: String,
    hours2: String,
    phone: String,
})

let emptySpace = ref(null),
    targetCircleSize = window.innerWidth,
    finalCircleSize = ref(0),
    scrollPercentage = ref(0);

let ctaContainer = ref(null),
    ctaActive = ref(true),
    ctaText = ref(null);

let expandCircle = ref(null);

// Get the scroll progress of the empty div
// As users scroll => get the scroll % of progress from the bounding client Y. Use that % as progress to the targetCircleSize
// As the user scrolls => circle effect gets bigger until it reaches the end
let getScrollProgress = (div) => {
    if (div){
        scrollPercentage.value = ((Math.abs(div.getBoundingClientRect().y - window.innerHeight))/div.offsetHeight);
        finalCircleSize.value = targetCircleSize * scrollPercentage.value;
        // Remove/add back the CTA tortilla when users scroll past or come back to the hero 
        if (div.getBoundingClientRect().y < 0){
            ctaActive.value = false;
        } else {
            ctaActive.value = true;
        }
        // Change rotating text from white => black since bkg changes to lighter color
        if (scrollPercentage.value > 0.20){
            ctaText.value.style.fill = "var(--text-color-black)";
        } else {
            ctaText.value.style.fill = "var(--text-color-white)";
        }
        // Remove expandCircle by decreasing the z-index once at the new section
        if (scrollPercentage.value > 1.8){
            expandCircle.value.style.zIndex = -100;
        } else {
            expandCircle.value.style.zIndex = 1;
        }
    }
}

onMounted(() => {
    window.addEventListener('scroll', () => {getScrollProgress(emptySpace.value)})
})

</script>

<style scoped>
h1{
    color: var(--text-color-white);
    padding-block: 0;
}
.nav-block{
    height: 100px;
    background-color: var(--bkg-color-red-full-opacity);
}
.hero-container{
    display: grid;
    grid-template-rows: 4fr 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-areas: 
        "one two"
        "three three";
    height: 100vh;
    background-color: var(--bkg-color-red-full-opacity);
    padding-inline: var(--padding-inline);
}
.title{
    grid-area: one;
}
.taco-container{
    grid-area: two;
    position: relative;
}
.info-container{
    grid-area: three;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-items: center;
    gap: 50px;
    color: var(--text-color-white);
}
.info-container p{
    display: block;
}
.taco{
    position: absolute;
    top: 35%;
    left: 75%;
    transform: translate(-75%, -35%);
    z-index: 10;
    width: clamp(20rem, 35vw, 35rem);
}
.cilantro{
    position: absolute;
    top: 85%;
    left: 20%;
    transform: translate(-20%, -85%);
    width: clamp(5rem, 10vw, 15rem);
    z-index: 11;
}
.lime{
    position: absolute;
    top: 95%;
    left: 90%;
    transform: translate(-90%, -95%);
    z-index: 11;
    width: clamp(5rem, 10vw, 15rem);
}
.subtitle{
    color: var(--text-color-white);
    font-family: var(--font-family-p);
}

.empty-space{
    height: 100dvh;
    background-color: var(--bkg-color-red-full-opacity);
}

.cta-container{
    position: fixed;
    width: clamp(20rem, 30vw, 25rem);
    height: clamp(20rem, 30vw, 25rem);
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    cursor: pointer;
    z-index: 1000;
}
.cta-container img{
    position: absolute;
    inset: 0;
    margin: auto;
    width: clamp(10rem, 16vw, 12.5rem);
    height: clamp(10rem, 16vw, 12.5rem);
}
.cta-message{
    position: absolute;
    animation: spinClockwise 10s linear infinite;
}
.cta-message text{
    font-size: var(--font-size-h5);
    font-family: var(--font-family-h);
    fill: var(--text-color-white);
    transition: fill 0.3s ease;
}
.cta-tortilla{
    animation: spinCounterClockwise 10s linear infinite;
}
.cta-enter-active, 
.cta-leave-active{
    transition: opacity 0.3s ease;
}
.cta-enter-from,
.cta-leave-to{
    opacity: 0;
}

.expand-circle{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 0px;
    height: 0px;
    border-radius: 50%;
    background-color: var(--bkg-color-general);
    z-index: 1;
}
@keyframes spinCounterClockwise{
    0% {transform: rotate(0deg);}
    100% {transform: rotate(-360deg);} 
}
@keyframes spinClockwise{
    0% {transform: rotate(0deg);}
    100% {transform: rotate(360deg);}
}

@media only screen and (max-width: 1024px){
    .hero-container{
        grid-template-rows: 1fr 3fr 1fr;
        grid-template-columns: unset;
        grid-template-areas: 
            "one"
            "two"
            "three";
    }
    .taco{
        top: 25%;
        left: 5%;
        transform: translate(-5%, -25%);
    }
    .cilantro{
        top: 50%;
        left: 70%;
        transform: translate(-70%, -50%);
    }
    .lime{
        top: 35%;
        left: 90%;
        transform: translate(-90%, -35%);
    }

}
@media only screen and (max-width: 768px){

}



</style>