<template>
    <div class="hero">
        <div class="hero-container">

            <div class="left-hero-container">
                <h1>{{ leftTitle }}</h1>
                <h3>{{ subTitle }}</h3>
            </div>

            <div class="right-hero-container">
                <h1>{{ rightTitle }}</h1>

                <img class="taco" :src="taco" :alt="tacoAlt" :title="tacoTitle">
                <img class="lime" :src="lime" :alt="limeAlt" :title="limeTitle">
                <img class="cilantro" :src="cilantro" :alt="cilantroAlt" :title="cilantroTitle">
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

        <div class="expand-circle" :style="{width: `${finalCircleSize}px`, height: `${finalCircleSize}px`}"></div>

        <div 
            class="empty-space"
            ref="emptySpace"
        >
            <div></div>
            <div></div>
        </div>
    </div>

   
</template>

<script setup>
import { ref, onMounted } from 'vue';

let props = defineProps({
    leftTitle: String,
    rightTitle: String,
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
})

let emptySpace = ref(null),
    targetCircleSize = window.innerWidth,
    finalCircleSize = ref(0),
    scrollPercentage = ref(0);

let ctaContainer = ref(null),
    ctaActive = ref(true),
    ctaText = ref(null);

// Get the scroll progress of the empty div
// As users scroll => get the scroll % of progress from the bounding client Y. Use that % as progress to the targetCircleSize
// As the user scrolls => circle effect gets bigger until it reaches the end
let getScrollProgress = (div) => {
    if (div){
        scrollPercentage.value = ((Math.abs(div.getBoundingClientRect().y - window.innerHeight))/div.offsetHeight);
        finalCircleSize.value = targetCircleSize * scrollPercentage.value;
        console.log(scrollPercentage.value);
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
    }
}

onMounted(() => {
    window.addEventListener('scroll', () => {getScrollProgress(emptySpace.value)})
})

</script>

<style scoped>
h1{
    text-align: center;
}
h3{
    padding-inline: var(--padding-sides);
}
h4{
    color: var(--text-color-white);
    text-align: center;
    margin: 0;
}

.empty-space{
    height: 100dvh;
    display: flex;
}
.empty-space > div{
    height: 100%;
    width: 50%;
}
.empty-space > div:nth-child(1){
    background-color: var(--bkg-color-green-full-opacity);
}
.empty-space > div:nth-child(2){
    background-color: var(--bkg-color-red-full-opacity);
}
.hero-container{
    height: 100dvh;
    width: 100%;
    display: flex;
    position: relative;
}
.left-hero-container, 
.right-hero-container{
    width: 50%;
    color: var(--text-color-white);
}


.left-hero-container{
    background-color: var(--bkg-color-green-full-opacity);
}
.right-hero-container{
    position: relative;
    background-color: var(--bkg-color-red-full-opacity);
}
.right-hero-container img{
    position: absolute;
}
.taco{
    inset: 0;
    margin: auto;
    width: clamp(300px, 25vw, 600px);
}
.cilantro{
    top: 85%;
    left: 20%;
    transform: translate(-20%, -85%);
}
.lime{
    top: 90%;
    left: 80%;
    transform: translate(-80%, -90%);
}

.cta-container{
    position: fixed;
    width: 400px;
    height: 400px;
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
    width: 200px;
    height: 200px;
}
.cta-message{
    position: absolute;
    animation: spinClockwise 10s linear infinite;
}
.cta-message text{
    font-size: var(--font-size-h4);
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



</style>