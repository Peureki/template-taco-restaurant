<template>
    <div class="about">
        <div class="about-container">
            <div class="header">
                <h2>{{ header }}</h2>
            </div>

            <div class="description">

            </div>

            <div class="tacos">

            </div>
        </div>
    </div>
</template>

<script setup>
let props = defineProps({
    header: String,
})

</script>

<style scoped>
.about{
    position: relative;
    z-index: 2;
    background-color: var(--bkg-color-general);
}

</style>