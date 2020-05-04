<template lang="html">
  <div class="">
    <h2>{{filmSelect.title}} </h2>
    <p>Genre: {{filmSelect.Genre}}  </p>
    <p>Rating: {{filmSelect.rating}}  </p>
    <p>Release Date: {{filmSelect.release_date}}  </p>
    <p>Running time: {{filmSelect.runtime}}   </p>
    <h2>Crew: </h2>
    <p>Director: {{filmSelect.crew.director}}</p>
    <p>Producer: {{filmSelect.crew.producer}}</p>
    <a href="/">Home</a>
  </div>
</template>

<script>
import {eventBus} from '@/main.js';

export default {
  name: "film-detail",
  props: ["filmSelect"]
}
</script>

<style lang="css" scoped>
</style>
