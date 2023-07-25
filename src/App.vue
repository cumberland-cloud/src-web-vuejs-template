<template>
  <header>
    <h1>Caf&eacute; Mark</h1>
  </header>
  <main>
    <nav>
      <Icon :id="value.id"
        :class="{
          'active': value.enabled
        }"
        :icon="value.icon"
        :height="iconConfiguration.height"
        :width="iconConfiguration.width"
        :route="value.route"
        @click="handleIconClick(key)"
        @keyup.left="previousIcon(key)"
        @keyup.down="previousIcon(key)"
        @keyup.right="nextIcon(key)"
        @keyup.up="nextIcon(key)"
        v-for="(value, key) in this.navigation"
      ></Icon>
    </nav>
    <RouterView/>
  </main>
  <footer>
    &copy; Cumberland Cloud, 2022
  </footer>
  
</template>

<script>
  import Icon from './components/shared/Icon.vue';

  export default {
    components: {
      Icon,
    },
    data () {
      return {
        navigation: {
          0: {
            alt: 'view drink menu',
            icon: 'coffee_mug',
            id: 'drink-menu-link',
            route: 'drinks',
            enabled: false
          },
          1: {
            alt: 'view breakfast menu',
            icon: 'egg',
            id: 'breakfast-menu-link',
            route: 'breakfast',
            enabled: false
          },
          2: {
            alt: 'view lunch menu',
            icon: 'meal',
            id: 'lunch-menu-link',
            route: 'lunch', 
            enabled: false
          }
        },
        iconConfiguration: {
          width: '50px',
          height: '50px'
        }
      }
    },
    methods: {
      handleIconClick (key) {
        Object.keys(this.navigation).forEach((resetKey)=>{
          if(resetKey !== key) this.navigation[resetKey].enabled = false
        })
        this.navigation[key].enabled=true

      },
      nextIcon (key) {

      },
      previousIcon (key) {

      }
    }
  }
</script>

<script setup>
  import { 
    RouterView 
  } from "vue-router";
</script>

<style scoped>
header {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

h1 {
  margin-left: var(--margin-lg);
}

main {
  height: 85%;
  display: flex;
  flex-direction: column;
}

nav {
  box-shadow: var(--shadow-bg1) var(--shadow-bg1) var(--shadow-bg3) black;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

footer {
  align-content: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 2.5%;
  max-height: 5%;
  text-align: center;
}

.icon{
  display: flex;
  flex-grow: 1;
  justify-content: center;
}
</style>
