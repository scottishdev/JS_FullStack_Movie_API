<template lang="html">
  <div class="film-wrapper">
    <film-grid-item v-if="!filmSelect" v-for="(film, index) in films" :key="index" :film="film" />
    <film-detail v-if="filmSelect" :filmSelect="filmSelect"></film-detail>
  </div>
</template>

<script>
import {eventBus} from '@/main.js'
import FilmGridItem from './FilmGridItem'
import MovieService from '@/services/MovieService.js'
import FilmDetail from './FilmDetail.vue'

export default {
  name: 'films-grid',
  data(){
    return {
      films: [],
      filmSelect: null
    };
  },
  mounted(){
    MovieService.getMovies()
    .then(movies => this.films = movies);

    eventBus.$on('film-deleted', (id) => {
      let index = this.films.findIndex(film => film._id === id)
      this.films.splice(index, 1)
    });

    eventBus.$on('film-selected', (returnedFilmByID) => {
      this.filmSelect = returnedFilmByID
      //Long way of doing it
      // let index = this.films.findIndex(film => film._id === returnedFilmByID)
      // this.filmSelect = this.films[index]
    });
  },
  components: {
    'film-grid-item': FilmGridItem,
    'film-detail': FilmDetail
  }
}
</script>

<style lang="css" scoped>

.film-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
</style>
