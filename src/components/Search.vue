<template>
  <div>
    <input type="text" placeholder="Buscar" v-model="search" />
    <p>
      Total de juegos registrados:
      <strong>{{games.length}}</strong>
    </p>
    <h1>Game List</h1>

    <GameList :games="filterGames" />
  </div>
</template> 
<script>
import { mapState, mapGetters } from "vuex";
import GameList from "./GameList";
export default {
  data() {
    return {
      search: null,
    };
  },
  components: {
    GameList,
  },

  computed: {
    ...mapState(["games"]),
    ...mapGetters(["findGame"]),

    filterGames() {
      if (this.search) {
        return this.findGame(this.search);
      } else return this.games;
    },
  },
};
</script>