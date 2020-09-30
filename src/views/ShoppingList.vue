<template>
<div class="flex flex-col my-32 sm:inline-flex md:block xl:flex">
    <div class="-mx-8 -my-2 overflow-x-auto sm:-mx-6 lg:">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden border-b border-gray-200 shadow-xl sm:rounded-lg">
                <div class="grid grid-cols-1 items-center justify-items-end font-medium">
                    <vs-button danger border @click="logout()">
                        <box-icon name='log-out'></box-icon> Log Out
                    </vs-button>
                </div>
                <div>
                    <button @click="active=!active" class="px-8 py-2 mx-2 font-bold text-white border border-gray-200 rounded-lg bg-primary-700 hover:bg-primary-900">
                        Add+
                    </button>
                </div>

            </div>
            <div class="relative center">
                <vs-table>
                    <template #thead>
                        <vs-tr>
                            <vs-th>
                                <p class="text-xl">Product</p>
                            </vs-th>
                            <vs-th>
                                <p class="text-xl">Name</p>
                            </vs-th>
                            <vs-th>
                                <p class="text-xl">Quantity</p>
                            </vs-th>
                            <vs-th> </vs-th>
                        </vs-tr>
                    </template>
                    <template #tbody>
                        <vs-tr v-for="(list, tr) in shoppinglist" :key="list.model.ID" :data="tr">
                            <vs-td>
                                <img src="https://picsum.photos/100/100" class="rounded-lg w-28" />
                            </vs-td>
                            <vs-td>
                                <p class="text-lg antialiased">{{ list.name }} </p>
                            </vs-td>
                            <vs-td>
                                <p class="m-5 text-lg antialiased">{{ list.total }}</p>
                            </vs-td>
                            <vs-td>
                                <vs-tooltip left border color="#1da78f">
                                    <vs-button border color="#1da78f" style="min-width: 70px" @click="edit(list), active=!active">
                                        Edit
                                        <template #animate>
                                            <box-icon name="pencil"></box-icon>
                                        </template>
                                    </vs-button>
                                    <template #tooltip>
                                        Edit Your List
                                    </template>
                                </vs-tooltip>
                                <vs-tooltip left border danger>
                                    <vs-button danger @click="del(list)">
                                        <span>Remove</span>
                                        <template #animate>
                                            <box-icon name="trash"> </box-icon>
                                        </template>
                                    </vs-button>
                                    <template #tooltip>
                                        Remove Your List
                                    </template>
                                </vs-tooltip>
                            </vs-td>
                        </vs-tr>

                    </template>
                </vs-table>
            </div>
            <transition name="bounceUp">
                <div v-if="active" class="bg-transparent overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                    <vs-dialog blur not-close v-model="active">
                        <template #header>
                            <h4 v-show="!updateSubmit" class="text-3xl font-semibold">
                                New Shopping List
                            </h4>
                            <h4 v-show="updateSubmit" class="text-3xl font-semibold">
                                Edit Shopping List
                            </h4>
                        </template>
                        <vs-card type="2">
                            <template #img>
                                <img src="https://picsum.photos/300/300" />
                            </template>
                            <template #interactions>
                                <vs-button icon border dark upload>
                                    <box-icon name='upload'></box-icon>
                                </vs-button>
                            </template>
                        </vs-card>
                        <form @submit.prevent="add()" class="flex flex-col gap-6 content-start mt-2">
                            <vs-input type="hidden" v-model="shoppinglist.id"></vs-input>
                            <vs-input state="dark" name="name" v-model="shoppinglist.name" placeholder="Item Name">
                                <template #icon>
                                    <box-icon name='plus-circle'></box-icon>
                                </template>
                            </vs-input>
                            <vs-input state="dark" name="total" v-model="shoppinglist.total" type="number" placeholder="Total">
                                <template #icon>
                                    <box-icon name='list-ol'></box-icon>
                                </template>
                            </vs-input>

                            <div class="footer-dialog">
                                <vs-button block type="submit" v-show="!updateSubmit" @click="openNotification('top-center', 'success')">
                                    Save List
                                </vs-button>
                                <vs-button block type="button" v-show="updateSubmit" @click="update(shoppinglist), active=false">
                                    Update List
                                </vs-button>
                            </div>
                        </form>
                    </vs-dialog>
                </div>
            </transition>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
import HomeVue from './Home.vue';
export default {
    data() {
        return {
            active: false,
            updateSubmit: false,
            shoppinglist: {},
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        openNotification(position = null, color) {
            this.$vs.notification({
                color,
                position,
                title: 'Your list has been added'
            })
        },

        load() {
            axios
                .get(process.env.VUE_APP_PROD_API + "/shopping", {
                    headers: {
                        'content-type': 'application/json'
                    }
                })
                .then((res) => {
                    this.shoppinglist = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
        add() {
            const formData = new FormData();
            formData.append('name', this.shoppinglist.name);
            formData.append('total', this.shoppinglist.total);
            axios
                .post(process.env.VUE_APP_PROD_API + "/shopping", formData, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    }
                })
                .then((res) => {
                    this.load()
                    console.log(res)
                })
                .catch((err) => console.log(err));

        },
        edit(list) {
            this.updateSubmit = true
            this.shoppinglist.id = list.model.ID
            this.shoppinglist.name = list.name
            this.shoppinglist.total = list.total

        },
        update(shoppinglist) {
            const formData = new FormData();
            formData.append('name', shoppinglist.name);
            formData.append('total', shoppinglist.total);

            return axios.put(
                    process.env.VUE_APP_PROD_API + "/shopping/" + shoppinglist.id, formData, {
                        headers: {
                            'content-type': 'application/x-www-form-urlencoded'
                        }
                    })
                .then((res) => {
                    this.load()
                    this.shoppinglist.name = ''
                    this.shoppinglist.total = ''
                    this.updateSubmit = false
                    console.log(res.data)
                })
                .catch((err) => console.log(err));
        },

        del(list) {
            axios
                .delete(
                    process.env.VUE_APP_PROD_API + "/shopping/delete/" + list.model.ID
                )
                .then((res) => {
                    let index = this.shoppinglist.indexOf(list);
                    this.shoppinglist.splice(index, 1);
                    console.log(res);
                })
                .catch((err) => {
                    console.log(err);
                });

        },
        logout() {
            localStorage.removeItem('token')
            this.$router.push({
                path: '/',
                name: 'Home',
                component: HomeVue
            })
        }

    },
};
</script>

<style scoped>
</style>
