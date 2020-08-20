<template>
  <div>
    <h1>Lista de Juegos en Stock</h1>
    <p>
      Total de juegos en stock:
      <strong>{{availableGames.length}}</strong>
    </p>
    <GameList :games="availableGames" :displayButton="true" @emit-sale="initSale" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import GameList from "./GameList";
export default {
  components: {
    GameList,
  },
  computed: {
    ...mapGetters(["availableGames"]),
  },
  methods: {
    ...mapActions(["processSale"]),

    initSale(game) {
      alert(game.name);
      this.processSale(game);
    },
  },
};
</script>

<style>
</style>