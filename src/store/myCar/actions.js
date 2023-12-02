import {SYNC_UPDATE} from "./const"
export default {
    //我们发现最后虽然数据都添加到cars上了，但是刷新之后数据就不见了
    //这是因为addGoodInCars只有在我们进行点击的时候才会触发，但是我们需要它在初始化的时候就进行触发
    initCar(ctx){
        let cars = getCar()
        ctx.commit(SYNC_UPDATE,cars)
    },
    //点商品数量+1的操作
    addGoodInCars(ctx,goodInfo){
        setTimeout(() => {
            let cars = getCar(); //[]
            let isHas = cars.some(item=>{
                //外部传入商品的id与数组里面每个商品对象id是否一致
                if(item.CommodityId === goodInfo.CommodityId){
                    item.num++
                    return true;
                }
            })
            //外部传入的商品在cars这个数组里面不存在的话
            if(!isHas){
                goodInfo.num =1;
                //将商品追加到数组的屁股后面去
                cars.push(goodInfo)
            }
            //通知后台更改cars（相当于数据被更改了） 必须将数据转换为字符串传输
            localStorage.cars = JSON.stringify(cars)
            //前端需要将vuex里面的cars进行更改（默认cars为空数组）
            //=> 必须且只能在mutations里面同步的更改数据
            ctx.commit(SYNC_UPDATE,cars)
        }, 500);
    },
    //点击商品数量-1的操作
    reduceGoodInCars(ctx,goodInfo){
        let cars = getCar();
        cars = cars.filter(item=>{ //删除掉数组中的某种元素 false 就是过滤掉的元素
            if(item.CommodityId === goodInfo.CommodityId){
                item.num-- 
                if(item.num <= 0){
                    return false
                }
            }
            return true
        })
        //通知后台更改cars （相当于数据的cars更改了......）
        localStorage.cars = JSON.stringify(cars)
        //前端需要将vuex里面cars进行更改
        ctx.commit(SYNC_UPDATE,cars)
    }
}


function getCar(){
    return JSON.parse(localStorage.cars?localStorage.cars:'[]')
}