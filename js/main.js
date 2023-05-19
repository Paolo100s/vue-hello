const { createApp } = Vue;

createApp({
    data() {
        return {
            title: "Ananas",
            myClasses: "text-orange bg-black",
            image: "img/Ananas.jfif",
            otherClass: "on"
        }
    },
    methods: {
        disappear: function () {
            if (this.otherClass === "on") {
                this.otherClass = "hidden";
            }
            else {
                this.otherClass = "on";
            }
        }
    }
}).mount('#myApp');