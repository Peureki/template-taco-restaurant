<template>
    <div class="catering">
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

        <div class="two-col-flex-container">
            <div class="two-col-flex-img">
                <img :src="imgSrc" :alt="imgAlt" :title="imgTitle">
                <span class="two-col-flex-img-bkg"></span>
            </div>

            <div class="two-col-flex-desc">
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
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    highlightedHeader: String,
    unhightlightedHeader: String,

    description: String,

    imgSrc: String,
    imgAlt: String,
    imgTitle: String,

    ctaSrc: String,
    ctaAlt: String,
    ctaTitle: String,
    ctaMessage: String,
})


</script>

<style scoped>
.catering{
    position: relative;
    padding-inline: var(--padding-inline);
}
.two-col-flex-container{
    display: flex;
    gap: 50px;
}
.two-col-flex-desc{
    display: flex;
    flex-direction: column;
    gap: 25px;
    width: 50%;
}
.two-col-flex-img{
    width: 50%;
    position: relative;
}
.two-col-flex-img img{
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: var(--border-radius-img);
}
.two-col-flex-img-bkg{
    background-color: var(--bkg-color-green-low-opacity);
    width: 100%;
    height: 100%;
    position: absolute;
    top: 25px;
    left: 25px;
    border-radius: var(--border-radius-img);
    z-index: -1;
}
@media only screen and (max-width: 1024px){
    .two-col-flex-container{
        flex-direction: column;
        align-items: center;
    }
    .two-col-flex-img, 
    .two-col-flex-desc{
        width: 90%;
    }
    .header{
        text-align: center;
    }
}

</style>