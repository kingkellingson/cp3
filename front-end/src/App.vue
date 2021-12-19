<template>
  <div id="app">
    <header id="header">
      <h1>Noah's Ark Adventure</h1>
      <nav>
        <router-link to="/"><i class="fas fa-list"></i></router-link>
        <router-link to="/cart"><i class="fas fa-paw"></i></router-link>
      </nav>
    </header>
    <div id="menu">
    <div id="brand">
      <router-link to="/">
        <img src="/images/arcbanner.png">
      </router-link>
    </div>
    <div id="side">
      <router-link to="/browse">
        <div class="menu-item browse">
          <img src="/images/globe.png">
          <p>Browse</p>
        </div>
      </router-link>
      <router-link to="/cart">
        <div class="menu-item">
          <img src="/images/arclogo.png">
          <p>{{incart}} Animal{{plural ? 's' : ''}}</p>
        </div>
      </router-link>
    </div>
  </div>
    <router-view />
    <!-- footer -->
    <div class="footer">
      <p>Each Website made with &#10084; </p>
      <p><a href="https://github.com/kingkellingson/cp3.git">https://github.com/kingkellingson/cp3.git</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data() {
    return {
      
    }
  },
  computed: {
    incart() {
      
      return this.$root.$data.cart.length;
    },
    plural() {
      if (this.$root.$data.cart.length != 1)
      {
        return true;
      }
      else {
        return false;
      }
    }
  },
  methods: {
  }
}
</script>

<style>
/* Color scheme: https://paletton.com/#uid=7040u0knHs+edG7jrvYscpiuCk2 */
/* red: #e74c3c
 * blue: #277E8E
 */

* {
  box-sizing: border-box;
}

body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13pt;
  margin: 0px 100px;
  background-color: #eeeeee;
}

@media screen and (max-width: 1100px) {
  body {
    margin: 0px 50px;
  }
}

#header {
  /* Semi-circle */
  margin: 0 1em 1em 0;
  height: 100px;
  width: 200px;
  border-bottom-left-radius: 200px;
  border-bottom-right-radius: 200px;
  /* Fixed position */
  position: fixed;
  z-index: 10000;
  left: 50%;
  transform: translate(-50%, 0);
  /* Color and alignment */
  background: #277E8E;
  text-align: center;
  box-shadow: 0 0 0 1em #FFF;
}

nav {
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 18px;
}

h2 {
  font-size: 12px;
}

#header .fas {
  font-size: 25px;
  color: #fff;
  width: 50px;
}

.pure-button-primary {
  background-color: #277E8E;
}

.pure-button {
  background-color: #277E8E;
}

/*THIS IS THE ADDED STUFF*/


#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

#brand img {
  height: 400px;
}

#side {
  grid-area: side;
  display: flex;
  justify-content: flex-end;
}

#side img {
  width: 50px;
}

.menu-item {
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

/* Footer  */
.footer {
    text-align: center;
    font-family: Georgia, 'Times New Roman', Times, serif;
    font-size: 1em;
    opacity: .25;
    text-align: center;
    padding-top: 2em;
    padding-bottom: 2em;
    transition: opacity 1s ease-in-out;
}
.footer {
    color: currentColor;
}
.footer a {
    text-decoration: none;
    color: black;
}
.footer:hover {
    opacity: .75;
}

</style>



