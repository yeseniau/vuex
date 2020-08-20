import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    title: "32 Bits",
    subtitle: "Juegos de Pc y Consolas",
    sales: [],
    games: [
      { id: '0001', name: 'Sekiro', stock: 100, price: 30000, color: 'red', on_sale: true },
      { id: '0002', name: 'Fifa 21', stock: 100, price: 25000, color: 'blue', on_sale: false },
      { id: '0003', name: 'Gears of War 4', stock: 100, price: 15000, color: 'green', on_sale: true },
      { id: '0004', name: 'Mario Tennis Aces', stock: 100, price: 35000, color: 'yellow', on_sale: false },
      { id: '0005', name: 'Bloodborne', stock: 100, price: 10000, color: 'blue', on_sale: false },
      { id: '0006', name: 'Forza Horizon 4', stock: 100, price: 20000, color: 'red', on_sale: true },
      { id: '0007', name: 'Yooo', stock: 50, price: 1000, color: 'orange', on_sale: true }
    ]
  },

  mutations: {
    DEDUCT_STOCK(state, game) {
      let selectedGame = state.games.find((xgame) => {
        return xgame.id == game.id
      })
      selectedGame.stock--
    },

    ADD_SALE(state, game) {
      state.sales.push(game)
    }
  },

  actions: {
    processSale({ commit }, game) {
      if (game.stock > 0) {
        setTimeout(() => {
          commit("DEDUCT_STOCK", game)
          setTimeout(() => {
            commit("ADD_SALE", { id: game.id, name: game.name, price: game.price }),
              alert("Venta Confirmada")
          }, 1500);
        }, 2000);
      }
    }
  },

  getters: {
    findGame: state => x => { //x toma el valor de id, name u otro parametro del arreglo games
      return state.games.filter(prod => {
        // return prod.name == x
        if (prod.id == x) {
          return prod.id
        } else if (prod.name == x) {
          return prod.name
        }
        //la funcion if busca por id o nombre  
      })
    },
    availableGames(state) {
      return state.games.filter((game) => {
        return game.stock > 0
      })

    }
  },
});

export default store;
