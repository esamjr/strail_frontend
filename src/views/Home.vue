<template>
<div class="min-w-full">
    <div class="relative overflow-hidden px-6 pb-6">
        <img src="../assets/img/wave.svg" class="absolute top-0 left-2/5">
        <div class="flex flex-col md:flex-row items-center pt-32 pb-16 md:pb-0">
            <div class="md:w-1/2 lg:w-1/3 mb-4 sm:mb-16 md:mb-0">
                <h2 class="text-xl font-bold text-secondary-600 uppercase mb-2">Strail</h2>
                <h1 class="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6 md:mb-10">Life Management Application</h1>
                <a href="#about-us" class="bg-primary px-6 md:px-8 py-3 md:py-4 text-lg md:text-xl text-secondary font-bold uppercase rounded hover:bg-primary-400">More info</a>
            </div>
            <div class="mt-16 sm:mt-0 flex-1 flex justify-end" id="image">
                <img src="../assets/img/Landing.svg" class="gap-2" />
            </div>
        </div>
    </div>
    <div id="our-process" class="relative mt-4">
        <img src="../assets/img/circle2.svg" class="hidden sm:block absolute top-0 left-0 -mx-32">
        <div class="container mx-auto px-6 pt-6 pb-12 relative">
            <h3 class="flex flex-col items-center text-4xl text-secondary font-bold mb-12">Our process <span class="bg-primary h-1 w-20 block mt-4"></span></h3>
            <div class="flex flex-col md:flex-row xl:px-32">
                <div class="flex flex-col items-center md:px-6 lg:px-12">
                    <span class="text-6xl text-primary">1</span>
                    <h4 class="font-semibold text-2xl text-secondary mb-2">Planning</h4>
                    <p class="text-center text-secondary-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est</p>
                </div>
                <div class="flex flex-col items-center md:px-6 lg:px-12">
                    <span class="text-6xl text-primary">2</span>
                    <h4 class="font-semibold text-2xl text-secondary mb-2">Execution</h4>
                    <p class="text-center text-secondary-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est</p>
                </div>
                <div class="flex flex-col items-center md:px-6 lg:px-12">
                    <span class="text-6xl text-primary">3</span>
                    <h4 class="font-semibold text-2xl text-secondary mb-2">Success</h4>
                    <p class="text-center text-secondary-700 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est</p>
                </div>
            </div>
        </div>
    </div>
    <div id="about-us" class="bg-blue-100 mt-32 py-12">
        <div class="container mx-auto px-6">
            <div class="flex flex-col md:flex-row">
                <div class="md:w-1/2 md:pr-8 lg:pr-16">
                    <img src="../assets/img/About.svg" class="-mt-24 md:mt-0 lg:-mt-24 mb-16 md:mb-0">
                </div>
                <div class="md:w-1/2">
                    <h3 class="flex flex-col text-4xl text-secondary font-bold mb-6">About us <span class="bg-primary h-1 w-20 block mt-4"></span></h3>
                    <p class="text-lg text-secondary-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
                    <p class="text-lg text-secondary-700">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non.</p>
                </div>
            </div>
        </div>
    </div>
    <div id="services" class="relative">
        <img src="../assets/img/circle.svg" class="absolute top-0 right-0 mt-64 hidden md:block">
        <div class="container mx-auto px-6 py-32 relative">
            <h3 class="flex flex-col items-center text-4xl text-secondary font-bold">Services<span class="bg-primary h-1 w-20 block mt-4"></span></h3>
            <div class="flex flex-col md:flex-row items-center mb-24 md:mb-16 xl:mb-8 mt-16 sm:mt-0 md:mt-16 lg:mt-0">
                <img src="../assets/img/groceries.svg" class="md:w-1/3">
                <div class="md:ml-16 xl:ml-32">
                    <h4 class="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">Groceries Shopping List</h4>
                    <p class="text-secondary-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
                    <p class="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p>
                </div>
            </div>
            <div class="flex flex-col-reverse md:flex-row items-center mb-24 md:mb-16 xl:mb-8 mt-24">
                <div class="md:mr-16 xl:mr-32">
                    <h4 class="text-2xl md:text-3xl font-bold text-secondary-800 mb-4">To Do List Management</h4>
                    <p class="text-secondary-700 text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.</p>
                    <p class="text-secondary-700 text-lg">Aliquam eget semper mi. Mauris magna risus, viverra in nulla id, placerat fermentum tellus. Aliquam non felis eu dui fermentum auctor. Aenean sed ante congue, facilisis ipsum eu, gravida lacus.</p>
                </div>
                <img src="../assets/img/todolist.svg" class="md:w-1/2 ">
            </div>
        </div>
    </div>
    <div id="testimonials" class="bg-blue-100 pt-2">
        <div class="mt-16">
            <div class="bg-blue-500 pt-16 pb-16 md:pb-32 relative">
                <img src="../assets/img/wave3.svg" class="w-full absolute bottom-full h-16 lg:h-auto object-cover object-top">
                <div class="container px-6 mx-auto">
                    <div class="md:w-2/3 mx-auto relative">
                        <img src="../assets/img/quote.svg" class="absolute top-0 left-0 sm:-ml-16 -mt-4">
                        <h3 class="text-white italic text-2xl text-center">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam imperdiet est tellus, et consequat sem sodales id. Quisque molestie et mauris efficitur lacinia.
                            <strong class="block not-italic mt-6 text-primary">FRANK</strong>
                        </h3>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center -mt-8 md:-mt-16 lg:-mt-24 relative">
                <a href="#">
                    <img src="../assets/img/avatar3.jpg" class="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white">
                </a>
                <a href="#">
                    <img src="../assets/img/avatar4.jpg" class="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white">
                </a>
                <a href="#">
                    <img src="../assets/img/avatar.jpeg" class="w-16 h-16 md:w-32 md:h-32 lg:w-48 lg:h-48 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white">
                </a>
                <a href="#">
                    <img src="../assets/img/avatar2.jpg" class="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white">
                </a>
                <a href="#">
                    <img src="../assets/img/avatar5.jpg" class="w-12 h-12 md:w-24 md:h-24 lg:w-32 lg:h-32 mx-2 lg:mx-4 object-cover rounded-full border-2 md:border-4 border-white">
                </a>
            </div>
            <div id="contact" class="container mx-auto px-6 py-24">
                <h3 class="flex flex-col items-center text-4xl text-secondary font-bold mb-12">I need more info! <span class="bg-primary h-1 w-20 block mt-4"></span></h3>
                <div class="flex shadow-lg md:w-2/3 lg:w-1/2 xl:w-2/5 p-1 rounded-full overflow-hidden mx-auto bg-white">
                    <input type="text" name="" placeholder="Insert your mail" class="h-16 text-secondary-700 w-64 flex-1 px-8 text-lg focus:outline-none">
                    <button class="bg-primary w-32 uppercase font-bold text-secondary rounded-full">Send</button>
                </div>
            </div>
        </div>
    </div>
    <div class="bg-blue-100">
        <div class="container mx-auto px-6 py-12 text-secondary-500 text-center border-t border-gray-300">
            <p>Copyright ©2020 TaildwindComponents. All rights reserved. | Illustrations by <a href="https://freepik.com/" class="text-secondary-900 font-bold underline">Freepik</a> | Avatars by <a href="https://uifaces.co/" class="text-secondary-900 font-bold underline">UI Faces</a> | Template By <a href="https://github.com/highscoresl" class="text-secondary-900 font-bold underline">Highscore Studio</a></p>
        </div>
    </div>
</div>
</template>

<script>
import anime from "animejs/lib/anime.es.js";
export default {
    methods: {
        animation() {
            anime({
                targets: "#image",
                translateY: "20",
                direction: "alternate",
                duration: 2500,
                easing: "easeInOutSine",
                loop: true,
            });
        },
    },
    mounted() {
        this.animation();
    },
};
</script>
