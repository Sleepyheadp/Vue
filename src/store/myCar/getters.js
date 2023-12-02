export default {
    computeTotal(state){
        let cars = state.cars;
        let total = {price:0,num:0};
        cars.forEach(item=>{
            total.price += item.OriginalPrice * item.num;
            total.num += item.num
        })
        total.price = total.price.toFixed(2)  //保留最后两位小数，并且自动进行四舍五入
        return total;
    }
}