<template name="card">
        <v-col
            cols="12"
            sm="4"
            class="mx-auto"
            max-width="344"
        >
            <v-card>
            <v-card-text>
            <div></div>
            <p style="font-size:10px;">{{id}}</p>
            <p class="display-1 text--primary">
                {{title}}
            </p>
            <p>Author: {{name}}</p>
            <div class="text--primary">
                {{body}}
            </div>
            </v-card-text>
        </v-card>
        </v-col>
</template>
<script>
export default {
    name: "card",
    props:['title','body','name','id'],
}
</script>
<style>
</style>