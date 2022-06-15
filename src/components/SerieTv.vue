<template>
  <div class="container">
    <img :src="`http://image.tmdb.org/t/p/w342/${seriedescription.poster_path}`" :alt="seriedescription.name">
    <h1>{{seriedescription.name}}</h1>
    <h3><lang-flag :iso="seriedescription.original_language"/></h3>
    <h4>Voto: {{seriedescription.vote_average}}</h4>
  </div>
</template>

<script>

export default {
  name: 'SerieDescription',

   props: {
    seriedescription: Object
  }
}
</script>

<style lang="scss">

</style>