import {CHANGE_NUM,RANDOM_NUM} from "./const"
export default {
    [CHANGE_NUM](state){
        state.num++; // 更改了state里面的数据
    },
    //第一个参数是state中的数据，第二个参数是外部传入的数据
    [RANDOM_NUM](state,randomNum){
        state.num = randomNum
    }
}