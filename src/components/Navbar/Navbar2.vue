<template>
<header :class="{'rounded-bottom shadow-xl bg-white': isOpened}" class="py-4 px-6 absolute top-0 left-0 right-0 z-10">
    <div class="container mx-auto">
        <div class="flex flex-wrap justify-between items-center">
            <div class="flex-1 flex">
                <router-link to="/" class="font-bold text-5xl">
                    Mock<span class="text-primary">.me</span>
                </router-link>
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
