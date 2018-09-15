<template>
  <div id="app">
    <app-nav></app-nav>
    <app-footer></app-footer>

  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "App",
  components: {
    "app-nav": Navbar,
    "app-footer": Footer
  }
};
</script>


<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Open Sans", sans-serif;
}

p {
  text-align: justify;
  font-weight: normal;
  text-transform: none;
  font-size: 1em;
  line-height: 1.7;
}
:root {
  --light-blue: #14c8e5;
  --magenta: #e51498;
  --dark-blue: #146fe5;
  --mypurple: #a714e5;
  --offwhite: #e0d8e3;
  --grey: #4f4d50;
}

.btn {
  color: #fff;
  text-decoration: none;
  border: 1.5px solid #fff;
  border-radius: 3px;
  padding: 6px 20px;
  box-sizing: border-box;
}
</style>
