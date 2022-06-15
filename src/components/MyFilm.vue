<template>
    <div>
        <section>
            <input type="text" placeholder="Cerca film..." v-model="ricercaUtente">
            <button @click="cercaFilm">Cerca</button>
        </section>
      <FilmDescription
        v-for="(element,i) in film" :key="i" :filmdescription="element"
      />
    </div>
</template>

<script>
import axios from "axios"
import FilmDescription from "./FilmDescription.vue"

export default {
  name: 'MyFilm',
  components: {
    FilmDescription
  },
   data() {
        return {
            apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=376d21573534199d064361a5dc3cc10f&language=it-IT&query=",
            film: [],
            ricercaUtente:""

        };
    },
    created() {
        axios.get(this.apiUrl)
            .then(result => {
            this.film = result.data.results;
            console.log(result);
        })
            .catch(error => {
            console.log("Errore", error);
        });
    },

    methods:{
        cercaFilm(){
            console.log(this.ricercaUtente);
            this.apiUrl= "https://api.themoviedb.org/3/search/movie?api_key=376d21573534199d064361a5dc3cc10f&language=it-IT&query=" + this.ricercaUtente;
            console.log(this.apiUrl);
            axios.get(this.apiUrl)
            .then(result => {
            this.film = result.data.results;
            console.log(result);
            });
        }

    }

}
</script>

<style lang="scss">

</style>