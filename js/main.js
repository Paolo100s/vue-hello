const { createApp } = Vue;

createApp({
    data() {
        return {
            title: "Ananas",
            myClasses: "text-orange bg-black",
            image: "img/Ananas.jfif"
        }
    }
}).mount('#myApp');