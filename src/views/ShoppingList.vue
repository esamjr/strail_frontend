<template>
<div class="flex flex-col my-32 sm:inline-flex md:block xl:flex">
    <div class="-mx-8 -my-2 overflow-x-auto sm:-mx-6 lg:">
        <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div class="overflow-hidden border-b border-gray-200 shadow-xl sm:rounded-lg">
                <div>
                    <button @click="active=!active" class="px-8 py-2 mx-2 font-bold text-white border border-gray-200 rounded-lg bg-primary-700 hover:bg-primary-900">
                        Add+
                    </button>
                </div>
            </div>
            <div class="rellative center">
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
                        <vs-tr v-for="(list, tr) in shoppinglist" :key="list.id" :data="tr">
                            <vs-td>
                                <img src="https://picsum.photos/100/100" class="rounded-lg w-28" />
                            </vs-td>
                            <vs-td>
                                <p class="text-lg antialiased">{{ list.name }}</p>
                            </vs-td>
                            <vs-td>
                                <p class="m-5 text-lg antialiased">{{ list.total }}</p>
                            </vs-td>
                            <vs-td>
                                <vs-button border color="#1da78f" style="min-width: 70px">
                                    Edit
                                    <template #animate>
                                        <box-icon name="pencil"></box-icon>
                                    </template>
                                </vs-button>
                                <vs-button danger @click.prevent="del(list)">
                                    <span>Remove</span>
                                    <template #animate>
                                        <box-icon name="trash"> </box-icon>
                                    </template>
                                </vs-button>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </div>
            <div v-if="active" class="bg-dark-gray overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex">
                <vs-dialog blur not-close v-model="active">
                    <template #header>
                        <h4 class="text-3xl font-semibold">
                            New Shopping List
                        </h4>
                    </template>

                    <div class="flex flex-col gap-6 content-start">
                        <vs-card type="2">
                            <template #img>
                                <img src="https://picsum.photos/350/350" />
                            </template>
                            <template #interactions>
                                <vs-button icon border dark upload>
                                    <box-icon name='upload'></box-icon>
                                </vs-button>
                            </template>
                        </vs-card>
                        <vs-input state="dark" v-model="shoppinglist.name" placeholder="Item Name">
                            <template #icon>
                                <box-icon name='plus-circle'></box-icon>
                            </template>
                        </vs-input>
                        <vs-input state="dark" class="" type="number" v-model="shoppinglist.total" placeholder="Total">
                            <template #icon>
                                <box-icon name='list-ol'></box-icon>
                            </template>

                        </vs-input>
                    </div>
                    <template #footer>
                        <div class="footer-dialog ">
                            <vs-button block>
                                Save List
                            </vs-button>
                        </div>
                    </template>
                </vs-dialog>
            </div>
            <div v-if="active" class="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>

    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            active: false,
            shoppinglist: {},
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            axios
                .get(process.env.VUE_APP_PROD_API + "/shopping")
                .then((res) => {
                    this.shoppinglist = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
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
                });
        },
    },
};
</script>

<style scoped>
</style>
