import Vue from "vue";
import Router from "vue-router";
import App from "../App";

Vue.use(Router);

export const routes = [
    {
        path: "/main",
        component: App,
        textInfo: "Main Page"
    },
    {
        path: "/auxiliar",
        component: () => import("../components/Auxiliar"),
        textInfo: "Auxiliar"
    },
    {
        path: "/dashboard",
        component: () => import("../components/Pacientes"),
        textInfo: "Bubble Menu"
    }
    /* ,
    {
        path: "/bubble-menu",
        component: () => import("../examples/BubbleMenu"),
        textInfo: "Bubble Menu"
    },
    {
        path: "/placeholder",
        component: () => import("../examples/Placeholder"),
        textInfo: "Placeholder"
    },
    {
        path: "/preview",
        component: () => import("../examples/Preview"),
        textInfo: "Preview"
    } */
];

export default new Router({
    mode: "history",

    routes: [
        ...routes,
        {
            path: "/",
            redirect: "/main"
        }
    ]
});
