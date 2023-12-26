import Vue from "vue"
import App from "./App"

new Vue({
    render: h => h(App)
    // render(createElemente) {
    //     return createElemente(App)
    // }
}).$mount("#app")