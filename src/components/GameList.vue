<template>
  <div>
    <ul>
      <li>_Cod. __ Nombre __ Stock __ Precio</li>
      <li :style="{'background-color':game.color}" v-for="(game, index) in games" :key="index">
        {{game.id}} {{game.name}} {{game.stock}} {{game.price}}
        <button
          v-if="displayButton"
          @click="emitSale(game)"
        >Vender</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    games: {
      type: Array,
      required: true,
    },
    displayButton: {
      type: Boolean,
      defaul: false,
    },
  },
  methods: {
    emitSale(game) {
      this.$emit("emit-sale", game);
    },
  },
};
</script>

<style scope>
.encabezado {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.subencab {
  align-self: center;
}
</style>