// v-bind binds an attribute(html) to an expression
// new vue instance
// props are ways a component receive data
Vue.component('product', {
    template:`
    <div class="product">
            <div class="product-image">
                <img v-bind:src="image" alt="">
            </div>
            <div class="product-info">
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p 
                v-else
                class=""
                :style="styleObject"
                >Out of Stock</p>

                <ul>
                    <li v-for="detail in details">{{ detail }}</li>
                </ul>

                <div 
                v-for="(variant, index) in variants" 
                class="color-box"
                :key="variant.variantId"
                :style="{backgroundColor: variant.variantColor}"
                @mouseover="updateProduct(index)">                
                </div>

               <button
                v-on:click="addToCart" 
                :disabled="!inStock"
                :class="{ disabledButton: !inStock }"
                >Add to cart</button>
               <div class="cart">
                   <p>Cart({{cart}})</p>
               </div>
            </div>
        </div>
    `,
    data() {
        return {
            brand: 'Vue Tuts',
            product: 'Socks',
            selectedVariant: 0,
    
            styleObject: {
                textDecoration: 'line-through',
            },
            details: ["80% cotton", "20% polyester", "Gender-neutral"],
            variants: [
                {
                    variantId: 2234,
                    variantColor: "green",
                    variantImage: 'vmSocks-green-onWhite.jpg',
                },
                {
                    variantId: 2235,
                    variantColor: "blue",
                    variantImage: 'vmSocks-blue-onWhite.jpg',
                }
            ],
            cart: 0,
        }
    },
        methods: {
            addToCart(){
                this.cart = this.cart + 1
            },
        
            updateProduct(index){
                this.selectedVariant = index
                console.log(index)
            }
        },
        computed: {
            title() {
                return this.brand + '' + this.product
            },
            inStock() {
                return 
            },
            image (){
                return this.variants[this.selectedVariant].variantImage
            },
            inStock (){
                return this.variants[this.selectedVariant].variantQuantity
            },
           shipping(){
               if(this.premium){
                   return "Free
                   "
               }
           }
        }
})

var app = new Vue({
    el: '#app'
})
