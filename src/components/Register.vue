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
                <h2 class="text-left text-2xl leading-9 font-extrabold text-secondary-600">
                    Sign Up to your account
                </h2>
            </div>
            <form class="mt-8" action="#" @submit="register()">
                <input type="hidden" name="remember" value="true">
                <div class="rounded-md shadow-sm">
                    <vs-input border dark v-model="users.username" placeholder="User name">
                        <template #icon>
                            <box-icon name="user"></box-icon>
                        </template>
                    </vs-input>
                    <vs-input border dark type="password" icon v-model="users.password" placeholder="Password">
                        <template #icon>
                            <box-icon name="lock-open-alt"></box-icon>
                        </template>
                    </vs-input>
                </div>

                <div class="mt-6">
                    <button type="submit" class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-primary-600 hover:bg-primary-900 focus:outline-none focus:border-primary-700 focus:shadow-outline-primary active:bg-primary transition duration-150 ease-in-out">
                        <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                            <svg class="h-5 w-5 text-primary-500 group-hover:text-primary-400 transition ease-in-out duration-150" fill="currentColor" viewBox="0 0 20 20">
                                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        Sign Up
                    </button>
                </div>
                <div class="grid grid-cols-1">
                    <div class="col-end-1">
                        <span>Already Have Account?</span>
                        <router-link to="/login">
                            <span class="text-blue-200 font-medium text-black hover:text-blue-400 focus:outline-none focus:underline transition ease-in-out duration-150 md:mr-8"> Sign In</span>
                        </router-link>
                    </div>
                </div>
            </form>
        </div>
        <div class="mt-16 sm:mt-0 flex-1 flex justify-end" id="image">
            <img src="../assets/img/SignIn.svg" class="gap-2" />
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            users: {
                username: '',
                password: '',
            },
        }
    },
    methods: {
        register() {
            const formData = new FormData();
            formData.append('username', this.users.username);
            formData.append('password', this.users.password);
            axios.post(process.env.VUE_APP_PROD_API + "/user", formData, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                })
                .then((res) => {
                    console.log(res)
                })
                .catch((err) => console.log(err));
        }
    }

}
</script>

<style lang="scss" scoped>

</style>
