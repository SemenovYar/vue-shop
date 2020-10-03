<template>
  <div class="v-catalog">
    <h1>Catalog</h1>
    <v-catalog-item
    v-for="product in PRODUCTS"
    :key="product.article"
    v-bind:product_data="product"
    @sendArticle="showChildArticleInConsole"
    />
  </div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: "v-catalog",
  components: {
    vCatalogItem,
  },
  data() {
    return{

    }
  },
  methods: {
    ...mapActions([
        'GET_PRODUCTS_FROM_API'
    ]),
    showChildArticleInConsole (data){
      console.log(data)
    }
  },
  computed: {
    ...mapGetters([
        'PRODUCTS'
    ])
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
}
</script>

<style lang="scss">
.v-catalog {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
h1 {
  display: block;
  width: 100%;
}
</style>