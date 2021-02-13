<template>
  <div >
    <h2 class="my-8">Список друзей.</h2>
    <v-content app>
        <v-container>
        <v-row style="display:flex; justify-content:center;">
            <v-col cols="12" sm="4" v-for="(user, i) in users" v-bind:key="i" class="elevation-6" style="margin:20px;">
                    <v-row class="text-left">
                    <v-col cols="2">
                        <v-list-item-avatar style="width:70px; height:70px;" class="ml-2">
                            <v-img
                            v-bind:src="`https://randomuser.me/api/portraits/men/${user.id}.jpg`"
                            style="max-width: 100%"
                            ></v-img>
                        </v-list-item-avatar>
                    </v-col>
                    <v-divider
                    vertical
                    class="ml-2"
                    ></v-divider>
                    <v-row class="text-left ml-5 mt-1">
                        <v-col cols="7">
                            <v-list-item-title class="font-weight-black">
                            {{user.name}}
                            </v-list-item-title>
                            <v-list-item-subtitle>
                            {{user.address.city}}
                            </v-list-item-subtitle>
                            <v-btn
                            class="mt-3 mb-7"
                            block
                            elevation="3"
                            border="1px solid green"
                            link :to="{path: `/user/${user.id}`}"
                            ><v-icon class="mr-2">mdi-account-details</v-icon>ПЕРЕЙТИ В ПРОФИЛЬ</v-btn>
                        </v-col>
                    </v-row>
             </v-row>                   
            </v-col>        
        </v-row>
    </v-container>
    </v-content>
    </div>
</template>

<script>
export default {
  data() {
    return {
      userData: "",
      userId: '',
      users: [],
    };
  },
  methods: {
    getUserData() {
      this.axios
        .get(
          `http://jsonplaceholder.typicode.com/users`
        )
        .then((response) => {
          this.userData = response.data;
          this.users = response.data;
        });
    },
    initPage(){
      if(this.$router.currentRoute.path == '/')
        this.userId = this.$store.state.userData.id;
      else
        this.userId = this.$route.params.id;
      this.getUserData();
    }
  },
  mounted() {
    this.initPage();
  },
  watch: {
    $route() {
      this.initPage();
    },
  },
};
</script>
