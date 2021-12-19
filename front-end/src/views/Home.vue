<template>
<div>
  <div class="welcome">
    Welcome! Select Which animals you want to save before the flood comes! 
  </div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <i class="fas fa-search"></i><input v-model="searchText" />
      </form>
    </div>
  </div>
  <ProductList :products="products" />
</div>
</template>

<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Home',
  components: {
    ProductList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.animals.filter(animal => animal.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>


<style scoped>

.welcome {
  font-size: 2vw;
  font-family: 'Work Sans', sans-serif;
  text-align: center;
  margin: 35px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.search {
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  font-family: 'Work Sans', sans-serif;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
