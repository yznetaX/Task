<template>
  <div class="recipes mt-4">
          <v-btn small @click="openDialog">
        <v-icon>mdi-plus</v-icon>
        add new recipes
      </v-btn>
      <v-dialog
        v-model="dialog"
        max-width="500px"
        transition="dialog-transition"
      >
        <v-card class="pa-4">
          <v-card-title>
            Recipe details
          </v-card-title>
          <v-text-field v-model="name" prepend-icon="mdi-account" label="Name"></v-text-field>
          <v-text-field v-model="disc" prepend-icon="mdi-android-messages" label="Discription"></v-text-field>
          <v-text-field prepend-icon="mdi-file" v-model="img" label="Image"></v-text-field>
          <v-card-actions>
            <v-btn v-if="editable" @click="handelEdit">
              Edit
            </v-btn>
            <v-btn small @click="handelSave" v-else>
              Save
            </v-btn>
            <v-btn small color="red darken-3" dark @click="dialog = false">
              Close
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    <v-row>
      <v-col cols="4" v-for="(recipe,index) in recipes" :key="recipe.id">
        <v-card class="" max-height="200" style="overflow: hidden;">
              <v-card-title class="text-subtitle-2">
                {{recipe.name}}
                <v-spacer></v-spacer>
                <v-btn icon small @click="edit(recipe,index)">
                  <v-icon>
                    mdi-pencil
                  </v-icon>
                </v-btn>
                <v-btn icon small @click="deleteItem(index)">
                  <v-icon>
                    mdi-delete
                  </v-icon>
                </v-btn>
              </v-card-title>
              <v-card-subtitle class="text-caption">
                {{recipe.discription.length > maxLength
                  ? recipe.discription.slice(0, maxLength) + "..."
                  : recipe.discription}}
              </v-card-subtitle>
              <v-img
                height="100%"
                :src="recipe.src"
              ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      recipes: "",
      dialog: false,
      name: "",
      disc: "",
      img: "",
      cache: {},
      editable: false,
      item: null,
      index: -1,
      maxLength: 60
    }
  },
  methods: {
    deleteItem(index){
      this.recipes.splice(index,1)
      this.$store.state.recipes = this.recipes
      localStorage.setItem('recipes', JSON.stringify(this.recipes))
    },
    handelSave(){
      let recipe = {
        name: this.name,
        discription: this.disc,
        src: this.img
      }
      this.recipes.push(recipe)
      this.dialog = false 
      localStorage.setItem('recipes', JSON.stringify(this.recipes))
      this.$store.state.recipes = this.recipes
      this.name =""
      this.img = ""
      this.disc = ""
    },
    edit(item,index){
      this.dialog = true
      this.editable = true
      this.item = item
      this.name = item.name;
      this.disc = item.discription
      this.img = item.src
      this.index = index
    },
    openDialog(){
      this.dialog = true
      this.name =""
      this.img = ""
      this.disc = "",
      this.editable = false
    },
    handelEdit(){
      let recipe = {
        name: this.name,
        discription: this.disc,
        src: this.img
      }
      this.recipes.splice(this.index,1)
      this.recipes.push(recipe)
      this.dialog = false
      localStorage.setItem("recipes",JSON.stringify(this.recipes))
      this.$store.state.recipes = this.recipes
    }
  },
  mounted() {
    this.recipes = JSON.parse(localStorage.getItem('recipes')) === null ? this.$store.state.recipes : JSON.parse(localStorage.getItem('recipes'))
  },
}
</script>