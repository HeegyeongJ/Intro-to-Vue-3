const app = Vue.createApp({
    data() {
        return {
            product: 'Socks',
            image: './assets/images/socks_blue.jpg',
            inStock: true,
            details: ['50% cotton', '30% wool', '20% polyester']
            variants: [{id:3234, color: 'green'}, {id:3235, color: 'blue'}]
        }
    }
})
