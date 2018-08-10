<template>
    <div><br>
        <form @submit.prevent>
            <div class="form-group">
                <label for="search">Search: </label>
                <input v-model="name" type="text">
            </div>
            <div class="form-group" @click="search(name)">
                <button class="btn">Search</button>
            </div>
        </form>
        <table class="table-striped table-bordered" align='center'>
            <thead>
                <th>id</th>
                <th>Name</th>
                <th></th>
                <th>Quantity</th>
                <th></th>
            </thead>
            <tbody>
                <tr v-for="(product, key) in products" :key="key">
                    <td> {{product.id}} </td>
                    <td> {{product.title}} </td>
                    <td><button class="btn btn-danger" @click="decreaseQuantity(product.id)">-</button></td>
                    <td> {{product.quantity}} </td>
                    <td><button class="btn btn-success" @click="increaseQuantity(product.id)">+</button></td>
                </tr>
            </tbody>
        </table>
        <div v-if="this.searched">
            <button class="btn btn-success" @click="searchToggle()">
                <router-link to="/products">Back</router-link>
            </button>
        </div>
    </div>
</template>

<script>
import { productService } from "../services/ProductService";
export default {
  data() {
    return {
      products: productService.list(),
      name: "",
      searched: false
    };
  },
  methods: {
    decreaseQuantity(id) {
      productService.decreaseQuantity(id);
    },
    increaseQuantity(id) {
      productService.increaseQuantity(id);
    },
    searchToggle() {
      return !this.searched;
    },
    search(name) {
      this.products = [];
      this.products.push(productService.search(name));
      this.searched = searchToggle();
    }
  }
};
</script>
