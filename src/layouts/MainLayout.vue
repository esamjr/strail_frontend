<template>
<div class="main-wrapper">
    <Navbar :links="nav.links" />
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
import Navbar from "../components/Navbar";
export default {
    name: "MainLayout",
    components: {
        Navbar,
        SlideYUpTransition
    },
    data() {
        return {
            nav: {
                links: [{
                        label: "Home",
                        to: "/"
                    },
                    {
                        label: "Shopping List",
                        to: "/shoppinglist"
                    }
                ]
            }
        };
    }
};
</script>

<style>
</style>
