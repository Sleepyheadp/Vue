export default {
    //name:"mine",
    path:"/mine",
    component:()=>import("@/views/Mine/Mine"),
    children:[
        {path:"",redirect:"list"},
        {name:"list",path:"list",component:()=>import("@/views/Mine/List")},
        {name:"shoppingcar",path:"shoppingcar",component:()=>import("@/views/Mine/Shoppingcar")}
    ]
    
}