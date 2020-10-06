<template>
<div class="v-cart-item">
  <img class="v-cart-item__image" :src="require('../assets/images/' + cart_item_data.image)" alt="">
  <div class="v-cart-item-info">
    <p>{{cart_item_data.name}}</p>
    <p>{{cart_item_data.price}}</p>
    <p>{{cart_item_data.article}}</p>
  </div>
  <div class="v-cart-item-quantity">
    <p>Qty:</p>
    <span class="quantity__btn" @click="decrementItem">--</span>
    {{cart_item_data.quantity}}
    <span class="quantity__btn" @click="incrementItem">+</span>
  </div>
  <button @click="deleteFromCart">Delete</button>
</div>
</template>

<script>

export default {
name: "v-cart-item",
  props: {
  cart_item_data: {
    type: Object,
    default(){
      return {}
    }
  },

  },
  methods: {
    decrementItem(){
    this.$emit('decrement')
    },
    incrementItem(){
    this.$emit('increment')
    },
    deleteFromCart(){
    this.$emit('deleteFromCart')
    }
  },
mounted() {
  this.$set(this.cart_item_data, 'quantity',1)
}
}
</script>

<style lang="scss">
.v-cart-item{
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  box-shadow: 0 0 8px 0 #e0e0e0;
  margin-bottom: 10px;
  padding: 20px;
  &__image{
    max-width: 50px;
  }
  .quantity__btn{
    cursor: pointer;
  }
}
</style>