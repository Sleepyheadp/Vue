import {SYNC_UPDATE} from "./const"
export default {
    [SYNC_UPDATE](state,newCars){
        //只要actions那边写的方法传入一个cars，就可以将vuex里面的数据更改了
        state.cars = newCars
    }
}