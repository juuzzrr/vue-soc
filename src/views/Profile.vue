<template name="acc">
    <div
    :name="pst.name"
    :website="pst.website"
    :email="pst.email"
    :city="adr.city"
    >
        <v-row class="text-left">
            <v-col cols="10">
                <h1 class="green--text text--darken-2">
                    <v-icon large color="green darken-2">mdi-account-outline</v-icon>
                    {{pst.name}}
                </h1>
            </v-col>
        </v-row>
        <v-row class="text-left">
            <v-col cols="2">
                <img src="https://randomuser.me/api/portraits/men/7.jpg" style="max-width: 100%">
            </v-col>
            <v-col cols="10" class="text-left">
                <p>
                    Веб-сайт: <a :href="pst.website" target="_blank">{{pst.website}}</a>
                </p>
                <p>
                    E-mail: <a :href="pst.email">{{pst.email}}</a>
                </p>
                <p>
                    Город: {{adr.city}}
                </p>
                <p
                :name="com.name"
                >
                    Место работы: {{com.name}}
                </p>
            </v-col>
        </v-row>

        <v-divider class="my-3"></v-divider>

            <v-main app>
                <v-container>
                    <v-row>                  
                        <Card
                        v-for="(item,i) in post"
                        :key="i"
                        
                        :id="item.id"
                        :name="pst.name"
                        :title="item.title"
                        :body="item.body"
                        >
                        </Card>
                    </v-row>
                </v-container>    
            </v-main> 
        </div>
</template>
<script>
import Card from './Card.vue'
export default{
    name:"acc",
    id: 5,
    components: {
        Card
    },
    data() {
        return{
            pst: [],
            adr: [],
            com: [],
            post: [],
        }
    },
    methods: {
        user(){
            this.axios.get(`http://jsonplaceholder.typicode.com/users/${this.$route.params.id}`)
            .then( (response)=>{
                this.pst=response.data;
                this.adr=response.data.address;
                this.com=response.data.company;
                }
            ),
            this.axios.get(`http://jsonplaceholder.typicode.com/posts?userId=${this.$route.params.id}`)
            .then( (response)=>{
                this.post=response.data;
                }
            )
    },
    },
    mounted(){
        this.user();
    },
    watch:{
        $route(){
            this.user();
        }
    }
}
</script>
<style>

</style>