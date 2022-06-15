<template>
  <div class="container">
    <h1>{{filmdescription.title}}</h1>
    <h3>{{filmdescription.original_title}}</h3>
    <h3>{{filmdescription.original_language}}</h3>
    <h4>{{filmdescription.vote_average}}</h4>
  </div>
</template>

<script>

export default {
  name: 'FilmDescription',

  components: {
    
  },

   props: {
    filmdescription: Object
  }
}
</script>

<style lang="scss">

</style>