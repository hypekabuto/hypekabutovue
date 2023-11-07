import Vue from "vue";
import VueRouter from "vue-router";
import logIn from "@/views/logIn";
import homeView from "@/views/homeView";
import mainIndex from "@/views/mainIndex";
import LinkMe from "@/views/linkMe";
import project from "@/views/project";
import myHobby from "@/views/myHobby";
import musicHobby from "@/views/musicHobby";
import machineHobby from "@/views/machineHobby";
Vue.use(VueRouter)
export default new VueRouter({
    routes:[
        {
            path:'/',
            component:mainIndex,
            redirect:"/homeView",
            children:[
                {path:'homeView',name:'homeView',component:homeView},
                {path:'linkMe',name:'linkMe',component:LinkMe},
                {path:'project',name:'project',component:project},
                {path:'myHobby',name:'myHobby',component:myHobby},
                {path:'musicHobby',name:'musicHobby',component:musicHobby},
                {path:'machineHobby',name:'machineHobby',component:machineHobby}
            ]
        },
        {
            path:'/logIn',
            component:logIn
        }
    ]
})
