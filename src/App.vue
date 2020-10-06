<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn small class="me-2" dark outlined to="/login">Login</v-btn>
      <v-btn small  dark outlined to="/signup">Sign Up</v-btn>
      <v-spacer></v-spacer>
      <span class="mx-auto text-h4" @click="$router.push('/')" style="cursor:pointer">
        Task
      </span>
      
      
    </v-app-bar>

    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {
  },

  data: () => ({
    //
  })
};
</script>
