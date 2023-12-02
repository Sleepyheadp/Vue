import {RANDOM_NUM} from "./const"
export default {
    getNumFromBackEnd(cxt){
        //模拟异步请求，疫苗后回来数据
        setTimeout(() => {
            let random = Math.floor(Math.random()*100) // 向下取整
            //相当于mutations的RANDOM_NUM方法被欸执行了，并且给起传入了random参数
            cxt.commit(RANDOM_NUM,random)
        }, 1000);
    }
}