<template>
<div>
  <div class="button-holder">
    <button @click="doTrip" class="ui button" id="survey-choice">Bon Voyage!</button>
  </div>
  <h1> Your Animals: </h1>
  <div class="info-holder">
    <h2> Total number of mouths: {{this.$root.$data.cart.length}}</h2>
    <h2> Total number of legs: {{this.$root.$data.cart.map(i=>i.legs).reduce((a,b)=>a+b)}}</h2>
  </div>
  <CartList :products="cart" />
</div>
</template>


<script>
import CartList from "../components/CartList.vue"
const Chance = require('chance');
const chance = new Chance();
export default {
  name: 'Cart',
  components: {
    CartList
  },
  data() {
    return {
    }
  },
  computed: {
    cart() {
      return this.$root.$data.cart;
    },
  },
  methods: {
    doTrip() {
      this.$root.$data.cart.forEach(element => {
        if (element.status == 'deceased') {
          element.living = false;
        }
      });
      let message = chance.pickone([
       "You passed through a hurricane!", "You forgot to pray last night!",
       "You found some moldy cheese and gave it to everyone for dinner!", 
       "You forgot to take the lions out for a walk and they chew through their enclosure!",
       "The elephants are getting restless!", "Your children are getting hungry!", 
       "Your wife is losing faith!"])
      window.alert(message + " Some animals are now going to die!")
    }
  }
}
</script>

<style scoped>

h1 {
  color: black;
  text-align: center;
  font-size: 22px;
}

.button-holder {
  display: flex;
  justify-content: center;
}

 .ui.button:focus{
  background-color:#277E8E;
  color: black; 
} 

.ui.button {
  margin: 10px;
  font-size: 25px; 
}

.info-holder {
  display: flex;
  justify-content: space-around;
}

.info-holder h2{
  text-align: center;
  vertical-align: center;
  margin: 0;
  font-size: 15px;
}
</style>