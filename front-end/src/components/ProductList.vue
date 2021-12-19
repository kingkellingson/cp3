<template>
<div class="wrapper">
  <div class="products">
    <div class="product" v-for="product in products" :key="product.id">
      <div class="info">
        <h1>{{product.name}}</h1>
        <p>{{product.type}}</p>
      </div>
      <div class="image">
        <img :src="product.photoUrl">
      </div>
      <div class="price">
        <div class="facts">
          <h2>Number of legs: {{product.legs}}</h2>
          <h2>Color: {{product.colors[0]}}</h2>   
        </div>
        <button v-on:click="addtoCart(product)" class="auto">Board Ship</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'ProductList',
  props: {
    products: Array
  },
  methods: {
    addtoCart (animal) {
      this.$root.$data.cart.push(animal)
      console.log(animal)
    },
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
}

.product {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

img {
  height: 250px;
  width: 200px;
  object-fit: fill;
}

.image {
  display: inline-block;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border: 2px solid #333;
  border-radius: 50%;
}

.info {
  background: #F2921D;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 16px;
  font-family: 'Work Sans', sans-serif;
}

.info h2 {
  font-size: 14px;
  font-family: 'Work Sans', sans-serif;
}

.info p {
  margin: 0px;
  font-size: 10px;
  font-family: 'Work Sans', sans-serif;
}


.price {
  display: flex;
}

.facts {
  display: flex;
  flex-direction: column;
}

.facts h2 {
  margin:0;
  margin-top: 5px;
}

button {
  height: 50px;
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
  border-radius: 50%;
}
</style>
