<template>
  <div class="container">
    <h1>{{filmdescription.title}}</h1>
    <h3>Titolo originale: {{filmdescription.original_title}}</h3>
    <h3><lang-flag :iso="filmdescription.original_language"/></h3>
    <h4>Voto: {{filmdescription.vote_average}}</h4>
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
  }
}
</script>

<style lang="scss">

</style>