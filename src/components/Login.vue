<template>
<div>
    <div class="min-h-screen flex items-center justify-start bg-gray-50 ml-12 py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full">
            <div>
                <div class="flex-1 flex">
                    <router-link to="/" class="font-bold text-5xl uppercase">
                        St<span class="text-secondary">rail</span>
                    </router-link>
                </div>
                <h2 class="mt-2 text-left text-2xl leading-9 font-extrabold text-secondary-600">
                    Sign in to your account
                </h2>
            </div>
            <form class="mt-8" action="#" method="POST">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm">
                    <vs-input border dark v-model="value1" placeholder="User name">
                        <template #icon>
                            <box-icon name="user"></box-icon>
                        </template>
                    </vs-input>
                    <vs-input border dark type="password" icon v-model="value2" placeholder="Password">
                        <template #icon>
                            <box-icon name="lock-open-alt"></box-icon>
                        </template>
                    </vs-input>
                </div>

                <div class="mt-6 flex items-center justify-between">
                    <div class="flex items-center">
                        <input id="remember_me" type="checkbox" class="form-checkbox h-4 w-4 text-primary-600 transition duration-150 ease-in-out">
                        <label for="remember_me" class="ml-2 block text-sm leading-5 text-gray-900">
                            Remember me
                        </label>
                    </div>

                    <div class="text-sm leading-5">
                        <a href="#" class="font-medium text-black hover:text-gray-700 focus:outline-none focus:underline transition ease-in-out duration-150 md:mr-8">
                            Forgot your password?
                        </a>
                    </div>
                </div>

                <div class="mt-6">
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-900 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary transition duration-150 ease-in-out">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-primary-500 group-hover:text-primary-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Sign in
                    </button>
                </div>
                <div class="grid grid-cols-1">
                    <div class="col-end-1">
                        <span>Don't have an account?</span>
                        <router-link to="/register">
                            <span class="text-blue-200 font-medium text-black hover:text-blue-400 focus:outline-none focus:underline transition ease-in-out duration-150 md:mr-8"> Sign up</span>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
        <div class="mt-16 sm:mt-0 flex-1 flex justify-end" id="image">
            <img src="../assets/img/login.svg" class="gap-2" />
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            value1: '',
            value2: '',
        }
    },
}
</script>

<style lang="scss" scoped>

</style>
