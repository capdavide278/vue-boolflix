<template>
    <div>
        <section>
            <input type="text" placeholder="Cerca film..." v-model="ricercaUtente">
            <button @click="cercaFilm">Cerca</button>
        </section>
      <FilmDescription
        v-for="element in film" :key="element.id" :filmdescription="element"
      />

      <SerieDescription 
      v-for="item in serie" :key="item.id" :seriedescription="item"
      />
    </div>
</template>

<script>
import axios from "axios"
import FilmDescription from "./FilmDescription.vue"
import SerieDescription from "./SerieTv.vue"

export default {
  name: 'MyFilm',
  components: {
    FilmDescription,
    SerieDescription
  },
   data() {
        return {
            apiUrl: "https://api.themoviedb.org/3/search/movie?api_key=376d21573534199d064361a5dc3cc10f&language=it-IT&query=a",
            apiUrltv:"https://api.themoviedb.org/3/search/tv?api_key=376d21573534199d064361a5dc3cc10f&language=it-IT&query=",
            film: [],
            serie:[],
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
            });
            this.cercaSerie();
        },

        cercaSerie() {
        this.apiUrltv= "https://api.themoviedb.org/3/search/tv?api_key=376d21573534199d064361a5dc3cc10f&language=it-IT&query=" + this.ricercaUtente;
        axios.get(this.apiUrltv)
        .then(result => {
          this.serie = result.data.results;
      })
    }

    }

}
</script>

<style lang="scss">

</style>