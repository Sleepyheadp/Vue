import Vue from "vue"
Vue.directive("backTop",{
    bind:function(el,binding,vnode){
        // console.log(el,binding,vnode)
        //注：bind.arg获取的是v-backtop:dblclick  后面的内容dblclick
        let eventType = binding.arg || "click"
        el.addEventListener(eventType,e=>{
            window.scrollTo(0,0)
        })
    }
})