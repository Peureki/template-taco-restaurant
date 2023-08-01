<template>
    <div class="about">
        <div class="about-container">
            <div class="header">
                <h2>
                    {{ unhightlightedHeader }} 
                    <span class="highlighted-text">
                        {{ highlightedHeader }}
                        <span class="highlight-front-bkg"></span>
                        <span class="highlight-back-bkg"></span>
                    </span>
                </h2>
            </div>

            <div class="description">
                <p>{{ description }}</p>
                <div class="cta">
                    <img :src="ctaSrc" :alt="ctaAlt" :title="ctaTitle">
                    <button class="cta-green-btn">
                        <span class="cta-green-btn-main-bkg"></span>
                        <span class="cta-green-btn-back-bkg"></span>
                        <p> {{ ctaMessage }}</p>
                    </button>
                </div>
            </div>

            <div class="tacos">
                <img :src="tacos" :alt="tacosAlt" :title="tacosTitle">
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    unhightlightedHeader: String,
    highlightedHeader: String,

    description: String, 

    ctaSrc: String,
    ctaAlt: String,
    ctaTitle: String,
    ctaMessage: String,

    tacos: String,
    tacosAlt: String,
    tacosTitle: String,
})

</script>

<style scoped>
.about{
    position: relative;
    z-index: 2;
    background-color: var(--bkg-color-general);
    padding-inline: var(--padding-inline);
}
.about-container{
    display: grid;
    grid-template-areas: 
        'one one'
        'two three';
    grid-template-columns: 1fr 1fr;
    gap: 0px 50px;
}
.header{
    grid-area: one;
}
.description{
    grid-area: two;
    display: flex;
    flex-direction: column;
    gap: 25px;
}
.tacos{
    grid-area: three;
}
.tacos img{
    width: clamp(20rem, 40vw, 100rem);
}




/* .highlighted-text:hover .highlight-back-bkg{
    top: 10%;
    left: 0%;
    transition: 0.3s all ease;
} */

@media only screen and (max-width: 1024px){
    .about-container{
        grid-template-columns: 1fr;
        grid-template-areas: 
            'one'
            'three'
            'two';
    }
}
@media only screen and (max-width: 768px){
    
}

</style>