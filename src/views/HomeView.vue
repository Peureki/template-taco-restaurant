<template>
    <div class="home">
        <Hero
            title="AURORA TACOS"
            sub-title="It's Taco Tuesday EVERY DAY!"

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

            message="We make our tacos from scratch and with love."
            address-1="Address 1"
            address-2="Address 2"
            hours-1="Mon-Fri: 10-9pm"
            hours-2="Sat-Sun: 10-7pm"
            phone="630-123-4567"
        />
        <About 
            unhightlighted-header="We take pride in our"
            highlighted-header="tacos"

            description="Welcome to a world of culinary ecstasy, where flavor, texture, and creativity collide. Our extraordinary taco is a culinary masterpiece that will transport your taste buds to new heights. Picture a warm, freshly-made tortilla, tenderly cradling a symphony of mouthwatering ingredients. Succulent seasoned meat, whether it be juicy marinated steak, slow-cooked carnitas, or zesty grilled chicken, takes center stage. Paired with the freshest produce, vibrant cilantro, crunchy lettuce, and tangy diced tomatoes, it's a medley of colors and textures that will entice your senses."

            :cta-src="cta.src"
            :cta-alt="cta.alt"
            :cta-title="cta.title"
            cta-message="Learn more about us!"

            :tacos="require('@/assets/imgs/taco-2.png')"
            tacosAlt="Display of different kinds of tacos"
            tacosTitle="Tacos"
        />

        <Feast 
            unhightlighted-header="your eyes"
            highlighted-header="Feast"
            :sig-tacos="sigTacos"
        /> 

        <Catering 
            highlighted-header="Cater"
            unhightlighted-header="your next event!"

            description="Introducing our exceptional catering services, where tantalizing flavors and culinary expertise come together to create an unforgettable experience. Prepare to indulge in a mouthwatering assortment of specialty tacos, meticulously crafted with passion and attention to detail. From the first bite to the last, our tacos burst with bold and unique flavors, elevating your event to new heights. Whether you're hosting a corporate luncheon, wedding reception, or casual gathering, our skilled chefs will ensure every taco is a masterpiece. With our exceptional catering, let us bring the zest and vibrancy of our specialty tacos directly to your table, leaving your guests raving about the delectable feast they experienced. Choose us for an extraordinary culinary journey that will leave an indelible impression on your taste buds."

            :img-src="require('@/assets/imgs/catering-1.png')"
            img-alt="Picture of food being catered"
            img-title="Catering food"

            :cta-src="cta.src"
            :cta-alt="cta.alt"
            :cta-title="cta.title"
            cta-message="Learn more about us!"
        />

        <Testimonials
            highlighted-header="Satisfied"
            unhightlighted-header="Customers!"

            :testimonials="testimonials"
        />

        <Footer/>

    </div>
</template>

<script setup>
import Hero from '@/components/home/Hero.vue'
import About from '@/components/home/About.vue';
import Feast from '@/components/home/Feast.vue';
import Catering from '@/components/home/Catering.vue';
import Testimonials from '@/components/home/Testimonials.vue';
import Footer from '@/components/Footer.vue';

let cta = {
    src: require('@/assets/imgs/tortilla.png'),
    alt: "Spinning tortilla call to action",
    title: "Check us out!",
}

// List of signature tacos
// Last one on the list is the tortilla CTA
let sigTacos = [
    {
        src: require('@/assets/signature-tacos/taco-1.png'),
        alt: "Signature Taco",
        title: "Signature Taco",
        name: "Signature Taco 1",
        desc: "Ingredient 1, Ingredient 2, Ingredient 3, Ingredient 4, Ingredient 5",
    },
    {
        src: require('@/assets/signature-tacos/taco-2.png'),
        alt: "Signature Taco",
        title: "Signature Taco",
        name: "Signature Taco 2",
        desc: "Ingredient 1, Ingredient 2, Ingredient 3, Ingredient 4, Ingredient 5",
    },
    {
        src: require('@/assets/signature-tacos/taco-3.png'),
        alt: "Signature Taco",
        title: "Signature Taco",
        name: "Signature Taco 3",
        desc: "Ingredient 1, Ingredient 2, Ingredient 3, Ingredient 4, Ingredient 5",
    },
    {
        src: require('@/assets/imgs/tortilla.png'),
        alt: "Tortilla call to action",
        title: "View menu!",
        name: "View our menu for more!",
        desc: "Enjoy our delicious food that will make you come back for more",
    },
]

let testimonials = [
    {
        name: "Sharon",
        src: require('@/assets/testimonials/portrait-1.png'),
        alt: "Portrait of Sharon",
        title: "Sharon",
        stars: 5,
        review: "This taco restaurant is an absolute gem! The flavors are out of this world, and each bite is a burst of pure deliciousness. The tortillas are soft and freshly made, and the fillings are incredibly flavorful and well-seasoned. The variety of toppings and salsas offered is impressive, allowing you to customize your tacos to perfection. The service is friendly and efficient, adding to the overall enjoyable dining experience. Whether you're a taco aficionado or just looking for a fantastic meal, this place is a must-visit!",
    },
    {
        name: "Sharon",
        src: require('@/assets/testimonials/portrait-1.png'),
        alt: "Portrait of Sharon",
        title: "Sharon",
        stars: 5,
        review: "This taco restaurant is an absolute gem! The flavors are out of this world, and each bite is a burst of pure deliciousness. The tortillas are soft and freshly made, and the fillings are incredibly flavorful and well-seasoned. The variety of toppings and salsas offered is impressive, allowing you to customize your tacos to perfection. The service is friendly and efficient, adding to the overall enjoyable dining experience. Whether you're a taco aficionado or just looking for a fantastic meal, this place is a must-visit!",
    },
    {
        name: "Sharon",
        src: require('@/assets/testimonials/portrait-1.png'),
        alt: "Portrait of Sharon",
        title: "Sharon",
        stars: 5,
        review: "This taco restaurant is an absolute gem! The flavors are out of this world, and each bite is a burst of pure deliciousness. The tortillas are soft and freshly made, and the fillings are incredibly flavorful and well-seasoned. The variety of toppings and salsas offered is impressive, allowing you to customize your tacos to perfection. The service is friendly and efficient, adding to the overall enjoyable dining experience. Whether you're a taco aficionado or just looking for a fantastic meal, this place is a must-visit!",
    },
    {
        name: "Sharon",
        src: require('@/assets/testimonials/portrait-1.png'),
        alt: "Portrait of Sharon",
        title: "Sharon",
        stars: 5,
        review: "This taco restaurant is an absolute gem! The flavors are out of this world, and each bite is a burst of pure deliciousness. The tortillas are soft and freshly made, and the fillings are incredibly flavorful and well-seasoned. The variety of toppings and salsas offered is impressive, allowing you to customize your tacos to perfection. The service is friendly and efficient, adding to the overall enjoyable dining experience. Whether you're a taco aficionado or just looking for a fantastic meal, this place is a must-visit!",
    },
]

</script>