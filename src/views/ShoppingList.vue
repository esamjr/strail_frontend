<template>
  <div class="flex justify-center my-6">
    <div
      class="flex flex-col w-full px-8 py-8 mt-32 text-gray-800 bg-white shadow-lg pin-r pin-y md:w-4/5 lg:w-4/5"
    >
      <div class="flex-1">
        <div>
          <a href="#">
            <button
              class="px-6 py-2 mr-5 font-bold text-white border border-gray-200 rounded-lg bg-primary-700 hover:bg-primary-900"
            >Add+</button>
          </a>
        </div>
        <table class="w-full text-sm lg:text-base">
          <thead>
            <tr class="h-12 grid-cols-2 col-auto text-left uppercase">
              <th class="hidden md:table_cell"></th>
              <th>Product</th>
              <th>Name</th>
              <th>Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody v-for="list in shoppinglist" v-bind:key="list">
            <tr class="col-auto gap-4 font-semibold text-left">
              <td class="hidden w-auto pb-4 md:table-cell md:w-auto">
                <a href="#">
                  <img src="https://picsum.photos/300/200" class="w-32 rounded" alt="thumbnail" />
                </a>
              </td>
              <td class="grid-cols-3">
                <p>{{list.name}}</p>
              </td>
              <td class="grid-cols-3">
                <p>{{list.total}}</p>
              </td>
              <td class="grid-rows-2">
                <vs-button size="large" color="#1a5cff" :active="active == 1" @click="active = 2">
                  <i>Edit</i>
                </vs-button>
                <vs-button size="large" color="danger" :active="active == 1" @click="active = 2">
                  <i>Delete</i>
                </vs-button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
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