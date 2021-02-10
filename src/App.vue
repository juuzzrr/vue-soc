<template>
  <v-app>
    <v-navigation-drawer
    app
    color="green"
    dark
    right
    permament
    hide-overlay
    expand-on-hover
    >
      <v-list
      nav
      dense
      shaped
      >
      <v-list-item two-line >
        <v-list-item-avatar >
          <img src="https://randomuser.me/api/portraits/women/48.jpg">
        </v-list-item-avatar>
        <v-list-item-content class="text-left">
          <v-list-item-title class="font-weight-black">
            рандом
          </v-list-item-title>
          <v-list-item-subtitle>
            рандомович
          </v-list-item-subtitle>
        </v-list-item-content>

      </v-list-item>
      
      <v-divider class="my-3"></v-divider>

      <v-list-item link to="/" exact>
        <v-list-item-icon>
          <v-icon>mdi-home-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="text-left">Главная</v-list-item-title>
      </v-list-item>

      <v-list-item link to="/acc/1" exact>
        <v-list-item-icon>
          <v-icon>mdi-account-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="text-left">Мой профиль</v-list-item-title>
      </v-list-item>

      <v-list-item link to="/log" exact>
        <v-list-item-icon>
          <v-icon>mdi-account-circle-outline</v-icon>
        </v-list-item-icon>
        <v-list-item-title class="text-left">Войти</v-list-item-title>
      </v-list-item>

</v-list>
    
    </v-navigation-drawer>


    <v-content class="px-12 py-3" >
      <v-container fluid>
        <router-view v-on:login="updateUser" />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    nav:true,
    profile: null,
  }),
  methods: {
    updateUser(){
        
    }
  },
};
</script>
<style>
</style>