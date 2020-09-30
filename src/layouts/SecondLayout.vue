<template>
<div class="container mx-auto">
    <Navbar2 />
    <div class="relative overflow-hidden">
        <img src="../assets/img/wave.svg" class="absolute top-0 left-2/5">
        <div class="container relative mx-auto">
            <div class="min-h-screen main-content font-custom">
                <slide-y-up-transition :duration="200" origin="center top" mode="out-in">
                    <router-view />
                </slide-y-up-transition>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import {
    SlideYUpTransition
} from "vue2-transitions";
import Navbar2 from "../components/Navbar/Navbar2"
export default {
    name: "MainLayout",
    components: {
        Navbar2,
        SlideYUpTransition
    },
};
</script>

<style>
</style>
