<template>
    <div 
        class="feast"
        ref="feastContainer"
        :style="{height: `${feastHeight}`}"
    >
        <div class="header">
            <h2>
                <span class="highlighted-text">
                    {{ highlightedHeader }}<!-- 
                    remove space --><span class="highlight-front-bkg"></span>
                    <span class="highlight-back-bkg"></span>
                </span>
                {{ unhightlightedHeader }} 
            </h2>
        </div>

        <div 
            class="gallery-container"
            ref="galleryContainer"
        >
            <div 
                class="sig-taco-container"
                v-for="(tacos, index) in sigTacos" :key="tacos.name"
            >
                <h5>{{ tacos.name }}</h5>
                <img :src="tacos.src" :alt="tacos.alt" :title="tacos.title">
                <p>{{ tacos.desc }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref, onMounted, inject} from 'vue';

let props = defineProps({
    unhightlightedHeader: String,
    highlightedHeader: String,

    sigTacos: Object,
})

let galleryContainer = ref(null),
    feastContainer = ref(null);

let feastContainerCurrentY = 0,
    feastHeight = ref(null);

let isDesktop = ref(true);


let progressGallery = (container) => {
    if (container){
        console.log(container.getBoundingClientRect().y);

        feastContainerCurrentY = container.getBoundingClientRect().y;
        if (container.getBoundingClientRect().y < 0){
            galleryContainer.value.style.transform = `translateX(${feastContainerCurrentY}px)`
        }
    }
}

onMounted(() => {
    // Change feastHeight if desktop view
    window.addEventListener('resize', () => {
        isDesktop.value = window.innerWidth > 1024 ? true : false; 
        console.log(isDesktop.value);
    })

    isDesktop.value = window.innerWidth > 1024 ? true : false; 



    if (isDesktop.value){
        feastHeight.value = `${props.sigTacos.length + 1}00dvh`
        window.addEventListener('scroll', () => {progressGallery(feastContainer.value)});
    }
})

</script>

<style scoped>
.feast{
    position: relative;
}
.header{

}
.header h2{
    text-align: center;
}
.gallery-container{
    display: flex;
    align-items: center;
    position: sticky;
    top: 0;
    height: 100dvh;
    padding-left: 50vw;
    gap: 300px;
}
.sig-taco-container{
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    white-space: nowrap;
    gap: 25px;
}
.sig-taco-container img{
    width: clamp(20rem, 30vw, 50rem);
}

@media only screen and (max-width: 1024px){
    .feast{
        padding-inline: var(--padding-inline);
    }
    .gallery-container{
        flex-direction: column;
        position: relative;
        height: unset;
        padding-left: unset;
        gap: 100px;
    }
    .sig-taco-container{
        white-space: unset;
    }
}
</style>