/*一些计算属性的模块getters*/
//计算属性
export default {
  //总数量
  totalCount(state){
    return state.shopCart.reduce((preTotal , food) => preTotal + food.count , 0)
  },
  //总价格
  totalPrice(state){
    return state.shopCart.reduce((preTotal , food) => preTotal + food.count*food.price , 0)
  }
}
