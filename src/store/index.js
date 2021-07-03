import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
const store =new Vuex.Store({
    state:{
       goods:[]
      },

    actions:{
     },
    mutations: {
        setgoodsadd: function (state, good) {
              let newgood =null
              for (let items of state.goods) {
                if (items.name === good.name){
                    newgood = items
                }
            }
              if(newgood){
                  newgood.count +=1
              }else {
                  good.count = 1
                  state.goods.push(good)
              }
        },
        setgoodssub: function (state, good) {
            let newgood =null
            for (let items of state.goods) {
                if (items.name === good.name){
                    newgood = items
                }
            }
            if(newgood){
                if(newgood.count<=1){
                   state.goods.splice(state.goods.indexOf(newgood),1)
                }else {
                    newgood.count -= 1
                }
            }
        },
        delgoods:function (state){
            state.goods = []
        }
        }


})
export default store;