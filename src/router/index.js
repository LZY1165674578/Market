import Vue from "vue";
import VueRouter from "vue-router";
Vue.use(VueRouter)
import Home from '../components/home/Home';
import profile from "../components/proflie/Profile";
import Category from "../components/category/Category";
import Shopcar from "../components/shopcar/Shopcar";
import Usernews from '../components/common/Usernews';
import goodscontext from "../components/common/goodscontext";
import Phoneplace from "../components/common/Phoneplace";
import Midcatechoose from "../components/common/Midcatechoose";


const  routes = [

    {
        path:'',
        redirect:"/home"
    },
    {
        path:"/home",
        component:Home,
        children:[
            {path:'Usernews',component:Usernews}

        ]

    },
    {
        path:"/Profile",
        component:profile
    },
    {
        path:"/Shopcar",
        component:Shopcar
    },
    {
        path:"/Category",
        component:Category
    },
    {
        path:"/Usernews",
        component:Usernews
    },
    {
        path:"/goodscontext/:name/:price",
        component:goodscontext
    },
    {
        path:"/Phoneplace",
        component:Phoneplace
    },
    {
        path:"/Midcatechoose",
        component:Midcatechoose
    },



]
const router = new VueRouter({
    routes,
    mode: 'history'
})
export default  router