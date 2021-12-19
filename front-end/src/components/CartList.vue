<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1 v-if="product.living">{{product.name}}</h1>
        <h1 v-else>**Dead {{product.name}}**</h1>
        <p v-if="product.living">{{product.type}}</p>
        <p v-else>This animal is Dead</p>
      </div>
      <div class="image">
        <img v-if="product.living" :src="product.photoUrl">
        <img v-else src="/images/skull.png">
      </div>
      <div class="price">
        <button v-on:click="removefromCart(product)" class="auto"><h2>Throw off the Ship</h2></button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'CartList',
  props: {
    products: Array
  },
  methods: {
    addtoCart (product) {
      this.$root.$data.cart.push(product)
      console.log(product)
    },
    removefromCart (product) {
      let index = this.$root.$data.cart.indexOf(product)
      this.$root.$data.cart.splice(index, 1)
    }
  },
  
}
</script>


<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  
}

.products {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  border: solid 2x red;
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 100px;
}

.product img {
  border: 2px solid #333;
  height: 125px;
  width: 100px;
  object-fit: cover;
}

.product .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 5px 10px;
  height: 100px;
}

.info h1 {
  font-family: 'Work Sans', sans-serif;
  font-size: 18px;
  text-align: center;
}

.info h2 {
  font-family: 'Work Sans', sans-serif;
  font-size: 15px;
  text-align: center;
}

.info p {
  margin: 0px;
  font-family: 'Work Sans', sans-serif;
  font-size: 13px;
  text-align: center;
}


.price {
  display: flex;
}

.price h2{
  font-size: 14px;
}

button {
  height: 50px;
  background: rgb(247, 15, 15);
  color: black;
  border: none;
  font-family: 'Work Sans', sans-serif;
  font-size: 14px;
}

.auto {
  margin-left: auto;
  height: 100px;
  border-radius: 50%;
  border: 1px solid black;
}

.auto h2{
  color: black;
}
</style>
