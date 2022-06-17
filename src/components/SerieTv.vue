<template>
 <div class="container">
    <div class="poster">
      <div class="foto">
        <img :src="`http://image.tmdb.org/t/p/w342/${seriedescription.poster_path}`" :alt="seriedescription.name">
      </div>
      <div class="descrizione">
        <div>
          <h1>{{seriedescription.title}}</h1>
        </div>
        <div>
          <h3>Titolo originale: {{seriedescription.original_title}}</h3>
        </div>
        <div>
          <h3><lang-flag :iso="seriedescription.original_language"/></h3>
        </div>
        <div>
          <h3>Voto: {{Math.round(seriedescription.vote_average/2)}}</h3>
        </div>
        <div>
          <font-awesome-icon v-for="i in stelle(seriedescription.vote_average)" :key="i + 'n'" icon="fa-solid fa-star" />
          <font-awesome-icon v-for="i in stellevuote(seriedescription.vote_average)" :key="i" icon="fa-regular fa-star" />
        </div>
        <div>
          Overview: {{seriedescription.overview}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SerieDescription',

   props: {
    seriedescription: Object
  },
    methods: {
        stelle (vote){
          let calc =  parseInt(Math.round(vote / 2));
          console.log(calc)
            return calc; 
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