<template>
<div class="my-32 flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg: -mx-8">
        <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow-xl overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <div>
                    <a href="#">
                        <button class="px-6 py-2 mr-5 font-bold text-white border border-gray-200 rounded-lg bg-primary-700 hover:bg-primary-900">
                            Add+
                        </button>
                    </a>
                </div>
                <div class="center">
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
                            <vs-tr v-for="(list, tr) in shoppinglist" :key="list" :data="tr">
                                <vs-td>
                                    <img src="https://picsum.photos/100/100" class="w-28 rounded-lg" />
                                </vs-td>
                                <vs-td>
                                    <p class="antialiased text-lg">{{ list.name }}</p>
                                </vs-td>
                                <vs-td>
                                    <p class="antialiased text-lg m-5">{{ list.total }}</p>
                                </vs-td>
                                <vs-td>
                                    <vs-button border color="#1da78f" style="min-width: 70px">
                                        Edit
                                        <template #animate>
                                            <box-icon name="pencil"></box-icon>
                                        </template>
                                    </vs-button>
                                    <vs-button danger>
                                        Remove
                                        <template #animate>
                                            <box-icon name="trash"></box-icon>
                                        </template>
                                    </vs-button>
                                </vs-td>
                            </vs-tr>
                        </template>
                    </vs-table>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return {
            allCheck: false,
            selected: [],
            shoppinglist: [],
        };
    },
    mounted() {
        this.load();
    },
    methods: {
        load() {
            axios
                .get("http://localhost:8000/shopping")
                .then((res) => {
                    this.shoppinglist = res.data;
                })
                .catch((err) => {
                    console.log(err);
                });
        },
    },
};
</script>

<style lang="scss" scoped>
</style>
