<template>
  <div class="container">
    <h1>{{seriedescription.name}}</h1>
    <h3><lang-flag :iso="seriedescription.original_language"/></h3>
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