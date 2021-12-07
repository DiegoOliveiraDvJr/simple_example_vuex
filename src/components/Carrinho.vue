<template>
    <div class="carrinho container mt-5">
        {{ cart }}
        <div class="row">

            <div class="card shadow-sm col" v-for="product in products" :key="product.id">
              <img :src="product.img" class="img-fluid w-75">

                <div class="card-body">
                    <p class="card-text">{{ product.title }}</p>
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="btn-group">
                            <button type="button" class="btn btn-sm btn-outline-secondary" @click="addToCart(product)">Adicionar</button>
                            <button type="button" class="btn btn-sm btn-outline-danger" @click="removeToCart(product)" v-if="showQnt(product.id)">remover</button>
                            
                        </div>
                        <small class="text-muted" v-if="showQnt(product.id)">{{ showQnt(product.id) }}</small>
                    </div>
                </div>
            </div>

            
        </div>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex';
export default {
    name: 'Carrinho',
    data() {
        return {
            products: [

                { id: 1, title: 'Maçã', img: 'https://cdn-icons-png.flaticon.com/512/415/415733.png' },
                { id: 2, title: 'Tomate', img: 'https://cdn-icons-png.flaticon.com/128/1202/1202125.png'},
                { id: 3, title: 'Banana', img: 'https://cdn-icons-png.flaticon.com/512/271/271375.png'}
            ],
        }
    },
    computed: {
        ...mapState({
            cart: state => state.cart
        })
    },
    methods: {
        ...mapMutations(['ADD_PRODUCT', 'REMOVE_PRODUCT']),

        addToCart(product) {
            this.ADD_PRODUCT(product);
        },
        removeToCart(product) {
            this.REMOVE_PRODUCT(product);
        },
        showQnt(id) {
            return this.cart.find( p => p.id === id)?.qnt || 0;
        }
    },

}
</script>
<style scoped>

</style>
