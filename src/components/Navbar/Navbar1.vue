<template>
<header :class="{'rounded-bottom shadow-xl bg-white': isOpened}" class="py-4 px-6 absolute top-0 left-0 right-0 z-10">
    <div class="container mx-auto">
        <div class="flex flex-wrap justify-between items-center">
            <div class="flex-1 flex">
                <router-link to="/" class="font-bold text-5xl">
                    Mock<span class="text-primary">.me</span>
                </router-link>
            </div>
            <div class="lg:hidden block">
                <button :class="{'is-active': isOpened}" class="hamburger hamburger--squeeze hover:bg-gray-300 rounded-full" type="button" @click="isOpened = !isOpened">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div :class="{hidden: !isOpened}" class="lg:flex lg:items-center lg:w-auto w-full" id="menu">
                <nav>
                    <ul class="lg:flex items-center justify-between font-medium pt-4 lg:pt-0">
                        <li v-for="(link, index) in links" :key="index">
                            <router-link class="nav-link lg:text-base tracking-tight text-xl lg:text-gray-800 py-4 px-6 block rounded-lg" :to="link.to">
                                {{
                  link.label
                  }}
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</header>
</template>

<script>
export default {
    props: {
        links: Array

    },
    data() {
        return {
            isOpened: false
        };
    }
};
</script>

<style lang="scss" scoped>
.hamburger {
    transform: scale(0.6);
    outline: none !important;
    -webkit-tap-highlight-color: transparent;
}

.rounded-bottom {
    border-bottom-right-radius: 1.5rem;
    border-bottom-left-radius: 1.5rem;
}

.nav-link {
    &:hover {
        color: #27debf;
    }

    transition: 0.15s;
}
</style>
