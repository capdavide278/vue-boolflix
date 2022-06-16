<template>
  <div class="container">
    <div class="poster">
      <div class="foto">
        <img :src="`http://image.tmdb.org/t/p/w342/${filmdescription.poster_path}`" alt="">
      </div>
      <div class="descrizione">
        <div>
          <h1>{{filmdescription.title}}</h1>
        </div>
        <div>
          <h3>Titolo originale: {{filmdescription.original_title}}</h3>
        </div>
        <div>
          <h3><lang-flag :iso="filmdescription.original_language"/></h3>
        </div>
        <div>
          <h3>Voto: {{Math.round(filmdescription.vote_average/2)}}</h3>
        </div>
        <div>
          <font-awesome-icon v-for="i in stelle(filmdescription.vote_average)" :key="i + 'n'" icon="fa-solid fa-star" />
          <font-awesome-icon v-for="i in stellevuote(filmdescription.vote_average)" :key="i" icon="fa-regular fa-star" />
        </div>
        <div>
          Overview: {{filmdescription.overview}}
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import LangFlag from 'vue-lang-code-flags'

export default {
  name: 'FilmDescription',

  components: {
    LangFlag
  },

   props: {
    filmdescription: Object
  },
  methods: {
        stelle (vote){
          let star =  parseInt(Math.round(vote / 2));
            return star; 
        },
          stellevuote (vote){
          let emptystar =  parseInt(Math.round(5-(vote / 2)));
            return emptystar; 
        },
        
    }
}
</script>

<style scoped lang="scss">
.fa-star{
  color: rgba(229, 255, 0, 0.945);
}

.container{
  position: relative;
  display: inline-block;
  margin-top: 100px;
}

.poster{
  position:relative;
  margin: 25px 35px;
}

.descrizione{
  position: absolute;
  top: 0;
  z-index: auto;
  color: white;
  background-color: black;
  height: 100%;
  width: 100%;
  padding: 0 2px;
}

.descrizione:hover{
  z-index: 3;
}

.foto{
  position: relative;
  z-index: 2;
  
}

.foto:hover{
  z-index: 0;
}

</style>