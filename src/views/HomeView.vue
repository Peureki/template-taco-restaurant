<template>
    <div class="home">
        <Hero
            left-title="AURORA"
            right-title="TACOS"
            sub-title="It's Taco Tuesday, Every Day"

            :cta-img="require('@/assets/imgs/tortilla.png')"
            cta-img-alt="Call to action tortilla button"
            cta-img-title="Explore the menu!"

            cta-message="Explore Menu"

            :taco="require('@/assets/imgs/taco-1.png')" 
            taco-alt="Taco with braised pork, raw onion, fresh cilantro wrapped in a corn tortilla" 
            taco-title="Taco"

            :lime="require('@/assets/imgs/lime-1.png')"
            lime-alt="Piece of a quartered lime"
            lime-title="Lime"

            :cilantro="require('@/assets/imgs/cilantro-1.png')"
            cilantro-alt="Piece of a cilantro leaf"
            cilantro-title="Cilantro"
        />
        <About 
            header="We take pride in our tacos"
        />
    </div>
</template>

<script setup>
import Hero from '@/components/home/Hero.vue'
import About from '@/components/home/About.vue';

</script>