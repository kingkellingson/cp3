<template>
<div>
  <div class="pure-menu pure-menu-horizontal">
    <ul class="menu-list">
     <li class="pure-menu-item"><a @click="select('Mammal')" href="#" class="pure-menu-link">
        <div class="list-item">
          <i class="fas fa-dog"></i><h1>Mammal</h1>
        </div>
      </a></li>
      <li class="pure-menu-item"><a @click="select('Reptile')" href="#" class="pure-menu-link">
        <div class="list-item">
          <i class="fas fa-dragon"></i><h1>Reptile</h1>
        </div>
      </a></li>
      <li class="pure-menu-item"><a @click="select('Bird')" href="#" class="pure-menu-link">
        <div class="list-item">
          <i class="fas fa-crow"></i><h1>Bird</h1>
        </div>
      </a></li>
      <li class="pure-menu-item"><a @click="select('Amphibian')" href="#" class="pure-menu-link">
        <div class="list-item">
          <i class="fas fa-frog"></i><h1>Amphibian</h1>
        </div>
      </a></li>
      <li class="pure-menu-item"><a @click="select('Fish')" href="#" class="pure-menu-link">
        <div class="list-item">
          <i class="fas fa-fish"></i><h1>Fish</h1>
        </div>
      </a></li>
    </ul>
  </div>
  <ProductList :products="products" />
</div>
</template>


<script>
import ProductList from "../components/ProductList.vue"
export default {
  name: 'Browse',
  components: {
    ProductList
  },
  data() {
    return {
      type: '',
    }
  },
  computed: {
    products() {
      return this.$root.$data.animals.filter(animal => animal.type === this.type);
    }
  },
  methods: {
    select(type) {
      this.type = type;
    }
  }
}
</script>

<style scoped>

  .list-item  {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .list-item:hover  {
    color: black;
  }
  
  .list-item h1 {
    color: black;
  }

.menu-list {
  display: flex;
  justify-content: space-around;
}

</style>
