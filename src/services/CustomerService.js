import index from "vue-router";
import ProductService from './ProductService.js';

const customers = [
    {
        id: 1,
        firstName: "Tobias",
        lastName: "Funke",
        email: "tobias@bluemangroup.com",
        products: []
    },
    {
        id: 2,
        firstName: "Maeby",
        lastName: "Funke",
        email: "maebyfunke@savesurely.com",
        products: []
    },
    {
        id: 3,
        firstName: "George Michael",
        lastName: "Bluth",
        email: "georgemichael@bluthcompany.com",
        products: []
    }
];

let nextId = 4;

class CustomerService {
    list() {
        return customers;
    }
    deleteCustomer(customer) {
        customers.splice(customers.indexOf(customer), 1);
    }
    addCustomer(customer) {
        customer.id = nextId;
        customer.products = [];
        customers.push(customer);
        nextId++;
    }
    returnCustomer(id) {
        var customer = customers.find(customer => customer.id == id);
        return customer;
    }
};

export const customerService = new CustomerService();
