const products = [
    {
        id: 1,
        title: "Apple",
        quantity: 0
    },
    {
        id: 2,
        title: "Bannana",
        quantity: 0
    },
    {
        id: 3,
        title: "Orange",
        quantity: 0
    },
    {
        id: 4,
        title: "Pear",
        quantity: 0
    }
]


let nextId = 5;

class ProductService {
    list(name) {
        return products;

    }
    increaseQuantity(id) {
        var product = products.find(product => product.id == id);
        product.quantity++;
    }
    decreaseQuantity(id) {
        var product = products.find(product => product.id == id);
        if (!product.quantity < 1) {
            product.quantity--;
        }
    }
    search(name) {
        return products.find(product => product.title == name);
    }
}

export const productService = new ProductService();