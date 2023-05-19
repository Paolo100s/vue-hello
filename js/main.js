const { createApp } = Vue;

createApp({
    data() {
        return {
            title: "Ananas",
            myClasses: "text-orange bg-black"
        }
    }
}).mount('#myApp');