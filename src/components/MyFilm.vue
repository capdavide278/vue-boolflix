<template>
    <div>
        <header>
            <div>
                <h1>BOOLFLIX</h1>
            </div>
            <div>
                <input type="text" placeholder="Cerca film..." v-model="ricercaUtente">
                <button @click="cercaFilm">Cerca</button>
            </div>
        </header>
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
header{
    background-color: #000000;
    width: 100%;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    justify-content: space-between;
    position: fixed;
    z-index: 100;
    h1{
        color: red;
        margin-right: 79%;
    }


}

</style>