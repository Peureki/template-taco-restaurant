<template>
    <div class="testimonials-template">
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

        <div class="testimonial-container">
            <div 
                class="testimonial"
                v-for="(testimonial, index) in testimonials" :key="testimonial.name"
            >
                <div class="testimonial-bkg"></div>
                <div class="testimonial-bkg-shadow"></div>

                <div class="testimonial-grid">
                    <div class="portrait">
                        <img :src="testimonial.src" :alt="testimonial.alt" :title="testimonial.title">
                    </div>
                    <div class="name">
                        <h5>{{ testimonial.name }}</h5>
                    </div>

                    <div class="stars">
                        <div v-for="star in testimonial.stars">
                            <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.64062 12.75L3.65625 8.35938L0.25 5.40625L4.75 5.01562L6.5 0.875L8.25 5.01562L12.75 5.40625L9.34375 8.35938L10.3594 12.75L6.5 10.4219L2.64062 12.75Z" fill="var(--svg-color-yellow)"/>
                            </svg>
                        </div>
                    </div>

                    <div class="review">
                        <p>{{ testimonial.review }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    highlightedHeader: String,
    unhightlightedHeader: String,

    testimonials: Object,
})

</script>

<style scoped>
.testimonials-template{
    position: relative;
    padding-inline: var(--padding-inline);
    padding-bottom: 100px;
}
.testimonial-container{
    display: flex;
    gap: 50px;
    padding-bottom: 100px;
    position: relative;
    overflow-x: scroll;
    overflow-y: hidden;
}
::-webkit-scrollbar{
    width: 2rem;
}
::-webkit-scrollbar-track{
    background-color: var(--bkg-color-green-low-opacity);
    border-radius: var(--border-radius-scrollbar);
}
::-webkit-scrollbar-thumb{
    background-color: var(--bkg-color-green-full-opacity);
    border-radius: var(--border-radius-scrollbar);
}
/* Firefox support */
@supports (scrollbar-color: var(--bkg-color-green-full-opacity) var(--bkg-color-green-low-opacity)){
    * {
        scrollbar-color: var(--bkg-color-green-full-opacity) var(--bkg-color-green-low-opacity);
        scrollbar-width: auto;
    }
}
.testimonial{
    position: relative;
    padding: var(--padding-general);
}
.testimonial-bkg{
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: var(--bkg-color-lime-full-opacity);
    border-radius: var(--border-radius-bkg);
    z-index: -1;
}
.testimonial-bkg-shadow{
    position: absolute;
    top: 25px;
    left: 25px;
    width: 100%;
    height: 100%;
    background-color: var(--bkg-color-lime-low-opacity);
    border-radius: var(--border-radius-bkg);
    z-index: -2;
}
.testimonial-grid{
    display: grid;
    grid-template-areas: 
        'one two'
        'one three'
        'one four';
    width: clamp(20rem, 50vw, 50rem);
}
.portrait{
    grid-area: one;
}
.portrait img{
    border-radius: 50%;
    padding: 10px;
}
.name{
    grid-area: two;
}
.stars{
    grid-area: three;
    display: flex;
    gap: 5px;
}
.stars svg{
    width: 25px;
    height: 25px;
}
.stars path{
    stroke: var(--path-outline-black);
    stroke-width: 0.1;
}
.review{
    grid-area: four;
}

</style>