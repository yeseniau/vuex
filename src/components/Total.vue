<template>
  <div>
    <h3>Numero de Ventas: {{sales.length}} - Monto total de las ventas: {{totalSales}}</h3>
    <ul v-if="sales.length > 0">
      <li v-for="(sale, index) in sales" :key="index">{{sale.id}} {{sale.name}} {{sale.price}}</li>
    </ul>
    <ul v-else>
      <p>No hay ventas registradas</p>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["sales"]),
    totalSales() {
      const reducer = (accumulator, currentSale) =>
        accumulator + currentSale.price;
      return this.sales.reduce(reducer, 0);
    },
    // totalSales() {   igual a la forma de arriba
    //   const reducer = function (accumulator, currentValue){
    //     return accumulator + currentValue.price;
    //   }
    //   return this.sales.reduce(reducer, 0);
    // }
    // totalSales() {   igual a la forma de arriba
    //   return this.sales.reduce((accumulator, currentValue) => accumulator + currentValue.price, 0)
    //}
  },
};
</script>

<style>
</style>