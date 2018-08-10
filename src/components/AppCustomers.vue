<template>
    <div>
    <br>
    <div v-if="!this.$route.params.id">
    <form @submit.prevent>
        <div class="form-group">
            <label for="firstName">First Name: </label>
            <input v-model="newCustomer.firstName" type="text" name=firstName/>
        </div>
        <div class="form-group">
            <label for="lastName">Last Name: </label>
            <input v-model="newCustomer.lastName" type="text" name=lastName/>
        </div>
        <div class="form-group">
            <label for="email">email: </label>
            <input v-model="newCustomer.email" type="text" name=email/>
        </div>
        <button type="submit" class="btn btn-primary" @click="addCustomer(newCustomer)">Submit</button>
    </form>
    <br>
        <table class="table-striped table-bordered" align='center'>
            <thead>
                <th>id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>email</th>
            </thead>
            <tbody>
                <tr v-for="(customer, key) in customers" :key="key">
                    <td>{{ customer.id }} </td>
                    <td>{{ customer.firstName }} </td>
                    <td>{{ customer.lastName }} </td>
                    <td>{{ customer.email }} </td>
                    <td><router-link 
                    :to="{ name: 'latest-purchases', params: {id: customer.id }}">
                    Latest Purchases
                    </router-link></td>
                    <td><button class="btn btn-danger" @click="deleteCustomer(customer)">Delete</button></td>
               </tr>
            </tbody>
        </table>
        </div>
        <div v-else>
            <table class="table-striped table-bordered" align='center'>
                <thead>
                    <th>{{ customer.id }}</th>
                    <th>{{ customer.firstName }}</th>
                    <th>{{ customer.lastName }}</th>
                    <th>{{ customer.email }} </th>
                </thead>
                <tbody>
                    <tr v-for="(product, key) in customer.products" :key="key">
                        <td>high</td>
                        <td><router-link 
                        :to="{ name: 'latest-purchases', params: {id: customer.id }}">
                        Latest Purchases
                        </router-link></td>
                </tr>
                </tbody>
            </table>
            <button class="btn btn-warn">
                <router-link to="/customers">Back</router-link>
            </button>
        </div>
    </div>
</template>
<script>
import { customerService } from "../services/CustomerService";

export default {
  props: ["id"],
  data() {
    return {
      customers: customerService.list(),
      newCustomer: {},
      customer: {}
    };
  },
  methods: {
    deleteCustomer(customer) {
      customerService.deleteCustomer(customer);
    },
    addCustomer(newCustomer) {
      customerService.addCustomer(newCustomer);
      newCustomer = {};
    }
  },
  updated() {
    this.customer = customerService.returnCustomer(this.id);
  }
};
</script>]
